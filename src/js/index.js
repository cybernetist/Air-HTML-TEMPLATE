$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', '#ffffffc9');
    } else{
        $('.fixed-top').css('background', '#fff');
    }
});