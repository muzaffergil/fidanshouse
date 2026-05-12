// ─── Cart ───
let cartCount = 0;
const cartBadge = document.getElementById('cartBadge');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');

function addToCart(btn) {
  cartCount++;
  cartBadge.textContent = cartCount;

  const name = btn.closest('.product-body').querySelector('.product-name').textContent;
  toastMsg.textContent = `"${name}" sepete eklendi!`;

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);

  btn.classList.add('added');
  btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Eklendi`;
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> Sepete Ekle`;
  }, 2000);
}

// ─── Search ───
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');

searchToggle.addEventListener('click', () => {
  searchOverlay.classList.toggle('open');
  if (searchOverlay.classList.contains('open')) {
    setTimeout(() => searchInput.focus(), 100);
  }
});

searchOverlay.addEventListener('click', (e) => {
  if (e.target === searchOverlay) searchOverlay.classList.remove('open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchOverlay.classList.remove('open');
    mobileNav.classList.remove('open');
  }
});

// ─── Mobile Menu ───
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const spans = menuToggle.querySelectorAll('span');
  if (mobileNav.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// ─── Scroll Reveal ───
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, (entry.target.dataset.delay || 0));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach((el, i) => {
  el.dataset.delay = (i % 4) * 80;
  observer.observe(el);
});

// ─── Smooth scroll for CTA ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
