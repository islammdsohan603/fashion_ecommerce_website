'use client';

import { useCart } from '@/contextapi/CartContext';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AddtoCadPage = () => {
  const { cart, totalPrice, updateQuantity } = useCart();

  return (
    <section className="bg-[#ded8d3] py-5 min-h-screen text-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-7xl mx-auto p-8 flex flex-col lg:flex-row gap-12"
      >
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-8 text-black">Shopping Bag</h1>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <motion.div
                key={`${item.id}-${item.color}-${item.size}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between border-b border-black/20 py-6"
              >
                <div className="flex items-center gap-6">
                  <Image
                    src={item.images[0]}
                    width={80}
                    height={80}
                    alt={item.name}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-bold text-lg text-black">
                      {item.name}
                    </h2>
                    <p className="text-black/70">
                      Color: {item.color} | Size: {item.size}
                    </p>

                    {/* Quantity Control */}
                    <div className="flex items-center gap-3 border border-black px-3 py-1 rounded-lg mt-2 w-fit">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="font-bold text-xl hover:text-gray-600"
                      >
                        -
                      </button>
                      <span className="font-bold w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="font-bold text-xl hover:text-gray-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-black">
                  ${(item.discountPrice * item.quantity).toFixed(2)}
                </p>
              </motion.div>
            ))
          )}
        </div>

        {/* Right Side: Order Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-96 border border-black p-6 rounded-2xl h-fit"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">Order Summary</h2>
          <div className="flex justify-between mb-2 font-medium">
            <span>Subtotal</span> <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-6 font-bold text-xl">
            <span>Total</span> <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full cursor-pointer bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300">
            Proceed to Checkout
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AddtoCadPage;
