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



var facts = [{
    Title:'Some people eat it raw',
    Info:'Some people do not need to wait for the five minutes to prepare ramen noodles. They just sprinkle the raw, crunchy and hard noodles with the seasoning and dig in. This might seem weird but many people do it as a quick snack.'
},  {
    Title:'First of its kind to be eaten in space',
    Info:'The inventor of instant noodles, Momofuku Ando never would have dreamed to have his invention be eaten in space as it happened back in 2005.  He actually invented a better vacuum sealed package version of noodles shortly before his death.  This version had smaller noodles and a thicker broth to make it easy to eat in zero gravity conditions. Japanese astronaut, Soichi Noguchi carried some Space Ram Noodles to space with him in the Discovery space shuttle.'
},  {
    Title:'You only need $150 only to survive on ramen for a year',
    Info:'The thing that makes ramen so popular is the price. For just 14 cents you can get a meal easy enough to prepare in ten minutes or less. If you do the math, it would cost you a little over $150 if you lived off ramen noodles for a whole year. This can have you saving thousands of dollars since on average, one American spends over $7000 on food.'
},  {
    Title:'When they were first invented, were considered luxurious',
    Info:'When Momokufu Ando first released Chicken Ramen to the Japanese supermarkets in 1958, it was six times more expensive than fresh udon noodles. This made ramen noodles unaffordable to the vast majority of poor Japanese people. '
},  {
    Title:'There is a museum dedicated to noodles',
    Info:'The Japanese love their noodles so much they have dedicated a whole museum to showcase the history of ramen noodles and the story of how Momofuku Ando created one of Japan\'s finest inventions. The museum has a model factory where guests can make unique ramen concoctions using either of the available 5,460 flavor combinations.'
}
    
    
];


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
       title:'Ramen-Drop', 
       description:'Vote for your campus to receive a boat load of Ramen!',
       nav: nav,
       chart: chart,
       facts:facts
   }); 
});
   
});
    



app.listen(3000, function(err){
    console.log('running server on port ' + port);
    
    
    
    
    
    
});



