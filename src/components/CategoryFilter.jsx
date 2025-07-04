import React from 'react';

const CategoryFilter = ({ categories, onSelectCategory }) => {
  return (
    <div className="mb-6">
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
        Filtrar por categoría
      </label>
      <select
        id="category"
        onChange={(e) => onSelectCategory(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="all">Todas las categorías</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;