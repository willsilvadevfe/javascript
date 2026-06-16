# 🍫 Sanja Doces – Landing Page

Landing page SaaS profissional para a loja **Sanja Doces – Cestas de Luxo**.

---

## 🚀 Iniciar o projeto

```bash
npm install
npm run dev        # Desenvolvimento em http://localhost:5173
npm run build      # Build de produção
npm run preview    # Preview do build
```

---

## 📁 Estrutura de arquivos

```
src/
├── data/
│   └── products.js          ← ✏️  EDITE AQUI: produtos, categorias, info da loja
├── hooks/
│   ├── useCart.js            ← Lógica do carrinho (React hook)
│   └── useCheckout.js        ← Lógica de checkout PIX/cartão/WhatsApp
├── styles/
│   └── global.css            ← Design tokens (cores, tipografia, espaçamentos)
├── components/
│   ├── Header/               ← Navbar com sacola
│   ├── Hero/                 ← Seção principal com CTA
│   ├── ProductCard/          ← Grid de produtos com filtro por categoria
│   ├── Cart/                 ← Sidebar da sacola
│   ├── Checkout/             ← Modal de finalização (PIX + WhatsApp)
│   ├── StoreMap/             ← Seção "Sobre", avaliações e mapa
│   └── Footer/               ← Rodapé
└── App.jsx                   ← Orquestração dos componentes
```

---

## ✏️ Como adicionar/remover produtos

Edite apenas o arquivo `src/data/products.js`:

```js
// Adicionar produto:
{
  id: 99,                        // ID único
  category: 'coracao',           // coracao | pelúcia | chocolate
  featured: false,
  name: 'Cesta Nova',
  description: 'Descrição...',
  price: 199.90,
  originalPrice: 249.90,         // opcional, para mostrar desconto
  discount: 20,                  // opcional, porcentagem
  emoji: '🎁',
  badge: 'Novidade',             // opcional
},
```

---

## 🔌 Integrações

### WhatsApp API
Já integrado via link direto `wa.me`. O número está em `storeInfo.whatsapp`.
- Ao finalizar pedido, abre o WhatsApp com resumo completo formatado.
- Para webhook de confirmação, integre o [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp).

### Mapa / Localização
- Usa Google Maps Embed (sem chave, gratuito para embed básico).
- Para Maps JavaScript API completa: adicione sua chave em `.env.local`:
  ```
  VITE_GOOGLE_MAPS_KEY=sua_chave_aqui
  ```

### Pagamento PIX
Atualmente gera um código PIX estático de demonstração.
- Para integração real, use a gateway de sua preferência:
  - **Mercado Pago**: `POST /v1/payments` com `payment_method_id: pix`
  - **PagSeguro**: `/public/v1/orders` com `payment_method: PIX`
  - **Stripe** (com Pix): `PaymentIntent` com `payment_method_types: ['pix']`
- Substitua a função `generatePix` em `src/hooks/useCheckout.js`.

### Pagamento Cartão
- Para cartão presencial: confirmar via WhatsApp (já implementado).
- Para cartão online: integre Mercado Pago Checkout Pro ou Stripe Elements.

---

## 🎨 Personalizar cores / tema

Edite as variáveis CSS em `src/styles/global.css`:

```css
:root {
  --gold:    #C9A84C;  /* Cor dourada principal */
  --rose:    #C0697A;  /* Destaque rosê */
  --black:   #0a0a0a;  /* Fundo escuro */
  --cream:   #F5EDD8;  /* Texto claro */
}
```

---

## 📱 Responsividade

Totalmente responsivo para mobile, tablet e desktop.
Testado em telas de 320px a 1440px+.
