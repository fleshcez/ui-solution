// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { ISideNavItem, UiHeader, UiSideNav } from '@ui-solution/ui-library';

import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  API_URL,
  ApiResponse,
  IApp,
  IScenario,
  IHeader,
} from '@ui-solution/ui-framework-api-interface';
import Box from '@mui/material/Box';
import { response } from 'express';

const {
  'grid-container': gridContainerClass,
  'grid-header': gridHeaderClass,
  'grid-side-nav': gridSideNavClass,
  'grid-content': gridContentClass,
} = styles;

function useApp() {
  const [sideNavItems, setSideNavItems] = useState<ISideNavItem[]>();
  const [header, setHeader] = useState<IHeader>();
  const [scenarios, setScenarios] = useState<IScenario[]>();
  const [scenario, setScenario] = useState();

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then((result) => {
        const res = result as IApp;
        const scenarios: IScenario[] = res.configuration.scenarios;
        setScenarios(res.configuration.scenarios);
        setHeader(res.configuration.header);
        setSideNavItems(
          scenarios.map(
            (sc) => ({ icon: sc.icon, label: sc.label, id: sc.id} as ISideNavItem)
          )
        );
      });
  }, []);

  const onSidenavSelect = (sideNavItem: ISideNavItem) => {
    const scenario = scenarios?.find(s => s.id === sideNavItem.id);
    if (!scenario) {
      console.error(`Scenario with id: ${sideNavItem.id} not found`);
      return;
    }

    fetch(API_URL + scenario.fetchDetails.path).then((r) => r.json())
      .then((result) => {
        setScenario(result);
      })
  };
  const [isExpanded, setExpanded] = useState(false);
  return { isExpanded, setExpanded, sideNavItems, header, onSidenavSelect, scenario };
}

export function App() {
  const { isExpanded, setExpanded, sideNavItems, header, onSidenavSelect, scenario } = useApp();
  return (
    <div className={gridContainerClass}>
      <div className={gridHeaderClass}>
        <UiHeader
          onToggle={setExpanded}
          hasToggle
          title={header?.title}
        />
      </div>
      <div className={gridSideNavClass}>
        <UiSideNav open={isExpanded} items={sideNavItems} onSelect={onSidenavSelect} />
      </div>
      <div className={gridContentClass}>
        <Box component="main" sx={{ width: '100%', height: '100%' }}>
          <div> {JSON.stringify(scenario)} </div>
        </Box>
      </div>
    </div>
  );
}

export default App;
