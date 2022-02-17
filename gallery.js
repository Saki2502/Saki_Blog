$(document).ready(function() {
    $("#content-gallery > div.content-section").addClass('wow animate__backInRight')

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    })

    wow.init();

    //Automatic Slideshow
    var myIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var x = document.getElementsByClassName("slides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1;
        }
        x[myIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000);
    }
});