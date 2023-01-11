document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item-list");
  document.getElementById("slider").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item-list");
  document.getElementById("slider").prepend(lists[lists.length - 1]);
};

/* Demo purposes only */
$("hover").mouseleave(function () {
  $(this).removeClass("hover");
});



// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 3,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
