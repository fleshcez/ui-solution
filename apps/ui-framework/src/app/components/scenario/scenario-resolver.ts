import { IScenarioDescription } from "@ui-solution/ui-framework-api-interface";
import { VmResolver } from "../../services/vm-resolver";

export const scenarioResolver = new VmResolver<IScenarioDescription>();