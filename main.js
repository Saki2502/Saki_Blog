$(document).ready(function() {
    $("#header, #footer").addClass('wow animate__heartBeat')
    $("#person-img > img").addClass('wow animate__tada')
    $("#container > div.content-section").addClass('wow animate__backInLeft')
    $("#container > div.content-section1").addClass('wow animate__backInRight')

    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 0,
        mobile: true,
        live: true
    })

    wow.init();

    $("#go-to-top").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) $("#go-to-top").show("slow");
        else $("#go-to-top").hide("slow");
    });
    $("#go-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1500);
    });
});