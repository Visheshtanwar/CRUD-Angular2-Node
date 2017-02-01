/* *********************
Author:Vishesh Tanwar
Module: Blog model
Description: schema for  Blogs
************************/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
     title: {type: String },
     description: {type: String },
     image: {type: String },
     tags: {type: String },
     id:  {type: String },
     cretedDate:  { type: Date, default: Date.now },
     UpdatedDate: { type: Date, default: Date.now },

})

var blog = mongoose.model('Blogs' , blogSchema);
module.exports = blog;
