const objectId=require('mongodb').ObjectID;

module.exports = {
  greeting: function (req, res, next) {
    res.json({title: 'Funshop Express Server'});
  },

  getTrendingProducts: (req,res,next)=>{
      req.db.collection('products').find({},{projection:{'tags':0}}).limit(4).toArray((err,docs)=>{
        if(err) throw err;
        console.log("Found the following records");
        console.log(docs);
        res.send(docs);
      })
  },

  getProductDetail: (req, res, next)=>{
    req.db.collection('products').findOne({'_id':objectId(req.params.id)},(err,doc)=>{
      if(err) throw err;
      res.send(doc);
    })
  }
}
