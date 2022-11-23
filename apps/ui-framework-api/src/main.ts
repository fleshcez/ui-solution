/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import {
  API_URL,
  IApp,
  SCENARIO_URL,
} from '@ui-solution/ui-framework-api-interface';
import { appBuilder } from './app/appBuilder';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

// app.get(API_URL, (req, res) => {
//   res.send(appBuilder() as IApp);
// });

const configRouter = express.Router();
configRouter.route('/').get((req, res) => {
  res.send(appBuilder() as IApp);
});

const scenarioRouter = express.Router();
scenarioRouter.route('/').get((req, res) => {
  res.send('pixs');
});
scenarioRouter.route('/:scenarioId').get((req, res) => {
  const scenarioId = req.params.scenarioId;
  let response;
  if (scenarioId === 'emails-sent') {
    response = {
      sent: [1, 2, 3],
    };
  } else if (scenarioId === 'emails-received') {
    response = {
      received: [2, 3, 4],
    };
  }
  res.send(response);
});


// app.use(API_URL + SCENARIO_URL, scenarioRouter);

configRouter.use(SCENARIO_URL, scenarioRouter);
app.use(API_URL, configRouter);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
