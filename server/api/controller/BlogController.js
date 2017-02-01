/*********************
  Author: Vishesh Tanwar
  Description: All the blog related Info

*/

const BlogModel = require(APP_PATH + '/api/model/blogModel.js');

var BlogObj = module.exports =  {

          AddBlog(req , res){
               //console.log(req.body);
               var title = req.body.title;
               BlogModel.findOne({title : title} , function(err , result){
                    if(result){
                         //console.log(err);
                         return res.json({ resStatus: 'Error' , msg:'Title should Be Unique'});
                    }
                    else {
                         BlogModel(req.body).save(function(err , result){
                              if(err){
                                   return res.json({resStatus: 'error',msg:'Blog is not saved'});
                              }
                              else{
                                   return res.json({resStatus: 'success',msg:'Blog is Publish',data:result});
                              }
                         })
                    }
               })
          },

          AllBlog(req , res){
               BlogModel.find({ } , function(err , result){
                    if(err){
                         return res.json({ resStatus: 'Error' , msg:'Some Error '});
                    }
                    else {
                         return res.json({resStatus:'Success', data:result})
                    }
               });
          }
          //GetSingleBlog
}
