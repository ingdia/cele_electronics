'use client';

import React, { useState } from 'react';
import { Menu, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useStore } from '@/context/StoreContext';

export const SecondaryNav = () => {
  const { setSelectedCategory } = useStore();
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  return (
    <nav className="bg-navy-900 text-white border-t border-navy-800 relative z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
        
        {/* Left: Shop by Categories Button */}
        <div className="relative">
          <button
            onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
            className="flex items-center gap-2.5 bg-navy-800 hover:bg-navy-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors border border-navy-700 shadow-inner"
          >
            <Menu className="w-4 h-4 text-gold-500" />
            <span>Shop by Categories</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Category Dropdown */}
          {isCategoryMenuOpen && (
            <div 
              className="absolute left-0 mt-2 w-64 bg-white text-navy-900 rounded-2xl shadow-floating py-2 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200"
              onMouseLeave={() => setIsCategoryMenuOpen(false)}
            >
              {[
                { name: 'Smartphones & Tablets', id: 'smartphones' },
                { name: 'Laptops & Computers', id: 'laptops' },
                { name: 'Audio & Headphones', id: 'audio' },
                { name: 'Smart Home Devices', id: 'smarthome' },
                { name: 'Gaming & Consoles', id: 'gaming' },
                { name: 'Wearable Tech', id: 'wearables' },
                { name: 'Cameras & Drones', id: 'cameras' },
                { name: 'Accessories & Cables', id: 'accessories' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setIsCategoryMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2.5 text-xs font-medium hover:bg-cream-100 hover:text-navy-900 transition-colors flex items-center justify-between"
                >
                  <span>{cat.name}</span>
                  <span className="text-gray-400">→</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium tracking-wide">
          <Link 
            href="/shop" 
            onClick={() => setSelectedCategory(null)}
            className="hover:text-gold-500 transition-colors"
          >
            Shop
          </Link>
          <Link 
            href="/shop?filter=deals" 
            className="hover:text-gold-500 transition-colors flex items-center gap-1 text-gold-400"
          >
            <span>Deals</span>
            <span className="bg-rose-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase">HOT</span>
          </Link>
          <Link href="/shop?filter=new" className="hover:text-gold-500 transition-colors">
            New Arrivals
          </Link>
          <Link href="/#brands" className="hover:text-gold-500 transition-colors">
            Brands
          </Link>
          <Link href="/#inspiration" className="hover:text-gold-500 transition-colors">
            Inspiration
          </Link>
        </div>

        {/* Right: Support */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-200">
          <Phone className="w-3.5 h-3.5 text-gold-500" />
          <span>Support: <strong className="text-white">(123) 456-7890</strong></span>
        </div>

      </div>
    </nav>
  );
};
