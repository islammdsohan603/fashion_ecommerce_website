'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  return (
    <footer className="bg-[#eae4dd] pt-20 pb-10 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
      >
        {/* Logo */}
        <div className="space-y-4">
          <h2 className="text-3xl text-black font-bold tracking-tighter">
            VELOURA
          </h2>
          <p className="text-black font-semibold leading-relaxed max-w-xs">
            Crafting modern elegance through minimalist design and
            uncompromising quality.
          </p>
        </div>

        {/* Shop Section */}
        <div>
          <h4 className="font-bold text-black mb-6">Shop</h4>
          <ul className="space-y-4 text-black">
            {['Shop', 'Men', 'Women'].map(item => (
              <li
                key={item}
                className=" font-semibold hover:underline cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="font-bold text-black mb-6">Support</h4>
          <ul className="space-y-4 text-black">
            {['Contact Us', 'Shipping & Returns', 'FAQ'].map(item => (
              <li
                key={item}
                className=" font-semibold hover:underline cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="font-bold text-black mb-6">Newsletter</h4>
          <p className="font-semibold text-black mb-4 text-sm">
            Subscribe for exclusive updates.
          </p>
          <div className="flex items-center border-b border-black pb-2">
            <input
              type="email"
              placeholder="Email Address"
              className=" font-semibold bg-transparent placeholder-black/60 outline-none w-full text-sm text-black"
            />
            <ArrowRight size={18} className="cursor-pointer text-black" />
          </div>
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="container max-w-7xl mx-auto border-t border-black/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-black">
        <p className=" font-semibold">
          &copy; 2024 VELOURA. All rights reserved.
        </p>
        <div className="flex gap-8">
          {['Instagram', 'Pinterest', 'Twitter'].map(social => (
            <span
              key={social}
              className="font-semibold hover:underline cursor-pointer transition-colors"
            >
              {social}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
