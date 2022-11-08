// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { ISideNavItem, UiHeader, UiSideNav } from '@ui-solution/ui-library';

import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL, ApiResponse, IApp, IScenario } from '@ui-solution/ui-framework-api-interface';
import Box from '@mui/material/Box';
import { response } from 'express';

const {
  'grid-container': gridContainerClass,
  'grid-header': gridHeaderClass,
  'grid-side-nav': gridSideNavClass,
  'grid-content': gridContentClass,
} = styles;

export function App() {
  const [apiResponse, setApiResponse] = useState<IApp>();
  const [sideNavItems, setSideNavItems] = useState<ISideNavItem[]>();

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(result => {
        const res = result as IApp;
        setApiResponse(res);
        // setScenarios(res.configuration.scenarios);
        const scenarios: IScenario[] = res.configuration.scenarios;
        setSideNavItems(res.configuration.scenarios.map(sc => ({icon: sc.icon, label: sc.label}) as ISideNavItem ));
      });
  }, []);

  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <div className={gridContainerClass}>
        <div className={gridHeaderClass}>
          <UiHeader onToggle={setExpanded} hasToggle title={apiResponse?.configuration?.header?.title}/>
        </div>
        <div className={gridSideNavClass}>
          <UiSideNav open={isExpanded} items={sideNavItems} />
        </div>
        <div className={gridContentClass}>
          <Box component="main" sx={{ width: "100%", height: "100%" }}>
            <div> asd </div>
            <div> asd </div>
          </Box>
        </div>
      </div>
      {/* <UiHeader onToggle={setExpanded} hasToggle />
      <Box sx={{ display: 'flex', width: '100%'}}>
        <UiSideNav open={isExpanded} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <span>{apiResponse.message}</span>
        </Box>
      </Box> */}
    </>
  );
}

export default App;
