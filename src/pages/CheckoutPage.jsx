import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useForm } from 'react-hook-form';

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(`Compra realizada. Gracias, ${data.nombre}`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Confirmar Compra</h1>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Resumen de tu pedido</h2>
        <ul className="mb-6">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between py-2 border-b">
              <span>{item.title} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between text-lg font-bold mb-6">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="mb-6">
          <h3 className="font-medium mb-2">Información de envío</h3>
          <div className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input 
                {...register('nombre', { required: 'El nombre es obligatorio' })}
                className="w-full p-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ingresa tu nombre"
              />
              {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>}
            </div>

            {/* Dirección */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
              <input 
                {...register('direccion', 
                  { required: 'La dirección es obligatoria',
                    pattern: {
                      value: /^[A-Za-z0-9\s\.,#\-]{5,}$/,
                      message: 'La dirección debe tener al menos 5 caracteres y un formato válido'
                    }})}
                className="w-full p-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ingresa tu dirección"
              />
              {errors.direccion && <p className="text-red-500 text-sm mt-1">{errors.direccion.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                {...register('email', {
                  required: 'El email es obligatorio',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'El email no es válido'
                  }
                })}
                className="w-full p-2 border border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Ingresa tu email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition-colors"
          >
            Confirmar Compra
          </button>
        </form>
        
        <Link 
          to="/cart" 
          className="inline-block text-indigo-600 hover:underline"
        >
          Volver al carrito
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
