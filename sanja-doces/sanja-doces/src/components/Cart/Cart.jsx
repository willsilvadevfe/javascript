import './Cart.css';

export default function Cart({ cart, onClose, onCheckout }) {
  const { items, total, itemCount, removeItem, updateQuantity } = cart;

  return (
    <div className="cart-overlay" role="dialog" aria-label="Sacola de compras">
      <div className="cart-overlay__backdrop" onClick={onClose} />

      <div className="cart-overlay__panel">
        {/* Header */}
        <div className="cart__header">
          <div>
            <span className="cart__title">Sacola</span>
            <span className="cart__count">({itemCount} {itemCount === 1 ? 'item' : 'itens'})</span>
          </div>
          <button className="cart__close" onClick={onClose} aria-label="Fechar sacola">✕</button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="cart__empty">
            <div className="cart__empty-icon">🛍️</div>
            <p className="cart__empty-text">Sua sacola está vazia.<br />Adicione produtos para continuar.</p>
          </div>
        ) : (
          <div className="cart__items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__emoji">{item.emoji}</div>
                <div className="cart-item__info">
                  <div className="cart-item__name">{item.name}</div>
                  <div className="cart-item__unit">R$ {item.price.toFixed(2).replace('.', ',')} cada</div>
                </div>
                <div className="cart-item__controls">
                  <span className="cart-item__price">
                    R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                  <div className="cart-item__qty">
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Diminuir"
                    >−</button>
                    <span className="cart-item__qty-num">{item.quantity}</span>
                    <button
                      className="cart-item__qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Aumentar"
                    >+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart__footer">
            <div className="cart__summary">
              <div className="cart__summary-row">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="cart__summary-row">
                <span>Entrega</span>
                <span style={{ color: 'var(--success)' }}>A calcular</span>
              </div>
              <div className="cart__summary-row total">
                <span>Total</span>
                <span className="amount">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <button className="cart__checkout-btn" onClick={onCheckout}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Finalizar pedido
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
