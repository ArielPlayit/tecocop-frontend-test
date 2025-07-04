import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Error al cargar el producto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <div className="text-center py-10">Cargando...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;
  if (!product) return <div className="text-center py-10">Producto no encontrado</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-indigo-600 hover:underline mb-4 inline-block">
          &larr; Volver
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="h-64 object-contain"
              />
            </div>
            <div className="p-8">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-700 text-xl font-semibold mb-4">${product.price}</p>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-sm text-gray-500 mb-4">Categoría: {product.category}</p>
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition-colors"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;