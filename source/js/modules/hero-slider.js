const initHeroSlider = () => {
  const heroSlider = document.querySelector('[data-swiper="hero"]');
  const heroPagination = document.querySelector('[data-swiper="pagination"]');

  let mySwiper = new window.Swiper(heroSlider, {
    loop: true,
    pagination: {
      el: heroPagination,
      type: 'bullets',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,

    breakpoint: {
      1200: {
        swipeHandler: false,
        allowTouchMove: true,
      },
    },
  });
  return mySwiper;
};

export {initHeroSlider};
