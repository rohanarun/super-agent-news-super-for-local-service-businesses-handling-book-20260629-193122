// GSAP animations with guard
(function(){
  function ready(fn){ if(document.readyState!=='loading'){ fn(); } else { document.addEventListener('DOMContentLoaded', fn); } }
  ready(function(){
    if(!window.gsap) return;
    try {
      gsap.from('.hero h1', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' });
      gsap.from('.hero .lede', { y: 16, opacity: 0, duration: 0.6, delay: 0.1 });
      gsap.from('.hero-actions .btn', { y: 12, opacity: 0, duration: 0.4, stagger: 0.08, delay: 0.2 });
    } catch(e){}
  });
})();