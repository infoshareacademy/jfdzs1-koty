
var seeCookie = document.cookie;


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        console.log("ciasteczko wczytane");
    } else {
        user = prompt("Please enter your name:","");
        if (user != "" && user != null) {
            setCookie("username", "jan", 30);
        }
    }
}





// $(document).ready(function() {
//     if (window.localStorage.getItem("cookie-banner-container") != null) {
//         var cookiebanner = window.localStorage.getItem("cookie-banner-container");
//         if (cookiebanner == "true") {
//             $(".cookie-banner-container").hide();
//         }
//     }
//
//     $(".cookie-button").click(function() {
//         var cookiebanner = $(".cookie-banner-container").is(":visible")
//         $(".cookie-banner-container").fadeToggle(500, "swing");
//         window.localStorage.setItem("cookie-banner-container", cookiebanner)
//     });
// });
