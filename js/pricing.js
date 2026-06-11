/* Arkive Labs — pricing.js
   - LKR / USD market toggle with smooth crossfade of all .price-val cells
   - Sticky section nav scroll-spy
   - Keyboard accessibility (left/right on the toggle)
*/

(() => {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initMarketToggle();
    initScrollSpy();
  });


  /* ═══════════════════════════════════════════════
     MARKET TOGGLE  — LKR / USD
     Every price node carries data-sl and data-intl.
     We swap the leading textNode and leave any trailing
     unit/sub-span (.unit, .ru) untouched.
     ═══════════════════════════════════════════════ */
  function initMarketToggle() {
    const btnSL   = document.getElementById('btnSL');
    const btnIntl = document.getElementById('btnIntl');
    const pill    = document.getElementById('marketPill');
    const caption = document.getElementById('marketCaption');
    if (!btnSL || !btnIntl || !pill) return;

    let market = 'sl';

    const layoutPill = () => {
      const active = market === 'sl' ? btnSL : btnIntl;
      const w = active.offsetWidth;
      const x = active === btnSL ? 0 : btnSL.offsetWidth;
      pill.style.width = w + 'px';
      pill.style.transform = `translateX(${x}px)`;
    };

    const apply = (m) => {
      if (m === market) return;
      market = m;

      btnSL.classList.toggle('is-active', m === 'sl');
      btnIntl.classList.toggle('is-active', m === 'intl');
      btnSL.setAttribute('aria-pressed', String(m === 'sl'));
      btnIntl.setAttribute('aria-pressed', String(m === 'intl'));

      if (caption) {
        caption.textContent = m === 'sl'
          ? 'Viewing prices in Sri Lankan Rupees (LKR)'
          : 'Viewing prices in US Dollars (USD)';
      }

      layoutPill();

      const cells = document.querySelectorAll('.price-val');
      cells.forEach(el => el.classList.add('is-fading'));

      setTimeout(() => {
        cells.forEach(el => {
          const v = el.getAttribute('data-' + m);
          if (!v) return;

          /* Preserve trailing unit/sub spans if any. */
          const unit = el.querySelector('.unit, .ru');
          el.textContent = v;
          if (unit) {
            el.appendChild(document.createTextNode(' '));
            el.appendChild(unit);
          }
          el.classList.remove('is-fading');
        });
      }, 180);
    };

    btnSL.addEventListener('click',   () => apply('sl'));
    btnIntl.addEventListener('click', () => apply('intl'));

    /* Left/Right arrow keys cycle the toggle when one is focused */
    [btnSL, btnIntl].forEach(b => {
      b.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')  { apply('sl');  btnSL.focus(); }
        if (e.key === 'ArrowRight') { apply('intl'); btnIntl.focus(); }
      });
    });

    /* Initial pill width */
    requestAnimationFrame(layoutPill);
    window.addEventListener('resize', () => { clearTimeout(layoutPill._t); layoutPill._t = setTimeout(layoutPill, 120); });
  }


  /* ═══════════════════════════════════════════════
     SECTION NAV SCROLL SPY
     Highlights the current pricing section in the
     sticky strip as the reader descends.
     ═══════════════════════════════════════════════ */
  function initScrollSpy() {
    const links = document.querySelectorAll('.snav-link');
    const sections = document.querySelectorAll('.pricing-section[id]');
    if (!links.length || !sections.length) return;

    const linkFor = (id) => document.querySelector(`.snav-link[href="#${id}"]`);

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const link = linkFor(entry.target.id);
        if (!link) return;
        links.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => io.observe(s));
  }
})();
