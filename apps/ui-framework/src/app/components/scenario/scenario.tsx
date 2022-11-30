import { API_URL } from "@ui-solution/ui-framework-api-interface";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { scenarioId, scenarioRoute } from "../../app-router";

export async function loader({params}: LoaderFunctionArgs) {
    return fetch(`${API_URL}/${scenarioRoute}/${params[scenarioId]}`).then((r) => r.json());
}

export function Scenario() {
    const scenario = useLoaderData();
    return (<div>
        {JSON.stringify(scenario)};
    </div>)
}