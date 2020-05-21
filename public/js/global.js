console.log("global js");
var headerHeight = $(".header-info").height();
var windowHeight = $( window ).height();
$("#myCarousel").height(windowHeight - headerHeight - 150);
console.log("height of header" + headerHeight);


function trackAppClick() {
    analytics.logEvent('app download click');
    console.log("app link clicked");
}

function setNav(){
var path = window.location.pathname;
var check = "facts";
if (path.includes(check)){
    console.log("category page");
    var category = path.split("facts/")[1];
    var categoryClass = "category-" + category;
    $('.' + categoryClass).addClass("nav-item-selected");
    $('.' + categoryClass).detach().prependTo(".nav");
} else {
    console.log("not category page");
    $(".nav-item").eq(0).addClass(".nav-item-selected");
}
}

$( document ).ready(function() {
    setNav();
});




