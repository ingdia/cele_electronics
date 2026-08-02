'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { BROWSE_CATEGORIES_CIRCLES } from '@/data/initialData';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const BrowseCategories = () => {
  const { selectedCategory, setSelectedCategory } = useStore();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  return (
    <section className="py-8 my-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
          Browse By Categories
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Explore our wide range of electronic devices for every need
        </p>
      </div>

      {/* Categories Row with animations */}
      <div className="relative flex items-center justify-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-none px-4 max-w-full"
        >
          {BROWSE_CATEGORIES_CIRCLES.map((cat) => {
            const isSelected = selectedCategory === cat.categoryId;

            return (
              <motion.button
                key={cat.categoryId}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(isSelected ? null : cat.categoryId)}
                className="flex flex-col items-center group shrink-0"
              >
                {/* Real Image Container */}
                <div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden border-2 transition-all duration-300 shadow-sm ${
                    isSelected
                      ? 'border-gold-500 scale-105 shadow-md ring-4 ring-gold-500/20'
                      : 'border-white group-hover:border-navy-900/40 group-hover:shadow-md'
                  }`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-navy-900/0 transition-colors" />
                </div>
                
                <span className={`text-xs font-bold mt-2.5 transition-colors ${
                  isSelected ? 'text-navy-900' : 'text-gray-600 group-hover:text-navy-900'
                }`}>
                  {cat.name}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Scroll Right Arrow Button */}
        <button 
          onClick={() => setSelectedCategory(null)}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-card border border-gray-200 items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-white transition-all z-10 hover:scale-105 active:scale-95"
          title="Reset filters"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
