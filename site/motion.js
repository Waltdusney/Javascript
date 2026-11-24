(() => {
  const root = document.documentElement;
  if (!root.classList.contains('motion-ready') || !window.Motion) {
    root.classList.remove('motion-ready');
    return;
  }
  const { animate, inView, stagger, scroll } = window.Motion;
  const ease = [0.22, 1, 0.36, 1];

  // Split the headline into words; aria-label keeps it readable as one phrase.
  const h1 = document.querySelector('[data-split]');
  const text = h1.textContent.trim();
  h1.setAttribute('aria-label', text);
  h1.innerHTML = text
    .split(/\s+/)
    .map((w) => `<span aria-hidden="true" class="word inline-block">${w}</span>`)
    .join(' ');

  // Hidden states are now in place, so lift the CSS gate.
  root.classList.add('motion-armed');

  animate('.word', { opacity: [0, 1], y: [24, 0], filter: ['blur(6px)', 'blur(0px)'] },
    { duration: 0.8, delay: stagger(0.07, { startDelay: 0.15 }), ease });
  animate('[data-hero-fade]', { opacity: [0, 1], y: [16, 0] },
    { duration: 0.7, delay: stagger(0.1, { startDelay: 0.7 }), ease });

  scroll(animate('[data-parallax]', { y: [0, 160] }, { ease: 'linear' }), {
    target: document.getElementById('hero'),
    offset: ['start start', 'end start'],
  });

  const once = (selector, run) =>
    document.querySelectorAll(selector).forEach((el) => {
      const stop = inView(el, () => { run(el); stop(); }, { margin: '0px 0px -100px 0px' });
    });

  once('[data-reveal]', (el) =>
    animate(el, { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, ease }));
  once('[data-reveal-stagger]', (el) =>
    animate(Array.from(el.children), { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, delay: stagger(0.08), ease }));
})();
