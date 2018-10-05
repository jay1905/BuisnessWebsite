$(document).ready(function(){


});
var lastScrollTop = 0;
 var st=0;
$(window).scroll(function(){
    st = $(window).scrollTop();
   if (st > lastScrollTop){
    
        $("#jnav").slideUp(150);
   } else {

      $("#jnav").slideDown(150);
   }
   lastScrollTop = st;
});
