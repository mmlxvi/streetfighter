$(document).ready(function () {
  $('.ryu').mouseenter(function () {
    $('.still').hide();
    $('.ready').show();
  });

  $('.ryu').mouseleave(function() {
      $('.still').show();
    $('.ready').hide();
  });



  $('.ryu').mousedown(function() {
    console.log('mousedown');
    // play hadouken sound

    $('.ready').hide();
    $('.throwing').show();
    
    // show hadouken and animate it to the right of the screen
    $('.hadouken').show();
    $('.hadouken').animate({left: "+=700px"}, 450, function () {
      $(this).stop();
      $(this).hide();
      $(this).css('left', "420px")
    })
  });
    $('.ryu').mouseup(function() {
    console.log('mouseup');
    // ryu goes back to his ready position
    $('.throwing').hide();
    $('.ready').show();
  });
$(document).keydown(function(e) {
  if (e.which == 88) {

    $('.cool').show();
    $('.still').hide();
    $('.throwing').hide();
    $('.ready').hide();
    
    
  }
});

$(document).keyup(function(e) {
  if (e.which == 88) {
    $('.cool').hide();
    $('.ready').show();
 

  }
});


  

})