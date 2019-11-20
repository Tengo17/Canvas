$('.add').click(function () {
    if ($(this).prev().val() < 5) {
      $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
});
$(document).ready(function(){
$('.sp').first().addClass('active');
$('.sp').hide();    
$('.active').show();

    $('#plus').click(function(){

    $('.active').removeClass('active').addClass('oldActive');    
                   if ( $('.oldActive').is(':last-child')) {
        $('.sp').last().addClass('active');
        }
        else{
        $('.oldActive').next().addClass('active');
        }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();

    
    });
    
       $('#minus').click(function(){
    $('.active').removeClass('active').addClass('oldActive');    
           if ( $('.oldActive').is(':first-child')) {
        $('.sp').first().addClass('active');
        }
           else{
    $('.oldActive').prev().addClass('active');
           }
    $('.oldActive').removeClass('oldActive');
    $('.sp').fadeOut();
    $('.active').fadeIn();
    });
    
    
    
    
});