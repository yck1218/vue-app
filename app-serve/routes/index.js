var express = require('express');
var router = express.Router();
const nameModel=require('../model/name.js')
const getToken = require('../utils/getToken')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('我出现了')
});

router.get('/user',function(req,res){
  console.log(userModel);
  userModel.find().then(arr=>{
    console.log('我是userModel返回的东西',arr);
    res.json(arr)
  })
})



router.post('/user',function(req,res){

  let {username,userpassword} = req.body
  if(!username || !userpassword) return res.json({
    err:1,
    msg:'请填写用户名或密码'
  })

     let  token =getToken(req.body)
     console.log('token生成成功');
     res.json({
        err:0,
        msg:'成功',
        data:req.body,
        token
     })

     
})

router.get('/name',function(req,res){
  console.log(nameModel);
  nameModel.find().then(arr=>{
    console.log('我是nameModel返回的东西',arr);
    res.json(arr)
  })
})
module.exports = router;
