/*
   Author :-  Vishesh Tanwar
   Purpose :- Service used to generate & verify user token
 */


const jwt = require('jsonwebtoken');
const tokenSecret = "KGKGKJG&*575765VGJHGJ";
const UserSignupModel = require(APP_PATH + '/api/model/userSignupModel.js');
module.exports = {

     // Generates a token from supplied payload
     issueToken : function(payload, platform, deviceToken) {
               let token = jwt.sign(
                              {
                                   auth:  payload,
                                   exp:  Math.floor(new Date().getTime()/1000) + 7*24*60*60
                              },
                              tokenSecret);

          if(platform == 'WEB') {
               deviceToken = payload;
          }

          UserSignupModel
               .update(
                    { _id : payload },
                    { isOnline : 'Y', 'fcm.platform' : platform, 'fcm.deviceToken' : deviceToken },
                    { upsert : false }
               )
               .exec (
                         function(err, updateStatus) {
                              console.log("User logged into the application");
                         }
               );

          return token;
     },

     // Verifies token on a request
     verify : function(token, callback) {
          return jwt.verify(token, tokenSecret, {}, callback );
     }
}
