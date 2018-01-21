


// zostawiam wszystko co zwiazane z path, domain, secure bo moze sie przyda, poki co zostawiam podstawowa forme ciasteczek z expiation date.
function setCookie(name, val, days, path, domain, secure) {
    if (navigator.cookieEnabled) { //czy ciasteczka są włączone
        const cookieName = encodeURIComponent(name);
        const cookieVal = encodeURIComponent(val);
        let cookieText = cookieName + "=" + cookieVal;

        if (typeof days === "number") {
            const data = new Date();
            data.setTime(data.getTime() + (days * 24*60*60*1000));
            cookieText += "; expires=" + data.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
}

document.querySelector('.cookie-button').addEventListener('click', function() {
    setCookie('myCookie', 'user', 30);
    document.getElementById('cookie-banner-container').style.display = 'none';

});

function checkCookie() {
    if (document.cookie) {
        document.getElementById('cookie-banner-container').style.display = 'none';
    }
}

checkCookie();
