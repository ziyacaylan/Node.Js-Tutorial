const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  if (ctx.path === "/") {
    ctx.type = "text/html";
    ctx.body = "<h1>WELCOME TO HOME PAGE...!</h1>";
  } else if (ctx.path === "/about") {
    ctx.type = "text/html";
    ctx.body = "<h1>WELCOME TO ABOUT PAGE...!</h1>";
  } else if (ctx.path === "/contact") {
    ctx.type = "text/html";
    ctx.body = "<h1>WELCOME TO CONTACT PAGE...!</h1>";
  } else {
    ctx.type = "text/html";
    ctx.body = "<h1>404 The Page Not Found...!</h1>";
  }
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});
