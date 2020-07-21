let mongoose =require('mongoose');
// Schema  规范插入数据库中的数据类型 
const Schema= mongoose.Schema

let usersSchema =new Schema({
    name:String,
    title:String,
    goods_id:String,
    desc:String,
    desc_zw:String,
    prie:String,
    hot:Boolean,
    img:String
})
// 创建了一个model ，上面有很多的api
let listsModel =mongoose.model('lists',usersSchema)
// 抛出函数api  
module.exports = listsModel 



