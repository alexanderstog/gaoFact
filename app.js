var express = require('express');
var nodemailer = require('nodemailer');


var app = express();

var port = process.env.PORT || 3000;


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


var nav = [{
    Link: '/about',
    Text: 'About'
}, {
    Link: '/contact',
    Text: 'Contact'
}];






/*
var chart = [{
    Label: 'MIT',
    Value: 30
}, {
    Label :"Harvard",
    Value: 50
}, {
    Label :"USC",
    Value: 50
}, {
    Label :"UCLA",
    Value: 100
}, {
    Label :"Adam's University",
    Value: 5
}]
*/


/* var teamRouter = require('./src/routes/teamRoutes');
var adminRouter = require('./src/routes/adminRoutes');
var contactRouter = require('./src/routes/contactRoutes');
*/


app.use(express.static('public'));
app.set('views','./src/views');

app.set('view engine', 'ejs');

/*
app.use('/teams', teamRouter);
app.use('/admin', adminRouter);
app.use('/contact', contactRouter);
*/


var getJSON = require('get-json')
 






app.get('/', function(req,res){
    
    getJSON('https://us-central1-bananaramen-c36db.cloudfunctions.net/chartData',  function(error, response){
 
    console.log(error);
    // undefined
 
    console.log(response);
    var chart = response.chartData;
    // ["Beth Orton &mdash; Stolen Car",
    // "Jack White &mdash; Temporary Ground",
    // "I Am Kloot &mdash; Loch",
    // "Portishead &mdash; Glory Box"]
        res.render('index', {
       title:'BananaRamen', 
       metadescription:'Ramen',
       nav: nav,
       chart: chart
   }); 
});
   
});
    



app.listen(3000, function(err){
    console.log('running server on port ' + port);
    
    
    
    
    
    
});



