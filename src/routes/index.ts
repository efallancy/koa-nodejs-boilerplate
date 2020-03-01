import Koa from 'koa';

import health from './health';
import greetings from './greetings';

// Register routes
export const registerRoutes = (app: Koa): Koa => {
  app.use(health.middleware());
  app.use(greetings.middleware());
  return app;
};
