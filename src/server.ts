import Koa from 'koa';
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import logger from 'koa-pino-logger';
import bodyParser from 'koa-bodyparser';

import setRequestId from './middleware/setRequestId';
import { registerRoutes } from './routes';

const app = new Koa();

app.use(helmet());
app.use(cors());
app.use(logger());
app.use(bodyParser());
app.use(setRequestId);

registerRoutes(app);

export default app;
