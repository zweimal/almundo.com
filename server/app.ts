import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';

import { mongoose } from './db/mongoose';
import { appRouter } from './api/routes';

console.log(process.env.NODE_ENV);

const environment: string = process.env.NODE_ENV || 'production';

const envConfig = require(`./environments/${environment}`);

const port = envConfig.serverPort || 3000;

const API_PREFIX = '/api/v1/';

mongoose.connect('mongodb://localhost/almundo');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(API_PREFIX, appRouter);

const staticDir = path.join(__dirname, '..', 'dist');
app.use(express.static(staticDir));
app.get('*', function (req, res) {
  res.sendFile('index.html', { root: staticDir });
});

app.listen(port);

console.log('[' + envConfig.name + '] AlMundo.com ngx MEAN server started on: ' + port);
