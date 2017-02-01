var express = require('express');
var router = express.Router();
let authorization = require(APP_PATH + "/api/middleware/user_jwtAuth.js");
let userObj = require(APP_PATH+ '/api/controller/UserController.js');

router.post('/addUser' ,userObj.AddUser);
router.get('/allUser' ,userObj.AllUser);
router.get('/singleUser/:id',userObj.GetSingleUser);
router.get('/delete/:id',userObj.DeleteUser);
router.post('/update',userObj.UpdateUser);
module.exports = router;
