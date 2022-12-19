import { IScenario, PanelType } from "@ui-solution/ui-framework-api-interface";

export const emailsSentScenario: IScenario = {
    modelFetch: {
      path: 'model',
    },
    panels: [
      {
        type: PanelType.form,
        isVisible: '$model.isListPanelVisible'
      },
      {
        type: PanelType.list,
        isVisible: '$model.isFormPanelVisible'
      },
    ],
  };
  
  export const emailsReceivedScenario: IScenario = {
    modelFetch: {
      path: 'model',
    },
    panels: [{ type: PanelType.list }],
  };
  