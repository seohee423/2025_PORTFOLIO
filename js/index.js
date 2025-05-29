/* header 햄버거 메뉴 */
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const menu = document.getElementById('m-menu');

  hamburgerMenu.addEventListener('click', function () {
    menu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
  });
});