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

/* 스크롤하면 투명도 1로 변경, 위로 떠오르는 이벤트 */
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleElements = gsap.utils.toArray('.project-title, .project-info, .project-video, .works-title, .goals-txt img, .goals-txt ul, .design-box, .css, .js, .ps-con, .good, .bad, .review, .link img, .goals img, .works-title, .goals p, .overview li, .overview .link, .project-img, .prototype-img');

  titleElements.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 50 });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none reverse",
        markers: false
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const titleElements = gsap.utils.toArray('.link-btn li, .link-btn');

  titleElements.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 50 });

    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 100%",
        toggleActions: "play none none reverse",
        markers: false
      }
    });
  });
});