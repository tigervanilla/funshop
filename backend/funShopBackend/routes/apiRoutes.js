var express = require('express');
var router = express.Router();
const homeCtrl=require('./../controllers/homeCtrl')

router.get('/', homeCtrl.greeting);

module.exports=router;