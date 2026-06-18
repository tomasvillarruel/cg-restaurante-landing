/* =========================================================
   Circuito Gastronómico — Método CG 2.0
   ========================================================= */
(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---------- Marquee ---------- */
  (function () {
    const words = ['Web', 'App', 'Instagram', 'Radio', 'Televisión', 'Eventos', 'Influencers'];
    const track = document.querySelector('#marquee .marquee-track');
    const make = () =>
      words
        .map(
          w =>
            `<span class="marquee-item"><span>${w}</span><span class="marquee-dot"></span></span>`
        )
        .join('');
    track.innerHTML = make() + make();
    document.getElementById('marquee').appendChild(track.cloneNode(true));
  })();

  function fillCounters() {
    document.querySelectorAll('[data-count]').forEach(el => (el.textContent = el.dataset.count));
  }

  if (reduce || !window.gsap) {
    document.documentElement.classList.remove('anim');
    fillCounters();
  } else {
    gsap.to('#marquee .marquee-track', { xPercent: -100, repeat: -1, duration: 32, ease: 'none' });

    /* Hero */
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.to('#heroImg', { opacity: 1, clipPath: 'inset(0 0 0% 0)', scale: 1, duration: 1.3 })
      .fromTo(
        '#hero .line',
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.05, stagger: 0.1, ease: 'power4.out' },
        0.25
      )
      .to('#hero .reveal', { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 }, 0.7);

    /* Reveals */
    gsap.utils.toArray('.reveal').forEach(el => {
      if (el.closest('#hero')) return;
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
    gsap.utils.toArray('.reveal-img').forEach(el => {
      if (el.id === 'heroImg') return;
      gsap.to(el, {
        opacity: 1,
        clipPath: 'inset(0 0 0% 0)',
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });

    /* Parallax */
    gsap.utils.toArray('.parallax').forEach(img => {
      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });

    /* Counters */
    gsap.utils.toArray('[data-count]').forEach(el => {
      const end = +el.dataset.count,
        o = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 92%',
        once: true,
        onEnter: () =>
          gsap.to(o, {
            v: end,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => (el.textContent = Math.round(o.v)),
          }),
      });
    });

    /* Lista numerada de dolores — entrada editorial escalonada */
    ScrollTrigger.create({
      trigger: '#painList',
      start: 'top 82%',
      once: true,
      onEnter: () =>
        gsap.to('#painList .pain-item', {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: 'power2.out',
        }),
    });

    /* Roster cards — entrada escalonada + pulse de borde + hover GSAP */
    (function () {
      const items = gsap.utils.toArray('#rosterGrid .roster-item');
      if (!items.length) return;

      const shadowBase  = '0 2px 14px rgba(20,17,16,.06)';
      const shadowHover = '0 10px 32px rgba(20,17,16,.13), 0 0 0 0.5px #9C1E21';
      const shadowPulse = '0 4px 20px rgba(156,30,33,.18), 0 0 0 1px #C62A2E';

      ScrollTrigger.create({
        trigger: '#rosterGrid',
        start: 'top 85%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline();
          // 1 — entrada escalonada (igual que pain list)
          tl.to(items, {
            opacity: 1, y: 0,
            duration: 0.55, stagger: 0.08, ease: 'power2.out',
          })
          // 2 — pulse de borde vino uno por uno
          .to(items, {
            boxShadow: shadowPulse,
            duration: 0.22, stagger: 0.07, ease: 'power2.in',
          }, '-=0.1')
          // 3 — vuelve al estado base
          .to(items, {
            boxShadow: shadowBase,
            duration: 0.45, stagger: 0.07, ease: 'power3.out',
          });
        },
      });

      // Hover: GSAP anima box-shadow y lift
      const isHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
      if (isHover) {
        items.forEach(card => {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              boxShadow: shadowHover, y: -4,
              duration: 0.28, ease: 'power2.out', overwrite: true,
            });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              boxShadow: shadowBase, y: 0,
              duration: 0.5, ease: 'power3.out', overwrite: true,
            });
          });
        });
      }
    })();

    /* Pain video: vuelve al primer frame cuando termina + auto-replay al re-entrar al viewport */
    (function () {
      const v = document.querySelector('.pain-video');
      if (!v) return;

      v.addEventListener('ended', () => {
        v.pause();
        v.currentTime = 0;
      });

      if ('IntersectionObserver' in window) {
        let wasVisible = false;
        const io = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              const isVisible = entry.intersectionRatio >= 0.35;
              // Solo dispara cuando pasa de NO-visible a visible (no en cada micro-scroll)
              if (isVisible && !wasVisible) {
                v.currentTime = 0;
                const p = v.play();
                if (p && typeof p.catch === 'function') p.catch(() => {});
              }
              wasVisible = isVisible;
            });
          },
          { threshold: [0, 0.35, 0.7] }
        );
        io.observe(v);
      }
    })();

    /* Testimonios: duplicar cards para que el marquee loop sin cortes */
    (function () {
      const track = document.getElementById('testimonialsTrack');
      if (!track) return;
      const originals = Array.from(track.children);
      originals.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
      });
    })();

    /* Equipo: deck de cards expansibles (grid-template animado) */
    (function () {
      const deck = document.getElementById('teamDeck');
      if (!deck) return;
      const cards = Array.from(deck.querySelectorAll('.deck-card'));
      let activeIndex = 0;
      let isDesktop = window.matchMedia('(min-width:768px)').matches;

      function applyGrid() {
        const fractions = cards
          .map((_, i) => (i === activeIndex ? '5fr' : '1fr'))
          .join(' ');
        if (isDesktop) {
          deck.style.gridTemplateColumns = fractions;
          deck.style.gridTemplateRows = '1fr';
        } else {
          deck.style.gridTemplateRows = fractions;
          deck.style.gridTemplateColumns = '1fr';
        }
      }

      function setActive(i) {
        if (i === activeIndex) return;
        cards[activeIndex]?.classList.remove('is-active');
        activeIndex = i;
        cards[activeIndex].classList.add('is-active');
        applyGrid();
      }

      // Init
      cards[activeIndex].classList.add('is-active');
      applyGrid();

      // Resize: cambiar entre desktop (cols) y mobile (rows)
      window.addEventListener('resize', () => {
        const next = window.matchMedia('(min-width:768px)').matches;
        if (next !== isDesktop) {
          isDesktop = next;
          applyGrid();
        }
      });

      // Interactions
      const isHoverDevice =
        window.matchMedia('(hover:hover) and (pointer:fine)').matches;

      cards.forEach((card, i) => {
        card.setAttribute('tabindex', '0');
        if (isHoverDevice) {
          card.addEventListener('mouseenter', () => setActive(i));
        }
        card.addEventListener('click', () => setActive(i));
        card.addEventListener('focus', () => setActive(i));
      });
    })();
  }

  /* ---------- Nav + progress ---------- */
  const nav = document.getElementById('nav'),
    progress = document.getElementById('progress');
  function onScroll() {
    const s = window.scrollY > 60;
    nav.classList.toggle('scrolled', s);
    const h = document.documentElement,
      d = h.scrollHeight - h.clientHeight;
    progress.style.width = (d > 0 ? (h.scrollTop / d) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menú móvil (drawer lateral) ---------- */
  (function () {
    const burger = document.getElementById('navBurger');
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('menuOverlay');
    const closeBtn = document.getElementById('menuClose');
    if (!burger || !menu || !overlay) return;

    let open = false;

    function openMenu() {
      if (open) return;
      open = true;
      overlay.hidden = false;
      // forzar reflow para que la transición del overlay se dispare
      void overlay.offsetWidth;
      overlay.classList.add('open');
      menu.classList.add('open');
      burger.classList.add('is-open');
      burger.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
      closeBtn && closeBtn.focus();
    }

    function closeMenu() {
      if (!open) return;
      open = false;
      overlay.classList.remove('open');
      menu.classList.remove('open');
      burger.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
      burger.focus();
      // ocultar el overlay del flujo una vez terminada la animación
      const hide = () => {
        if (!open) overlay.hidden = true;
        overlay.removeEventListener('transitionend', hide);
      };
      overlay.addEventListener('transitionend', hide);
    }

    burger.addEventListener('click', () => (open ? closeMenu() : openMenu()));
    closeBtn && closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && open) closeMenu();
    });
    menu.querySelectorAll('[data-menu-link]').forEach(a => {
      a.addEventListener('click', closeMenu);
    });
    // Si se agranda a desktop, cerrar el menú para evitar estados raros
    window.matchMedia('(min-width:1024px)').addEventListener('change', e => {
      if (e.matches) closeMenu();
    });
  })();

  /* ---------- Cursor + magnetic + glow + tilt ---------- */
  if (!reduce && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    const dot = document.getElementById('curDot'),
      ring = document.getElementById('curRing');
    let mx = innerWidth / 2,
      my = innerHeight / 2,
      rx = mx,
      ry = my;
    addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    });
    (function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll('a,button,[data-cursor],.glow').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('big'));
      el.addEventListener('mouseleave', () => ring.classList.remove('big'));
    });
    document.querySelectorAll('.magnetic').forEach(b => {
      b.addEventListener('mouseenter', () => {
        b.style.transition = 'transform .15s ease';
      });
      b.addEventListener('mousemove', e => {
        const r = b.getBoundingClientRect();
        b.style.transition = 'transform .12s ease';
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.07}px,${
          (e.clientY - r.top - r.height / 2) * 0.07
        }px)`;
      });
      b.addEventListener('mouseleave', () => {
        b.style.transition = 'transform .55s cubic-bezier(.2,.8,.2,1)';
        b.style.transform = '';
      });
    });
    document.querySelectorAll('.glow,.glow-line').forEach(c => {
      c.addEventListener('mousemove', e => {
        const r = c.getBoundingClientRect();
        c.style.setProperty('--mx', e.clientX - r.left + 'px');
        c.style.setProperty('--my', e.clientY - r.top + 'px');
      });
    });
    /* Hero spotlight */
    const hero = document.getElementById('hero'),
      spot = document.getElementById('heroSpot');
    hero.addEventListener('mousemove', e => {
      spot.style.background = `radial-gradient(500px circle at ${e.clientX}px ${
        e.clientY - hero.getBoundingClientRect().top
      }px, rgba(198,42,46,.14), transparent 60%)`;
    });
    /* Tilt planes */
    document.querySelectorAll('.tilt').forEach(c => {
      c.addEventListener('mousemove', e => {
        const r = c.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -5,
          ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
        c.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      c.addEventListener('mouseleave', () => (c.style.transform = ''));
    });
  }

  window.addEventListener('load', () => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
  if (document.fonts && document.fonts.ready)
    document.fonts.ready.then(() => {
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  setTimeout(() => {
    if (!window.gsap) {
      document.documentElement.classList.remove('anim');
      fillCounters();
    }
  }, 3000);

  /* ---------- Form ---------- */
  document.querySelectorAll('.planbtn').forEach(b =>
    b.addEventListener('click', () => {
      const s = document.getElementById('plan');
      if (s && b.dataset.plan) s.value = b.dataset.plan;
    })
  );
  const form = document.getElementById('leadForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const m = document.getElementById('formMsg');
    const d = Object.fromEntries(new FormData(form));
    const ok =
      d.nombre && d.restaurante && d.telefono && /\S+@\S+\.\S+/.test(d.email || '');
    m.classList.remove('hidden');
    if (!ok) {
      m.textContent = 'Completá nombre, restaurante, teléfono y un email válido.';
      m.className = 'form-msg error';
      return;
    }
    m.innerHTML =
      '¡Gracias, <strong>' +
      d.nombre.split(' ')[0] +
      '</strong>! Recibimos tus datos. Te escribimos muy pronto.';
    m.className = 'form-msg ok';
    const b = form.querySelector('button[type="submit"]');
    b.disabled = true;
    b.style.opacity = '.6';
  });
})();
