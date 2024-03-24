
list = document.querySelectorAll('li')
aTags = document.querySelectorAll('a')
a = document.querySelector('a')


for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        var current = document.querySelector(".active");
        current.classList.remove('active')
        this.classList.add('active')
    });
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});









var swiper = new Swiper(".mySwip", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });