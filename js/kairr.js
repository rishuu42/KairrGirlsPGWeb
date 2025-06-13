// Sticky Navbar
window.addEventListener('scroll', function () {
  const nav = document.getElementById('main-nav-bar');
  nav.classList.toggle('sticky', window.scrollY > 50);
});

 const menuToggle = document.getElementById('menu-toggle');
    const navDropdown = document.getElementById('nav-dropdown');

    menuToggle.addEventListener('click', () => {
      navDropdown.classList.toggle('active');
    });