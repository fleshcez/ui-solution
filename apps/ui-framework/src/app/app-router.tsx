import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppWithService } from './app';
import { Panel } from './components/panel/panel';
import {
  Scenario,
  loader as scenarioLoader,
  IScenarioLoaderArgs,
} from './components/scenario/scenario';
import { scenarioResolver } from './components/scenario/scenario-resolver';

export const scenarioRoute = 'scenario';
export const scenarioId = 'scenarioId';
export const panelRoute = 'panel';
export const panelId = 'panelId';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppWithService />,
    children: [
      {
        path: `${scenarioRoute}/:${scenarioId}`,
        element: <Scenario />,
        loader: (args) =>
          scenarioLoader({
            ...args,
            scenarioResolver,
          } as unknown as IScenarioLoaderArgs),
        children: [
          {
            path: `${panelRoute}/:${panelId}`,
            element: <Panel />,
          },
        ],
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
