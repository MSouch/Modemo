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

    function activateItem(el){
      if(!el.classList.contains('animate-in')){
        el.classList.add('animate-in');
        el.classList.add('animate-pop');
        setTimeout(()=>el.classList.remove('animate-pop'),400);
      }
    }

    // Progressive reveal on scroll (kept lightweight)
    let lastScrollY = window.scrollY;
    function onScroll(){
      const dir = window.scrollY > lastScrollY ? 'down' : 'up';
      if(dir==='down'){
        // Reveal next hidden item when passing threshold
        const next = Array.from(timelineItems).find(i=>!i.classList.contains('animate-in'));
        if(next && window.scrollY > lastScrollY + 150){
          activateItem(next);
          lastScrollY = window.scrollY;
        }
      } else {
        lastScrollY = window.scrollY;
      }
    }
    window.addEventListener('scroll', onScroll, { passive:true });

    // Deep link handling: reveal up to anchor target immediately
    function revealToHash(){
      const hash = window.location.hash.replace('#','');
      if(!hash) return;
      const target = document.getElementById(hash);
      if(!target) return;
      const index = Array.from(timelineItems).indexOf(target);
      if(index === -1) return;
      for(let i=0;i<=index;i++){ activateItem(timelineItems[i]); }
    }
    revealToHash();

    // If user clicks a future product link after load (e.g. from same page footer)
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if(!target) return;
      const index = Array.from(timelineItems).indexOf(target);
      if(index > -1){
        for(let i=0;i<=index;i++){ activateItem(timelineItems[i]); }
        // Allow browser default jump after reveals (no preventDefault to keep basic anchor behavior)
        // But force scroll into view in case browser already calculated before classes applied
        setTimeout(()=> target.scrollIntoView({ block:'start' }), 0);
      }
    });

    // If hash changes (user manually changes fragment)
    window.addEventListener('hashchange', revealToHash);
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
    // Simulate successful auth: store a lightweight flag and redirect
    try {
      localStorage.setItem('modemoAuth','1');
      localStorage.setItem('modemoUser', email);
    } catch(err){ /* storage may fail in private mode; ignore */ }
    window.location.href = 'dashboard.html';
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

// Basic mock auth guard + logout handling for internal preview pages
document.addEventListener('DOMContentLoaded', () => {
  const protectedPages = ['dashboard.html','resources.html','profile.html'];
  const current = location.pathname.split('/').pop() || 'index.html';
  const isProtected = protectedPages.includes(current);
  const authed = (()=>{ try { return localStorage.getItem('modemoAuth') === '1'; } catch(e){ return false; } })();
  if(isProtected && !authed){
    // Redirect anonymous user back to marketing landing
    window.location.replace('index.html');
    return;
  }
  // Insert simple personalization if available
  if(authed){
    const email = (()=>{ try { return localStorage.getItem('modemoUser'); } catch(e){ return ''; } })();
    if(email){
      // Optionally show in a future user menu; for now set data attribute
      document.documentElement.setAttribute('data-user-email', email);
    }
  }
  // Wire logout links
  document.querySelectorAll('#logoutLink, #logoutLinkFooter').forEach(el=>{
    el.addEventListener('click', (e) => {
      e.preventDefault();
      try { localStorage.removeItem('modemoAuth'); localStorage.removeItem('modemoUser'); } catch(err){}
      window.location.href = 'index.html';
    });
  });
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
