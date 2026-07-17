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
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

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

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <section className="bg-[#ebe4dd] min-h-screen py-10">
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="col-span-1">
          <Category filters={filters} setFilters={setFilters} />
        </div>

        <div className="col-span-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map(product => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded cursor-pointer ${currentPage === i + 1 ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
