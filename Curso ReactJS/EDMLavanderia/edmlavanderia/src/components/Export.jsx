import { useState, useEffect, useRef } from "react";
import logo1 from '../assets/logo1.png';
import './App.css';

const COLORS = {
  dark: "#1F2134",
  orange: "#CB6E2D",
  light: "#F7F9F8",
};

const reviews = [
  {
    name: "Ana Paula",
    stars: 5,
    date: "3 meses atrás",
    text: "Fiquei simplesmente encantada com o resultado. Meu sofá ficou limpo, cheiroso e com aparência de novo! Dá para perceber o cuidado, o capricho e o profissionalismo em cada detalhe.",
    avatar: "AP",
  },
  {
    name: "Alex Mariane",
    stars: 5,
    date: "3 meses atrás",
    text: "Excelente serviço, com profissionalismo e qualidade. Super indico! E se eu não tivesse visto com os meus próprios olhos, ia dizer que compraram outro sofá e colocaram no lugar!",
    avatar: "AM",
  },
  {
    name: "Renata Malta",
    stars: 4,
    date: "7 meses atrás",
    text: "Fiquei extremamente satisfeita com o serviço! Desde o primeiro contato, o atendimento da Bia e do Rodrigo foi excelente — super atenciosos, pontuais e profissionais.",
    avatar: "RM",
  },
  {
    name: "Carlos Eduardo",
    stars: 5,
    date: "1 mês atrás",
    text: "Tapete voltou como novo! Serviço rápido e entrega no prazo. Recomendo muito, empresa séria e de confiança.",
    avatar: "CE",
  },
  {
    name: "Fernanda Lima",
    stars: 5,
    date: "2 meses atrás",
    text: "Melhor lavanderia de tapetes da região! Já usei várias vezes e sempre saio satisfeita. Preço justo e resultado impecável.",
    avatar: "FL",
  },
];

const services = [
  {
    icon: "🪣",
    title: "Lavagem Profunda",
    desc: "Remoção completa de sujeiras, ácaros e odores com maquinário de ponta.",
  },
  {
    icon: "🛋️",
    title: "Higienização de Sofás",
    desc: "Limpeza especializada que devolve vida e frescor ao seu mobiliário.",
  },
  {
    icon: "🧹",
    title: "Lavagem de Tapetes",
    desc: "Cuidado com todos os tipos de fibras, preservando cor e textura.",
  },
  {
    icon: "🚚",
    title: "Coleta e Entrega",
    desc: "Buscamos e entregamos na sua casa com praticidade e segurança.",
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          style={{
            color: s <= count ? COLORS.orange : "#ccc",
            fontSize: 16,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [activeReview, setActiveReview] = useState(0);
  const [waPulse, setWaPulse] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const pulse = setInterval(() => {
      setWaPulse(true);
      setTimeout(() => setWaPulse(false), 600);
    }, 3000);
    return () => clearInterval(pulse);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phone = "5512988552798";
  const waMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento para lavagem de tapetes.",
  );
  const waLink = `https://wa.me/${phone}?text=${waMessage}`;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "servicos", label: "Serviços" },
    { id: "avaliacoes", label: "Avaliações" },
    { id: "contato", label: "Contato" },
  ];

  
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  

  return (
    <div
      style={{
        fontFamily: "'Lora', Georgia, serif",
        background: COLORS.light,
        color: COLORS.dark,
        width: "100%",
        height: "100vh",
      }}
    >
      {/* ── NAVBAR ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          background: scrolled ? "rgba(31,33,52,0.97)" : "rgba(31,33,52,0.82)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.22)" : "none",
          transition: "all 0.35s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 28px",
            height: 70,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
              <img src={logo1} alt="logo-edm" style={{ width: 65, marginRight: 30 }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 18, color: COLORS.light, letterSpacing: "-0.01em" }}>
                EDM
              </div>
              <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: COLORS.orange, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Lavanderia de Tapetes
              </div>
            </div>
          </div>

          <nav className="nav-desktop" style={{ display: "flex", gap: 36 }}>
            {navItems.map(({ id, label }) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <button className="hamburger" onClick={() => setMenuOpen((v) => !v)}>
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map(({ id, label }) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="inicio"
        style={{
          background: `linear-gradient(135deg, ${COLORS.dark} 0%, #2a2d47 60%, #1a1c2e 100%)`,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 70,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "10%", right: "-8%", width: 520, height: 520, borderRadius: "50%", border: "1.5px solid rgba(203,110,45,0.15)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "20%", right: "2%", width: 340, height: 340, borderRadius: "50%", border: "1.5px solid rgba(203,110,45,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(203,110,45,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div
          className="hero-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 28px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(203,110,45,0.15)", border: "1px solid rgba(203,110,45,0.3)", padding: "6px 16px", borderRadius: 50, marginBottom: 28 }}>
              <span style={{ color: COLORS.orange, fontSize: 12 }}>★</span>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "rgba(247,249,248,0.85)", fontWeight: 500 }}>
                5,0 · 60 avaliações no Google
              </span>
            </div>

            <h1 className="hero-title">
              Seus tapetes,
              <br />
              <span style={{ color: COLORS.orange }}>limpos como</span>
              <br />
              no primeiro dia.
            </h1>

            <p className="hero-sub" style={{ margin: "24px 0 40px" }}>
              Há 30 anos cuidando da sua casa em São José dos Campos. Tradição,
              tecnologia e profissionalismo em cada fibra.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href={waLink} target="_blank" rel="noreferrer" className="cta-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
              <button className="map-btn" onClick={() => scrollTo("contato")}>
                📍 Ver endereço
              </button>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: 320, height: 320, borderRadius: "50%", border: "3px solid rgba(203,110,45,0.3)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", background: "radial-gradient(circle, rgba(203,110,45,0.06) 0%, transparent 70%)" }}>
              <div style={{ width: 260, height: 260, borderRadius: "50%", border: "1.5px solid rgba(203,110,45,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 80, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={logo1} alt="logo-section" style={{ width: 120 }} />
                  </div>
                  <div style={{ fontFamily: "'Lora', serif", color: COLORS.light, fontWeight: 600, fontSize: 18 }}>EDM</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", color: COLORS.orange, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Lavanderia de Tapetes
                  </div>
                </div>
              </div>

              {/* Orbiting dots */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: COLORS.orange,
                    opacity: 0.5 + i * 0.08,
                    top: `calc(50% + ${160 * Math.sin((deg * Math.PI) / 180)}px - 5px)`,
                    left: `calc(50% + ${160 * Math.cos((deg * Math.PI) / 180)}px - 5px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: COLORS.dark, padding: "48px 28px" }}>
        <div
          className="stats-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
            textAlign: "center",
          }}
        >
          {[
            { n: "30+", l: "Anos de experiência" },
            { n: "60", l: "Avaliações Google" },
            { n: "5,0", l: "Nota no Google" },
            { n: "100%", l: "Satisfação garantida" },
          ].map((s, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" style={{ padding: "100px 28px", background: COLORS.light }}>
        <div
          className="about-grid"
          style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
        >
          <AnimatedSection>
            <div className="section-label">Sobre nós</div>
            <h2 className="section-title">
              Tradição e tecnologia
              <br />a serviço do seu lar
            </h2>
            <div className="divider" />
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(31,33,52,0.72)", marginBottom: 20 }}>
              Há 30 anos somos uma lavanderia especializada em lavagem de
              tapetes em São José dos Campos e região. Combinamos tradição com
              tecnologia, utilizamos maquinário profissional de ponta para
              garantir uma limpeza profunda.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 16, lineHeight: 1.8, color: "rgba(31,33,52,0.72)" }}>
              Removemos sujeira, ácaros e odores sem danificar as fibras. Se
              você busca qualidade, experiência e restauração de tapetes, confie
              em quem é referência no mercado.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div style={{ background: COLORS.dark, borderRadius: 28, padding: 40, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(203,110,45,0.15) 0%, transparent 70%)" }} />
              <div style={{ fontFamily: "'Lora', serif", fontSize: 60, color: COLORS.orange, opacity: 0.4, lineHeight: 1, marginBottom: 12 }}>
                "
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontSize: 18, lineHeight: 1.7, color: COLORS.light, fontStyle: "italic", marginBottom: 24 }}>
                Nosso compromisso é devolver seu tapete como se fosse novo,
                cuidando de cada detalhe com dedicação e respeito ao seu lar.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: COLORS.orange, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 700, color: COLORS.light }}>
                  EDM
                </div>
                <div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: COLORS.light, fontSize: 15 }}>Equipe EDM</div>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: COLORS.orange }}>Lavanderia de Tapetes</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" style={{ padding: "100px 28px", background: "#f0f2f1" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div className="section-label">O que fazemos</div>
              <h2 className="section-title">Nossos Serviços</h2>
              <div className="divider" style={{ margin: "16px auto 0" }} />
            </div>
          </AnimatedSection>

          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {services.map((s, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div className="service-card">
                  <div style={{ fontSize: 40, marginBottom: 20 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Lora', serif", fontSize: 18, fontWeight: 700, color: COLORS.dark, marginBottom: 12 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(31,33,52,0.65)" }}>
                    {s.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" style={{ padding: "100px 28px", background: COLORS.dark }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <AnimatedSection>
            <div className="section-label">O que dizem sobre nós</div>
            <h2 className="section-title" style={{ color: COLORS.light, marginBottom: 60 }}>
              Avaliações dos clientes
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div style={{ background: "rgba(247,249,248,0.05)", border: "1px solid rgba(247,249,248,0.1)", borderRadius: 28, padding: "52px 48px", position: "relative", overflow: "hidden", minHeight: 240 }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${COLORS.orange}, transparent)` }} />
              <div style={{ fontFamily: "'Lora', serif", fontSize: 60, color: COLORS.orange, opacity: 0.3, lineHeight: 1, marginBottom: 20 }}>
                "
              </div>

              <div key={activeReview} className="review-fade">
                <p style={{ fontFamily: "'Lora', serif", fontSize: 18, lineHeight: 1.8, color: COLORS.light, fontStyle: "italic", marginBottom: 32 }}>
                  {reviews[activeReview].text}
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: COLORS.orange, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 700, color: COLORS.light }}>
                    {reviews[activeReview].avatar}
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: COLORS.light, fontSize: 15 }}>
                      {reviews[activeReview].name}
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <StarRating count={reviews[activeReview].stars} />
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(247,249,248,0.45)" }}>
                        {reviews[activeReview].date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 28 }}>
              {reviews.map((_, i) => (
                <div
                  key={i}
                  className={`review-dot ${i === activeReview ? "active" : ""}`}
                  onClick={() => setActiveReview(i)}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTATO / ENDEREÇO ── */}
      <section id="contato" style={{ padding: "100px 28px", background: COLORS.light }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div className="section-label">Onde estamos</div>
              <h2 className="section-title">Endereço e Contato</h2>
              <div className="divider" style={{ margin: "16px auto 0" }} />
            </div>
          </AnimatedSection>

          <div className="address-grid" style={{ display: "flex", gap: 40, alignItems: "stretch" }}>
            <AnimatedSection delay={100}>
              <div style={{ background: COLORS.dark, borderRadius: 24, padding: "40px 36px", flex: "0 0 340px", display: "flex", flexDirection: "column", gap: 28 }}>
                {[
                  { icon: "📍", label: "Endereço", val: "R. Gregório Gurevich, 132\nJardim Diamante\nSão José dos Campos - SP\nCEP: 12223-140" },
                  { icon: "📞", label: "Telefone", val: "(12) 98855-2798" },
                  { icon: "🕐", label: "Horário", val: "Segunda a Sábado\n08h às 18h" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 16 }}>
                    <div style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: COLORS.orange, marginBottom: 6 }}>
                        {item.label}
                      </div>
                      <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, lineHeight: 1.7, color: "rgba(247,249,248,0.8)", whiteSpace: "pre-line" }}>
                        {item.val}
                      </div>
                    </div>
                  </div>
                ))}

                <a href={waLink} target="_blank" rel="noreferrer" className="cta-btn" style={{ marginTop: 8 }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div style={{ flex: 1, minWidth: 280, borderRadius: 24, overflow: "hidden", boxShadow: "0 8px 40px rgba(31,33,52,0.12)" }}>
                <iframe
                  title="Mapa EDM Lavanderia"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.9167895427!2d-45.88764!3d-23.19864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4a93e8a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sR.+Gregório+Gurevich%2C+132+-+Jardim+Diamante%2C+São+José+dos+Campos+-+SP%2C+12223-140!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="420"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div style={{ padding: "16px 20px", background: COLORS.dark }}>
                  <a
                    href="https://maps.google.com/?q=R.+Gregório+Gurevich,+132,+Jardim+Diamante,+São+José+dos+Campos+SP"
                    target="_blank"
                    rel="noreferrer"
                    className="map-btn"
                    style={{ fontSize: 14, padding: "10px 22px" }}
                  >
                    🗺️ Abrir no Google Maps
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#141624", padding: "40px 28px", textAlign: "center" }}>
        <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 20, color: COLORS.light, marginBottom: 8 }}>
          EDM | Lavanderia de Tapetes
        </div>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 14, color: "rgba(247,249,248,0.4)", marginBottom: 16 }}>
          R. Gregório Gurevich, 132 · Jardim Diamante · São José dos Campos – SP
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
          <a href={waLink} target="_blank" rel="noreferrer" style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: "#25D366" }}>
            WhatsApp
          </a>
          <span style={{ color: "rgba(247,249,248,0.2)" }}>·</span>
          <a
            href="https://maps.google.com/?q=R.+Gregório+Gurevich,+132,+Jardim+Diamante,+São+José+dos+Campos+SP"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "'Outfit', sans-serif", fontSize: 13, color: COLORS.orange }}
          >
            Google Maps
          </a>
        </div>
        <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: 12, color: "rgba(247,249,248,0.2)", marginTop: 24 }}>
          © {new Date().getFullYear()} EDM Lavanderia de Tapetes · Todos os direitos reservados
        </div>
      </footer>

      {/* ── WHATSAPP FLUTUANTE ── */}
      <a href={waLink} target="_blank" rel="noreferrer" className="wa-float">
        <span className="wa-label">Fale conosco!</span>
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {waPulse && (
            <div
              className="wa-pulse-ring"
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
          )}
          <div className="wa-bubble">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
