'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { ProductCard } from '@/components/ui/ProductCard';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { AuthModal } from '@/components/auth/AuthModal';
import { BROWSE_CATEGORIES_CIRCLES } from '@/data/initialData';
import { Grid, List, SlidersHorizontal, Tag, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ShopContent() {
  const { products, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useStore();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Filter States
  const [activeFilter, setActiveFilter] = useState<'all' | 'deals' | 'new'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');
  const [priceRange, setPriceRange] = useState<number>(1500);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Read URL search params
  useEffect(() => {
    const filterParam = searchParams.get('filter');
    const categoryParam = searchParams.get('category');

    if (filterParam === 'deals') setActiveFilter('deals');
    else if (filterParam === 'new') setActiveFilter('new');
    else setActiveFilter('all');

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams, setSelectedCategory]);

  // Handle category sidebar selection
  const handleCategorySelect = (catId: string | null) => {
    setSelectedCategory(catId);
    // Sync with router
    if (catId) {
      router.push(`/shop?category=${catId}`);
    } else {
      router.push('/shop');
    }
  };

  // Filter and Sort Logic
  const filteredProducts = products
    .filter(product => {
      // 1. Category Filter
      if (selectedCategory && product.category !== selectedCategory) return false;

      // 2. Search Query Filter
      if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;

      // 3. Tab Filter (All vs Deals vs New)
      if (activeFilter === 'deals' && !product.originalPrice) return false;
      if (activeFilter === 'new' && !product.isNew) return false;

      // 4. Price Filter
      if (product.price > priceRange) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default order
    });

  return (
    <main className="min-h-screen bg-cream">
      {/* Header & Navigation */}
      <TopHeader onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      <SecondaryNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Banner Section */}
        <div className="relative bg-navy-900 text-white rounded-2xl overflow-hidden shadow-card p-8 border border-navy-800">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-r from-teal-500 to-gold-500 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-[10px] font-extrabold uppercase tracking-wider mb-2">
                <span>Cele Marketplace</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black">
                {activeFilter === 'deals' && '🔥 Hot Deals & Promotions'}
                {activeFilter === 'new' && '✨ Fresh New Arrivals'}
                {activeFilter === 'all' && 'Explore Our Full Catalog'}
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 font-light mt-1">
                Browse, sort, and filter high-quality components and electronic devices.
              </p>
            </div>

            {/* Quick Promo Badges */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-center text-xs">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Promo Code</p>
                <p className="font-extrabold text-gold-500 mt-0.5">CELE20</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 text-center text-xs">
                <p className="text-[10px] text-gray-400 font-bold uppercase">Discount</p>
                <p className="font-extrabold text-emerald-400 mt-0.5">20% OFF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filters (All, Hot Deals, New Arrivals) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2 bg-cream-200 p-1 rounded-full border border-gray-150 w-fit">
            <button
              onClick={() => {
                setActiveFilter('all');
                router.push('/shop');
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-navy-900'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => {
                setActiveFilter('deals');
                router.push('/shop?filter=deals');
              }}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'deals'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-rose-600'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>Hot Deals</span>
            </button>
            <button
              onClick={() => {
                setActiveFilter('new');
                router.push('/shop?filter=new');
              }}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === 'new'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-emerald-600'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>New Arrivals</span>
            </button>
          </div>

          {/* View Toggles & Sorting Controls */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs font-bold border border-gray-200 rounded-xl p-2.5 focus:outline-none focus:border-navy-900 bg-white"
            >
              <option value="default">Sort by: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating: Highest First</option>
            </select>

            <div className="flex items-center border border-gray-200 rounded-xl p-1 bg-white">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg ${viewMode === 'grid' ? 'bg-cream-200 text-navy-900' : 'text-gray-400 hover:text-navy-900'}`}
                title="Grid View"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg ${viewMode === 'list' ? 'bg-cream-200 text-navy-900' : 'text-gray-400 hover:text-navy-900'}`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Filters + Catalog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Filter Sidebar Panel */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Category Filter List */}
            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-soft space-y-4">
              <h3 className="font-extrabold text-navy-900 text-sm border-b border-gray-100 pb-2">Filter by Category</h3>
              <div className="space-y-1.5">
                <button
                  onClick={() => handleCategorySelect(null)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === null
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-cream-200 hover:text-navy-900'
                  }`}
                >
                  All Categories
                </button>
                {BROWSE_CATEGORIES_CIRCLES.map((cat) => (
                  <button
                    key={cat.categoryId}
                    onClick={() => handleCategorySelect(cat.categoryId)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat.categoryId
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-cream-200 hover:text-navy-900'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter Slider */}
            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-soft space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <h3 className="font-extrabold text-navy-900 text-sm">Max Price</h3>
                <span className="text-xs font-black text-navy-900">${priceRange}</span>
              </div>
              <input
                type="range"
                min="10"
                max="1500"
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-navy-900"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold">
                <span>$10</span>
                <span>$1500</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Catalog Display */}
          <div className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white border border-gray-150 rounded-2xl shadow-soft">
                <SlidersHorizontal className="w-12 h-12 text-gray-300" />
                <h3 className="font-extrabold text-navy-900 text-base">No Products Found</h3>
                <p className="text-gray-500 text-xs max-w-xs font-light leading-relaxed">
                  Try adjusting your filters, selecting a different category, or resetting the search query.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange(1500);
                    setActiveFilter('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2.5 bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold rounded-full shadow"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <motion.div 
                layout
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'
                    : 'flex flex-col gap-4'
                }
              >
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {viewMode === 'grid' ? (
                        <ProductCard product={product} />
                      ) : (
                        /* List Mode Card layout */
                        <div className="bg-white rounded-2xl p-4 border border-gray-150 flex flex-col sm:flex-row gap-4 items-center justify-between shadow-soft hover:shadow-card transition-all">
                          <div className="flex gap-4 items-center">
                            <div className="relative w-28 h-28 bg-cream-50 rounded-xl overflow-hidden shrink-0 border border-gray-100 flex items-center justify-center">
                              <img src={product.image} alt={product.name} className="object-contain p-2 max-h-full" />
                            </div>
                            <div className="space-y-1.5">
                              <span className="text-[9px] font-bold bg-navy-100 text-navy-900 px-2 py-0.5 rounded-full uppercase tracking-wider">{product.category}</span>
                              <h3 className="font-extrabold text-navy-900 text-sm leading-tight">{product.name}</h3>
                              <p className="text-gray-500 text-xs font-light line-clamp-2 max-w-md">{product.description}</p>
                            </div>
                          </div>
                          <div className="flex flex-col items-center sm:items-end justify-between gap-3 shrink-0 pt-2 sm:pt-0">
                            <div className="text-right">
                              <span className="text-base font-black text-navy-900">${product.price.toFixed(2)}</span>
                              {product.originalPrice && <p className="text-[10px] text-gray-400 line-through">${product.originalPrice.toFixed(2)}</p>}
                            </div>
                            <button
                              onClick={() => useStore().addToCart(product)}
                              className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold text-xs shadow flex items-center gap-1.5"
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

        </div>

      </div>

      {/* Slide-out & Modal Utilities */}
      <CartDrawer />
      <QuickViewModal />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Footer />
    </main>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center">Loading Cele Shop...</div>}>
      <ShopContent />
    </Suspense>
  );
}
