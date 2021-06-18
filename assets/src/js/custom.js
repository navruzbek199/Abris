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



  $(document).ready(function () {
      $('#vmap').vectorMap(
        {
        map: 'asia_en',
        borderColor: '#818181',
        borderOpacity: 0.5,
        color: '#BDDCF0',
        hoverColor: '#228BCD',
        selectedColor: '#228BCD',
        backgroundColor: 'none',
        hoverOpacity: 0.7,
        selectedColor: '#666666',
        showTooltip: true,
        showTooltip: true,
        borderWidth: 1,
        enableZoom: false,
        hoverOpacity: null,
        values: sample_data,
        scaleColors: ['#C8EEFF', '#006491'],
        normalizeFunction: 'linear',
        selectedRegions: ['uzbekistan'],
      }
    );
  });



  
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });




  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });



  var swiper = new Swiper(".mySwiper3", {
    pagination: {
      el: ".swiper-pagination",
    },
  });





const labels = document.querySelectorAll(".accordion-item__label");
const tabs = document.querySelectorAll(".accordion-tab");
alert(tabs);
function toggleShow() {
	const target = this;
	const item = target.classList.contains("accordion-tab")
		? target
		: target.parentElement;
	const group = item.dataset.actabGroup;
	const id = item.dataset.actabId;

	tabs.forEach(function(tab) {
		if (tab.dataset.actabGroup === group) {
			if (tab.dataset.actabId === id) {
				tab.classList.add("accordion-active");
			} else {
				tab.classList.remove("accordion-active");
			}
    }
    
	});

	labels.forEach(function(label) {
		const tabItem = label.parentElement;

		if (tabItem.dataset.actabGroup === group) {
			if (tabItem.dataset.actabId === id) {
				tabItem.classList.add("accordion-active");
			} else {
				tabItem.classList.remove("accordion-active");
			}
		}
	});
}

labels.forEach(function(label) {
	label.addEventListener("click", toggleShow);
});

tabs.forEach(function(tab) {
	tab.addEventListener("click", toggleShow);
});




