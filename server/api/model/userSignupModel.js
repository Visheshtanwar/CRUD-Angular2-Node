/* *********************
Author:Vishesh Tanwar
Module: User register model
Description: use for User Imfo
************************/

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;


 var userSchema = new Schema({

      name: {
           type : String
      },
      email: {
           type : String
      },
      password: {
           type : Number
     },
      token: {
          type: String,
          default : "",
     },

      cretedDate: { type: Date, default: Date.now },
      lastModify: { type: Date, default: Date.now },
      status: { type: String, default: true }

});

var User = mongoose.model('SingupUser', userSchema);

module.exports = User;
