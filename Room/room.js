
$(document).ready(function(){

  $("#checkDate").hide();
  $("#picBtn1").hide();
  $("#picBtn2").hide();
  $("#picBtn3").hide();


console.log($("#dropdownMenuButton2 option:selected").text())


  $("#picBtn1, #picBtn2 ,#picBtn3, #checkBtn").click(function() {
    $("#checkDate").show();
    }

  );


  $("#column1").hover(function() {
       $( "#picBtn1" ).slideDown(100);
    }, function() {
        $( "#picBtn1" ).slideUp(100);
    }
  );
  $("#column2").hover(function() {
       $( "#picBtn2" ).slideDown(100);
    }, function() {
        $( "#picBtn2" ).slideUp(100);
    }
  );
  $("#column3").hover(function() {
       $( "#picBtn3" ).slideDown(100);
    }, function() {
        $( "#picBtn3" ).slideUp(100);
    }
  );


  $("#CheckMenuButton").click(function() {
      $("#checkDate").hide();
    alert("Sorry We are fully booked");

    console.log($("#dropdownMenuButton2 option:selected").text());
    console.log($( "#dropdownMenuButton2" ).val());
// $( "#dropdownMenuButton2 option:selected" ).text();

    }

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
