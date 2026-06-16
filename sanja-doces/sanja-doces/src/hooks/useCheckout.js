import { useState, useCallback } from 'react';
import { storeInfo } from '../data/products';

export function useCheckout(cart) {
  const [step, setStep] = useState('idle'); // idle | form | pix | card | confirming | done
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    complement: '',
    paymentMethod: 'pix', // pix | card
    message: '',
  });
  const [pixCode, setPixCode] = useState(null);
  const [error, setError] = useState(null);

  const updateForm = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Build WhatsApp order message
  const buildWhatsAppMessage = useCallback(() => {
    const lines = [
      `*Novo Pedido – Sanja Doces* 🍫`,
      ``,
      `*Cliente:* ${form.name}`,
      `*Telefone:* ${form.phone}`,
      `*Endereço:* ${form.address}${form.complement ? ', ' + form.complement : ''}`,
      `*Pagamento:* ${form.paymentMethod === 'pix' ? 'PIX' : 'Cartão'}`,
      ``,
      `*Itens do Pedido:*`,
      ...cart.items.map(
        (i) =>
          `• ${i.emoji} ${i.name} x${i.quantity} — R$ ${(i.price * i.quantity).toFixed(2).replace('.', ',')}`
      ),
      ``,
      `*Total: R$ ${cart.total.toFixed(2).replace('.', ',')}*`,
      form.message ? `\n*Mensagem:* ${form.message}` : '',
    ];
    return encodeURIComponent(lines.filter(Boolean).join('\n'));
  }, [form, cart]);

  // Simulated PIX generation (replace with real payment gateway)
  const generatePix = useCallback(async () => {
    setStep('pix');
    // TODO: Integrate real PIX API (Mercado Pago, PagSeguro, Stripe etc.)
    // Example: POST /api/payments/pix with { amount: cart.total, orderId }
    // For now we simulate a static PIX copy-paste code
    setPixCode({
      code: `00020126580014BR.GOV.BCB.PIX0136${storeInfo.whatsapp}5204000053039865406${cart.total.toFixed(2).replace('.', '')}5802BR5913SanjaDoces6015SaoJoseCampos62070503***6304ABCD`,
      qr: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PAGUE_SANJA_DOCES_R$${cart.total.toFixed(2)}`,
      amount: cart.total,
    });
  }, [cart.total]);

  const sendWhatsAppOrder = useCallback(() => {
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${storeInfo.whatsapp}?text=${msg}`, '_blank');
    setStep('done');
  }, [buildWhatsAppMessage]);

  const startCheckout = useCallback(() => setStep('form'), []);
  const reset = useCallback(() => {
    setStep('idle');
    setPixCode(null);
    setError(null);
    setForm({ name: '', phone: '', address: '', complement: '', paymentMethod: 'pix', message: '' });
  }, []);

  return {
    step,
    setStep,
    form,
    updateForm,
    pixCode,
    error,
    generatePix,
    sendWhatsAppOrder,
    startCheckout,
    reset,
  };
}
