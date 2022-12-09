import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { scenarioId, } from "../../app-router";
import { IScenarioResolver } from "./scenario-resolver";

export interface IScenarioLoaderArgs extends LoaderFunctionArgs {
    scenarioResolver: IScenarioResolver;
}

export async function loader({params, scenarioResolver}: IScenarioLoaderArgs) {
    const id = params[scenarioId];
    if (!id) {
        console.error("No id found for scenarioId param");
        return;
    }
    return scenarioResolver.getScenario(id);
}

export function Scenario() {
    const scenario = useLoaderData();
    return (<div>
        {JSON.stringify(scenario)};
    </div>)
}