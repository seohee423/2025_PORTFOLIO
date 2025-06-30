/* 스크롤하면 투명도 1로 변경, 위로 떠오르는 이벤트 */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleElements = gsap.utils.toArray('.viewmore-btn, .works-menu, .works-contents, .skillsNtools>ul, .contact-txt h4, .contact-txt h3, .contact-txt p, .contact-menu ul li');

  titleElements.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 50 });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
        markers: false
      }
    });
  });
});

/* skills&tools */
$(function () {
  $('.skill1').hover(
    function () {
      if ($(window).width() >= 1200) {
        $('.html').stop().slideDown(300, 'swing');
      }
    },
    function () {
      if ($(window).width() >= 1200) {
        $('.html').stop().slideUp(300, 'swing');
      }
    }
  );

  $('.skill2').hover(
    function () {
      if ($(window).width() >= 1200) {
        $('.js').stop().slideDown(300, 'swing');
      }
    },
    function () {
      if ($(window).width() >= 1200) {
        $('.js').stop().slideUp(300, 'swing');
      }
    }
  );

  $('.skill3').hover(
    function () {
      if ($(window).width() >= 1200) {
        $('.ui').stop().slideDown(300, 'swing');
      }
    },
    function () {
      if ($(window).width() >= 1200) {
        $('.ui').stop().slideUp(300, 'swing');
      }
    }
  );

  $('.skill4').hover(
    function () {
      if ($(window).width() >= 1200) {
        $('.git').stop().slideDown(300, 'swing');
      }
    },
    function () {
      if ($(window).width() >= 1200) {
        $('.git').stop().slideUp(300, 'swing');
      }
    }
  );

  $('.skill5').hover(
    function () {
      if ($(window).width() >= 1200) {
        $('.tools').stop().slideDown(300, 'swing');
      }
    },
    function () {
      if ($(window).width() >= 1200) {
        $('.tools').stop().slideUp(300, 'swing');
      }
    }
  );

});

/* whoami photoDump */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // whoami-txt 고정
  ScrollTrigger.create({
    trigger: ".whoami",
    start: "top top",
    endTrigger: ".works",
    end: "top 100%", 
    pin: ".whoami-txt",
    pinSpacing: true,
    scrub: true
  });

  // photo-dump-wrapper 애니메이션
  gsap.to(".photo-dump-wrapper", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".whoami",
      start: "top top",
      endTrigger: ".works",
      end: "top 80%",
      scrub: true
    }
  });
});

/* contents title 색상 효과 */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".fill").forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      toggleClass: { targets: el, className: "active" },
      once: true
    });
  });
});

/* whoami txt 색상 효과 */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".fill-txt").forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 50%",
      toggleClass: { targets: el, className: "active" },
      once: true 
    });
  });
});


/* works menu mobile slide */
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector('.works-menu-wrapper');
  const menu = document.querySelector('.works-menu');
  if (!wrapper || !menu) return;

  let isDragging = false;
  let startX;
  let scrollLeft;

  const SCROLL_SPEED = 1.5;

  wrapper.addEventListener('touchstart', e => {
    isDragging = true;
    startX = e.touches[0].pageX - wrapper.offsetLeft;
    scrollLeft = menu.scrollLeft;
    wrapper.classList.add('dragging');
  }, { passive: true });

  wrapper.addEventListener('touchend', () => {
    isDragging = false;
    wrapper.classList.remove('dragging');
  });

  wrapper.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - wrapper.offsetLeft;
    const walk = (x - startX) * SCROLL_SPEED;
    menu.scrollLeft = scrollLeft - walk;
  }, { passive: true });
});
