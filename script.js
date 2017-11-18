

$(document).ready(function() {

    var buttonContact = $("#go-to-contact");
    var icons = $(".logo-icon");

    $("#go-to-contact").click(function () {
        $("#go-to-contact").addClass("animated shake").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            buttonContact.removeClass("animated shake");
        });
    });
    $(".logo-icon").hover(function () {
        $(".logo-icon").addClass("animated rubberBand").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            icons.removeClass("animated rubberBand");
        });
    });
});

$('#rocketEffect').bind('inview', function(event, visible) {
    if (visible) {
        $(this).stop().animate({ opacity: 1 });
    } else {
        $(this).stop().animate({ opacity: 0 });
    }
});


$(document).ready(function() {

    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top-80
            }, 1000);
        }
    });

});

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var top = $(window).scrollTop();
//         var find_class_small = $.contains('#nav');
//         if(top > 100 && find_class_small == false) {
//             $('#nav').addClass('small');
//         }
//         else {
//             $('#nav').removeClass('small');
//         }
//
//
//     });
// });


if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}