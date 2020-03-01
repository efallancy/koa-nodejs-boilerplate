import router from 'koa-joi-router';

import { greet } from './handler';

const joi = router.Joi;
const route = router();

route.route({
  method: 'post',
  path: '/greetings',
  validate: {
    type: 'json',
    body: joi.object({
      name: joi.string().required(),
    }),
  },
  handler: greet,
});

route.prefix('/v1');

export default route;
