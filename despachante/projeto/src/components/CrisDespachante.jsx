import { useEffect } from "react";
import { BiTransfer } from "react-icons/bi";
import { FaClipboardCheck, FaFileSignature, FaWhatsapp, FaLocationDot } from "react-icons/fa6";
import { RiTrafficLightFill } from "react-icons/ri";
import { FaMoneyCheckAlt, FaPhoneAlt } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { LuClipboardPenLine } from "react-icons/lu";
import Car from '../assets/car.svg'
import "./CrisDespachante.css";
import Localizacao from "./Localizacao";



const WHATSAPP = "5512982726588";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
const PINK = "#C5577E";

const services = [
  {
    icon: <BiTransfer color={PINK} size={32} />,
    label: "Transferência",
    desc: "Transferência de veículos com rapidez e segurança, sem burocracia.",
  },
  {
    icon: <FaClipboardCheck color={PINK} size={32} />,
    label: "Licenciamento",
    desc: "Licenciamento anual e regularização de veículos no Detran.",
  },
  {
    icon: <FaFileSignature color={PINK} size={32} />,
    label: "ATPV",
    desc: "Autorização para Transferência de Veículo Automotor (ATPV-e).",
  },
  {
    icon: <RiTrafficLightFill color={PINK} size={32} />,
    label: "Multas",
    desc: "Consulta, recurso e pagamento de multas de trânsito.",
  },
  {
    icon: <FaMoneyCheckAlt color={PINK} size={32} />,
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
  useEffect(() => {
    // Reveal-on-scroll usando só IntersectionObserver + CSS, sem libs externas
    const fadeEls = document.querySelectorAll(".fade-in-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    fadeEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cd-root">
      {/* ── HERO ── */}
      <section className="cd-hero">
        <div className="cd-grid" />
        <div className="cd-blob" />
        <div className="cd-hero-inner">
          <div className="cd-hero-text">
            <h1 className="fade-in-up cd-hero-title" data-delay="1">
              Sua documentação
              <br />
              <span className="cd-hero-accent">sem complicação.</span>
            </h1>
            <p className="fade-in-up cd-hero-sub" data-delay="2">
              Transferência, licenciamento, multas e IPVA — eu cuido de tudo
              enquanto você segue sua rotina.
            </p>
            <div className="cd-hero-btns" data-delay="3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="cd-hero-cta"
              >
                <FaWhatsapp size={22} />
                Falar no WhatsApp
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="cd-hero-cta cd-hero-cta-2"
              >
                <LuClipboardPenLine size={22} />
                Solicite um orçamento
              </a>
            </div>
          </div>
      <div className="imgHero"><img src={Car} alt="svgCar"/></div>
          </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="cd-section">
        <div className="cd-section-inner">
          <h2 className="fade-in-up cd-section-title" data-delay="1">
            Nossos Serviços
          </h2>
          <div className="cd-services-grid">
            {services.map((s, i) => (
              <div
                key={s.label}
                className="fade-in-up cd-service-card"
                data-delay={i + 1}
              >
                <span className="cd-service-icon">{s.icon}</span>
                <h3 className="cd-service-label">{s.label}</h3>
                <p className="cd-service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="cd-section cd-section--alt">
        <div className="cd-section-inner">
          <h2 className="fade-in-up cd-section-title" data-delay="1">
            Como funciona
          </h2>
          <div className="cd-steps-row">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="fade-in-up cd-step-card"
                data-delay={i + 1}
              >
                <span className="cd-step-num">{s.num}</span>
                <div className="cd-step-line" />
                <h3 className="cd-step-title">{s.title}</h3>
                <p className="cd-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCAL ── */}
            <Localizacao />
      

        {/* ── CTA STRIP 02 ── */}
      <section className="cd-cta-strip2">
        <div className="fade-in-up cd-cta-strip-inner2">
          <h2 className="cd-cta-strip-title2">
            Pronto para resolver sua documentação?
          </h2>
          <p className="cd-cta-strip-sub2">
            Solicite um orçamento agora mesmo e parcele sua documentação em até 12x no cartão, sem complicações. Atendimento rápido, transparente e sem dor de cabeça.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="cd-cta-strip-btn"
          >
            <RiMoneyDollarCircleFill size={20} color="#fff" /> Solicitar Orçamento
          </a>
        </div>
      </section>


      {/* ── FOOTER ── */}
      <section className="cd-footer">
        <p className="cd-footer-logo">Cris Despachante</p>
        <p className="cd-footer-info">
          <FaPhoneAlt color={PINK} />&nbsp; (12) 98272.6588 &nbsp;·&nbsp;{" "}
          <FaLocationDot color={PINK} /> &nbsp;São José dos Campos – SP
        </p>
        <p className="cd-footer-sub">
          Despachante documentalista · Transferência · Licenciamento · ATPV ·
          Multas · IPVA
        </p>
        <p className="cd-footer-copy">
          © 2026 Cris Despachante. Todos os direitos reservados.
        </p>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="cd-fab"
      >
        <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.775L0 32l8.47-2.004A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.145 22.83c-.34.954-1.99 1.826-2.732 1.94-.742.114-1.66.16-2.677-.168-.618-.196-1.411-.457-2.43-.895-4.28-1.848-7.08-6.13-7.296-6.413-.216-.283-1.76-2.34-1.76-4.467s1.113-3.17 1.508-3.606c.396-.437.864-.546 1.152-.546.288 0 .576.003.828.015.266.013.622-.1.973.742.36.862 1.222 2.98 1.33 3.196.108.216.18.468.036.756-.144.288-.216.468-.432.72-.216.252-.454.563-.648.756-.216.21-.44.438-.19.858.253.42 1.12 1.845 2.404 2.99 1.653 1.47 3.05 1.925 3.47 2.14.42.216.665.18.91-.108.245-.288 1.044-1.22 1.322-1.638.28-.42.558-.35.94-.21.384.14 2.44 1.15 2.858 1.36.42.21.698.315.8.49.103.176.103 1.01-.238 1.966z" />
        </svg>
      </a>
    </div>
  );
}
