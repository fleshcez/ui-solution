import { INavigate } from "./action";
import { IIcon } from "./icon";
import { IScenarioDescription } from "./scenario";

export interface IApp {
  configuration: IConfiguration;
}

export interface IConfiguration {
  scenarioDescriptions: IScenarioDescription[];
  header: IHeader;
}
export interface IHeader {
  title: string;
}

