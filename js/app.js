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



//GAME FOR E-MAIL

//onclick wywołujemy funkcję game()



var startGame = document.getElementById('submit-mail');
startGame.addEventListener('click', function(){
    game.init();
});

var game = {
        init: function () {
            this.createGameBoard();
            console.log("hej");

        },
        createGameBoard: function(){
            var wraper = document.getElementById('game-region');
            var gameBoard = document.createElement('div');
            wraper.appendChild(gameBoard);


        },
        createResultsModal: function () {
            var modalDiv= document.createElement("div");
            var modalTemplate;

            modalTemplate= '' +
                '<div class="modal" tabindex="-1" role="dialog">\n' +
                ' <div class="modal-dialog" role="document">\n' +
                '   <div class="modal-content">\n' +
                '     <div class="modal-header">\n' +
                '       <h5 class="modal-title">Modal title</h5>\n' +
                '       <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n' +
                '         <span aria-hidden="true">&times;</span>\n' +
                '       </button>\n' +
                '     </div>\n' +
                '     <div class="modal-body">\n' +
                '       <p>Modal body text goes here.</p>\n' +
                '     </div>\n' +
                '     <div class="modal-footer">\n' +
                '       <button type="button" class="btn btn-primary">Save changes</button>\n' +
                '       <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\n' +
                '     </div>\n' +
                '   </div>\n' +
                ' </div>\n' +
                '</div>';
            modalDiv.innerHTML=modalTemplate;
            document.body.appendChild(modalDiv);
        }
    }


