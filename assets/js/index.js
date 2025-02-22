// import Swiper from 'swiper';
// import 'swiper/css';

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        clickable: true,
    },
});

swiperEl.initialize();