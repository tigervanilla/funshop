module.exports = {
  greeting: function (req, res, next) {
    res.json({title: 'Funshop Express Server'});
  },

  getTrendingProducts: (req,res,next)=>{
      req.db.collection('products').find({}).limit(4).toArray((err,docs)=>{
        if(err) throw err;
        console.log("Found the following records");
        console.log(docs);
        res.send(docs);
      })
  }
}
