'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import products from '@/data/products.json';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NewArrivals = () => {
  const topRatedProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  const [clicked, setIsClicked] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-6 bg-[#ebe4dd]">
      <div className="container max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-black font-semibold text-3xl font-serif mb-2">
              New Arrivals
            </h2>
            <p className="text-gray-800 font-semibold">
              The latest additions to our signature collection.
            </p>
          </div>
          <Link
            href={'/shop'}
            className="text-black font-semibold hover:underline duration-700"
          >
            View all
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {topRatedProducts.map(product => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group cursor-pointer bg-[#ded8d3] p-4 rounded-2xl"
            >
              <div className="relative w-full h-[350px] md:h-[400px] lg:h-[350px] overflow-hidden rounded-lg mb-4">
                <Image
                  src={product.images[1]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 668px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-black font-semibold text-lg">
                {product.name}
              </h3>
              <p className="text-black mb-3">${product.discountPrice}</p>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setIsClicked(true)}
                  className={`cursor-pointer w-full py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    clicked
                      ? 'bg-green-600 text-white'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {clicked ? 'Added to Cart' : 'Add to Cart'}
                </button>

                <Link
                  href={`/products/${product.id}`}
                  className="w-full text-black text-center py-2.5 rounded-xl border border-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewArrivals;
