import { Nullable } from '@ui-solution/ui-framework-api-interface';
import { IScenarioDescription } from "@ui-solution/ui-framework-api-interface";
import { IVmResolver, VmResolver } from "../../services/vm-resolver";

export const scenarioResolver = new VmResolver<IScenarioDescription>();