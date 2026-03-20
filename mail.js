/**
 * mail.js — Self-coded Gmail mailer via Google Apps Script
 *
 * HOW IT WORKS:
 *   The form POSTs JSON to a Google Apps Script web app you deploy yourself.
 *   The script runs on YOUR Google account and sends email via YOUR Gmail.
 *   No third-party email service — 100% your own code.
 *
 * ─── SETUP (one-time, ~5 minutes) ────────────────────────────────────────────
 *
 * STEP 1 — Create the Apps Script
 *   1. Go to https://script.google.com
 *   2. Click "New project"
 *   3. Delete the default code and paste the code below:
 *
 * ─── PASTE THIS INTO YOUR GOOGLE APPS SCRIPT ─────────────────────────────────
 *
 *   function doPost(e) {
 *     var data    = JSON.parse(e.postData.contents);
 *     var subject = "New Quote — Sky Cleaner Services";
 *     var body    =
 *       "Name:          " + data.from_name    + "\n" +
 *       "Email:         " + data.from_email   + "\n" +
 *       "Phone:         " + data.phone        + "\n" +
 *       "Building Type: " + data.building_type + "\n\n" +
 *       "Details:\n"      + data.message;
 *
 *     GmailApp.sendEmail(
 *       "skycleaners.dj@gmail.com",
 *       subject,
 *       body,
 *       { replyTo: data.from_email }
 *     );
 *
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ status: "ok" }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 *
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * STEP 2 — Deploy the script as a web app
 *   1. Click "Deploy" → "New deployment"
 *   2. Click the gear icon next to "Type" and choose "Web app"
 *   3. Set "Execute as" → Me (your Google account)
 *   4. Set "Who has access" → Anyone
 *   5. Click "Deploy" and grant the Gmail permission when prompted
 *   6. Copy the Web App URL (looks like:
 *      https://script.google.com/macros/s/AKfycb.../exec)
 *
 * STEP 3 — Paste the URL below
 */

const APPS_SCRIPT_URL = "YOUR_APPS_SCRIPT_WEB_APP_URL";  // ← paste your URL here

// ─────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const quoteForm = document.getElementById('quoteForm');
  const toast     = document.getElementById('formToast');
  const submitBtn = document.getElementById('submit-quote-btn');
  const btnText   = submitBtn ? submitBtn.querySelector('.btn-text') : null;

  if (!quoteForm) return;

  quoteForm.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!quoteForm.checkValidity()) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    const originalText = btnText ? btnText.textContent : 'Send';
    if (btnText) btnText.textContent = 'Sending…';
    if (submitBtn) submitBtn.disabled = true;

    const payload = {
      from_name:     (document.getElementById('firstName').value + ' ' +
                      document.getElementById('lastName').value).trim(),
      from_email:    document.getElementById('email').value,
      phone:         document.getElementById('phone').value || 'Not provided',
      building_type: document.getElementById('buildingType').value || 'Not specified',
      message:       document.getElementById('message').value || 'No details provided',
    };

    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode:   'no-cors',   // required for Google Apps Script cross-origin calls
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    .then(() => {
      // no-cors means the response is opaque — we trust it was sent
      showToast('Message sent! We will contact you soon.', 'success');
      quoteForm.reset();
    })
    .catch(() => {
      showToast('Could not send message. Please email us at skycleaners.dj@gmail.com', 'error');
    })
    .finally(() => {
      if (btnText) btnText.textContent = originalText;
      if (submitBtn) submitBtn.disabled = false;
    });
  });

  function showToast(msg, type) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.background = type === 'success' ? '#6DBE45' : '#e74c3c';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
  }
});
