$.mask.definitions['9'] = '';
$.mask.definitions['n'] = '[0-9]';
$(function(){
  $("#numberId").mask("+998 nn nnn nn nn");
  // $("#phone-input2").mask("+998 nn nnn nn nn");
  // $("#phone-input3").mask("XXXX XXXX XXnn nnnn");
  // $("#phone-input4").mask("nn/nn");
  // $("#phone-input5").mask("nnnn");
});
// 
// // When the user scrolls the page, execute myFunction

// (function () {
//     // Get the navbar
//     var myNavbar = document.getElementById("my_navbar");
//     var sticky = myNavbar.offsetTop;

//     // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
//     function myFunction() {
//         if (window.pageYOffset >= sticky + 100) {
//             myNavbar.classList.add("sticky");
//         } else {
//             myNavbar.classList.remove("sticky");
//         }
//     }

//     window.onload = function () {
//         myFunction();
//     };
//     window.onscroll = function () {
//         myFunction();
//     };
// })();

// var swiper = new Swiper('.swiper-container', {
//     // slidesPerView: 3,
//     // spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     breakpoints: {
//         1024: {
//             slidesPerView: 5,
//             spaceBetween: 10,
//         },
//         576: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         414: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         },
//         375: {
//             slidesPerView: 2,
//             spaceBetween: 0,
//         }
//     },
//     autoplay: {
//         delay: 4000,
//     },
// });

// $(document).ready(function () {
//     var vid = $('.my_video').RTOP_VideoPlayer({
//         showTimer: true,
//         closeModalOnFinish: true,
//         allowReplay: true,
//         showTimer: true,
//         keyboardControls: true,
//         showControlsOnHover: true,
//         controlsHoverSensitivity: 500,
//         showCloseBtn: true,
//         allowReplay: true,
//         showFullScreen: true,
//     });
// });

  //
// Configuration
//

// ms to wait after dragging before auto-rotating

  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  var swiper = new Swiper(".mySwiper4", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".mySwiper3", {
    pagination: {
      el: ".swiper-pagination",
    },
  });



  $('#nav-icon1').on('click', function(){
    $(this).toggleClass('open');
    $('.hamburger-menu').toggleClass("active");
  });
  
  $('.hamburger-menu li').on('click', function(){
    $('.hamburger-menu').removeClass('active')
    $('#nav-icon1').removeClass('open')
  });



$(document).ready(function () {
  $.mask.definitions['9'] = '';
  $.mask.definitions['n'] = '[0-9]';
  $(function () {
      $("#numberId").mask("+998 nn nnn nn nn");
      $("#numberId1").mask("+998 nn nnn nn nn");
      // $("#phone-input2").mask("+998 nn nnn nn nn");
      // $("#phone-input3").mask("XXXX XXXX XXnn nnnn");
      // $("#phone-input4").mask("nn/nn");
      // $("#phone-input5").mask("nnnn");
  });
});

// $('#closeBtn').click(function() {
//   $('#modal').modal('hide');
//   });
  


