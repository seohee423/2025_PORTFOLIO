/* 로딩 페이지 화면 */
$(document).ready(function () {
  setTimeout(function () {
    $('.loader').fadeOut('slow', function () {
      $('.content').fadeIn('slow');
      $('html').css('overflow', 'auto');
    });
  }, 1500);
});

/* header 햄버거 메뉴 */
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menu = document.getElementById('m-menu');
  const menuLinks = menu.querySelectorAll('a');

  hamburgerMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  });

  // 메뉴 내 링크 클릭 시 메뉴 닫기
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('active');
      hamburgerMenu.classList.remove('active');
    });
  });
});

/* 스크롤 스무더 */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

/* header opacity */
$(window).on('scroll', () => {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  if (scrollTop > windowHeight * 0.5) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});

/* footer gototop btn */
$(window).on('scroll', function () {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  if (scrollTop >= windowHeight) {
    $('footer a').css({ opacity: 1, pointerEvents: 'auto' });
  } else {
    $('footer a').css({ opacity: 0, pointerEvents: 'none' });
  }
});
