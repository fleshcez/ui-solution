import { IApp, IconSize, IconType } from "@ui-solution/ui-framework-api-interface";

export function appBuilder () {
  const app: IApp = {
    configuration: {
      header: {
        title: "Ui Solution"
      },
      scenarios: [
        {
          fetchDetails: {
            path: "/scenario/emails-received"
          },
          icon: {icon: IconType.inbox, size: IconSize.small},
          label: "Inbox",
          id: "1"
        },
        {
          fetchDetails: {
            path: "/scenario/emails-sent"
          },
          icon: {icon: IconType.mail, size: IconSize.small},
          label: "Sent",
          id: "2"
        }
      ]
    }
  };

  return app;
}
