$(".page-scroll").on("click", function (e) {
  //take href
  var tujuan = $(this).attr("href");
  //take the element
  var elemenTujuan = $(tujuan);

  //pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 30,
    },
    1000
  );
  e.preventDefault();
});

//about
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan ").addClass("pMuncul");
});
// paralax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //Jumbotron
  $(" .jumbotron img").css({
    transform: "translate(0px, " + wScroll / 1 + "%)",
  });
  //////////////////////
  $(".jumbotron h3").css({
    transform: "translate(0px, " + wScroll / 1.5 + "%)",
  });
  //////////////////////
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.5 + "%)",
  });
  //////////////////////

  //portfolio
  if (wScroll > $(".portfolio").offset().top - 200) {
    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      }, 300 * i);
    });
  }
});

//fa

///////////////////////
const ulLiA = document.querySelectorAll(".navbar-expand-md ul li a");
ulLiA[0].style.color = "rgb(255,255,255)";
ulLiA[1].style.color = "rgb(255,255,255)";
ulLiA[2].style.color = "rgb(255,255,255)";
ulLiA[3].style.color = "rgb(255,255,255)";
///////////////////////
const li1 = document.querySelectorAll(".navbar-expand-md ul li a");
li1[0].addEventListener("mouseenter", function () {
  li1[0].style.color = "rgb(255, 255, 255)";
  li1[0].style.background = "rgb(70, 3, 255)";
  // li1[0].style.boxShadow = '1px 1px 10px 1px rgb(60,160,250)';
  li1[0].style.transition = ".5s";

  // li1[0].style.opacity= '.5';
});
li1[0].addEventListener("mouseleave", function () {
  li1[0].style.color = "rgb(255, 255, 255)";
  li1[0].style.backgroundColor = "rgb(17,17,17)";
  // li1[0].style.boxShadow = '1px 1px 1px 1px #016269';
  li1[0].style.letterSpacing = "0.0em";
});
//////////////////////////////////////////////////
const li2 = document.querySelectorAll(".navbar-expand-md ul li a");
li2[1].addEventListener("mouseenter", function () {
  li2[1].style.color = "rgb(255, 255, 255)";
  li2[1].style.background = "rgb(70, 3, 255)";
  // li2[1].style.boxShadow = '1px 1px 10px 1px rgb(60,160,250)';
  li2[1].style.transition = ".5s";
});
li2[1].addEventListener("mouseleave", function () {
  li2[1].style.color = "rgb(255, 255, 255)";
  li2[1].style.backgroundColor = "rgb(17,17,17)";
  // li2[1].style.boxShadow = '1px 1px 1px 1px #016269';
  li2[1].style.letterSpacing = "0.0em";
});
////////////////////////////////////////////////
const li3 = document.querySelectorAll(".navbar-expand-md ul li a");
li3[2].addEventListener("mouseenter", function () {
  li3[2].style.color = "rgb(255, 255, 255)";
  li3[2].style.background = "rgb(70, 3, 255)";
  // li3[2].style.boxShadow = '1px 1px 10px 1px rgb(60,160,250)';
  li3[2].style.transition = ".5s";
});
li3[2].addEventListener("mouseleave", function () {
  li3[2].style.color = "rgb(255, 255, 255)";
  li3[2].style.backgroundColor = "rgb(17,17,17)";
  // li3[2].style.boxShadow = '1px 1px 1px 1px #016269';
  li3[2].style.letterSpacing = "0.0em";
});
////////////////////////////////////////////
const li4 = document.querySelectorAll(".navbar-expand-md ul li a");
li4[3].addEventListener("mouseenter", function () {
  li4[3].style.color = "rgb(255, 255, 255)";
  li4[3].style.background = "rgb(70, 3, 255)";
  // li4[3].style.boxShadow = '1px 1px 10px 1px rgb(60,160,250)';
  li4[3].style.transition = ".5s";
});
li4[3].addEventListener("mouseleave", function () {
  li4[3].style.color = "rgb(255, 255, 255)";
  li4[3].style.backgroundColor = "rgb(17, 17, 17)";
  // li4[3].style.boxShadow = '1px 1px 1px 1px #016269';
  li4[3].style.letterSpacing = "0.0em";
});
