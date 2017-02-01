/*********************
  Author: Vishesh Tanwar
  Description: All the Register and login

*/


 const UserSignupModel = require(APP_PATH +'/api/model/userSignupModel.js');
 const JwtService = require(APP_PATH + '/api/service/jwtService.js');

 var UserObj = module.exports = {

// Add new user********************************************************************
     AddUserSignup(req , res ){
          var email = req.body.email;

          UserSignupModel.findOne({email:email}, function(err, data){
               if(data){
                    return res.json({resStatus : 'error', msg:'Email is already register'});
               }
               else {
                    UserSignupModel(req.body).save(function(err ,result){
                         if(err){
                              return res.json({resStatus:'error' , msg:'Not Save'});
                         }
                         else {
                         return res.json({resStatus:'success' , msg:'Your Register successfully',token: JwtService.issueToken(resData._id, req.body.deviceToken ) ,data :result});
                         }
                    });
               }
          })
     },

//Get single user Detail ***********************************************************
     UserLogin(req , res){
          //console.log(req.body);
          var email = req.body.email ;
          //console.log(id);return
          UserSignupModel.findOne({email:email},function(err,result){
               if(err){
                    return res.json({resStatus:'error',msg:"This email is not Register"});
               }
               else{
                    console.log(result.password);
                    if(result.password == req.body.password){
                    return res.json({resStatus:'success',msg:"Success Login" });
                    }
                    else {
                    return res.json({resStatus:'errpr',msg:"Wrong Password" });
                    }
               }
          })
     },



}
