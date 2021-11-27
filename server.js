
const express = require('express')//引入exress框架
const app = express()  //注册app
app.use(express.urlencoded({ extended: true }))  //内置中间件,可获取post请求的请求体参数
app.use(express.static(__dirname + '/public'))   //暴露静态资源
app.use(express.json())
const db = require('./db')  //引入数据库所需的对象
const mynosql = require('./model') //模型对象
// const UIRouter = require('../../node搭建服务器/router/UIRouter')//ui路由
// const login_registerRouter = require('../../node搭建服务器/router/login_registerRouter')//业务路由

//连接数据库 启动服务器  连接数据库只会进行一次

app.get('/getUserInfo', function (request, response) {
  response.setHeader('Access-Control-Allow-Origin', '*')
  mynosql.find({}, (e, data) => {
    console.log(data)
    response.send(data)
  })

})

app.post('/addUserInfo', function (request, response) {
  console.log(1)
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE")
  console.log(request.body)
  mynosql.create(request.body, function (e) {
    if (e) { console.log(e) }
    else { console.log('写入成功') }
  })
})

app.get('/removeUserInfo', function (request, response) {
  console.log(request.query)
  mynosql.deleteOne(request.query, function (e, data) {
    if (e) { console.log(e) }
    else { console.log('删除成功') }
  })
})
db(e => {
  if (e) { console.log(e) }
  else {
    // app.use(UIRouter())//使用UIrouter
    // app.use(login_registerRouter())//使用业务router
    app.listen(3000, (e) => {
      if (e) console.log(e);
      else { console.log('服务器启动成功'); }
    })
  }
})