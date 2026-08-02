'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { ProductCard } from '@/components/ui/ProductCard';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { AuthModal } from '@/components/auth/AuthModal';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function WishlistPage() {
  const { wishlist, products, toggleWishlist } = useStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Get products that are in the wishlist
  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <main className="min-h-screen bg-cream">
      {/* Header & Nav */}
      <TopHeader onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      <SecondaryNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header Title */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900 flex items-center gap-2">
            <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
            <span>Your Personal Wishlist</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Keep track of electronic gadgets and items you're interested in buying later.
          </p>
        </div>

        {wishlistedProducts.length === 0 ? (
          /* Empty Wishlist View */
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white border border-gray-150 rounded-2xl shadow-soft">
            <Heart className="w-12 h-12 text-gray-300" />
            <h3 className="font-extrabold text-navy-900 text-base">Your Wishlist is Empty</h3>
            <p className="text-gray-500 text-xs max-w-xs font-light leading-relaxed">
              Explore the marketplace and click the heart icon on any device to save it here.
            </p>
            <Link
              href="/shop"
              className="px-6 py-2.5 bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold rounded-full shadow"
            >
              Start Exploring Products
            </Link>
          </div>
        ) : (
          /* Wishlist Items Grid */
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            <AnimatePresence>
              {wishlistedProducts.map((product) => (
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
        )}

      </div>

      {/* Floating Utilities */}
      <CartDrawer />
      <QuickViewModal />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Footer />
    </main>
  );
}
