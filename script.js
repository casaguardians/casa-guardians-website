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
const contactForm = document.querySelector(".contact-form");

contactForm?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const status = contactForm.querySelector(".form-status");
  const data = new FormData(contactForm);

  data.append("_subject", "Private enquiry — Dorothea");
  data.append("_captcha", "false");
  data.append("_template", "table");

  status.textContent = "Sending your enquiry...";

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/info@dorotheaconcierge.com",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error("Sending failed");
    }

    contactForm.reset();
    status.textContent =
      "Thank you. Your enquiry has been sent successfully.";
  } catch (error) {
    status.textContent =
      "Something went wrong. Please contact us by WhatsApp.";
  }
});
