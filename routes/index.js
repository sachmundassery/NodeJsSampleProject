var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/submit',function(req,res){
  console.log(req.body)
MongoClient.connect('mongodb://localhost:27017',function(err,client){
  if(err){
     console.log("Error")
  }
  else{
    console.log("DB Connected")
    client.db('sampleDB').collection('user').insertOne(req.body) // we have created a db and added a collection
  }
})
  res.send('gotcha')
})


module.exports = router;
