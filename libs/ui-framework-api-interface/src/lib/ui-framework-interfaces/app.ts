import { INavigate } from "./action";
import { IIcon } from "./icon";

export interface IApp {
  configuration: IConfiguration;
}

export interface IConfiguration {
  scenarios: IScenario[];
  header: IHeader;
}

export interface IHeader {
  title: string;
}

export interface IScenario {
  icon: IIcon;
  label: string;
  fetchDetails: IFetchDetails;
  action: INavigate;
  id: string;
}

export interface IFetchDetails {
  path: string;
}
