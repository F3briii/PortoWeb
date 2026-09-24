const toggleBtn = document.getElementById('toggleBtn');
const body = document.body;

toggleBtn.addEventListener('click', function () {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '☀️';
  } else {
    body.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '🌙';
  }
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

const links = navLinks.querySelectorAll('a');
links.forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('active');
  });
});