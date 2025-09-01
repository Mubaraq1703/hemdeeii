// Basic JS: nav toggle, form submission feedback, year set
document.addEventListener('DOMContentLoaded', function () {
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      primaryNav.style.display = expanded ? '' : 'block';
      primaryNav.setAttribute('aria-hidden', String(expanded));
    });
  }

  // Lightweight form feedback (works with Formspree or any POST endpoint that redirects or returns 200)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      status.textContent = 'Sending…';
      // If you want to handle via AJAX uncomment below and configure CORS on your endpoint.
      // e.preventDefault();
      // const data = new FormData(form);
      // fetch(form.action, { method: 'POST', body: data, headers: { accept: 'application/json' } })
      //   .then(r => {
      //     if (r.ok) {
      //       status.textContent = 'Thanks! We will be in touch.';
      //       form.reset();
      //     } else {
      //       status.textContent = 'There was a problem submitting the form.';
      //     }
      //   })
      //   .catch(() => status.textContent = 'Network error.');
    });
  }
});