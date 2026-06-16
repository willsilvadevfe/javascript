import './StoreMap.css';
import { storeInfo } from '../../data/products';

const reviews = [
  {
    name: 'Mariana Costa',
    text: 'Super recomendo! Preço justo e rapidez na entrega, super atenciosos no WhatsApp.',
    initials: 'MC',
  },
  {
    name: 'Rafael Souza',
    text: 'Presenteei minha namorada com a cesta Stitch e ela amou! Embalagem impecável e chocolates deliciosos.',
    initials: 'RS',
  },
  {
    name: 'Juliana Alves',
    text: 'Fiz o pedido de manhã e chegou no mesmo dia! Equipe incrível e produto lindo demais.',
    initials: 'JA',
  },
];

const features = [
  {
    icon: '🚀',
    title: 'Entrega no mesmo dia',
    desc: 'Pedidos feitos até às 15h garantem entrega em São José dos Campos no mesmo dia.',
  },
  {
    icon: '🍫',
    title: 'Chocolates premium',
    desc: 'Ferrero Rocher, Nutella, Kinder, M&M e muito mais — só os melhores do mercado.',
  },
  {
    icon: '🎀',
    title: 'Embalagem de luxo',
    desc: 'Cada cesta é montada artesanalmente com caixa premium e laço decorativo.',
  },
  {
    icon: '💌',
    title: 'Mensagem personalizada',
    desc: 'Inclua uma mensagem carinhosa no cartão da sua cesta sem custo adicional.',
  },
];

export function About() {
  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about__inner">
          {/* Features */}
          <div>
            <div className="section-eyebrow">Por que nos escolher</div>
            <h2 className="section-title">
              Feito com <strong>amor</strong><br />entregue com <strong>cuidado</strong>
            </h2>
            <div className="about__features">
              {features.map((f) => (
                <div key={f.title} className="about__feature">
                  <div className="about__feature-icon">{f.icon}</div>
                  <div>
                    <div className="about__feature-title">{f.title}</div>
                    <div className="about__feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="about__reviews" id="avaliacoes">
            <div className="section-eyebrow">Avaliações Google</div>
            <div className="about__stars">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="about__star">{s}</span>
              ))}
            </div>
            <div className="about__rating-info">
              <span className="about__rating-big">{storeInfo.googleRating.toFixed(1)}</span>
              <span className="about__rating-label">{storeInfo.reviewCount}+ avaliações</span>
            </div>
            <div className="about__reviews-list">
              {reviews.map((r) => (
                <div key={r.name} className="review-card">
                  <div className="review-card__header">
                    <div className="review-card__avatar">{r.initials}</div>
                    <div>
                      <div className="review-card__name">{r.name}</div>
                      <div className="review-card__stars">
                        {'★★★★★'.split('').map((s, i) => (
                          <span key={i} className="review-card__star">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="review-card__text">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoreMap() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeInfo.address)}`;

  return (
    <section id="localizacao" className="map-section">
      <div className="container">
        <div className="map-section__inner">
          {/* Info */}
          <div className="map-section__info">
            <div>
              <div className="section-eyebrow">Localização</div>
              <h2 className="section-title">
                Encontre<br /><strong>nossa loja</strong>
              </h2>
            </div>

            <div className="map-section__details">
              <div className="map-detail">
                <span className="map-detail__icon">📍</span>
                <div>
                  <div className="map-detail__label">Endereço</div>
                  <div className="map-detail__value">{storeInfo.address}</div>
                </div>
              </div>
              <div className="map-detail">
                <span className="map-detail__icon">🕐</span>
                <div>
                  <div className="map-detail__label">Horário</div>
                  <div className="map-detail__value">{storeInfo.hours}</div>
                </div>
              </div>
              <div className="map-detail">
                <span className="map-detail__icon">📱</span>
                <div>
                  <div className="map-detail__label">WhatsApp</div>
                  <div className="map-detail__value">{storeInfo.whatsappDisplay}</div>
                </div>
              </div>
              <div className="map-detail">
                <span className="map-detail__icon">📸</span>
                <div>
                  <div className="map-detail__label">Instagram</div>
                  <div className="map-detail__value">{storeInfo.instagram}</div>
                </div>
              </div>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="map-directions-btn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Como chegar
            </a>
          </div>

          {/* Map embed */}
          <div className="map-section__map">
            <iframe
              title="Sanja Doces no Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(storeInfo.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
