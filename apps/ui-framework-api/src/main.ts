/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';
import { API_URL, ApiResponse } from "@ui-solution/uif-framework-api-interface";

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to ui-framework-api!' } as ApiResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
