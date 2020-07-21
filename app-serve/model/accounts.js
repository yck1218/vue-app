let mongoose =require('mongoose');
// Schema  规范插入数据库中的数据类型 
const Schema= mongoose.Schema

let usersSchema =new Schema({
    usersName:String,
    userPassword:String,
    newUserPassword:String
})


// 创建了一个model ，上面有很多的api
let accountsModel =mongoose.model('accounts',usersSchema)
// 抛出函数api  
module.exports = accountsModel 



