'use client';
import React, { useState } from 'react';
import products from '@/data/products.json';
import ProductsCard from '@/components/shopproductscard/ProductsCard';
import Category from '@/components/addbutton/Category';

const ShopPage = () => {
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    sort: 'default',
  });

  let filteredProducts = products.filter(product => {
    const matchCategory =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const matchSize =
      filters.size.length === 0 ||
      product.sizes.some(s => filters.size.includes(s));
    return matchCategory && matchSize;
  });

  if (filters.sort === 'lowToHigh')
    filteredProducts.sort((a, b) => a.discountPrice - b.discountPrice);
  if (filters.sort === 'highToLow')
    filteredProducts.sort((a, b) => b.discountPrice - a.discountPrice);

  return (
    <section className="bg-[#ebe4dd] min-h-screen py-10">
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="col-span-1">
          <Category filters={filters} setFilters={setFilters} />
        </div>

        <div className="col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
