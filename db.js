//该模块用于连接数据库 并且监听状态

let mongoose = require('mongoose')

const DB_NAME = 'userinfo'
const PORT = '27017'
const IP = 'localhost'
module.exports = function (callback) {
  mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`)
  //1.连接总库 再连接某个具体的数据库

  // let mynosql = require('../model/model')

  //2.绑定数据库连接的监听
  mongoose.connection.on('open', function (err) {
    if (err) {
      console.log(err, '连接失败');

    } else {
      console.log('数据库连接成功');
      callback()
      //在这里面操作数据库
      //3.操作数据库
    }
  })
}
