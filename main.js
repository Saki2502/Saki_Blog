$(document).ready(function () {
  $("#go-to-top").hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) $("#go-to-top").show("slow");
    else $("#go-to-top").hide("slow");
  });
  $("#go-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
  });

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
