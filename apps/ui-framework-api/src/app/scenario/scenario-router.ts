import { PANEL_URL } from '@ui-solution/ui-framework-api-interface';
import express = require('express');
import { panelRouter } from '../panel/panel-router';
import { getScenarioModel } from './scenario-model';
import { emailsReceivedScenario, emailsSentScenario } from './scenario-vm';

export const scenarioRouter = express.Router();
scenarioRouter.route('/').get((req, res) => {
    res.send('pixs');
});

scenarioRouter.route('/:scenarioId').get((req, res) => {
    const scenarioId = req.params.scenarioId;
    let response;
    if (scenarioId === 'emails-sent') {
        response = emailsSentScenario;
    } else if (scenarioId === 'emails-received') {
        response = emailsReceivedScenario;
    }
    res.send(response);
});

scenarioRouter.route('/:scenarioId/model').get((req, res) => {
    const model = getScenarioModel(req.params.scenarioId);
    if (!model) {
        res.sendStatus(404);
        return;
    }

    res.send(model);
});

scenarioRouter.use(`/:scenarioId${PANEL_URL}`, panelRouter);
