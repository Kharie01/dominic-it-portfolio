const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.querySelector('.menu-icon').textContent = open ? '×' : '+';
});
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuToggle?.setAttribute('aria-expanded', 'false');
  const icon = menuToggle?.querySelector('.menu-icon'); if (icon) icon.textContent = '+';
}));
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Thanks — this form is ready to connect to your preferred email service.';
  form.reset();
});
