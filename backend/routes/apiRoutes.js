var express = require('express');
var router = express.Router();
const homeCtrl=require('./../controllers/homeCtrl')

router.get('/', homeCtrl.greeting);
router.get('/trending-products', homeCtrl.getTrendingProducts);

module.exports=router;