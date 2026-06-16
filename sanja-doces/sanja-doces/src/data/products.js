

// ============================================================
// CATÁLOGO DE PRODUTOS - Edite aqui para adicionar/remover itens
// ============================================================

export const categories = [
  { id: 'coracao', label: '💝 Cestas Coração', icon: '💝' },
  { id: 'pelúcia', label: '🧸 Com Pelúcia', icon: '🧸' },
  { id: 'chocolate', label: '🍫 Chocolates', icon: '🍫' },
  { id: 'destaque', label: '⭐ Destaques', icon: '⭐' },
];

export const products = [
  // ── CESTAS CORAÇÃO ──────────────────────────────────────────
  {
    id: 1,
    category: 'coracao',
    featured: true,
    name: 'Coração de Luxo – Especial Dia dos Namorados',
    description:
      '1 Caixa Coração • 1 Caixa Ferrero 12un • 1 Caixa Rafaello 12un • 1 Barra Chocolate Milka • 1 Barra Chocolate Alpino • 1 Nutella 140g • 1 Kinder Bueno',
    price: 297.0,
    originalPrice: 349.9,
    discount: 15,
    emoji: '💖',
    badge: 'Mais Vendido',
  },
  {
    id: 2,
    category: 'coracao',
    featured: true,
    name: 'Coração de Luxo – Premium',
    description:
      '1 Caixa Coração • 2 Barras Chocolate Milka • 1 Barra Ferrero • 1 Nutella 140g • 1 Caixa Ferrero 4un • 1 Kinder Bueno',
    price: 249.9,
    emoji: '🤎',
    badge: null,
  },
  {
    id: 3,
    category: 'coracao',
    featured: false,
    name: 'Coração de Luxo – Ferrero',
    description:
      '1 Caixa Coração • 1 Caixa Ferrero 12un • 1 Barra Ferrero Ao Leite • 1 Barra Ferrero Branco • 1 Nutella 140g • 1 Kinder Bueno',
    price: 249.9,
    emoji: '🧡',
    badge: null,
  },
  {
    id: 4,
    category: 'coracao',
    featured: false,
    name: 'Coração de Luxo – Gigante',
    description:
      '1 Caixa Coração • 1 Barra Alpino 80g • 1 Barra Suflair Ao Leite • 1 Barra Sonho de Valsa • 1 Barra Ouro Branco • e muito mais!',
    price: 249.9,
    emoji: '💗',
    badge: 'Grande',
  },
  {
    id: 5,
    category: 'coracao',
    featured: false,
    name: 'Coração de Luxo – Sofisticado',
    description:
      '1 Caixa Coração • 1 Caixa Rafaello 12un • 1 Caixa Ferrero 4un • 1 Barra Chocolate Talento • 1 Nutella 140g',
    price: 197.0,
    emoji: '🖤',
    badge: null,
  },
  {
    id: 6,
    category: 'coracao',
    featured: false,
    name: 'Coração de Luxo – Grande',
    description:
      '1 Caixa Coração • 2 Barras Chocolate 80g • 1 Fini 80/90g • M&M 148g • 1 Nutella 140g • 1 Kinder Bueno • 1 Nutella B-Ready • 1 Snicker',
    price: 149.9,
    emoji: '❤️',
    badge: null,
  },
  {
    id: 7,
    category: 'coracao',
    featured: false,
    name: 'Coração de Luxo – Médio',
    description:
      '1 Caixa Coração • 1 Fini 80/90g • 1 Barra Alpino • 1 MeM 35g • 1 Nutella 140g • 1 Bis Xtra • 1 Snickers • 1 Kit Kat • 1 Twix 40g',
    price: 119.9,
    emoji: '❤️',
    badge: null,
  },
  {
    id: 8,
    category: 'coracao',
    featured: false,
    name: 'Coração de Luxo – Mini',
    description:
      '1 Caixa Coração • 1 Fini 80/90g • 1 Barra Ao Leite Lacta • 1 MeM 30g • 1 Bis Xtra • 1 Snickers • 1 Kit Kat Ao Leite • 1 Kit Kat Branco',
    price: 99.9,
    emoji: '❤️',
    badge: 'Mais vendido',
  },

  // ── CESTAS COM PELÚCIA ──────────────────────────────────────
  {
    id: 9,
    category: 'pelúcia',
    featured: true,
    name: 'Cesta Urso Gigante – Eu Te Amo',
    description:
      'Urso pelúcia gigante 60cm + Caixa Coração + Chocolates sortidos premium + Laço decorativo + Mensagem personalizada',
    price: 329.9,
    emoji: '🧸',
    badge: 'Exclusivo',
  },
  {
    id: 10,
    category: 'pelúcia',
    featured: true,
    name: 'Cesta Stitch & Angel',
    description:
      'Pelúcia Stitch 30cm + Pelúcia Angel 30cm + Mix de chocolates M&M, Ferrero, Nutella + Embalagem temática',
    price: 279.9,
    emoji: '💙',
    badge: 'Tendência',
  },
  {
    id: 11,
    category: 'pelúcia',
    featured: false,
    name: 'Cesta Mini Urso + Coração',
    description:
      'Urso pelúcia 25cm + 1 Caixa Coração + Fini + Barras de chocolate sortidas + Kit Kat + Snickers',
    price: 189.9,
    emoji: '🐻',
    badge: null,
  },

  // ── CHOCOLATES PREMIUM ──────────────────────────────────────
  {
    id: 12,
    category: 'chocolate',
    featured: false,
    name: 'Kit Ferrero Collection',
    description:
      '1 Caixa Ferrero Rocher 24un • 1 Caixa Rafaello 12un • 1 Caixa Ferrero Rondnoir 12un • Embalagem presente premium',
    price: 219.9,
    emoji: '🍫',
    badge: null,
  },
  {
    id: 13,
    category: 'chocolate',
    featured: false,
    name: 'Cesta Nutella Lovers',
    description:
      '2 Nutella 650g • Nutella B-Ready 6un • Kit Kat duo • Wafer sortido • Palha italiana artesanal',
    price: 169.9,
    emoji: '🍫',
    badge: null,
  },
];

// ============================================================
// INFORMAÇÕES DA LOJA – Edite aqui
// ============================================================
export const storeInfo = {
  name: 'Sanja Doces',
  subtitle: 'Cestas de Luxo',
  tagline: 'Presenteie com amor, surpreenda com sabor',
  whatsapp: '5512997222588',
  whatsappDisplay: '(12) 99722-2588',
  instagram: '@SANJADOCE',
  address: 'R. José Brás da Silva, 165 – Cidade Morumbi, São José dos Campos – SP',
  googleRating: 5.0,
  reviewCount: 527,
  hours: 'Seg–Sáb: 09h00–19h00 | Dom: 09h00–15h00',
  // Coordenadas Google Maps
  lat: -23.2237,
  lng: -45.9009,
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.87!2d-45.9009!3d-23.2237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzI1LjMiUyA0NcKwNTQnMDMuMiJX!5e0!3m2!1spt-BR!2sbr!4v1',
};
