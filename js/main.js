

$('.bg').animate({width:'100%'},1500);
$('.bg').animate({height:'100vh'},1500,function(){
    $('h1').fadeIn(2000,function(){
        $('.col-md-4').slideDown(2000)
    })
});


