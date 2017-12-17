
$(document).ready(function() {
    if (window.localStorage.getItem("cookie-banner-container") != null) {
        var cookiebanner = window.localStorage.getItem("cookie-banner-container");
        if (cookiebanner == "true") {
            $(".cookie-banner-container").hide();
        }
    }

    $("button").click(function() {
        var cookiebanner = $(".cookie-banner-container").is(":visible")
        $(".cookie-banner-container").fadeToggle(500, "swing");
        window.localStorage.setItem("cookie-banner-container", cookiebanner)
    });
});
