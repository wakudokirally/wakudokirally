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

  var num0 = 0;
  $("#raribox2").click(function(){
      $(this).data("click", ++num0);
      var click = $(this).data("click");
      if(click == 100){
        $('#michiko').fadeOut();
        $('#michiko100').fadeIn();
        $('#ude').fadeIn();
        $('#ude').fadeOut();
      }
      return false;
  });

  var num1 = 0;
  $("#raribox2").click(function(){
      $(this).data("click", ++num1);
      var click = $(this).data("click");
      if(click == 30){
        $('#buzz1').fadeIn();
      }
      return false;
  });

  var num2 = 0;
  $("#raribox2").click(function(){
    $(this).data("click", ++num2);
    var click = $(this).data("click");
    if(click == 31){
      $('#buzz1').fadeOut();
    }
    return false;
});

var num3 = 0;
$("#raribox2").click(function(){
    $(this).data("click", ++num3);
    var click = $(this).data("click");
    if(click == 50){
      $('#buzz2').fadeIn();
    }
    return false;
});

var num4 = 0;
$("#raribox2").click(function(){
  $(this).data("click", ++num4);
  var click = $(this).data("click");
  if(click == 52){
    $('#buzz2').fadeOut();
  }
  return false;
});

var num5 = 0;
$("#raribox2").click(function(){
    $(this).data("click", ++num5);
    var click = $(this).data("click");
    if(click == 80){
      $('#buzz3').fadeIn();
    }
    return false;
});

var num6 = 0;
$("#raribox2").click(function(){
  $(this).data("click", ++num6);
  var click = $(this).data("click");
  if(click == 85){
    $('#buzz3').fadeOut();
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





