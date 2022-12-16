import { IScenarioDescription as IScenario, SCENARIO_URL } from "@ui-solution/ui-framework-api-interface";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { scenarioId, } from "../../app-router";
import { IVmResolver } from "../../services/vm-resolver";

export interface IScenarioLoaderArgs extends IVmResolver<IScenario>, LoaderFunctionArgs {
    scenarioResolver: IVmResolver<IScenario>;
}
export async function loader({params, scenarioResolver}: IScenarioLoaderArgs) {
    const id = params[scenarioId];
    if (!id) {
        console.error("No id found for scenarioId param");
        return;
    }
    return scenarioResolver.getVm({id, route: SCENARIO_URL});
}

export function Scenario() {
    const scenario = useLoaderData();
    return (<div>
        {JSON.stringify(scenario)};
    </div>)
}