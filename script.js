const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
const CONTACT_EMAIL = "info@dorotheaconcierge.com";

const contactForm = document.querySelector(".contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);

  const subject = encodeURIComponent("Private enquiry — Dorothea");

  const body = encodeURIComponent(
    `Name: ${data.get("name")}\n` +
    `Contact: ${data.get("contact")}\n` +
    `Property location: ${data.get("location")}\n` +
    `Service: ${data.get("service")}\n\n` +
    `How can I help?\n${data.get("message")}`
  );

  const gmailUrl =
  `https://mail.google.com/mail/?view=cm&fs=1` +
  `&to=${CONTACT_EMAIL}` +
  `&su=${subject}` +
  `&body=${body}`;

window.open(gmailUrl, "_blank");
});
