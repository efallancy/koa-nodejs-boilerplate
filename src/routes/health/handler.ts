import { Context } from 'koa';

export const getHealth = (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = {
    message: 'OK! 🤙',
  };
};
