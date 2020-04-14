console.log("global js");
var headerHeight = $(".header-info").height();
var windowHeight = $( window ).height();
$("#myCarousel").height(windowHeight - headerHeight - 150);
console.log("height of header" + headerHeight);
