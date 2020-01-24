var wow = new WOW();
  wow.init();
  var mySwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.projects-pagination',
      bulletClass: 'projects-bullet',
      bulletActiveClass: 'projects-bullet-active',
      clickable: true
    }
  })