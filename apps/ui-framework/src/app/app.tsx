// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { ISideNavItem, UiHeader, UiSideNav } from '@ui-solution/ui-library';

import { useState, useEffect, useContext } from 'react';
import {
  API_URL,
  IApp,
  IScenario,
  IHeader,
} from '@ui-solution/ui-framework-api-interface';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { RootService, RootServiceContext } from './services/root-service';


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
  const rootService = useContext(RootServiceContext);

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

    rootService?.actionHandler.execute({action: scenario.action});
  };
  const [isExpanded, setExpanded] = useState(false);
  return { isExpanded, setExpanded, sideNavItems, header, onSidenavSelect };
}

export function App() {
  const { isExpanded, setExpanded, sideNavItems, header, onSidenavSelect } = useApp();
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
          <Outlet />
        </Box>
      </div>
    </div>
  );
}

export function AppWithService() {
  return <RootService>
    <App />
  </RootService>
}

export default App;
