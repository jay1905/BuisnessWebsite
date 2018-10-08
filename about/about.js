
$(document).ready(function(){

  $("#profilePic").hover(
          function() { $(this).addClass("picHover"); },
          function() { $(this).removeClass("picHover"); }
      );
  $("#profilePicJon").hover(
          function() { $(this).addClass("picHover"); },
          function() { $(this).removeClass("picHover"); }
      );



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


});
