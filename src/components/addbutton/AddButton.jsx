'use client';
import React, { useState } from 'react';
import { useCart } from '@/contextapi/CartContext';

const AddButton = ({ product, selectedSize, selectedColor }) => {
  const [clicked, setIsClicked] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!product) return;

    const itemToAdd = {
      ...product,
      size: selectedSize,
      color: selectedColor,
    };

    addToCart(itemToAdd);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`cursor-pointer w-full py-2.5 rounded-xl font-semibold transition-all duration-300 ${
        clicked
          ? 'bg-green-600 text-white'
          : 'bg-black text-white hover:bg-gray-800'
      }`}
    >
      {clicked ? 'Added to Cart' : 'Add to Cart'}
    </button>
  );
};

export default AddButton;
