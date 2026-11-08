// Movimiento con significado: las piezas suben como sobre un escalón, el aro se abre sobre la foto,
// las líneas se cosen y las cifras cuentan. Nada de esto corre con prefers-reduced-motion.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!quieto) {
  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('con-movimiento');

  const lenis = new Lenis({ duration: 1.15, anchors: { offset: -80 } });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // Lenis se detiene mientras hay un modal abierto.
  new MutationObserver(() => {
    const modal = document.querySelector('dialog[open]') || !document.querySelector('[data-pedido]').hidden;
    modal ? lenis.stop() : lenis.start();
  }).observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open', 'hidden'] });

  // Portada: el titular entra palabra por palabra y el aro se abre sobre la foto.
  const t = gsap.timeline({ defaults: { ease: 'expo.out' } });
  t.from('[data-palabra]', { yPercent: 110, duration: 1.2, stagger: 0.12 })
    .from('[data-portada-foto]', { clipPath: 'circle(0% at 50% 50%)', duration: 1.6 }, 0.2)
    .from('[data-portada-aro]', { scale: 0.6, opacity: 0, duration: 1.4 }, 0.5)
    .from('[data-portada-sube]', { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, 0.6);

  gsap.to('[data-portada-foto] img', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.portada', start: 'top top', end: 'bottom top', scrub: true } });

  gsap.utils.toArray('[data-revelar]').forEach((el) => {
    gsap.from(el, { y: 48, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  gsap.utils.toArray('.hilo').forEach((el) => {
    gsap.from(el, { scaleX: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%' } });
  });

  gsap.utils.toArray('[data-aro-foto]').forEach((el) => {
    gsap.from(el, { clipPath: 'circle(0% at 50% 50%)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 80%' } });
  });

  gsap.utils.toArray('[data-contar]').forEach((el) => {
    const fin = Number(el.dataset.contar);
    const o = { v: 0 };
    gsap.to(o, { v: fin, duration: 1.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 90%' }, onUpdate: () => { el.textContent = Math.round(o.v).toLocaleString('es-CO'); } });
  });
}
