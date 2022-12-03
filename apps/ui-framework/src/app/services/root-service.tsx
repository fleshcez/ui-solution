import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ActionHandler } from './action-handler/action-handler';
import { Nullable } from '@ui-solution/ui-framework-api-interface';

export const RootServiceContext = React.createContext({} as Nullable<IRootService>);

export interface IRootService {
    actionHandler: ActionHandler;
}

function useRootService() {
    const navigate = useNavigate();
    const [service, setService] = useState<Nullable<IRootService>>();

    useEffect(() => {
        const actionHandler = new ActionHandler({navigate});
        setService({
            actionHandler
        });
    }, []);

    return {service};
}

export function RootService({ children }: { children: ReactJSXElement }) {
  const { service } = useRootService();
  return (
    <RootServiceContext.Provider value={service}>
      {children}
    </RootServiceContext.Provider>
  );
}
