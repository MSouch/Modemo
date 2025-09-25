(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-nav]')?.forEach(a=>{
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
})();

document.addEventListener('DOMContentLoaded', () => {
  const BRAND_MATCH = /\bMODEMO\b(?!™)/;
  const BRAND_REPLACE = /\bMODEMO\b(?!™)/g;
  const replaceBrand = txt => txt.replace(BRAND_REPLACE, 'MODEMO™');

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node){
      if(!node.nodeValue || !BRAND_MATCH.test(node.nodeValue)) return NodeFilter.FILTER_SKIP;
      const p = node.parentElement;
      if(!p || /^(SCRIPT|STYLE|NOSCRIPT|TITLE)$/i.test(p.tagName) || p.closest('[data-no-tm]')) return NodeFilter.FILTER_SKIP;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(n => n.nodeValue = replaceBrand(n.nodeValue));
  if(document.title) document.title = replaceBrand(document.title);
  document.querySelectorAll('img[alt*="MODEMO"]').forEach(img => {
    if(!img.alt.includes('MODEMO™')) img.alt = replaceBrand(img.alt);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const supportsBackdropFilter = CSS.supports('backdrop-filter', 'blur(1px)') || 
                                  CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
  
  if (!supportsBackdropFilter) {
    const elementsWithBackdrop = document.querySelectorAll('[style*="backdrop-filter"]');
    
    elementsWithBackdrop.forEach(element => {
      const style = element.getAttribute('style');
      let newStyle = style;
      
      newStyle = newStyle.replace(/backdrop-filter:[^;]+;?/g, '');
      
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

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
});

document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.page-intro');
  if(!intro) return;
  const header = document.querySelector('.site-header');
  const next = intro.nextElementSibling;
  const BUFFER = 80;

  function applyEqualSpacing(){
    const gap = parseFloat(getComputedStyle(intro).getPropertyValue('--intro-gap')) || 40;
    if(header){
      const rect = header.getBoundingClientRect();
      const introRect = intro.getBoundingClientRect();
      const delta = rect.bottom + gap - introRect.top;
      intro.style.marginTop = Math.max(delta, 0) + 'px';
      document.documentElement.style.setProperty('--anchor-offset', (rect.height + BUFFER) + 'px');
    }
    if(next) next.style.marginTop = '0';
  }

  const hashId = location.hash.replace('#','');
  const targetEl = hashId ? document.getElementById(hashId) : null;
  const isTimelineDeepLink = !!(targetEl && targetEl.closest('.benefits-timeline'));

  if(isTimelineDeepLink){
    intro.style.marginTop = '2.5rem';
    setTimeout(()=>{
      if(header){
        const headerRect = header.getBoundingClientRect();
        document.documentElement.style.setProperty('--anchor-offset', (headerRect.height + BUFFER) + 'px');
        const tRect = targetEl.getBoundingClientRect();
        const delta = tRect.top - headerRect.bottom - BUFFER;
        if(Math.abs(delta) > 4){
          window.scrollBy({ top: delta, left:0, behavior:'instant' in window ? 'instant' : 'auto' });
        }
      }
    }, 20);
    function restoreAtTop(){
      if(window.scrollY < 60){
        intro.style.marginTop = '';
        applyEqualSpacing();
        window.removeEventListener('scroll', restoreAtTop, {passive:true});
      }
    }
    window.addEventListener('scroll', restoreAtTop, {passive:true});
  } else {
    requestAnimationFrame(applyEqualSpacing);
  }

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(()=>{
      if(!isTimelineDeepLink || window.scrollY < 60) applyEqualSpacing();
    }, 140);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const items = Array.from(document.querySelectorAll('.animate-on-scroll'));
  if (!items.length) return;

  let currentVisibleIndex = -1;
  let armed = false;
  let suppressScrollArm = false;

  function activateItem(el, index){
    if(!el.classList.contains('animate-in')){
      el.classList.add('animate-in', 'animate-pop');
      setTimeout(()=>el.classList.remove('animate-pop'),400);
    }
    if(typeof index === 'number' && index > currentVisibleIndex){
      currentVisibleIndex = index;
    }
  }
  const revealUpTo = index => {
    for(let i=0; i<=index && i<items.length; i++){
      activateItem(items[i], i);
    }
  };

  const ioHandler = entries => {
    if(!armed) return;
    const nextIndex = Math.min(currentVisibleIndex + 1, items.length - 1);
    entries.forEach(entry => {
      if(entry.isIntersecting && entry.target === items[nextIndex]){
        activateItem(items[nextIndex], nextIndex);
      }
    });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(ioHandler, { rootMargin:'0px 0px -60% 0px', threshold:0.1 });
    items.forEach(el => io.observe(el));
  } else {
    const checkReveal = () => {
      if(!armed) return;
      const nextIndex = Math.min(currentVisibleIndex + 1, items.length - 1);
      const el = items[nextIndex];
      if(el && el.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight) * 0.55){
        activateItem(el, nextIndex);
      }
    };
    window.addEventListener('scroll', checkReveal, { passive:true });
    window.addEventListener('resize', checkReveal);
    setTimeout(checkReveal, 0);
  }

  const armNow = () => {
    armed = true;
    suppressScrollArm = false;
    window.removeEventListener('scroll', onScrollArm, { passive:true });
  };
  const onScrollArm = () => { if(!suppressScrollArm) armNow(); };
  
  window.addEventListener('scroll', onScrollArm, { passive:true });
  ['wheel', 'touchstart', 'pointerdown'].forEach(type => 
    window.addEventListener(type, armNow, { passive:true, once:true })
  );
  const onKey = e => { 
    if(['ArrowDown','PageDown','Space','End','Spacebar'].includes(e.code||e.key)){ 
      armNow(); 
      document.removeEventListener('keydown', onKey);
    }
  };
  document.addEventListener('keydown', onKey, { once:true });

  const focusToHash = replaceState => {
    const hash = window.location.hash.replace('#','');
    if(!hash) return false;
    const target = document.getElementById(hash);
    const index = target ? items.indexOf(target) : -1;
    if(index === -1) return false;
    revealUpTo(index);
    suppressScrollArm = true;
    if(replaceState) try { history.replaceState(null, '', '#' + hash); } catch(_){}
    return true;
  };

  if(!focusToHash(true) && items[0]) revealUpTo(0);

  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const target = document.getElementById(a.getAttribute('href').slice(1));
    const index = target ? items.indexOf(target) : -1;
    if(index > -1){
      e.preventDefault();
      revealUpTo(index);
      suppressScrollArm = true;
      const header = document.querySelector('.site-header');
      const headerHeight = header ? header.getBoundingClientRect().height : 0;
      const targetScrollTop = window.scrollY + target.getBoundingClientRect().top - headerHeight - 80;
      window.scrollTo({ top: Math.max(targetScrollTop, 0), behavior:'smooth' });
      try { history.pushState(null, '', '#' + target.id); } catch(_){}
    }
  });

  window.addEventListener('hashchange', () => focusToHash());
});

document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.getElementById('accessSignInForm');
  if(!signInForm) return;
  signInForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = signInForm.querySelector('[name=email]')?.value.trim();
    const pw = signInForm.querySelector('[name=password]')?.value;
    if(!email || !pw) return;
    try {
      localStorage.setItem('modemoAuth','1');
      localStorage.setItem('modemoUser', email);
    } catch(err){}
    window.location.href = 'resources.html';
  });
  const forgot = document.getElementById('forgotLink');
  if(forgot){
    forgot.addEventListener('click', e => {
      e.preventDefault();
      const email = signInForm.querySelector('[name=email]')?.value.trim();
      if(!email) return alert('Enter your work email first.');
      alert('Password reset link (placeholder) would be sent to: '+ email);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const protectedPages = ['resources.html','profile.html'];
  const current = location.pathname.split('/').pop() || 'index.html';
  const isProtected = protectedPages.includes(current);
  const authed = (() => { try { return localStorage.getItem('modemoAuth') === '1'; } catch { return false; } })();
  if(isProtected && !authed) return window.location.replace('index.html');
  
  if(authed){
    const email = (() => { try { return localStorage.getItem('modemoUser'); } catch { return ''; } })();
    if(email) document.documentElement.setAttribute('data-user-email', email);
  }
  
  document.querySelectorAll('#logoutLink, #logoutLinkFooter').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      try { localStorage.removeItem('modemoAuth'); localStorage.removeItem('modemoUser'); } catch{}
      window.location.href = 'index.html';
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('accessInquiryForm');
  if(!form) return;
  form.addEventListener('submit', e => {
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
