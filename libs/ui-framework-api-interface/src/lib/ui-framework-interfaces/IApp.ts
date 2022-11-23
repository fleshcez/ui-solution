import { IIcon } from "./IIcon";

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
  id: string;
}

export interface IFetchDetails {
  path: string;
}
