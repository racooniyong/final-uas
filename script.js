let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)

});

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
});

var swiper = new Swiper(".coming-container", {
    slidesPerView: 3,
    autoplay: {
        delay: 4000,
    spaceBetween: 30,
    centeredSlides: false},
    pagination: {
    el: ".swipers-pagination",
    clickable: true,
    },
});