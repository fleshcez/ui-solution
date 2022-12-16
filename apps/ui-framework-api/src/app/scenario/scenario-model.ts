const emailsSentScenarioModel = {
    isListPanelVisible: false,
    isFormPanelVisible: true,
    title: 'Your sent emails'
}

const emailsReceivedScenarioModel = {
    title: 'Your received emails'
}

export function getScenarioModel(scenarioId: string) {
    if (scenarioId === 'emails-sent') {
        return emailsSentScenarioModel;
    } else if (scenarioId === "emails-received") {
        return emailsReceivedScenarioModel;
    }
}