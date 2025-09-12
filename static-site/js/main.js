// Basic JS for navigation active state and simple mailto assembly
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-nav]')?.forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();

// Browser compatibility check for backdrop-filter
document.addEventListener('DOMContentLoaded', () => {
  // Check if backdrop-filter is supported
  const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)') || 
                                  CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
  
  if (!supportsBackdropFilter) {
    // Find all elements with backdrop-filter in their style attribute
    const elementsWithBackdrop = document.querySelectorAll('[style*="backdrop-filter"]');
    
    elementsWithBackdrop.forEach(element => {
      const style = element.getAttribute('style');
      let newStyle = style;
      
      // Remove backdrop-filter and enhance background opacity
      newStyle = newStyle.replace(/backdrop-filter:[^;]+;?/g, '');
      
      // Enhance background colors for better visibility
      if (style.includes('rgba(255,255,255,')) {
        newStyle = newStyle.replace(/background:rgba\(255,255,255,[\d.]+\)/g, 'background:rgba(255,255,255,0.7)');
      } else if (style.includes('rgba(37,99,235,')) {
        newStyle = newStyle.replace(/background:rgba\(37,99,235,[\d.]+\)/g, 'background:rgba(37,99,235,0.3)');
      } else if (style.includes('rgba(5,150,105,')) {
        newStyle = newStyle.replace(/background:rgba\(5,150,105,[\d.]+\)/g, 'background:rgba(5,150,105,0.3)');
      } else if (style.includes('rgba(234,88,12,')) {
        newStyle = newStyle.replace(/background:rgba\(234,88,12,[\d.]+\)/g, 'background:rgba(234,88,12,0.3)');
      }
      
      element.setAttribute('style', newStyle);
    });
  }
});

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


// Basic sign-in form (landing page) - placeholder logic
document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.getElementById('accessSignInForm');
  if(!signInForm) return;
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('[name=email]')?.value.trim();
    const pw = signInForm.querySelector('[name=password]')?.value;
    if(!email || !pw){ return; }
    // Placeholder: in production, replace with API call
    signInForm.querySelector('button[type=submit]').disabled = true;
    signInForm.querySelector('button[type=submit]').textContent = 'Signing In...';
    setTimeout(()=>{
      // Very naive success simulation; real implementation would validate server response
      alert('Access request received for '+ email + '\n(Replace this with real authentication flow)');
      signInForm.querySelector('button[type=submit]').disabled = false;
      signInForm.querySelector('button[type=submit]').textContent = 'Sign In';
    }, 800);
  });
  const forgot = document.getElementById('forgotLink');
  if(forgot){
    forgot.addEventListener('click', (e) => {
      e.preventDefault();
      const email = signInForm.querySelector('[name=email]')?.value.trim();
      if(!email){
        alert('Enter your work email first.');
        return;
      }
      alert('Password reset link (placeholder) would be sent to: '+ email);
    });
  }
});

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
