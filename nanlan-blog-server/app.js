const Koa = require("koa")
const config = require("./config")
const mongoose = require("mongoose")
const routes = require("./routers/index")
const bodyParser = require('koa-bodyparser')
const loginFilter = require("./app/middlerware/login_interceptor")


const app = new Koa();

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected",()=>{
    console.log("mongodb conected success")
})
app.use((ctx,next)=>{
  return loginFilter.loginFilter(ctx,next)
})
app.use(bodyParser());
app.use(routes.routes()).use(routes.allowedMethods());


app.listen(config.port,()=>{
  console.log("servie start on port:"+config.port)
});
