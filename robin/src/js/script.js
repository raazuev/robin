var preScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (preScrollPos > currentScrollPos)  {
        document.getElementById('menu').style.top = '0';
    } else {
        document.getElementById('menu').style.top = '-100px';
    }
    preScrollPos = currentScrollPos;
}
