// Basic JS for navigation active state and simple mailto assembly
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-nav]')?.forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();

// Append trademark symbol to every visible occurrence of the brand name
document.addEventListener('DOMContentLoaded', () => {
  const BRAND_REGEX = /\bMODEMO\b(?!™)/g; // matches MODEMO not already followed by ™
  const replaceBrand = (text) => text.replace(BRAND_REGEX, 'MODEMO™');

  // Text node replacement (visible content only)
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      if(!node.nodeValue || !BRAND_REGEX.test(node.nodeValue)) return NodeFilter.FILTER_SKIP;
      // Skip if inside certain form inputs or script/style tags just in case
      const parent = node.parentElement;
      if(!parent) return NodeFilter.FILTER_SKIP;
      const tag = parent.tagName;
      if(['SCRIPT','STYLE','NOSCRIPT','TITLE'].includes(tag)) return NodeFilter.FILTER_SKIP;
      if(parent.closest('[data-no-tm]')) return NodeFilter.FILTER_SKIP; // opt-out hook
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const toUpdate = [];
  while(walker.nextNode()) { toUpdate.push(walker.currentNode); }
  toUpdate.forEach(node => { node.nodeValue = replaceBrand(node.nodeValue); });

  // Update document title
  if(document.title) {
    document.title = replaceBrand(document.title);
  }

  // Update alt attributes (accessibility)
  document.querySelectorAll('img[alt*="MODEMO"]').forEach(img => {
    if(!/MODEMO™/.test(img.alt)) img.alt = replaceBrand(img.alt);
  });
});

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
    // Opaque only when at the very top; translucent while scrolling
    if (currentScrollY <= 10) {
      header.classList.remove('scrolled');
    } else {
      header.classList.add('scrolled');
    }
    lastScrollY = currentScrollY;
  }
  
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // Initial call
});

// Dynamic equal spacing with deep-link friendly restore
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.page-intro');
  if(!intro) return;
  const header = document.querySelector('.site-header');
  const next = intro.nextElementSibling;
  const BUFFER = 80; // breathing room for anchor targets

  function applyEqualSpacing(){
    const gap = parseFloat(getComputedStyle(intro).getPropertyValue('--intro-gap')) || 40;
    if(header){
      const rect = header.getBoundingClientRect();
      const introRect = intro.getBoundingClientRect();
      const desiredTop = rect.bottom + gap;
      const delta = desiredTop - introRect.top;
      intro.style.marginTop = Math.max(delta, 0) + 'px';
      document.documentElement.style.setProperty('--anchor-offset', (rect.height + BUFFER) + 'px');
    }
    if(next){ next.style.marginTop = '0'; }
  }

  // Detect deep link to a timeline step
  const hashId = location.hash.replace('#','');
  const targetEl = hashId ? document.getElementById(hashId) : null;
  const isTimelineDeepLink = !!(targetEl && targetEl.closest('.benefits-timeline'));

  if(isTimelineDeepLink){
    // Hold a neutral static top spacing so the intro doesn't jump mid-load
    intro.style.marginTop = '2.5rem';
    setTimeout(()=>{
      if(header){
        const headerRect = header.getBoundingClientRect();
        document.documentElement.style.setProperty('--anchor-offset', (headerRect.height + BUFFER) + 'px');
        // Reposition the target below header + buffer
        const tRect = targetEl.getBoundingClientRect();
        const desiredViewportY = headerRect.bottom + BUFFER;
        const delta = tRect.top - desiredViewportY;
        if(Math.abs(delta) > 4){
          window.scrollBy({ top: delta, left:0, behavior:'instant' in window ? 'instant' : 'auto' });
        }
      }
    }, 20);
    // When user scrolls back near top, restore dynamic equal spacing
    function restoreAtTop(){
      if(window.scrollY < 60){
        intro.style.marginTop = '';
        applyEqualSpacing();
        window.removeEventListener('scroll', restoreAtTop, passiveScrollOpts);
      }
    }
    const passiveScrollOpts = { passive:true };
    window.addEventListener('scroll', restoreAtTop, passiveScrollOpts);
  } else {
    requestAnimationFrame(applyEqualSpacing);
  }

  // Debounced resize: only recompute if not in temporary deep-link mode or user is back at top
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
      if(!isTimelineDeepLink || window.scrollY < 60){
        applyEqualSpacing();
      }
    }, 140);
  });
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

  // In-page anchor clicks: reveal up to target, then smooth scroll with header offset compensation
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
      const header = document.querySelector('.site-header');
      const buffer = 80; // larger room
      const targetRect = target.getBoundingClientRect();
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      // Position target so its top sits below header + buffer
      const targetScrollTop = window.scrollY + targetRect.top - headerHeight - buffer;
      window.scrollTo({ top: Math.max(targetScrollTop, 0), behavior:'smooth' });
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
