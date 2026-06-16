import { useState } from 'react';
import './Checkout.css';

export default function Checkout({ checkout, cart, onClose }) {
  const {
    step, form, updateForm, pixCode,
    generatePix, sendWhatsAppOrder, startCheckout, reset, setStep,
  } = checkout;
  const [copied, setCopied] = useState(false);

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (form.paymentMethod === 'pix') {
      generatePix();
    } else {
      // Card: send via WhatsApp with note about card payment
      sendWhatsAppOrder();
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-overlay__backdrop" onClick={handleClose} />

      <div className="checkout-modal">
        {/* STEP: form */}
        {step === 'form' && (
          <>
            <div className="checkout__header">
              <span className="checkout__title">Finalizar Pedido</span>
              <button className="checkout__close" onClick={handleClose}>✕</button>
            </div>
            <div className="checkout__body">
              {/* Order summary */}
              <div className="checkout__summary">
                <div className="checkout__summary-title">Resumo</div>
                {cart.items.map((item) => (
                  <div key={item.id} className="checkout__summary-item">
                    <span>{item.emoji} {item.name} × {item.quantity}</span>
                    <span>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  </div>
                ))}
                <div className="checkout__summary-total">
                  <span>Total</span>
                  <span className="amount">R$ {cart.total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmitForm} style={{ display: 'contents' }}>
                <div className="checkout__field">
                  <label className="checkout__label">Seu nome *</label>
                  <input
                    className="checkout__input"
                    required
                    placeholder="Nome completo"
                    value={form.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                  />
                </div>
                <div className="checkout__field">
                  <label className="checkout__label">WhatsApp *</label>
                  <input
                    className="checkout__input"
                    required
                    placeholder="(12) 99999-9999"
                    value={form.phone}
                    onChange={(e) => updateForm('phone', e.target.value)}
                  />
                </div>
                <div className="checkout__field">
                  <label className="checkout__label">Endereço de entrega *</label>
                  <input
                    className="checkout__input"
                    required
                    placeholder="Rua, número, bairro"
                    value={form.address}
                    onChange={(e) => updateForm('address', e.target.value)}
                  />
                </div>
                <div className="checkout__field">
                  <label className="checkout__label">Complemento</label>
                  <input
                    className="checkout__input"
                    placeholder="Apto, bloco, referência..."
                    value={form.complement}
                    onChange={(e) => updateForm('complement', e.target.value)}
                  />
                </div>
                <div className="checkout__field">
                  <label className="checkout__label">Mensagem para o cartão (opcional)</label>
                  <textarea
                    className="checkout__input"
                    rows={3}
                    placeholder="Escreva uma mensagem carinhosa..."
                    value={form.message}
                    onChange={(e) => updateForm('message', e.target.value)}
                    style={{ resize: 'vertical' }}
                  />
                </div>

                {/* Payment method */}
                <div className="checkout__field">
                  <label className="checkout__label">Forma de pagamento</label>
                  <div className="checkout__payment-tabs">
                    {[
                      { id: 'pix', icon: '⚡', label: 'PIX', sub: '5% desconto' },
                      { id: 'card', icon: '💳', label: 'Cartão', sub: 'Débito / Crédito' },
                    ].map((m) => (
                      <div
                        key={m.id}
                        className={`checkout__payment-tab${form.paymentMethod === m.id ? ' active' : ''}`}
                        onClick={() => updateForm('paymentMethod', m.id)}
                      >
                        <div className="checkout__payment-icon">{m.icon}</div>
                        <div className="checkout__payment-label">{m.label}</div>
                        <div className="checkout__payment-sub">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="checkout__submit">
                  {form.paymentMethod === 'pix' ? (
                    <>⚡ Gerar código PIX</>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      Confirmar via WhatsApp
                    </>
                  )}
                </button>
              </form>
            </div>
          </>
        )}

        {/* STEP: pix */}
        {step === 'pix' && pixCode && (
          <>
            <div className="checkout__header">
              <span className="checkout__title">Pagar com PIX</span>
              <button className="checkout__close" onClick={handleClose}>✕</button>
            </div>
            <div className="checkout__body">
              <div className="pix-section">
                <div className="pix-section__title">⚡ Pagamento PIX</div>
                <div className="pix-section__amount">R$ {pixCode.amount.toFixed(2).replace('.', ',')}</div>

                <div className="pix-section__qr">
                  <img
                    src={pixCode.qr}
                    alt="QR Code PIX"
                    width={200}
                    height={200}
                  />
                </div>

                <div style={{ width: '100%' }}>
                  <div style={{ fontSize: 'var(--size-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-2)', textAlign: 'center' }}>
                    Ou copie o código PIX:
                  </div>
                  <div className="pix-section__code">{pixCode.code}</div>
                </div>

                <button className="pix-section__copy-btn" onClick={handleCopyPix}>
                  {copied ? '✓ Copiado!' : '📋 Copiar código PIX'}
                </button>

                <p className="pix-section__note">
                  Após o pagamento, envie o comprovante pelo WhatsApp para confirmar seu pedido.
                </p>

                <button className="checkout__whatsapp-btn" onClick={sendWhatsAppOrder}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Enviar pedido + comprovante
                </button>
              </div>
            </div>
          </>
        )}

        {/* STEP: done */}
        {step === 'done' && (
          <div className="checkout__body">
            <div className="checkout__done">
              <div className="checkout__done-icon">🎉</div>
              <div className="checkout__done-title">Pedido enviado!</div>
              <p className="checkout__done-desc">
                Seu pedido foi encaminhado pelo WhatsApp.<br />
                Em breve nossa equipe irá confirmar e combinar a entrega.
              </p>
              <button className="checkout__submit" onClick={handleClose} style={{ marginTop: 'var(--space-4)' }}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
