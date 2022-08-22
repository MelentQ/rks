import {Swiper, Navigation} from "swiper";
Swiper.use([Navigation]);

function slider() {
  const containers = document.querySelectorAll('.js-init-slider');
  containers.forEach(container => {
    const instance = new Swiper(container.querySelector('.swiper'), {
      speed: 500,
      spaceBetween: 4,
      slidesPerView: 4,
      navigation: {
        nextEl: container.querySelector('.navigation__button_next'),
        prevEl: container.querySelector('.navigation__button_prev')
      },
      on: {
        init: (swiper) => {
          swiper.el.classList.remove('loading');
        }
      }
    });
  });
};

export default slider;