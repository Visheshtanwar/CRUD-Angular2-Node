/* *********************
Author:Vishesh Tanwar
Module: User model
Description: use for User Imfo
************************/

 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;


 var userSchema = new Schema({

      name: {type : String},
      email: {type : String},
      phone: {type : Number},
      address: {
           street:{type : String},
           suite: {type : String},
           city:{type : String},
           zipcode:{type : Number}
      },
      cretedDate: { type: Date, default: Date.now },
      lastModify: { type: Date, default: Date.now },
      status: { type: String, default: true }

});

var User = mongoose.model('User', userSchema);

module.exports = User;
