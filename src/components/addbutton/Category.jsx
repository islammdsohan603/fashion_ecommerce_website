'use client';
import React from 'react';
import products from '@/data/products.json';

const Category = ({ filters, setFilters }) => {
  const categories = [...new Set(products.map(p => p.category))];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="space-y-6 text-black">
      {/* Category Filter */}
      <div>
        <h3 className="font-bold mb-2">CATEGORY</h3>
        {categories.map(cat => (
          <label
            key={cat}
            className="flex items-center gap-2 cursor-pointer hover:underline"
          >
            <input
              type="checkbox"
              checked={filters.category.includes(cat)}
              onChange={() =>
                setFilters(prev => ({
                  ...prev,
                  category: prev.category.includes(cat)
                    ? prev.category.filter(c => c !== cat)
                    : [...prev.category, cat],
                }))
              }
            />{' '}
            {cat}
          </label>
        ))}
      </div>

      {/* Size Filter */}
      <div>
        <h3 className="font-bold mb-2">SIZE</h3>
        <div className="flex gap-2 flex-wrap">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() =>
                setFilters(prev => ({
                  ...prev,
                  size: prev.size.includes(size)
                    ? prev.size.filter(s => s !== size)
                    : [...prev.size, size],
                }))
              }
              className={`px-3 py-1 border rounded ${filters.size.includes(size) ? 'bg-black text-white' : 'bg-white'}`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Filter */}
      <div>
        <h3 className="font-bold mb-2">SORT BY</h3>
        <select
          onChange={e =>
            setFilters(prev => ({ ...prev, sort: e.target.value }))
          }
          className="w-full p-2 border rounded"
        >
          <option value="default">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Category;
