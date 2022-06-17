// Parallax
if('ontouchstart' in window == false){
  $('body').mousemove(function(e){
    var moveX = (e.pageX * -1 / 25);
    var moveY = (e.pageY * -1 / 25);
    $('.outer').css('background-position', moveX + 'px ' + moveY + 'px');
  });
}

// Set background Image
$('ul#images li').click(function(){
  $('ul#images li').each(function(){
      $(this).removeClass('active');
  });  
    $(this).addClass('active');
    var source = $(this).children('img').attr('src');
    $('.outer').css('background', 'url('+source+')');
});