$(document).ready(function() {
    console.log("hello");

    var lastScrollTop = 0; //This potentially removes 
    $(window).scroll(function(event){

        var top = $(this).scrollTop();
       if (top > lastScrollTop){
           // downscroll code 
           $(".nav-bar").removeClass("active");
       } else {
          // upscroll code
          $(".nav-bar").addClass("active");
          
       }
       lastScrollTop = top;

    });
     $(window).resize(function() {
         console.log("resize!!");
     });

     $("h3").on("mousedown", function(){
         console.log("hello!!!!!");
         $(this).fadeOut();
     });
});