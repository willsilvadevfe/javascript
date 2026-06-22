import { useEffect, useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import "./Localizacao.css";

// Hook simples de scroll-reveal via IntersectionObserver,
// seguindo o mesmo padrão usado no restante do site Cris Despachante.
function useInView(threshold = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("cd-in-view");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default function Localizacao() {
  const sectionRef = useInView(0.15);

  // TODO: preencher telefone de contato real
  const telefone = "(12) 98272-6588";
  const telefoneLink = telefone.replace(/\D/g, "");

  const endereco =
    "R. Sol Nascente - Res. Sol Nascente, São José dos Campos - SP, 12236-050";
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    endereco
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="cd-localizacao" id="localizacao" ref={sectionRef}>
      <div className="cd-localizacao-container">
        <div className="cd-localizacao-header">
          
          <h2 className="cd-localizacao-title">Localização</h2>
          <p className="cd-localizacao-subtitle">
            Venha nos conhecer! Estamos prontos para atender você com agilidade,<br></br> transparência e toda a atenção que seu processo merece.
          </p>
        </div>

        <div className="cd-localizacao-content">
          {/* Coluna esquerda — informações de contato */}
          <div className="cd-localizacao-info-col">
            <div className="cd-localizacao-card">
              <div className="cd-localizacao-icon">
                <MapPin size={24} strokeWidth={1.8} />
              </div>
              <div className="cd-localizacao-info">
                <h3>Endereço</h3>
                <p>
                  R. Sol Nascente – Res. Sol Nascente
                  <br />
                  São José dos Campos - SP
                  <br />
                  CEP 12236-050
                </p>
              </div>
            </div>

            <div className="cd-localizacao-card">
              <div className="cd-localizacao-icon">
                <Phone size={24} strokeWidth={1.8} />
              </div>
              <div className="cd-localizacao-info">
                <h3>Telefone</h3>
                <p>
                  <a
                    href={`tel:+55${telefoneLink}`}
                    className="cd-localizacao-link"
                  >
                    {telefone}
                  </a>
                </p>
              </div>
            </div>

            <div className="cd-localizacao-card">
              <div className="cd-localizacao-icon">
                <Clock size={24} strokeWidth={1.8} />
              </div>
              <div className="cd-localizacao-info">
                <h3>Horário de Atendimento</h3>
                <p>
                  Segunda a sexta
                  <br />
                  08:00 às 17:00
                </p>
              </div>
            </div>
          </div>

          {/* Coluna direita — mapa */}
          <div className="cd-localizacao-map-col">
            <div className="cd-localizacao-map-wrapper">
              <iframe
                title="Localização Cris Despachante"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
