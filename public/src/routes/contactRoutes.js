var express = require ('express');
var contactRouter = express.Router();


contactRouter.route('/')
    .get(function(req, res){
        res.render('contactView',  {
           title:'Contact Pack Finance', 
           nav: [{
               Link:'/about', 
               Text:'About'
           },{
               Link:'/contact', 
               Text:'Contact'
           }],

   });
});


module.exports = contactRouter;