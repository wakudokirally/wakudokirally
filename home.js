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










});

function count(){
  var thisCount = $("#count").html();
      thisCount = Number(thisCount);
      thisCount = thisCount + 1;
  $("#count").html(thisCount);
}






