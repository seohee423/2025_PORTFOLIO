/* 스크롤 스무더 */
const lenis = new Lenis({
  duration: 1.2,       // 기본 스크롤 속도 (초)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
  smoothTouch: true   // 모바일에서 부드럽게 하고 싶다면 true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

// header opacity
$(window).on('scroll', () => {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  if (scrollTop > windowHeight * 0.5) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});

// footer gototop btn
$(window).on('scroll', function () {
  const scrollTop = $(window).scrollTop();
  const windowHeight = $(window).height();

  if (scrollTop >= windowHeight) {
    $('footer a').css({ opacity: 1, pointerEvents: 'auto' });
  } else {
    $('footer a').css({ opacity: 0, pointerEvents: 'none' });
  }
});
