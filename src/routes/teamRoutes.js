var express = require ('express');
var teamRouter = express.Router();

var brands= [
    {   
        brandName: 'England',
        brandDesc: 'This is a description of the brand provider',
        brandImg: '/img/brandimages/titleist.jpg'
    },
    {
        brandName: 'Australia',
        brandDesc: 'This is a different description of the brand provider',
        brandImg: '/img/brandimages/ping.jpg'
    },
    {
        brandName: 'West Indies',
        brandDesc: 'You can basically write anything here',
        brandImg: '/img/brandimages/cobra.jpg'
    },
    {
        brandName: 'Sri Lanka',
        brandDesc: 'You can basically write anything here',
        brandImg: '/img/brandimages/bridgestone.jpg'
    },
    {
        brandName: 'New Zealand',
        brandDesc: 'You can basically write anything here',
        brandImg: '/img/ping.png'
    },
    {
        brandName: 'South Africa',
        brandDesc: 'You can basically write anything here',
        brandImg: '/img/ping.png'
    },
    {
        brandName: 'Afghanistan',
        brandDesc: 'You can basically write anything here',
        brandImg: '/img/ping.png'
    }
];

teamRouter.route('/')
    .get(function(req, res){
        res.render('brandList',  {
           title:'this is a brand title', 
           nav: [{
               Link:'/brands', 
               Text:'Brands'
           },{
               Link:'/places', 
               Text:'Places'
           }],
                brands: brands
   });
});

teamRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        
         res.render('brandView',  {
           title:'this is a brand title', 
           nav: [{
               Link:'/brands', 
               Text:'Brands'
           },{
               Link:'/places', 
               Text:'Places'
           }],
                brand: brands[id]
   });
});

module.exports = teamRouter;