if (typeof gsap === "undefined") {
  console.error("GSAP não carregado");
} else {
  gsap.registerPlugin(ScrollTrigger);
}

/* =========================================================
   0. SETUP — cursor custom, noise, progress bar
========================================================= */

// evita erro de redeclaração global
window.isTouch = window.isTouch ?? window.matchMedia('(pointer: coarse)').matches;

const isTouch = window.isTouch;

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

if (!isTouch && dot && ring) {
  window.addEventListener('mousemove', (e) => {
    gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power3.out' });
  });
} else if (dot && ring) {
  dot.style.display = 'none';
  ring.style.display = 'none';
}

/* progress bar tied to whole page scroll */
gsap.to('.progress-bar', {
  scaleX: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  }
});

/* ===========================================================
   1. HERO — staggered line reveal + parallax background word
=========================================================== */

gsap.set('.hero-title .line span', { yPercent: 110 });
gsap.set('.hero-kicker, .hero-sub, .hero-actions, .hero-meta', { autoAlpha: 0, y: 24 });

const heroTl = gsap.timeline({ delay: 0.2 });

heroTl
  .to('.hero-title .line span', {
    yPercent: 0,
    duration: 1.1,
    ease: 'power4.out',
    stagger: 0.12
  })
  .to('.hero-kicker', { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.7')
  .to('.hero-sub', { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.5')
  .to('.hero-actions', { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
  .to('.hero-meta', { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3');

/* parallax hero bg */
gsap.to('.hero-bg-text', {
  yPercent: 30,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true
  }
});

/* scroll cue (CORRIGIDO - removido ::after inválido no GSAP) */
gsap.to('.scroll-cue .bar', {
  '--p': 1
});

/* animated counters */
document.querySelectorAll('.hero-meta .stat-num').forEach((el) => {
  const target = +el.dataset.count;

  ScrollTrigger.create({
    trigger: el,
    start: 'top 90%',
    once: true,
    onEnter: () => {
      gsap.to(el, {
        innerText: target,
        duration: 1.6,
        ease: 'power2.out',
        snap: { innerText: 1 },
        onUpdate: function () {
          el.innerText = Math.floor(el.innerText);
        }
      });
    }
  });
});

/* ===========================================================
   2. MARQUEE
=========================================================== */

const track = document.querySelector('.marquee-track');

if (track) {
  track.innerHTML += track.innerHTML;

  let marqueeTween = gsap.to(track, {
    xPercent: -50,
    ease: 'none',
    duration: 22,
    repeat: -1
  });

  ScrollTrigger.create({
    trigger: document.body,
    start: 0,
    end: 'max',
    onUpdate: (self) => {
      const velocity = self.getVelocity();
      const speedFactor = gsap.utils.clamp(0.4, 4, 1 + Math.abs(velocity) / 2000);
      marqueeTween.timeScale(speedFactor);
    }
  });
}

/* ===========================================================
   3. METHOD SECTION
=========================================================== */

const typewriterEl = document.getElementById('typewriter-text');

if (typewriterEl) {
  const fullText =
    "Sua ideia está pronta para ganhar vida. Fale com a gente pelos canais abaixo e agende sua sessão, estamos prontos para te receber.";

  ScrollTrigger.create({
    trigger: '.typewriter-block',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      let i = 0;

      function typeChar() {
        if (i <= fullText.length) {
          typewriterEl.textContent = fullText.slice(0, i);
          i++;
          setTimeout(typeChar, 16);
        }
      }

      typeChar();
    }
  });
}

/* cards */
gsap.set('.method-card', { autoAlpha: 0, y: 50 });

ScrollTrigger.batch('.method-card', {
  start: 'top 85%',
  onEnter: (batch) =>
    gsap.to(batch, {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15
    })
});

/* ===========================================================
   4. TITLES WORD REVEAL
=========================================================== */

document.querySelectorAll('.section-title').forEach((title) => {
  const text = title.innerHTML;

  const words = text
    .split(/(<br>)/)
    .map((part) => {
      if (part === '<br>') return '<br>';

      return part
        .split(' ')
        .filter(Boolean)
        .map(
          (w) =>
            `<span class="word-rv"><span>${w}&nbsp;</span></span>`
        )
        .join('');
    })
    .join('');

  title.innerHTML = words;

  gsap.set(title.querySelectorAll('.word-rv span'), { yPercent: 110 });

  ScrollTrigger.create({
    trigger: title,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(title.querySelectorAll('.word-rv span'), {
        yPercent: 0,
        duration: 0.9,
        stagger: 0.05
      });
    }
  });
});

/* ===========================================================
   5. PROGRAMS HORIZONTAL SCROLL
=========================================================== */

const programsTrack = document.querySelector('.programs-track');

if (programsTrack) {
  // Distância real que o track precisa percorrer para mostrar o último card
  const getScrollDistance = () =>
    programsTrack.scrollWidth - window.innerWidth + 64;

  const getScrollAmount = () => -getScrollDistance();

  // Quanto de "scroll extra" (em px) o usuário vai rolar parado, vendo os cards
  const HOLD_DURATION = 1500;

  let horizontalTween = gsap.to(programsTrack, {
    x: getScrollAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: '.programs-pin',
      start: 'center center',
      // Distância real do movimento + a "pausa" no final
      end: () => `+=${getScrollDistance() + HOLD_DURATION}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
      // Garante que o movimento horizontal termine ANTES do fim do trigger,
      // criando a sensação de "parar mostrando os cards"
      animation: gsap.to(programsTrack, {
        x: getScrollAmount,
        ease: 'none'
      })
    }
  });

  gsap.utils.toArray('.program-card').forEach((card) => {
    gsap.fromTo(
      card,
      { scale: 0.9, autoAlpha: 0.4 },
      {
        scale: 1,
        autoAlpha: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          containerAnimation: horizontalTween,
          start: 'left 85%',
          end: 'left center',
          scrub: true
        }
      }
    );
  });
}

/* ===========================================================
   6. COUNTERS
=========================================================== */

document.querySelectorAll('.count-num').forEach((el) => {
  const target = +el.dataset.count;

  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(el, {
        innerText: target,
        duration: 2,
        snap: { innerText: 1 },
        onUpdate: function () {
          el.innerText = Math.floor(el.innerText).toLocaleString('pt-BR');
        }
      });
    }
  });
});

/* ===========================================================
   7. EQUIPE
=========================================================== */

gsap.set('.coach-row', { autoAlpha: 0, x: -40 });

ScrollTrigger.batch('.coach-row', {
  start: 'top 90%',
  onEnter: (batch) =>
    gsap.to(batch, {
      autoAlpha: 1,
      x: 0,
      stagger: 0.12
    })
});

document.querySelectorAll('.coach-row').forEach((row) => {
  const fill = row.querySelector('.coach-fill');
  const name = row.querySelector('.coach-name');

  row.addEventListener('mouseenter', () => {
    gsap.to(fill, { scaleY: 1 });
    gsap.to(name, { x: 12 });
  });

  row.addEventListener('mouseleave', () => {
    gsap.to(fill, { scaleY: 0, transformOrigin: 'top' });
    gsap.to(name, { x: 0 });
  });
});

/* ===========================================================
   8. STATEMENT
=========================================================== */

const statementEl = document.getElementById('statement-text');

if (statementEl) {
  const words = statementEl.textContent.trim().split(/\s+/);

  statementEl.innerHTML = words
    .map((w) => `<span class="word">${w}</span>`)
    .join(' ');

  gsap.to('.statement-text .word', {
    color: '#f5f5f5',
    stagger: 0.06,
    scrollTrigger: {
      trigger: '.statement',
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: true
    }
  });
}

/* ===========================================================
   9. PRICING
=========================================================== */

gsap.set('.price-card', { autoAlpha: 0, y: 60 });

ScrollTrigger.batch('.price-card', {
  start: 'top 85%',
  onEnter: (batch) =>
    gsap.to(batch, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.15
    })
});

/* ===========================================================
   10. CTA FINAL
=========================================================== */

const ctaLine = document.querySelector('.cta-final .line span');

if (ctaLine) {
  gsap.set(ctaLine, { yPercent: 110 });

  ScrollTrigger.create({
    trigger: '.cta-final',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to(ctaLine, {
        yPercent: 0,
        duration: 1
      });
    }
  });
}

/* ===========================================================
   11. GENERIC
=========================================================== */

gsap.utils.toArray('.eyebrow, .section-desc').forEach((el) => {
  gsap.set(el, { autoAlpha: 0, y: 16 });

  ScrollTrigger.create({
    trigger: el,
    start: 'top 90%',
    once: true,
    onEnter: () =>
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7
      })
  });
});

window.addEventListener('load', () => ScrollTrigger.refresh());