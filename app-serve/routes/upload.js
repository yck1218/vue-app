var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');  //该第三方插件是为了解析图片上传的的数据
router.post('/img',function(req,res){
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',req);
    console.log(req.body);
    
    var form = new multiparty.Form();   // 创建一个from的实例 该实例的parse（）方法可以解析req中的图片数据
    form.parse(req,function(err, fields, files){
        if(err){
            res.json({
                err:1,
                msg:'图片上传失败'
            })
        }
        else {
            console.log('fields',fields);
            console.log('files',files);
            res.json('aaaa') 
        }
    })


})


module.exports = router;