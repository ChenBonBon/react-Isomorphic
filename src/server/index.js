// import koaStatic from 'koa-static'
import Koa from "koa";
import render from "./utils/render";

const app = new Koa();

app.use(async (ctx) => {
  const { request } = ctx;

  try {
    const res = await render(request);
    const { error, html } = res;
    if (error) {
      if (error.url) {
        ctx.redirect(error.url);
      } else if (error.code) {
        ctx.status = error.code;
        ctx.body = "error code：" + error.code;
      }
    }
    ctx.body = html;
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = "Internal server error";
  }
});

app.listen(3000);
