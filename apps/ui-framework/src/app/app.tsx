// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { UiHeader, UiSideNav } from '@ui-solution/ui-library';

import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL, ApiResponse } from '@ui-solution/uif-framework-api-interface';
import Box from '@mui/material/Box';

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
      <UiHeader onToggle={setExpanded} hasToggle />
        <Box sx={{ display: 'flex', width: '100%'}}>
        <UiSideNav open={isExpanded} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <span>{apiResponse.message}</span>
        </Box>
      </Box>
    </>
  );
}

export default App;
