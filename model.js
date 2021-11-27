let mongoose = require('mongoose')

let Schema = mongoose.Schema //引入模式对象
//2.制定你家的的规则(限制文档字段类型)  
let Rule = new Schema({
  date: {
    type: String,//类型
    required: true,//必填
  },
  name: {
    //类型
    type: String,
    required: true,//必填
  },
  address: {
    type: String,
    required: true
  },



})
//3告诉保安规则
module.exports = mongoose.model('admincontent', Rule)//用于生成某个集合所对应模型对象
//增加 mynosql.create({ stu_id: "003", name: "jing", age: 19, sex: '男', grade: '高一', hobby: ['学习', '学习'], info: 656 }, (err, data) => {
//   if (!err) {
//     console.log(data)
//   }
//   else { console.log(err); }
// })

// 查询 find方法返回的是一个数组,如果没有查到东西返回空数组,
//findOne返回的是一个对象或者null（无结果）
//   mynosql.findOne({ name: "dan" }, (err, data) => { console.log(data); })


//更新  one管一个  many全更新
// mynosql.updateOne({ name: "dan" }, { age: 99 }, (e, data) => {
//   console.log(data);
// })

//删除  mynosql.deleteOne({ name: "nisi" }, function (e, data) { console.log(data); }) 


