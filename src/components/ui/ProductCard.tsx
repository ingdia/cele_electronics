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
      className="bg-white rounded-2xl p-4 shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100 flex flex-col justify-between group relative h-full"
    >
      
      {/* Top Badges & Wishlist Toggle */}
      <div className="flex items-center justify-between z-10">
        {product.originalPrice ? (
          <span className="bg-rose-500 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Save ${(product.originalPrice - product.price).toFixed(0)}
          </span>
        ) : product.isNew ? (
          <span className="bg-emerald-500 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            NEW
          </span>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="w-8 h-8 rounded-full bg-cream-50 hover:bg-cream-100 text-gray-500 hover:text-navy-900 flex items-center justify-center transition-colors"
            title="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              isWishlisted
                ? 'bg-rose-50 text-rose-500'
                : 'bg-cream-50 hover:bg-cream-100 text-gray-400 hover:text-rose-500'
            }`}
            title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Product Image Centered */}
      <div 
        onClick={() => setQuickViewProduct(product)}
        className="relative w-full h-40 my-3 cursor-pointer overflow-hidden rounded-xl bg-cream-50/50 flex items-center justify-center"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 group-hover:scale-108 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Product Information */}
      <div className="space-y-2 pt-1 flex-1 flex flex-col justify-end">
        
        {/* Star Rating & Review Count */}
        <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
          <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-gray-400 font-normal">({product.reviewCount})</span>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => setQuickViewProduct(product)}
          className="font-bold text-navy-900 text-xs sm:text-sm line-clamp-2 cursor-pointer hover:text-gold-600 transition-colors leading-tight h-10"
        >
          {product.name}
        </h3>

        {/* Price & Add to Cart Button */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-1">
          <div className="flex items-baseline gap-1">
            <span className="text-sm sm:text-base font-extrabold text-navy-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
            className="p-2.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl shadow-sm transition-all flex items-center justify-center"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4 text-gold-500" />
          </motion.button>
        </div>

      </div>

    </motion.div>
  );
};
