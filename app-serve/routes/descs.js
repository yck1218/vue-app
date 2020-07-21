var express = require('express');
var router = express.Router();
const descsModel=require('../model/descs')
const listsModel=require('../model/lists')

/* GET home page. */
router.get('/', function(req, res, next) {
  descsModel.find().then((arr)=>{
    res.json({
      err:0,
      msg:'success',
      data:arr
    })
  })
});
router.post('/addGoodsList', function(req, res, next) {

  // console.log('数据',req.body);
  listsModel.create(req.body).then((aa)=>{
    if(aa){
      res.json({
        err:0,
        msg:'success'
      })
    }
  })
});

module.exports = router;
