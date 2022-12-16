import { IScenario, PanelType } from "@ui-solution/ui-framework-api-interface";

export const emailsSentScenario: IScenario = {
    modelFetch: {
      path: 'model',
    },
    panels: [
      {
        type: PanelType.form,
      },
      {
        type: PanelType.list,
      },
    ],
  };
  
  export const emailsReceivedScenario: IScenario = {
    modelFetch: {
      path: 'model',
    },
    panels: [{ type: PanelType.list }],
  };
  