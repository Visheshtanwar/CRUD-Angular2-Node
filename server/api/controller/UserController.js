/*********************
  Author: Vishesh Tanwar
  Description: All the User related Info

*/


 const UserModel = require(APP_PATH +'/api/model/userModel.js');

 var UserObj = module.exports = {

// Add new user********************************************************************
     AddUser(req , res ){
          var email = req.body.email;

          UserModel.findOne({email:email}, function(err, data){
               if(data){
                    return res.json({resStatus : 'error', msg:'Email is already register'});
               }
               else {
                    UserModel(req.body).save(function(err ,result){
                         if(err){
                              return res.json({resStatus:'error' , msg:'Not Save'});
                         }
                         else {
                         return res.json({resStatus:'success' , msg:'Your Register successfully' ,data :result});
                         }
                    });
               }
          })
     },

// Get All Users ******************************************************************

     AllUser(req , res ){
          //console.log("hello");
          UserModel.find({}).sort({name: 1}).limit(10).exec(function(err,result){
               if(err){
                    //console.log(err);
                    return res.json({resStatus:'error',msg:"Some error Try again"});
               }
               else{
                    return res.json({resStatus:'success',data :result });
               }
          })
     },

//Get single user Detail ***********************************************************
     GetSingleUser(req , res){
          var id = req.params.id ;
          //console.log(id);return
          UserModel.findOne({_id:id},function(err,result){
               if(err){
                    return res.json({resStatus:'error',msg:"Some error Try again"});
               }
               else{
                    return res.json({resStatus:'success',data :result });
               }
          })
     },

// update user **********************************************************************
     UpdateUser(req , res){
          var id = req.body._id;
          UserModel.findOneAndUpdate({_id:id} ,{$set:req.body , }, {new: true},function(err , result){
               if(err){
                    return res.json({ resStatus: 'error' , msg:'Error ! Data Not updated'})
               }
               else {
                    return res.json({resStatus: 'success' , msg:'Info Updates' , data:result} )
               }
          })
     },

// Delete the user *****************************************************************
    DeleteUser(req , res ){
         var id = req.params.id ;
         // console.log(id); return;
               UserModel.findByIdAndRemove( id , function(err , result){
                    if(err){
                          return res.json({ resStatus: 'error' , msg:'Error ! User not Deleted'});

                    }
                    else {
                         //console.log("delete")
                           return res.json({ resStatus: 'success' , msg:'! User is Deleted '});
                    }


         })
    }
}
