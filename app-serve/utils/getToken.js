let jwt = require('jsonwebtoken')

function getToken(data){
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data
      }, '余忆');    
}
module.exports = getToken

