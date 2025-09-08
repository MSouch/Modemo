// Basic JS for navigation active state and simple mailto assembly
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-nav]')?.forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();

function submitDemo(formId){
  const f = document.getElementById(formId);
  if(!f) return;
  const email = encodeURIComponent(f.querySelector('[name=email]').value);
  const company = encodeURIComponent(f.querySelector('[name=company]').value);
  const body = `Hello, I would like to schedule a demo of MODEMO.%0D%0A%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0A%0D%0AThank you!`;
  window.location.href = `mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Demo Request&body=${body}`;
}

// Access inquiry form (pricing page)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('accessInquiryForm');
  if(!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = encodeURIComponent(form.querySelector('[name=name]')?.value || '');
    const company = encodeURIComponent(form.querySelector('[name=company]')?.value || '');
    const email = encodeURIComponent(form.querySelector('[name=email]')?.value || '');
    const messageRaw = form.querySelector('[name=message]')?.value || '';
    const message = encodeURIComponent(messageRaw.replace(/\n/g,'\r\n'));
    const body = `Hello, I would like to inquire about MODEMO access.%0D%0A%0D%0AName: ${name}%0D%0ACompany: ${company}%0D%0AEmail: ${email}%0D%0A%0D%0AContext / Needs:%0D%0A${message}%0D%0A%0D%0AThank you!`;
    window.location.href = `mailto:atovar@ap-vantage.com,jcrager@ap-vantage.com?subject=MODEMO Access Inquiry&body=${body}`;
  });
});
