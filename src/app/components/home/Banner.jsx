'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FASHION_MODEL_IMG =
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop';

const FashionBanner = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#eae4dd] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-black/5 transform skew-x-[-15deg] origin-top-right z-0"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 grid grid-cols-1 md:grid-cols-12 items-center gap-12">
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative w-[300px] h-[500px] md:w-[380px] md:h-[600px] shadow-2xl rounded-sm overflow-hidden border-[12px] border-white/80"
          >
            {/* image animation*/}
            <motion.div className="w-full h-full relative">
              <Image
                src={FASHION_MODEL_IMG}
                alt="Modern Fashion Model"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ---  right side text --- */}
        <div className="col-span-12 md:col-span-7 text-center md:text-left flex flex-col items-center md:items-start pl-0 md:pl-12">
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-light text-[#1a1a1a] leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The Art of <br />
            <span className="font-medium">Modern</span> Elegance
          </motion.h1>

          <motion.button
            className="px-10  cursor-pointer py-4 bg-black text-white text-sm uppercase tracking-widest hover:bg-[#222] transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            EXPLORE COLLECTION
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FashionBanner;
