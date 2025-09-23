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

  const items = Array.from(timelineItems);
  let currentVisibleIndex = -1; // last revealed index
  let armed = false; // auto-reveal only after explicit user interaction
  let suppressScrollArm = false; // ignore programmatic scrolls (e.g., smooth anchor jump)

  function activateItem(el, index){
    if(!el.classList.contains('animate-in')){
      el.classList.add('animate-in');
      el.classList.add('animate-pop');
      setTimeout(()=>el.classList.remove('animate-pop'),400);
    }
    if(typeof index === 'number' && index > currentVisibleIndex){
      currentVisibleIndex = index;
    }
  }
  function revealUpTo(index){
    for(let i=0; i<=index && i<items.length; i++){
      activateItem(items[i], i);
    }
  }

  // Sequential IntersectionObserver: only reveal next item when it enters view
  let io = null;
  const ioHandler = (entries) => {
    if(!armed) return;
    const nextIndex = Math.min(currentVisibleIndex + 1, items.length - 1);
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.target === items[nextIndex]){
        activateItem(items[nextIndex], nextIndex);
      }
    });
  };
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(ioHandler, { root:null, rootMargin:'0px 0px -60% 0px', threshold:0.1 });
    items.forEach(el => io.observe(el));
  } else {
    // Fallback for older browsers: simple scroll handler
    function checkReveal(){
      if(!armed) return;
      const nextIndex = Math.min(currentVisibleIndex + 1, items.length - 1);
      const el = items[nextIndex];
      if(!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      if(rect.top < viewportH * 0.55){
        activateItem(el, nextIndex);
      }
    }
    window.addEventListener('scroll', checkReveal, { passive:true });
    window.addEventListener('resize', checkReveal);
    setTimeout(checkReveal, 0);
  }

  // Arm reveals after clear user intent (wheel/touch/key/pointer). Avoid arming from programmatic scroll.
  function armNow(){
    armed = true;
    suppressScrollArm = false;
    window.removeEventListener('scroll', onScrollArm, { passive:true });
  }
  function onScrollArm(){ if(!suppressScrollArm) armNow(); }
  function setupUserArm(){
    window.addEventListener('scroll', onScrollArm, { passive:true });
    window.addEventListener('wheel', armNow, { passive:true, once:true });
    window.addEventListener('touchstart', armNow, { passive:true, once:true });
    window.addEventListener('pointerdown', armNow, { passive:true, once:true });
    const onKey = (e)=>{ const k=e.code||e.key; if(['ArrowDown','PageDown','Space','End'].includes(k) || k==='Spacebar'){ armNow(); document.removeEventListener('keydown', onKey); } };
    document.addEventListener('keydown', onKey, { once:true });
  }
  setupUserArm();

  // Deep link handling: reveal up to the target on load
  function focusToHash(replaceState=false){
    const hash = window.location.hash.replace('#','');
    if(!hash) return false;
    const target = document.getElementById(hash);
    if(!target) return false;
    const index = items.indexOf(target);
    if(index === -1) return false;
    revealUpTo(index);
    // Prevent arming from the programmatic scroll to the target; wait for user interaction
    suppressScrollArm = true;
    if(replaceState){ try { history.replaceState(null, '', '#' + hash); } catch(_){} }
    return true;
  }

  const hadHash = focusToHash(true);
  if(!hadHash){
    // No deep link: show only the first step for context; wait for user scroll to reveal more
    if(items[0]) revealUpTo(0);
  }

  // In-page anchor clicks: reveal up to target, then smooth scroll
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(!target) return;
    const index = items.indexOf(target);
    if(index > -1){
      e.preventDefault();
      revealUpTo(index);
      // Don't arm from the smooth scroll; wait for real user interaction
      suppressScrollArm = true;
      target.scrollIntoView({ behavior:'smooth', block:'start' });
      try { history.pushState(null, '', '#' + id); } catch(_){}
    }
  });

  // Manual hash changes
  window.addEventListener('hashchange', () => { focusToHash(); });
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
    window.location.href = 'resources.html';
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
  const protectedPages = ['resources.html','profile.html'];
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
