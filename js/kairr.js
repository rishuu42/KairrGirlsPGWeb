// Sticky Navbar
window.addEventListener('scroll', function () {
  const nav = document.getElementById('main-nav-bar');
  nav.classList.toggle('sticky', window.scrollY > 50);
});

// Hamburger Toggle
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-dropdown').classList.toggle('active');
});
