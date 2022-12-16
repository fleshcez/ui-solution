import { INavigate } from "./action";
import { IIcon } from "./icon";
import { IPanel } from "./panel";

export interface IScenarioDescription {
    icon: IIcon;
    label: string;
    fetchDetails: IFetchDetails;
    action: INavigate;
    id: string;
  }
  
  export interface IScenario {
    modelFetch: IFetchDetails;
    panels: IPanel[];
  }
  
  export interface IFetchDetails {
    path: string;
  }