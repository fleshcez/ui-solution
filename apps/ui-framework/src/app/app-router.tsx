import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppWithService } from "./app";
import { Scenario, loader as scenarioLoader } from "./components/scenario/scenario";

export const scenarioRoute = "scenario";
export const scenarioId = "id";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppWithService />,
        children: [{
            path: `${scenarioRoute}/:${scenarioId}`,
            element: <Scenario />,
            loader: scenarioLoader
        }]
    }
]);

export function AppRouter() {
    return <RouterProvider router={router}/>;
}