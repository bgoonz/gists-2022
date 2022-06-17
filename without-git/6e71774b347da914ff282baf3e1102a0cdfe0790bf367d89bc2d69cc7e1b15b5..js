$('.popular').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.recent-posts').hide();
    $('.popular-posts').show();
});

$('.recent').click(function(){
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.popular-posts').hide();
    $('.recent-posts').show();
});