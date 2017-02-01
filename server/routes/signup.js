var express = require('express');
var router = express.Router();
let authorization = require(APP_PATH + "/api/middleware/user_jwtAuth.js");
let userObj = require(APP_PATH+ '/api/controller/UserSignupController.js');

router.post('/addSignupUser' ,userObj.AddUserSignup);
router.post('/login',userObj.UserLogin);
module.exports = router;
