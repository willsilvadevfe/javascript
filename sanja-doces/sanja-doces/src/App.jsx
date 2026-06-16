import { useRef } from 'react';
import './styles/global.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/ProductCard/ProductCard';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { About, StoreMap } from './components/StoreMap/StoreMap';
import Footer from './components/Footer/Footer';

import { useCart } from './hooks/useCart';
import { useCheckout } from './hooks/useCheckout';

export default function App() {
  const cart = useCart();
  const checkout = useCheckout(cart);
  const productsRef = useRef(null);

  const handleCartOpen = () => cart.setIsOpen(true);
  const handleCartClose = () => cart.setIsOpen(false);

  const handleCheckoutOpen = () => {
    cart.setIsOpen(false);
    checkout.startCheckout();
  };

  const handleCheckoutClose = () => {
    checkout.reset();
    if (checkout.step === 'done') cart.clearCart();
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Navigation ── */}
      <Header
        itemCount={cart.itemCount}
        onCartOpen={handleCartOpen}
      />

      {/* ── Hero ── */}
      <Hero onShopClick={scrollToProducts} />

      {/* ── Products ── */}
      <div ref={productsRef}>
        <Products
          cartItems={cart.items}
          onAdd={cart.addItem}
          onUpdate={cart.updateQuantity}
        />
      </div>

      {/* ── About & Reviews ── */}
      <About />

      {/* ── Store Map ── */}
      <StoreMap />

      {/* ── Footer ── */}
      <Footer />

      {/* ── Cart Sidebar ── */}
      {cart.isOpen && (
        <Cart
          cart={cart}
          onClose={handleCartClose}
          onCheckout={handleCheckoutOpen}
        />
      )}

      {/* ── Checkout Modal ── */}
      {(checkout.step !== 'idle') && (
        <Checkout
          checkout={checkout}
          cart={cart}
          onClose={handleCheckoutClose}
        />
      )}
    </>
  );
}
