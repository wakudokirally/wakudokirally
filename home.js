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
      marginTop:'40px', 
      marginLeft:'280px' 
    }).animate({
      marginTop:'-15px',
      marginLeft:'350px'
    });
  });

  $("#raribox2").click(function(){
    $("#ball").animate({
      marginTop:'40px', 
      marginLeft:'10px' 
    }).animate({
      marginTop:'-10px',
      marginLeft:'-65px'
    });
  });










});

function count(){
  var thisCount = $("#count").html();
      thisCount = Number(thisCount);
      thisCount = thisCount + 1;
  $("#count").html(thisCount);
}






