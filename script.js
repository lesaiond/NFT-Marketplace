document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');

  burgerIcon.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
      mobileMenu.classList.remove('open');
      overlay.classList.remove('open');
    }
  });
});
