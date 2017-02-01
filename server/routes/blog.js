
var express = require('express');
var router = express.Router();
let authorization = require(APP_PATH + "/api/middleware/user_jwtAuth.js");
let blogObj = require(APP_PATH+ "/api/controller/BlogController.js");

router.post('/addBlog', blogObj.AddBlog );
router.get('/allBlogs' , blogObj.AllBlog );
module.exports = router;
