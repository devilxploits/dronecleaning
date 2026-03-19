/**
 * mail.js - External email provider integration (SMTP.js)
 * Included on pages containing the `#quoteForm` or contact forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  const quoteForm = document.getElementById('quoteForm');
  const toast = document.getElementById('formToast');
  const submitBtn = document.getElementById('submit-quote-btn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;

  if (quoteForm) {
    quoteForm.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!quoteForm.checkValidity()) {
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      const originalText = btnText ? btnText.textContent : 'Submit';
      if (btnText) btnText.textContent = 'Sending...';
      if (submitBtn) submitBtn.disabled = true;

      // Extract form values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const buildingType = document.getElementById('buildingType').value;
      const message = document.getElementById('message').value;

      const emailBody = `
        <h3>New Quote Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Building Type:</strong> ${buildingType}</p>
        <p><strong>Details:</strong><br/>${message}</p>
      `;

      // NOTE: Remove the timeout below and uncomment the SMTP.js section when you have your credentials
      /*
      Email.send({
        SecureToken : "YOUR_SMTPJS_SECURE_TOKEN",
        To : 'skycleaners.dj@gmail.com',
        From : email,
        Subject : "New Quote Request - Sky Cleaner Services",
        Body : emailBody
      }).then(
        message => {
          if(message === "OK") {
            showToast('Message sent successfully! We will contact you soon.', 'success');
            quoteForm.reset();
          } else {
            showToast('Failed to send message: ' + message, 'error');
          }
        }
      ).finally(() => {
        if (btnText) btnText.textContent = originalText;
        if (submitBtn) submitBtn.disabled = false;
      });
      */

      // Temporary local simulation until SMTP.js is configured:
      setTimeout(() => {
        showToast('Message sent successfully! We will contact you soon.', 'success');
        quoteForm.reset();
        if (btnText) btnText.textContent = originalText;
        if (submitBtn) submitBtn.disabled = false;
      }, 1500);

    });
  }

  function showToast(msg, type) {
    if (!toast) return;
    toast.textContent = msg;
    toast.style.background = type === 'success' ? '#6DBE45' : '#e74c3c';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});
