import { useEffect, useRef } from "react";
import { BiTransfer } from "react-icons/bi";
import { FaClipboardCheck, FaFileSignature, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import { RiTrafficLightFill } from "react-icons/ri";
import { FaMoneyCheckAlt, FaPhoneAlt } from "react-icons/fa";
import Location from "./Location";
import svgCar from '../assets/svgCar.svg'



const WHATSAPP = "5512982726588";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;

const services = [
  {
    icon: <BiTransfer color="#E8006F" size={36} />,
    label: "Transferência",
    desc: "Transferência de veículos com rapidez e segurança, sem burocracia.",
  },
  {
    icon: <FaClipboardCheck color="#E8006F" size={36} />,
    label: "Licenciamento",
    desc: "Licenciamento anual e regularização de veículos no Detran.",
  },
  {
    icon: <FaFileSignature color="#E8006F" size={36} />,
    label: "ATPV",
    desc: "Autorização para Transferência de Veículo Automotor (ATPV-e).",
  },
  {
    icon: <RiTrafficLightFill color="#E8006F" size={36} />,
    label: "Multas",
    desc: "Consulta, recurso e pagamento de multas de trânsito.",
  },
  {
    icon: <FaMoneyCheckAlt color="#E8006F" size={36} />,
    label: "IPVA",
    desc: "Pagamento e parcelamento de IPVA com orientação completa.",
  },
];

const steps = [
  {
    num: "01",
    title: "Entre em contato",
    desc: "Fale comigo pelo WhatsApp e me conte o que você precisa resolver.",
  },
  {
    num: "02",
    title: "Envie a documentação",
    desc: "Mande os documentos necessários digitalmente, direto do seu celular.",
  },
  {
    num: "03",
    title: "Eu cuido do processo",
    desc: "Faço todo o trâmite no Detran enquanto você segue sua rotina.",
  },
  {
    num: "04",
    title: "Receba pronto",
    desc: "Te aviso quando finalizar e você recebe tudo certinho, sem complicação.",
  },
];

export default function CrisDespachante() {
  const heroRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Dynamically load GSAP from CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.onload = () => {
      const gsap = window.gsap;

      // Initial states
      gsap.set(carRef.current, { x: "-120%", opacity: 0 });
      gsap.set(trailRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(titleRef.current, { x: 60, opacity: 0 });
      gsap.set(subtitleRef.current, { x: 60, opacity: 0 });
      gsap.set(ctaRef.current, { y: 20, opacity: 0 });
      gsap.set(badgeRef.current, { scale: 0.6, opacity: 0 });

      const tl = gsap.timeline({ delay: 0.3 });

      // Car drives in
      tl.to(carRef.current, {
        x: "0%",
        opacity: 1,
        duration: 1.1,
        ease: "power3.out",
      })
        // Trail stretches under the car
        .to(
          trailRef.current,
          { scaleX: 1, duration: 0.8, ease: "power2.out" },
          "-=0.5",
        )
        // Car pulses
        .to(
          carRef.current,
          { scale: 1.04, duration: 0.15, ease: "power1.out" },
          "-=0.1",
        )
        .to(carRef.current, { scale: 1, duration: 0.15, ease: "power1.in" })
        // Text reveals
        .to(
          titleRef.current,
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.1",
        )
        .to(
          subtitleRef.current,
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.45",
        )
        .to(
          ctaRef.current,
          { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" },
          "-=0.2",
        )
        .to(
          badgeRef.current,
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.3",
        );

      // Hover micro-interaction on car
      const carEl = carRef.current;
      const onEnter = () =>
        gsap.to(carEl, { scale: 1.06, duration: 0.3, ease: "power2.out" });
      const onLeave = () =>
        gsap.to(carEl, { scale: 1, duration: 0.3, ease: "power2.in" });
      carEl.addEventListener("mouseenter", onEnter);
      carEl.addEventListener("mouseleave", onLeave);

      // Scroll-triggered fade-ins using IntersectionObserver (no ScrollTrigger plugin needed)
      const fadeEls = document.querySelectorAll(".fade-in-up");
      gsap.set(fadeEls, { y: 40, opacity: 0 });
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, {
                y: 0,
                opacity: 1,
                duration: 0.65,
                ease: "power3.out",
                delay: parseFloat(entry.target.dataset.delay || 0),
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );
      fadeEls.forEach((el) => obs.observe(el));

      return () => {
        carEl.removeEventListener("mouseenter", onEnter);
        carEl.removeEventListener("mouseleave", onLeave);
      };
    };
    document.head.appendChild(script);
  }, []);

  return (
    <div style={styles.root}>
      {/* ── HERO ── */}
      <section ref={heroRef} style={styles.hero}>
        {/* Background grid */}
        <div style={styles.grid} />

        {/* Glow blob */}
        <div style={styles.blob} />

        <div style={styles.heroInner}>
          {/* Car + trail */}
          <div style={styles.carWrap}>
            <div ref={trailRef} style={styles.trail} />
            <div ref={carRef} style={styles.carSvgWrap}>
              <CarSVG />
            </div>
          </div>

          {/* Hero text */}
          <div style={styles.heroText}>
            <h1 ref={titleRef} style={styles.heroTitle}>
              Cris
              <br />
              <span style={styles.heroAccent}>Despachante</span>
            <span ref={badgeRef} style={styles.badge}>
              Despachante documentalista
            </span>
            </h1>
            <p ref={subtitleRef} style={styles.heroSub}>
              Documentação veicular sem complicação.
              <br />
              São José dos Campos · SP
            </p>
            <div ref={ctaRef}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                style={styles.heroCta}
              >
                <span>
                  <FaWhatsapp size={24} />
                </span>{" "}
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={styles.scrollHint}>
          <span style={styles.scrollDot} />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={styles.section}>
        <div style={styles.sectionInner}>
          <p className="fade-in-up" data-delay="0" style={styles.eyebrow}>
            O que eu resolvo
          </p>
          <h2
            className="fade-in-up"
            data-delay="0.08"
            style={styles.sectionTitle}
          >
            Serviços
          </h2>
          <div style={styles.servicesGrid}>
            {services.map((s, i) => (
              <div
                key={s.label}
                className="fade-in-up"
                data-delay={0.1 + i * 0.08}
                style={styles.serviceCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E8006F";
                  e.currentTarget.style.boxShadow =
                    "0 0 28px rgba(232,0,111,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#222";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span style={styles.serviceIcon}>{s.icon}</span>
                <h3 style={styles.serviceLabel}>{s.label}</h3>
                <p style={styles.serviceDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ ...styles.section, background: "#0d0d0d" }}>
        <div style={styles.sectionInner}>
          <p className="fade-in-up" data-delay="0" style={styles.eyebrow}>
            Simples assim
          </p>
          <h2
            className="fade-in-up"
            data-delay="0.08"
            style={styles.sectionTitle}
          >
            Como funciona
          </h2>
          <div style={styles.stepsRow}>
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="fade-in-up"
                data-delay={0.1 + i * 0.12}
                style={styles.stepCard}
              >
                <span style={styles.stepNum}>{s.num}</span>
                <div style={styles.stepLine} />
                <h3 style={styles.stepTitle}>{s.title}</h3>
                <p style={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={styles.ctaStrip}>
        <div className="fade-in-up" data-delay="0" style={styles.ctaStripInner}>
          <h2 style={styles.ctaStripTitle}>
            Precisa resolver sua documentação?
          </h2>
          <p style={styles.ctaStripSub}>
            Atendimento rápido, transparente e sem dor de cabeça.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            style={styles.ctaStripBtn}
          >
            <FaWhatsapp size={20} color='#E8006F' /> Falar no WhatsApp 
          </a>
        </div>
        <div style={styles.locationContainer}>
          <Location />
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={styles.footer}>
        <p style={styles.footerLogo}>Cris Despachante</p>
        <p style={styles.footerInfo}>
          <FaPhoneAlt color="#E8006F" />&nbsp; (12) 98272.6588 &nbsp;·&nbsp; <FaLocationDot color="#E8006F" /> &nbsp;São José dos Campos – SP
        </p>
        <p style={styles.footerSub}>
          Despachante documentalista · Transferência · Licenciamento · ATPV ·
          Multas · IPVA
        </p>
        <p style={styles.footerCopy}>
          © 2026 Cris Despachante. Todos os direitos reservados.
        </p>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        style={styles.fab}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.775L0 32l8.47-2.004A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.145 22.83c-.34.954-1.99 1.826-2.732 1.94-.742.114-1.66.16-2.677-.168-.618-.196-1.411-.457-2.43-.895-4.28-1.848-7.08-6.13-7.296-6.413-.216-.283-1.76-2.34-1.76-4.467s1.113-3.17 1.508-3.606c.396-.437.864-.546 1.152-.546.288 0 .576.003.828.015.266.013.622-.1.973.742.36.862 1.222 2.98 1.33 3.196.108.216.18.468.036.756-.144.288-.216.468-.432.72-.216.252-.454.563-.648.756-.216.21-.44.438-.19.858.253.42 1.12 1.845 2.404 2.99 1.653 1.47 3.05 1.925 3.47 2.14.42.216.665.18.91-.108.245-.288 1.044-1.22 1.322-1.638.28-.42.558-.35.94-.21.384.14 2.44 1.15 2.858 1.36.42.21.698.315.8.49.103.176.103 1.01-.238 1.966z" />
        </svg>
      </a>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0A0A0A; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #E8006F; border-radius: 3px; }
        @keyframes pulse-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.4; }
        }
        @keyframes fab-pulse {
          0% { box-shadow: 0 0 0 0 rgba(232,0,111,0.55); }
          70% { box-shadow: 0 0 0 14px rgba(232,0,111,0); }
          100% { box-shadow: 0 0 0 0 rgba(232,0,111,0); }
        }
      `}</style>
    </div>
  );
}

function CarSVG() {
  return (
    <img src={svgCar} alt="svg" />
  );
}

const styles = {
  root: {
    fontFamily: "'Inter', sans-serif",
    background: "#0A0A0A",
    color: "#F0F0F0",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  hero: {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
    padding: "0 24px",
  },
  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(232,0,111,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,111,0.07) 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    pointerEvents: "none",
  },
  blob: {
    position: "absolute",
    top: "10%",
    left: "20%",
    width: 600,
    height: 400,
    borderRadius: "50%",
    background:
      "radial-gradient(ellipse, rgba(232,0,111,0.18) 0%, transparent 70%)",
    filter: "blur(40px)",
    pointerEvents: "none",
  },
  heroInner: {
    position: "relative",
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 32,
    paddingTop: 40,
  },
  carWrap: {
    position: "relative",
    width: "100%",
    maxWidth: 440,
  },
  trail: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: 3,
    background: "linear-gradient(90deg, transparent, #E8006F88, #E8006F)",
    borderRadius: 2,
  },
  carSvgWrap: {
    width: "100%",
    cursor: "pointer",
  },
  heroText: {
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  badge: {
    display: "inline-block",
    background: "rgba(232,0,111,0.15)",
    border: "1px solid rgba(232,0,111,0.4)",
    color: "#E8006F",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "10px 14px",
    borderRadius: 20,
    width: "fit-content",
    },
  heroTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color: "#F0F0F0",
  },
  heroAccent: {
    color: "#E8006F",
    display: "block",
  },
  heroSub: {
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    color: "#999",
    lineHeight: 1.6,
  },
  heroCta: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "#E8006F",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1rem",
    padding: "14px 28px",
    borderRadius: 8,
    letterSpacing: "0.02em",
    transition: "background 0.2s, transform 0.2s",
    boxShadow: "0 4px 32px rgba(232,0,111,0.4)",
  },
  scrollHint: {
    position: "absolute",
    bottom: 32,
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
  },
  scrollDot: {
    display: "block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#E8006F",
    animation: "pulse-dot 1.6s ease-in-out infinite",
  },
  section: {
    padding: "80px 24px",
    background: "#0A0A0A",
  },
  sectionInner: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  eyebrow: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "#E8006F",
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    fontWeight: 700,
    color: "#F0F0F0",
    marginBottom: 40,
    borderBottom: "1px solid #E8006F33",
    paddingBottom: 16,
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 20,
  },
  serviceCard: {
    background: "#141414",
    border: "1px solid #222",
    borderRadius: 12,
    padding: "28px 22px",
    cursor: "default",
    transition: "border-color 0.25s, box-shadow 0.25s",
  },
  serviceIcon: {
    fontSize: 30,
    display: "block",
    marginBottom: 14,
  },
  serviceLabel: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#F0F0F0",
    marginBottom: 8,
    letterSpacing: "0.04em",
  },
  serviceDesc: {
    fontSize: "0.85rem",
    color: "#777",
    lineHeight: 1.6,
  },
  stepsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: 24,
  },
  stepCard: {
    padding: "32px 24px",
    background: "#141414",
    borderRadius: 12,
    border: "1px solid #1e1e1e",
  },
  stepNum: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "2.5rem",
    fontWeight: 900,
    color: "#E8006F22",
    display: "block",
    marginBottom: 8,
    letterSpacing: "-0.04em",
  },
  stepLine: {
    width: 52,
    height: 2,
    background: "#E8006F",
    marginBottom: 16,
    borderRadius: 1,
  },
  stepTitle: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#F0F0F0",
    marginBottom: 10,
    letterSpacing: "0.03em",
  },
  stepDesc: {
    fontSize: "0.85rem",
    color: "#777",
    lineHeight: 1.6,
  },
  ctaStrip: {
  background:
    "radial-gradient(circle at 15% 20%, #2a0015 0%, transparent 45%), linear-gradient(135deg, #1a0010 0%, #0A0A0A 100%)",
  borderTop: "1px solid #E8006F33",
  borderBottom: "1px solid #E8006F33",
  padding: "80px 35px",
  textAlign: "start",
  display: "flex",
  alignItems: "center",
  justifyContent: 'space-evenly',
  flexWrap: "wrap",
  gap: 48,
  position: "relative",
  overflow: "hidden",
},
locationContainer: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "600px",
  flex: "1 1 320px",
},
ctaStripInner: {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
  maxWidth: 600,
  flex: "1 1 380px",
  gap: 18,
},
ctaStripTitle: {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
  fontWeight: 700,
  color: "#F0F0F0",
  letterSpacing: "-0.01em",
  lineHeight: 1.25,
  textShadow: "0 2px 24px #E8006F30",
},
ctaStripSub: {
  fontSize: "1.05rem",
  color: "#999",
  letterSpacing: "0.01em",
  lineHeight: 1.6,
},
ctaStripBtn: {
  display: "inline-flex",
  alignItems: "center",
  gap: 20,
  background: "transparent",
  border: "2px solid #E8006F",
  color: "#E8006F",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "1rem",
  padding: "14px 40px",
  borderRadius: 8,
  marginTop: 8,
  letterSpacing: "0.02em",
  boxShadow: "0 0 0px #E8006F00",
  transition: "background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
},
  footer: {
    padding: "48px 24px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    borderTop: "1px solid #1e1e1e",
  },
  footerLogo: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#E8006F",
    letterSpacing: "0.08em",
  },
  footerInfo: {
    fontSize: "0.95rem",
    color: "#999",
  },
  footerSub: {
    fontSize: "0.8rem",
    color: "#555",
  },
  footerCopy: {
    fontSize: "0.75rem",
    color: "#444",
    marginTop: 8,
  },
  fab: {
    position: "fixed",
    bottom: 28,
    right: 28,
    width: 58,
    height: 58,
    borderRadius: "50%",
    background: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    boxShadow: "0 4px 24px rgba(37,211,102,0.45)",
    zIndex: 999,
    transition: "transform 0.25s",
    animation: "fab-pulse 2s infinite",
  },
};
