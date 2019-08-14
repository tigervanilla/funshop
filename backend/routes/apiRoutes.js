var express = require('express');
var router = express.Router();
const productCtrl=require('./../controllers/productCtrl')

router.get('/', productCtrl.greeting);
router.get('/trending-products', productCtrl.getTrendingProducts);
router.get('/product-detail/:id', productCtrl.getProductDetail);

module.exports=router;