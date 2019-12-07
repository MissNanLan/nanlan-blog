const Example = require("../models/example");

async function listExample(msg = "", pageNum = 1, pageSize = 10) {
  return new Promise((resolve, reject) => {
    const queryStr = {};
    Example.find(queryStr, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

module.exports = {
  listExample
};

// const exampleSchema = new mongoose.Schema({
//     msg:{
//         type: String,
//         require: true
//     }
// },{ collection: 'example' })

// var Example = mongoose.model('example', exampleSchema);
// 增
// new Example({msg:"test"}).save((err,res)=>{
//     console.log(res)
// })
// 查
// var wherestr = {'msg' : 'test'};
// Example.find({},(err,res)=>{
//     console.log(res)
// })
// 改
// Example.findByIdAndUpdate("5dd169bbe5491b32169db0f8",{"msg":"new msg"},(err,res)=>{
//     console.log(res)
// })
// // 删除
// Example.findByIdAndRemove("5dd169bbe5491b32169db0f8",(err,res)=>{
//     console.log(res)
// })
