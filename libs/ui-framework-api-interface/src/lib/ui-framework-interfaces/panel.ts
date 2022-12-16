export enum PanelType {
    form = "form",
    list = "list"
  }
  
  export interface IPanel {
    type: PanelType;
  }