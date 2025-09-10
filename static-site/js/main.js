// Basic JS for navigation active state and simple mailto assembly
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-nav]')?.forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();

// Navigation scroll behavior - transparent to solid
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  let lastScrollY = window.scrollY;
  
  function updateHeader() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  }
  
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // Initial call
});

// Benefits timeline scroll animations - sequential reveal
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.animate-on-scroll');
  if (timelineItems.length === 0) return;

  let currentVisibleIndex = 0; // Track which items should be visible

  function revealNextItem() {
    if (currentVisibleIndex < timelineItems.length - 1) {
      currentVisibleIndex++;
      const nextItem = timelineItems[currentVisibleIndex];
      
      // Add animate-in class when item should appear
      nextItem.classList.add('animate-in');
      
      // Add pop effect after a slight delay
      setTimeout(() => {
        nextItem.classList.add('animate-pop');
        
        // Remove pop effect after animation
        setTimeout(() => {
          nextItem.classList.remove('animate-pop');
        }, 400);
      }, 200);
    }
  }

  // Use scroll event to trigger sequential reveals
  let lastScrollY = window.scrollY;
  let ticking = false;

  function handleScroll() {
    const currentScrollY = window.scrollY;
    const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
    
    if (scrollDirection === 'down' && currentScrollY > lastScrollY + 150) {
      revealNextItem();
      lastScrollY = currentScrollY;
    }
    
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
});

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
