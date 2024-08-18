const swiper = new Swiper(".swiper-container", {
  slidesPerView: 3, // Her seferinde kaç slide gösterileceğini ayarlar
  spaceBetween: 10, // Slide'lar arasındaki boşluk
  centeredSlides: true, // Aktif slide'ı ortalar
  autoplay: {
    delay: 2500, // Otomatik geçiş süresi
    disableOnInteraction: false, // Kullanıcı etkileşimine göre otomatik geçişi durdurmaz
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
