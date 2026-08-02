'use client';

import React from 'react';
import { Product } from '@/types';
import { useStore } from '@/context/StoreContext';
import { Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist, setQuickViewProduct } = useStore();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, type: 'spring', stiffness: 200 }}
      className="bg-white rounded-2xl p-2.5 sm:p-4 shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100/50 flex flex-col justify-between group relative h-full"
    >
      
      {/* Top Badges & Wishlist Toggle */}
      <div className="flex items-center justify-between z-10 mb-1">
        {product.originalPrice ? (
          <span className="bg-rose-500 text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
            -${(product.originalPrice - product.price).toFixed(0)}
          </span>
        ) : product.isNew ? (
          <span className="bg-emerald-500 text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider shadow-sm">
            NEW
          </span>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-1">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cream-50 hover:bg-cream-100 text-gray-500 hover:text-navy-900 flex items-center justify-center transition-colors"
            title="Quick view"
          >
            <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors ${
              isWishlisted
                ? 'bg-rose-50 text-rose-500'
                : 'bg-cream-50 hover:bg-cream-100 text-gray-400 hover:text-rose-500'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Product Image Centered */}
      <div 
        onClick={() => setQuickViewProduct(product)}
        className="relative w-full h-32 sm:h-48 cursor-pointer overflow-hidden rounded-xl bg-[#F5F5F7] border border-gray-150/40 flex items-center justify-center"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover w-full h-full group-hover:scale-108 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      {/* Product Information */}
      <div className="space-y-1.5 pt-2 flex-1 flex flex-col justify-end">
        
        {/* Star Rating & Review Count */}
        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-amber-500 font-bold">
          <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 stroke-amber-400" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-gray-400 font-normal">({product.reviewCount})</span>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => setQuickViewProduct(product)}
          className="font-bold text-navy-900 text-xs sm:text-sm line-clamp-2 cursor-pointer hover:text-gold-600 transition-colors leading-tight h-8 sm:h-10"
        >
          {product.name}
        </h3>

        {/* Price & Add to Cart Button */}
        <div className="flex items-center justify-between pt-1.5 border-t border-gray-50 mt-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-1">
            <span className="text-xs sm:text-base font-black text-navy-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[9px] sm:text-[10px] text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product)}
            className="px-2 py-1.5 sm:px-3 sm:py-2 bg-navy-900 hover:bg-navy-800 text-white rounded-lg text-[10px] sm:text-xs font-bold transition-all shadow flex items-center gap-1 shrink-0"
          >
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gold-500" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

      </div>

    </motion.div>
  );
};
