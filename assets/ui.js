/* =============================================================
   icons — exact Lucide paths used by the live site
   ============================================================= */
const I = {
  menu: '<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>',
  x: '<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>',
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle>',
  bookOpen: '<path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>',
  circleCheckBig: '<path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path>',
  circleCheck: '<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>',
  chevronRight: '<path d="m9 18 6-6-6-6"></path>',
  chevronLeft: '<path d="m15 18-6-6 6-6"></path>',
  quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>',
  arrowRight: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
  clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>',
  fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path>',
  graduationCap: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>',
  mapPin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
  twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>',
  instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>',
  youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path>',
  message: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>',
  play: '<path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>',
  apple: '<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"></path>'
};

const svg = (name, cls = '', extra = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls}" ${extra}>${I[name]}</svg>`;

const svgFill = (name, cls) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke="currentColor" fill="currentColor" stroke-width="0" class="${cls}">${I[name]}</svg>`;

/* =============================================================
   site chrome — header + mobile nav + footer + floating widgets
   ============================================================= */
const NAV = [
  ['Home', 'index.html', 'home'],
  ['About Us', 'about.html', 'about'],
  ['Programs', 'programs.html', 'programs'],
  ['Services', 'services.html', 'services'],
  ['Results', 'results.html', 'results'],
  ['FAQ', 'faq.html', 'faq'],
  ['Careers', 'careers.html', 'careers'],
  ['Contact', 'enquiry.html', 'enquiry']
];

function header(active) {
  const links = NAV.map(([label, href, key]) =>
    `<a class="nav__link${key === active ? ' is-active' : ''}" href="${href}">${label}</a>`).join('');
  const mob = NAV.map(([label, href, key]) =>
    `<a class="${key === active ? 'is-active' : ''}" href="${href}">${label}</a>`).join('');
  return `
<header class="site-header" id="siteHeader">
  <div class="container">
    <div style="display:flex;justify-content:space-between;align-items:center;width:100%">
      <a class="brand" href="index.html">Ass Minds</a>
      <nav class="nav">${links}<a class="btn btn--primary btn--sm nav__cta" href="enquiry.html">Enquire Now</a></nav>
      <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">${svg('menu', 'h-6 w-6')}</button>
    </div>
    <nav class="mobile-nav" id="mobileNav">${mob}<a class="btn btn--primary" href="enquiry.html">Enquire Now</a></nav>
  </div>
</header>`;
}

function footer() {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <img src="assets/img/fav.png" alt="Ass Minds Logo" class="footer-logo">
        <p class="footer-about">Your Gateway to JEE &amp; NEET Success. We are committed to providing quality education and helping students achieve their academic goals.</p>
        <div class="socials">
          <a href="#" aria-label="Facebook">${svg('facebook')}</a>
          <a href="#" aria-label="Twitter">${svg('twitter')}</a>
          <a href="https://www.instagram.com/ace.minds/" aria-label="Instagram">${svg('instagram')}</a>
          <a href="https://www.youtube.com/@AceMindsIITMedical" aria-label="YouTube">${svg('youtube')}</a>
        </div>
        <div>
          <p class="footer-app-title">Download our app</p>
          <div class="app-links">
            <a href="https://play.google.com/store/apps/details?id=co.martin.ysbnn&amp;hl=en_IN" target="_blank" rel="noopener noreferrer">${svgFill('play', '')}<span>Google Play</span></a>
            <a href="https://apps.apple.com/in/app/myinstitute/id1472483563" target="_blank" rel="noopener noreferrer">${svgFill('apple', '')}<span>App Store</span></a>
          </div>
        </div>
      </div>
      <div class="footer-col">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="programs.html">Study Programs</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="results.html">Results</a></li>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="careers.html">Careers</a></li>
          <li><a href="enquiry.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Programs</h3>
        <ul>
          <li><a href="programs.html">Engineering Batch</a></li>
          <li><a href="programs.html">Medical Batch</a></li>
          <li><a href="programs.html">Pinnacle Batch</a></li>
          <li><a href="services.html">Foundation Courses</a></li>
          <li><a href="services.html">Crash Courses</a></li>
          <li><a href="services.html">Test Series</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact Us</h3>
        <ul class="footer-contact">
          <li>${svg('mapPin')}<span>A-12, Ground Floor , Mahavir Apartment , Jadavji Dadaji Road, Mumbai - 400007, India</span></li>
          <li class="center-item">${svg('phone')}<a href="tel:+918356024484">+91-83560 24484</a></li>
          <li class="center-item">${svg('mail')}<a href="mailto:info@aceminds.in">info@aceminds.in</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Ass Minds Pvt Tutorials | All rights reserved.</p>
      <p class="credit">Designed by Yuvraj from <a href="https://devpixels.in" target="_blank" rel="noopener noreferrer">Devpixels</a></p>
      <div class="legal"><a href="#">Privacy Policy</a><a href="#">Terms of Service</a></div>
    </div>
  </div>
</footer>`;
}

function floats() {
  return `
<button class="fab-chat" id="chatToggle" aria-label="Open chat">${svg('message')}</button>
<div class="chat-panel" id="chatPanel">
  <button class="chat-panel__close" id="chatClose" aria-label="Close chat">&times;</button>
  <div class="chat-panel__head"><strong>Ass Minds</strong><span>Enquiries · Mumbai</span></div>
  <div class="chat-panel__body">
    Hi! Have a question about our JEE / NEET courses? Message us on WhatsApp and our team will reply right away.
    <a href="https://wa.me/918356024484?text=Enquiry%20regarding%20classes." target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
  </div>
</div>
<a href="https://wa.me/918356024484?text=Enquiry%20regarding%20classes." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="whatsapp">
  <span class="ring"></span>
  <img src="data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`)}" alt="WhatsApp">
</a>`;
}

/* =============================================================
   behaviours
   ============================================================= */
function bindGlobalHandlers() {
  if (window.__uiBound) return;
  window.__uiBound = true;
  document.addEventListener('click', (ev) => {
    const toggle = ev.target.closest('#menuToggle');
    if (toggle) {
      const mob = document.getElementById('mobileNav');
      if (!mob) return;
      const open = mob.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.innerHTML = open ? svg('x', 'h-6 w-6') : svg('menu', 'h-6 w-6');
      return;
    }
    if (ev.target.closest('#chatToggle')) {
      const panel = document.getElementById('chatPanel');
      if (panel) panel.classList.toggle('open');
      return;
    }
    if (ev.target.closest('#chatClose')) {
      const panel = document.getElementById('chatPanel');
      if (panel) panel.classList.remove('open');
    }
  });
}

function initSite() {
  bindGlobalHandlers();

  // sticky header state
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  bindGlobalHandlers();

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal, .reveal-up, .reveal-scale, .reveal-left, .reveal-right, .stagger');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  // animated counters
  document.querySelectorAll('[data-count]').forEach((el) => {
    const end = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    let started = false;
    const run = () => {
      const t0 = performance.now();
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(end * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = end + suffix;
      };
      requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const io2 = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) { started = true; run(); io2.disconnect(); }
        });
      }, { threshold: 0.4 });
      io2.observe(el);
    } else { el.textContent = end + suffix; }
  });


  // testimonial carousel (auto-advance 5s, arrows, dots)
  (function () {
    var slides = document.querySelectorAll('.tc-slide');
    if (!slides.length) return;
    var dots = document.querySelectorAll('[data-dot]');
    var idx = 0, timer = null;
    function show(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) {
        s.style.display = i === idx ? 'block' : 'none';
        if (i === idx) { s.style.animation = 'none'; void s.offsetWidth; s.style.animation = 'fadeSlide .5s ease both'; }
      });
      dots.forEach(function (d, i) { d.classList.toggle('active', i === idx); });
    }
    function start() { stop(); timer = setInterval(function () { show(idx + 1); }, 5000); }
    function stop() { if (timer) clearInterval(timer); }
    var prev = document.getElementById('tcPrev'), next = document.getElementById('tcNext');
    if (prev) prev.addEventListener('click', function () { show(idx - 1); start(); });
    if (next) next.addEventListener('click', function () { show(idx + 1); start(); });
    dots.forEach(function (d) { d.addEventListener('click', function () { show(parseInt(d.dataset.dot, 10)); start(); }); });
    var wrap = document.getElementById('testimonialCarousel');
    if (wrap) { wrap.addEventListener('mouseenter', stop); wrap.addEventListener('mouseleave', start); }
    start();
  })();

  // programs slider (arrows, dots, swipe)
  (function () {
    var slides = document.querySelectorAll('.program-slide');
    if (!slides.length) return;
    var dots = document.querySelectorAll('[data-pdot]');
    var i = 0;
    function show(n) {
      i = (n + slides.length) % slides.length;
      slides.forEach(function (s, k) { s.classList.toggle('active', k === i); });
      dots.forEach(function (d, k) { d.classList.toggle('active', k === i); });
    }
    var p = document.getElementById('progPrev'), nx = document.getElementById('progNext');
    if (p) p.addEventListener('click', function () { show(i - 1); });
    if (nx) nx.addEventListener('click', function () { show(i + 1); });
    dots.forEach(function (d, k) { d.addEventListener('click', function () { show(k); }); });
    var x0 = null, wrap = document.querySelector('.programs');
    if (wrap) {
      wrap.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      wrap.addEventListener('touchend', function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        if (dx < -75) show(i + 1);
        if (dx > 75) show(i - 1);
        x0 = null;
      });
    }
  })();

  // enquiry form (client-side only, no backend on a static site)
  const form = document.getElementById('enquiryForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = document.getElementById('formOk');
      if (ok) ok.classList.add('show');
      form.reset();
    });
  }
}
document.addEventListener('DOMContentLoaded', function () {
  // multi-page build fallback; the single-file router calls initSite() itself
  if (!window.__routerEnabled) initSite();
});
