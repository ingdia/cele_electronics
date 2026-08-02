'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';
import Image from 'next/image';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist } = useStore();

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity" 
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-floating max-w-3xl w-full p-6 sm:p-8 border border-gray-150 animate-in zoom-in-95 duration-200 z-10 flex flex-col md:flex-row gap-6">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-cream-100 text-gray-500 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Panel */}
        <div className="flex-1 min-h-[250px] relative bg-cream-50 rounded-2xl p-4 flex items-center justify-center">
          <Image
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Product Details Panel */}
        <div className="flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold tracking-widest uppercase bg-gold-500/10 text-gold-600 px-2.5 py-1 rounded-full">
              {quickViewProduct.category.toUpperCase()}
            </span>

            <h3 className="font-extrabold text-navy-900 text-lg sm:text-xl leading-snug">
              {quickViewProduct.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
              <Star className="w-4 h-4 fill-amber-400 stroke-amber-400" />
              <span>{quickViewProduct.rating.toFixed(1)}</span>
              <span className="text-gray-400 font-normal">({quickViewProduct.reviewCount} reviews)</span>
            </div>

            <p className="text-navy-900 font-black text-2xl pt-1">
              ${quickViewProduct.price.toFixed(2)}
              {quickViewProduct.originalPrice && (
                <span className="text-sm font-normal text-gray-400 line-through ml-2">
                  ${quickViewProduct.originalPrice.toFixed(2)}
                </span>
              )}
            </p>

            <p className="text-gray-500 text-xs leading-relaxed font-light pt-2">
              {quickViewProduct.description}
            </p>
          </div>

          {/* Specs List */}
          {quickViewProduct.specs && (
            <div className="bg-cream-50 p-3 rounded-xl border border-gray-100 text-[11px] space-y-1">
              <h4 className="font-bold text-navy-900">Technical Specifications:</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-600">
                {Object.entries(quickViewProduct.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between border-b border-gray-150/40 py-0.5">
                    <span className="font-semibold">{key}:</span>
                    <span className="text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                addToCart(quickViewProduct);
                setQuickViewProduct(null);
              }}
              className="flex-1 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-gold-500" />
              <span>Add to Cart</span>
            </button>

            <button
              onClick={() => toggleWishlist(quickViewProduct.id)}
              className={`px-4 rounded-full border flex items-center justify-center transition-colors ${
                isWishlisted
                  ? 'bg-rose-50 border-rose-200 text-rose-500'
                  : 'bg-white border-gray-200 hover:bg-cream-50 text-gray-400'
              }`}
              title="Add to wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
            </button>
          </div>

          {/* Safety badges */}
          <div className="flex items-center gap-4 text-[10px] text-gray-500 pt-1 font-medium border-t border-gray-50">
            <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-gold-500" /> Free Shipping</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-teal-500" /> 1-Year Warranty</span>
          </div>

        </div>

      </div>
    </div>
  );
};
