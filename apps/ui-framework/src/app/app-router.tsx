import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppWithService } from "./app";
import { Scenario, loader as scenarioLoader, IScenarioLoaderArgs } from "./components/scenario/scenario";
import { scenarioResolver } from "./components/scenario/scenario-resolver";

export const scenarioRoute = "scenario";
export const scenarioId = "id";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppWithService />,
        children: [{
            path: `${scenarioRoute}/:${scenarioId}`,
            element: <Scenario />,
            loader: (args) => scenarioLoader({...args, scenarioResolver} as unknown as IScenarioLoaderArgs)
        }]
    }
]);

export function AppRouter() {
    return <RouterProvider router={router}/>;
}