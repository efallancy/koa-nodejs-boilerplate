import router from 'koa-joi-router';

import { getHealth } from './handler';

const route = router();

route.get('/health', getHealth);

export default route;
