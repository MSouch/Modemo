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
