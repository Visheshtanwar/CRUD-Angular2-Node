var express = require('express');
var router = express.Router();
//const userModel = "./model/useModel.js";
//const postModel = "./model/postModel.js";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.post('/addUser', function(req, res, next) {
//
//           var name = req.body.name;
//           var email = req.body.email;
//           var phone = req.body.phone;
//           //var street = req.body.address.street;
//           userModel.find({email:email}, function(err, user){
//                if(user){
//                     return res.json({resStatus : 'error', msg:'Email is already register'});
//                     }
//                else {
//                     userModel(req.body).save(function(err ,data){
//                          if(err){
//                               return res.json({resStatus:'error' , msg:'Not Save'});
//                          }
//                          else {
//                               return res.json({resStatus:'error' , msg:'Your Register successfully'});
//                          }
//                     }
//                }
//
//
//           })
//
// });
//
// router.get('/allUser', function(req, res, next) {
//
// });

module.exports = router;
