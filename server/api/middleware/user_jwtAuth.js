/*
* Author : vishesh Tanwar
* Module : UserAuthToken
* Description : Use to authenticate User
*/
const UserSignupModel = require(APP_PATH + '/api/model/userSignupModel.js');
let jwToken = require(APP_PATH + "/api/service/jwtService.js");
module.exports = function(req, res, next) {
     let token;
     if (req.headers && req.headers.authorization) {
          let parts = req.headers.authorization.split(' ');

          if (parts.length == 2) {
               var scheme = parts[0],
               credentials = parts[1];
               if (/^BearerS$/i.test(scheme)) {
                    token = credentials;
               }
          } else {
               return res.status(401).json({resStatus : "error", msg: '400 Bad Request",'});

          }
     } else if (req.param('token')) {
          token = req.param('token');

          delete req.query.token;
     } else {

          return res.status(401).json({resStatus : "error", msg: 'ACCESS DENIED !! You are not authorize to access this Resource'});

     }

     jwToken.verify(token, function(err, token) {

          if(token && token.auth) {
               UserModel.findOne({_id : token.auth}, {_id : 1, name : 1}, function (err, resData) {
                    if(resData) {
                         req.token = token;
                         next();
                    } else {
                         return res.status(403).json({resStatus : "error", msg:'Your session has been expired, please login.'});
                    }
               });
          } else {
               return res.status(401).json({resStatus : "error", msg: '400 Bad Request",'});
          }

     });
};
