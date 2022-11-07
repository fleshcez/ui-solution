// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { UiHeader, UiSideNav } from '@ui-solution/ui-library';

import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL, ApiResponse } from '@ui-solution/uif-framework-api-interface';
import Box from '@mui/material/Box';

const {
  'grid-container': gridContainerClass,
  'grid-header': gridHeaderClass,
  'grid-side-nav': gridSideNavClass,
  'grid-content': gridContentClass,
} = styles;

export function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    message: 'Loading...',
  });
  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setApiResponse);
  }, []);

  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <div className={gridContainerClass}>
        <div className={gridHeaderClass}>
          <UiHeader onToggle={setExpanded} hasToggle />
        </div>
        <div className={gridSideNavClass}>
          <UiSideNav open={isExpanded} />
        </div>
        <div className={gridContentClass}>
          <Box component="main" sx={{ width: "100%", height: "100%" }}>
            <span>{apiResponse.message}</span>
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
