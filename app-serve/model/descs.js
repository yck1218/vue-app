let mongoose =require('mongoose');
// Schema  规范插入数据库中的数据类型 
const Schema= mongoose.Schema

let descsSchema =new Schema({
    name:String,
    name_zw:String
})


// 创建了一个model ，上面有很多的api
let descsModel =mongoose.model('descs',descsSchema)
// 抛出函数api  
module.exports = descsModel 



