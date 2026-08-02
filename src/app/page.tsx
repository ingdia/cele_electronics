'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { CategorySidebar } from '@/components/layout/CategorySidebar';
import { HeroBanner } from '@/components/sections/HeroBanner';
import { BrowseCategories } from '@/components/sections/BrowseCategories';
import { TrendingSection } from '@/components/sections/TrendingSection';
import { DualBanners } from '@/components/sections/DualBanners';
import { FeaturedCollections } from '@/components/sections/FeaturedCollections';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { AuthModal } from '@/components/auth/AuthModal';

export default function Home() {
  const { role } = useStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-cream">
      {/* Main Header & Nav */}
      <TopHeader onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      <SecondaryNav />

      {role === 'client' ? (
        /* Client Customer View */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          
          {/* Main Hero & Sidebar Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left Category Sidebar */}
            <div className="lg:col-span-3 hidden lg:block">
              <CategorySidebar />
            </div>
            
            {/* Right Hero Banner */}
            <div className="lg:col-span-9 h-full">
              <HeroBanner />
            </div>
          </div>

          {/* Section 5: Browse Categories */}
          <BrowseCategories />

          {/* Section 6: Trending Products */}
          <TrendingSection />

          {/* Section 7: Dual Banners */}
          <DualBanners />

          {/* Section 8: Featured Collections */}
          <FeaturedCollections />

        </div>
      ) : (
        /* Shop Owner Admin View */
        <AdminDashboard />
      )}

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <CartDrawer />
      <QuickViewModal />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </main>
  );
}
