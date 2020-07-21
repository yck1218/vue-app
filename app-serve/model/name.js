let mongoose =require('mongoose');
// Schema  规范插入数据库中的数据类型 
const Schema= mongoose.Schema

let nameSchema =new Schema({
    name:String,
    age:Number
})


// 创建了一个model ，上面有很多的api
let nameModel =mongoose.model('names',nameSchema)
// 抛出函数api  
module.exports = nameModel 



