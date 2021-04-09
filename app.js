// 服务器入口文件
// 1.创建koa的实例对象
const koa=require("koa")
const app=new koa()
// 2.绑定中间件
// 绑定第一层中间件
const resqDurationMiddleware=require("./middleware/koa_response_duraction.js")
app.use(resqDurationMiddleware)
// 绑定第二层中间件
const resqHeaderMiddleware=require("./middleware/koa_response_header.js")
app.use(resqHeaderMiddleware)
// 绑定第三层中间件
const resqDataMiddleware=require("./middleware/koa_response_data.js")
app.use(resqDataMiddleware)
// 3.绑定端口号8888
app.listen(8888)