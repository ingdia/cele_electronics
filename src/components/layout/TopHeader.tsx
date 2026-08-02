'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Search, User, Heart, ShoppingBag, Bell } from 'lucide-react';
import Link from 'next/link';

interface TopHeaderProps {
  onOpenAuthModal?: () => void;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onOpenAuthModal }) => {
  const { cartCount, wishlist, setIsCartOpen, searchQuery, setSearchQuery, role, setRole, showToast } = useStore();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
  };

  const handleLogout = () => {
    setRole('client');
    showToast('Logged out successfully.', 'info');
  };

  return (
    <div className="w-full">
      {/* Real-World Promotional Banner at the top */}
      <div className="bg-black text-white text-[10px] sm:text-xs font-bold py-2 px-4 text-center tracking-widest uppercase flex items-center justify-center gap-2 border-b border-navy-900">
        <span className="bg-gold-500 text-navy-900 px-1.5 py-0.5 rounded text-[8px] font-black animate-pulse">PROMO</span>
        <span>FREE SHIPPING ON ORDERS OVER $50 • USE CODE <strong className="text-gold-500 font-extrabold">CELE20</strong> FOR 20% OFF!</span>
      </div>

      <header className="bg-white shadow-soft sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between gap-4">
          
          {/* Left: Custom Circuit Logo matching the user's uploaded logo exactly */}
          <Link href="/" className="flex items-center gap-3.5 group shrink-0">
            {/* Styled Hexagon Emblem */}
            <div className="relative w-12 h-12 flex items-center justify-center text-navy-900 group-hover:scale-105 transition-transform">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full fill-none stroke-navy-900 stroke-[5.5] stroke-linejoin-miter"
              >
                {/* Outer Hexagon */}
                <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
                {/* Inner Circuit-like lines resembling a symmetric 'C' and 'E' structure */}
                <path d="M 28,38 L 40,38 L 40,62 L 28,62" />
                <path d="M 50,30 L 50,70" />
                <path d="M 72,38 L 60,38 L 60,62 L 72,62" />
                <path d="M 40,50 L 60,50" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-navy-900 leading-none">
                  CELE
                </span>
                <span className="text-xs font-bold tracking-widest text-navy-900 uppercase">
                  ELECTRONICS
                </span>
              </div>
              <span className="text-[7.5px] font-bold tracking-[0.22em] text-gray-500 uppercase mt-1">
                WORLD - CLASS TECH STORE
              </span>
            </div>
          </Link>

          {/* Center: Wide Rounded Search Bar for Desktop */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="flex-1 max-w-xl hidden md:flex items-center relative"
          >
            <div className="relative w-full flex items-center">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  setSearchQuery(e.target.value);
                }}
                placeholder="Search for gadgets, devices and more..."
                className="w-full bg-cream-50 hover:bg-white focus:bg-white border border-gray-200 focus:border-navy-900 text-navy-900 placeholder-gray-400 rounded-full py-2 left-0 pl-10 pr-24 text-xs focus:outline-none focus:ring-2 focus:ring-navy-900/10 transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-1 px-4 py-1.5 bg-navy-900 hover:bg-navy-800 text-white rounded-full text-[10px] font-bold transition-colors shadow"
              >
                Search
              </button>
            </div>
          </form>

          {/* Right: User Icons */}
          <div className="flex items-center gap-1 sm:gap-3">
            
            {/* Account Icon */}
            <div className="relative group">
              <button
                onClick={onOpenAuthModal}
                className="flex flex-col items-center justify-center p-2 rounded-xl text-navy-900 hover:bg-cream-100 transition-colors group relative"
                title="User Account"
              >
                <User className="w-5 h-5 group-hover:scale-105 transition-transform" />
                <span className="text-[10px] font-bold text-gray-500 hidden lg:block mt-0.5">
                  {role === 'owner' ? 'Admin' : 'Account'}
                </span>
              </button>

              {role === 'owner' && (
                <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-150 rounded-xl shadow-floating py-1.5 hidden group-hover:block z-50 text-xs">
                  <div className="px-3 py-1 text-gray-400 font-bold uppercase text-[8px] tracking-wider">Owner Actions</div>
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-1.5 hover:bg-rose-50 text-rose-600 font-bold transition-colors"
                  >
                    Logout Admin
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              className="flex flex-col items-center justify-center p-2 rounded-xl text-navy-900 hover:bg-cream-100 transition-colors group relative"
              title="Wishlist"
            >
              <div className="relative">
                <Heart className="w-5 h-5 group-hover:scale-105 transition-transform" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-rose-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-bold text-gray-500 hidden lg:block mt-0.5">Wishlist</span>
            </Link>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex flex-col items-center justify-center p-2 rounded-xl text-navy-900 hover:bg-cream-100 transition-colors group relative"
              title="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform" />
                <span className="absolute -top-1.5 -right-2 bg-gold-500 text-navy-900 text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 hidden lg:block mt-0.5">Cart</span>
            </button>

          </div>
        </div>

        {/* Mobile Search Bar Row */}
        <div className="px-4 pb-2.5 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                setSearchQuery(e.target.value);
              }}
              placeholder="Search gadgets & devices..."
              className="w-full bg-cream-50 focus:bg-white border border-gray-200 focus:border-navy-900 text-navy-900 placeholder-gray-400 rounded-full py-1.5 pl-9 pr-20 text-xs focus:outline-none focus:ring-1 focus:ring-navy-900/10 shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-1 px-3 py-1 bg-navy-900 text-white rounded-full text-[9px] font-bold shadow"
            >
              Search
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};
