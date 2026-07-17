'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProductsCard = ({ product }) => {
  const [clicked, setIsClicked] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="bg-[#ded8d3] p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative h-64 w-full mb-4 overflow-hidden rounded-xl">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="px-1">
        <h3 className="text-lg text-black font-bold truncate">
          {product.name}
        </h3>
        <p className="text-gray-500 font-medium text-sm mb-1">
          {product.brand}
        </p>
        <p className="font-bold text-black text-xl mb-4">
          ${product.discountPrice}
        </p>
      </div>

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
  );
};

export default ProductsCard;
