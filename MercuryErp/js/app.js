$(document).ready(function () {
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		grabCursor: true,
		centeredSlides: true,
		loop: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 30,
			},
			700: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			// 992: {
			// 	slidesPerView: 3,
			// 	spaceBetween: 30,
			// }
		}
	});
});