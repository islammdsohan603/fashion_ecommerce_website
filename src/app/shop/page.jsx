'use client';
import React, { useState, useEffect } from 'react';
import products from '@/data/products.json';
import ProductsCard from '@/components/shopproductscard/ProductsCard';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }, // কার্ডগুলো একের পর এক আসবে
  },
};

const ShopPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#ebe4dd] min-h-screen">
      <div className="container max-w-7xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="col-span-1">
            <h1 className="text-2xl text-black font-bold sticky top-10">
              All Products
            </h1>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={loading ? 'hidden' : 'visible'}
            className="col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {loading
              ? Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-96 bg-gray-300 animate-pulse rounded-2xl"
                  ></div>
                ))
              : products.map(product => (
                  <ProductsCard key={product.id} product={product} />
                ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
