$(document).ready(function(){


});
var lastScrollTop = 0;
 var st=0;
$(window).scroll(function(){
    st = $(window).scrollTop();
   if (st > lastScrollTop){
      console.log("down");
        $("#jnav").slideUp(150);
   } else {
    console.log("up");
      $("#jnav").slideDown(150);
   }
   lastScrollTop = st;
});
