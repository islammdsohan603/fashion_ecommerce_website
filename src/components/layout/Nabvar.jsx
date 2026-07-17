'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/contextapi/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems, totalPrice } = useCart();

  const menuItems = [
    { lavel: 'Shop', href: '/shop', id: 1 },
    { lavel: 'Men', href: '/men', id: 2 },
    { lavel: 'Women', href: '/women', id: 3 },
  ];

  return (
    <header className="bg-[#dad7cd] sticky top-0 z-50 py-4 shadow-sm">
      <nav className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/*  Mobail button*/}
        <button
          className="md:hidden text-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* logo*/}
        <Link href={'/'}>
          <h1 className="text-2xl font-bold tracking-tighter text-black">
            VELOURA
          </h1>
        </Link>

        {/* desktop menu*/}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {menuItems.map(item => (
            <Link
              key={item.id}
              href={`${item.href}`}
              className="text-black font-bold hover:underline underline-offset-4 decoration-1"
            >
              {item.lavel}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/*  Search Box*/}
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 200, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="bg-transparent text-black border-b font-semibold border-black outline-none mr-2"
                  placeholder="Search..."
                />
              )}
            </AnimatePresence>
            <Search
              className="cursor-pointer text-black"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            />
          </div>
          <Link href={'/addtocard'} className="relative">
            <ShoppingBag className="cursor-pointer text-black" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobail Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#dad7cd] text-black overflow-hidden flex flex-col items-center gap-6 py-6 border-t"
          >
            {menuItems.map(item => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                {item.lavel}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
