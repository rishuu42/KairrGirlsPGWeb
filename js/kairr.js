window.addEventListener('scroll', function () {
  const nav = document.getElementById('main-nav-bar');
  nav.classList.toggle('sticky', window.scrollY > 50);
});

document.getElementById('nav-toggle').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.toggle('active');
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  const dropdown = document.getElementById('nav-dropdown');
  dropdown.classList.toggle('active');
});