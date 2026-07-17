'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Framer motion import
import { useCart } from '@/contextapi/CartContext';
import AddButton from '../addbutton/AddButton';

const DetailsCard = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 md:p-8 rounded-2xl text-black"
    >
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <div className="flex md:flex-col gap-3">
          {product.images.map((img, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              onClick={() => setActiveImage(img)}
              className={`relative w-16 h-20 md:w-20 md:h-24 cursor-pointer border-2 rounded-lg overflow-hidden ${
                activeImage === img ? 'border-black' : 'border-gray-200'
              }`}
            >
              <Image src={img} alt="thumbnail" fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="relative w-full h-[400px] md:h-[550px] lg:w-[450px] bg-gray-100 rounded-2xl overflow-hidden">
          <Image
            src={activeImage}
            alt={product.name}
            fill
            className="object-contain p-2"
          />
        </div>
      </div>

      <div className="flex-1 text-black">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold uppercase">
            {product.category} / {product.subcategory}
          </span>
          {product.bestSeller && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded text-black"
            >
              BEST SELLER
            </motion.span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
        <p className="mb-2 font-medium">Brand: {product.brand}</p>

        <div className="flex items-center gap-2 mb-4">
          <span className="font-bold">{product.rating} ★</span>
          <span className="opacity-80">({product.reviews} reviews)</span>
        </div>

        <div className="text-2xl font-bold mb-4">
          ${product.discountPrice}{' '}
          <span className="text-lg line-through opacity-60 ml-2">
            ${product.price}
          </span>
        </div>

        <p className="mb-6 leading-relaxed opacity-90">{product.description}</p>

        <div className="mb-6">
          <p className="font-semibold mb-2">Color: {selectedColor}</p>
          <div className="flex gap-3">
            {product.colors.map(color => (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border-2 rounded-lg font-medium transition ${
                  selectedColor === color
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 hover:border-black'
                }`}
              >
                {color}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="font-semibold mb-2">Select Size</p>
          <div className="flex gap-3">
            {product.sizes.map(size => (
              <motion.button
                whileTap={{ scale: 0.9 }}
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-14 h-12 border-2 rounded-lg font-medium transition ${
                  selectedSize === size
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 hover:border-black'
                }`}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mb-4 font-semibold">
          {product.inStock ? (
            <span className="text-green-700">● In Stock</span>
          ) : (
            <span className="text-red-700">Out of Stock</span>
          )}
        </div>

        <div className="flex flex-col gap-4 max-w-md">
          <AddButton
            product={product}
            selectedSize={selectedSize}
            selectedColor={selectedColor}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsCard;
