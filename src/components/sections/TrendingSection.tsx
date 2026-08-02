'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { ProductCard } from '@/components/ui/ProductCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export const TrendingSection = () => {
  const { products, selectedCategory } = useStore();

  // Filter products by selected category or trending flag.
  // Display up to 12 items on the landing page for a richly populated catalog.
  const trendingProducts = products
    .filter(p => (selectedCategory ? p.category === selectedCategory : p.isTrending))
    .slice(0, 12);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900 flex items-center gap-2">
            <span>Trending Right Now</span>
            <span className="text-amber-500 animate-bounce">⚡</span>
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
            Top picks that everyone is loving this week
          </p>
        </div>

        <Link
          href="/shop"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid of Product Cards with AnimatePresence */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4"
      >
        <AnimatePresence mode="popLayout">
          {trendingProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
