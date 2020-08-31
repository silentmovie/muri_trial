// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",     //option: "fade" or "slide"
    directionNav: true,
    controlNav: "thumbnails", //option: "thumbnails" or false
    slideshowSpeed: 3000,
    animationSpeed: 600,
    touch: true,
    itemHeight: 150,
    itemWidth: 700,
    // Other options see brendev.com/flexslider or https://woocommerce.com/flexslider/
  });
});