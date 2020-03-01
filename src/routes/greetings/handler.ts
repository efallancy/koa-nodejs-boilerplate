import { Context } from 'koa';

export const greet = (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = {
    message: `Hello, ${ctx.request.body.name}!`,
  };
};
