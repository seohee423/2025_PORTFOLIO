/* 로딩 페이지 화면 */
$(document).ready(function () {
  setTimeout(function () {
    $('.loader').fadeOut('slow', function () {
      $('.content').fadeIn('slow');
      $('html').css('overflow', 'auto');
    });
  }, 1500);
});

/* 마우스 커서 이미지 */
const cursorImage = document.getElementById('cursorImage');
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
const speed = 0.1;

document.addEventListener('mousemove', (e) => {
  targetX = e.pageX;
  targetY = e.pageY;
  cursorImage.style.display = 'block';
});

document.addEventListener('mouseout', () => {
  cursorImage.style.display = 'none';
});

function animate() {
  currentX += (targetX - currentX) * speed;
  currentY += (targetY - currentY) * speed;
  cursorImage.style.left = currentX + 'px';
  cursorImage.style.top = currentY + 'px';
  requestAnimationFrame(animate);
}

animate();

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

/* Lenis + ScrollTrigger 연결 */
document.addEventListener('DOMContentLoaded', () => {
  let lenisInstance = null;
  let rafId = null;

  function initLenis() {
    if (lenisInstance) return;

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof Lenis !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      lenisInstance = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: true,
      });

      lenisInstance.on('scroll', ScrollTrigger.update);

      gsap.ticker.add(tickerUpdate);

      function raf(time) {
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);

      console.log('Lenis 활성화');
    } else {
      console.warn("Lenis/GSAP ScrollTrigger가 로드되지 않음");
    }
  }

  function destroyLenis() {
    if (!lenisInstance) return;

    lenisInstance.destroy();
    lenisInstance = null;

    gsap.ticker.remove(tickerUpdate);
    cancelAnimationFrame(rafId);
    ScrollTrigger.kill();
    console.log('Lenis 비활성화됨');
  }

  function tickerUpdate(time) {
    if (lenisInstance) {
      lenisInstance.raf(time * 1000);
    }
  }

  function handleResize() {
    if (window.innerWidth >= 1200) {
      initLenis();
    } else {
      destroyLenis();
    }
  }

  handleResize();

  // 창 크기 변경 시 체크
  window.addEventListener('resize', () => {
    clearTimeout(window.__lenisResizeTimer__);
    window.__lenisResizeTimer__ = setTimeout(handleResize, 150);
  });
});

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