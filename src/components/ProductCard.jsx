import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-contain p-4"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{product.title}</h3>
        <p className="text-gray-800 font-bold">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;