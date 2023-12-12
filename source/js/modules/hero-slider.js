const initHeroSlider = () => {
  const heroSlider = document.querySelector('[data-swiper="hero"]');
  const heroPagination = heroSlider.querySelector('[data-swiper="pagination"]');

  let mySwiper = new window.Swiper(heroSlider, {
    loop: true,
    paganation: {
      el: heroPagination,
      // type: 'bullets',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 0,
  });
  return mySwiper;
};

export {initHeroSlider};
