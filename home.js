$(function() {

 


$('#raribox1').click(function(){
  $('#jun').fadeIn();
  $('#hiroto').fadeOut();
  $(this).fadeOut();
  $('#raribox2').fadeIn();
});

$('#raribox2').click(function(){
  $('#hiroto').fadeIn();
  $('#jun').fadeOut();
  $(this).fadeOut();
  $('#raribox1').fadeIn();
});

// $("#michiko").click(function(){
//   $("gold").fadeIn();
// });

$('#michiko').click(function(){
  $('#gold').fadeIn();
 });


  $("#raribox1").click(function(){
    $("#ball").animate({
      marginTop:'60px', 
      marginLeft:'350px' 
    }).animate({
      marginTop:'-5px',
      marginLeft:'480px'
    });
  });

  $("#raribox2").click(function(){
    $("#ball").animate({
      marginTop:'85px', 
      marginLeft:'20px' 
    }).animate({
      marginTop:'0px',
      marginLeft:'-45px'
    });
  });

  $("#raribox1").click(function(){
    $("#gold").animate({
      marginTop:'60px', 
      marginLeft:'350px' 
    }).animate({
      marginTop:'-5px',
      marginLeft:'480px'
    });
  });

  $("#raribox2").click(function(){
    $("#gold").animate({
      marginTop:'85px', 
      marginLeft:'20px' 
    }).animate({
      marginTop:'0px',
      marginLeft:'-45px'
    });
  });

  var num = 0;
  $("#raribox2").click(function(){
      $(this).data("click", ++num);
      var click = $(this).data("click");
      if(click >= 100){
        $('#michiko').fadeOut();
        $('#michiko100').fadeIn();
      }
      return false;
  });









});

function count(){
  var thisCount = $("#count").html();
      thisCount = Number(thisCount);
      thisCount = thisCount + 1;
  $("#count").html(thisCount);
}





