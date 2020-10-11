const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const port = process.env.PORT || 8080
router.post('/login', (ctx, next) => {
  ctx.body = {}
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);
