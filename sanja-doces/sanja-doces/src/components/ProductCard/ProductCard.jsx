import { useState } from 'react';
import './ProductCard.css';
import { products, categories } from '../../data/products';

function ProductCard({ product, cartItem, onAdd, onUpdate }) {
  const qty = cartItem?.quantity ?? 0;

  return (
    <article className="product-card animate-fadeIn">
      <div className="product-card__img">
        {product.emoji}
        {product.badge && (
          <span className={`product-card__badge${product.discount ? ' product-card__badge--discount' : ''}`}>
            {product.discount ? `-${product.discount}%` : product.badge}
          </span>
        )}
      </div>

      <div className="product-card__body">
        <div className="product-card__emoji">{product.emoji}</div>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__footer">
          <div className="product-card__pricing">
            {product.originalPrice && (
              <div className="product-card__original">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </div>
            )}
            <div className="product-card__price">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </div>
          </div>

          {qty === 0 ? (
            <button className="product-card__add" onClick={() => onAdd(product)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14"/>
              </svg>
              Adicionar
            </button>
          ) : (
            <div className="product-card__qty">
              <button
                className="product-card__qty-btn"
                onClick={() => onUpdate(product.id, qty - 1)}
                aria-label="Remover um"
              >
                −
              </button>
              <span className="product-card__qty-num">{qty}</span>
              <button
                className="product-card__qty-btn"
                onClick={() => onUpdate(product.id, qty + 1)}
                aria-label="Adicionar um"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Products({ cartItems, onAdd, onUpdate }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const allTab = { id: 'all', label: '✨ Todos', icon: '✨' };
  const tabs = [allTab, ...categories];

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produtos" className="products">
      <div className="container">
        <div className="products__header">
          <div className="section-eyebrow">Nosso catálogo</div>
          <h2 className="section-title">
            Cestas feitas com <strong>carinho</strong>
          </h2>
        </div>

        <div className="products__tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`products__tab${activeCategory === tab.id ? ' active' : ''}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cartItem={cartItems.find((i) => i.id === product.id)}
              onAdd={onAdd}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
