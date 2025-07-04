import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Tu Carrito</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Tu carrito está vacío</p>
          <Link to="/" className="text-indigo-600 hover:underline">
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Resumen</h2>
            <div className="border-b pb-4 mb-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>
            <Link
              to="/checkout"
              className="block w-full bg-indigo-600 text-white py-3 text-center rounded hover:bg-indigo-700 transition-colors"
            >
              Finalizar Compra
            </Link>
            <button
              onClick={clearCart}
              className="mt-3 w-full bg-gray-200 text-gray-800 py-3 rounded hover:bg-gray-300 transition-colors"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;