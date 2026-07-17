'use client';

import React, { useEffect } from 'react'; // useEffect import করুন
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useCart } from '@/contextapi/CartContext'; // CartContext import করুন

const SuccessPaymentPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <section className="min-h-screen bg-[#ded8d3] flex items-center justify-center p-6 text-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-md w-full"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle2 size={80} className="text-green-600" />
        </motion.div>

        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-black/70 mb-8">
          Thank you for your purchase. Your order has been placed successfully
          and is being processed.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer justify-center gap-2 w-full bg-black text-white py-3 rounded-xl font-semibold transition-all"
          >
            Back to Home <ArrowRight size={20} />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default SuccessPaymentPage;
