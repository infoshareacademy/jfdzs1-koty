// // MENU
// //
$(document).ready(function(){
    $('.nav li').click(function(){
        $('.nav li').removeClass('active');
        $(this).addClass('active');
    });
});


// MENU SCROLL OFFSET
$(function() {
    $("#menu_product").on('click', function() {
        var position = $("#product").offset().top - 60;
        $("html, body").animate({ scrollTop: position }, 1000);
    });
});

$(function() {
    $("#menu_info").on('click', function() {
        var position = $("#info").offset().top - 60;
        $("html, body").animate({ scrollTop: position }, 1000);
    });
});

$(function() {
    $("#menu_about_us").on('click', function() {
        var position = $("#about_us").offset().top - 87;
        $("html, body").animate({ scrollTop: position }, 1000);
    });
});



//MENU SMALL - SCROLL
$(document).on("scroll", function() {

    if($(document).scrollTop()>100) {
        $("#scroll_navbar").removeClass("large_nav").addClass("small_nav");
        $("#logo").attr("src","images/logo.svg");

    } else {
        $("#scroll_navbar").removeClass("small_nav").addClass("large_nav");
        $("#logo").attr("src","images/logo_poziom.svg");
    }

});



// ABOUT US

$('.person').hover(function () {
    $(this).addClass('hover')
}, function () {
    $(this).removeClass('hover')
});


