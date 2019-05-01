var express = require('express');
var adminRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;

var brands= [
    {   
        brandName: 'MRF',
        brandDesc: 'This is a description of the brand provider'
    },
    {
        brandName: 'Spartan',
        brandDesc: 'This is a different description of the brand provider'
    },
    {
        brandName: 'George Haaaarper',
        brandDesc: 'is a ninny'
    }
];


adminRouter.route('/addbrand')
    .get(function(req, res){
        var url = 'mongodb://localhost:27017/libraryapp';
    
            
         MongoClient.connect(url, function (err,client) {
             
             var db = client.db('mytestingdb');
           var collection = db.collection('brands');
            collection.insertMany(brands,
                function(err,results){
                    console.log("writing to db");
                    res.send(results);
                    
                
            });
        });
       // res.send('inserting brand');
});


    
module.exports = adminRouter;

