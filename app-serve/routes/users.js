var express = require('express');
var router = express.Router();
const usersModel=require('../model/users.js') 
const accountsModel =require('../model/accounts')
const listsModel =require('../model/lists');
const { json } = require('express');

listsModel
/* GET users listing. */
// 管理后台登入
router.get('/login', function(req, res, next) {
let {userName,userPassword} =req.query
usersModel.find({userName,userPassword}).then(arr=>{
 if(arr.length>0){
  res.json({
    err:0,
    msg:'succues',
    
  })
 }else{
   res.json({
     err:1,
     msg:'账号或密码错误'
   })
 }
 
})

});
  
// 用户注册接口

router.post('/regist',function(req,res){
  let {usersName,userPassword,newUserPassword} = req.body
  accountsModel.insertMany([{usersName,userPassword,newUserPassword}])
  res.json({
    err:0,
    msg:'success'
  })
})
// 普通用户登入接口
router.post('/userLogin',function(req,res){
    console.log(req.body);
  let {usersName,userPassword} =req.body
  accountsModel.find({usersName,userPassword}).then(arr=>{
    console.log('aaaaaaaaa',arr);
    if(arr && arr.length>0){
      res.json({
        err:0,
        msg:'success'
      })
    }else{
      res.json({
        err:1,
        msg:'错误'
      })
    }
  })
})
router.get('/lists',function(req,res){
  console.log(req.query);
  listsModel.find({}).then(arr=>{
    res.json({
      err:0,
      msg:"success",
      data:arr
    })
  })
 
})

module.exports = router;
