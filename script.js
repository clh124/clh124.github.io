document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const navLinks = [...document.querySelectorAll('.nav-links a')];
document.querySelectorAll('main section[id]').forEach((section) => {
  new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${section.id}`));
  }, { rootMargin: '-20% 0px -70%' }).observe(section);
});
