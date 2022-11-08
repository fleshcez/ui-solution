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
            path: "/scenarios/emails-received"
          },
          icon: {icon: IconType.inbox, size: IconSize.small},
          label: "Inbox"
        },
        {
          fetchDetails: {
            path: "/scenarios/emails-sent"
          },
          icon: {icon: IconType.mail, size: IconSize.small},
          label: "Sent"
        }
      ]
    }
  };

  return app;
}
