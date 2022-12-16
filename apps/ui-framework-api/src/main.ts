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
import { scenarioRouter } from './app/scenario/scenario-router';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const configRouter = express.Router();
configRouter.route('/').get((req, res) => {
  res.send(appBuilder() as IApp);
});

configRouter.use(SCENARIO_URL, scenarioRouter);
app.use(API_URL, configRouter);
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}${API_URL}`);
});
server.on('error', console.error);
