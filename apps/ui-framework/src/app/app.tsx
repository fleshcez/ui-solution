// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { UiHeader } from '@ui-solution/ui-library';

import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL, ApiResponse } from "@ui-solution/uif-framework-api-interface";

export function App() {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({message: 'Loading...'});
  useEffect(() => {
    fetch(API_URL).then(r => r.json()).then(setApiResponse);
  }, []);

  return (
    <div>
      <UiHeader />
      <span>{apiResponse.message}</span>
    </div>
  );
}

export default App;
