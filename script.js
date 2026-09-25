const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
const form = document.querySelector('#quote-form');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity() || form.dataset.sending === 'true') return;
  if (form.elements._honey.value) return;
  const button = form.querySelector('button[type=submit]');
  const status = document.querySelector('#form-status');
  const originalLabel = button.innerHTML;
  form.dataset.sending = 'true';
  button.disabled = true;
  button.textContent = 'Sending…';
  status.className = 'form-status';
  status.textContent = 'Sending your request…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const payload = Object.fromEntries(new FormData(form).entries());
    delete payload._next;
    const endpoint = form.action.replace('https://formsubmit.co/', 'https://formsubmit.co/ajax/');
    const response = await fetch(endpoint, {
      method: 'POST', headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify(payload), signal: controller.signal
    });
    const result = await response.json();
    if (!response.ok || !(result.success === true || result.success === 'true')) throw new Error('Submission failed');
    status.className = 'form-status success';
    status.textContent = 'Thank you. Your request has been submitted. If you do not hear from us, please contact us on WhatsApp.';
    form.reset();
  } catch {
    status.className = 'form-status error';
    status.textContent = 'We could not confirm your request. Your details are still here. Please try again, or contact us by email or WhatsApp.';
  } finally {
    clearTimeout(timeout); delete form.dataset.sending;
    button.disabled = false; button.innerHTML = originalLabel;
  }
});
