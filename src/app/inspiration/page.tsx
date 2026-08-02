'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { AuthModal } from '@/components/auth/AuthModal';
import { Sparkles, ShoppingBag, ArrowRight, Lightbulb, Compass } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const INSPIRATION_SETUPS = [
  {
    id: 'setup-1',
    title: 'Modern Minimalist Workstation',
    subtitle: 'Streamline your productivity with clean aesthetics and powerful laptop computing.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=80',
    featuredProducts: [
      { id: 'p8', name: 'UltraBook Slim 15 Laptop', price: 1199.99, category: 'Laptops' },
      { id: 'p9', name: 'Nylon Braided USB-C Cable (6ft)', price: 14.99, category: 'Accessories' }
    ]
  },
  {
    id: 'setup-2',
    title: 'Battlestation Gaming & Esports Cave',
    subtitle: 'Immerse yourself in high-fps gaming with 7.1 audio surround sound and VR motion control.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
    featuredProducts: [
      { id: 'p4', name: 'Gaming Headset', price: 59.99, category: 'Gaming' },
      { id: 'p12', name: 'VR Cyber headset Controller', price: 399.99, category: 'Gaming' }
    ]
  },
  {
    id: 'setup-3',
    title: 'Acoustic Studio & Hi-Fi Lounge',
    subtitle: 'Experience uncompressed audio clarity with active noise cancellation and room-filling bass.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
    featuredProducts: [
      { id: 'p1', name: 'Bluetooth Speaker', price: 49.99, category: 'Audio' },
      { id: 'p13', name: 'Noise Cancelling Headphones', price: 249.99, category: 'Audio' }
    ]
  },
  {
    id: 'setup-4',
    title: 'Smart Living & Eco Automation',
    subtitle: 'Automate ambient lighting, home climate control, and voice-assisted daily routines.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80',
    featuredProducts: [
      { id: 'p10', name: 'Smart Ambient Living Hub Light', price: 64.99, category: 'Smart Home' },
      { id: 'p14', name: 'Smart Thermostat Console', price: 129.99, category: 'Smart Home' }
    ]
  }
];

export default function InspirationPage() {
  const { products, addToCart } = useStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-cream">
      {/* Header & Navigation */}
      <TopHeader onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      <SecondaryNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Banner Section */}
        <div className="relative bg-navy-900 text-white rounded-2xl overflow-hidden shadow-card p-8 sm:p-12 border border-navy-800">
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-r from-purple-500 via-gold-500 to-teal-500 blur-3xl" />
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>Tech Ideas & Style Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Inspiration & Setup Showcases
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
              Explore curated room setups, workstation ideas, and high-tech lifestyle combinations designed by Cele Electronics. Click any featured item to add it directly to your setup.
            </p>
          </div>
        </div>

        {/* Setup Showcases Grid */}
        <div className="space-y-12">
          {INSPIRATION_SETUPS.map((setup, idx) => (
            <motion.div
              key={setup.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-gray-150 shadow-soft overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >
              {/* Setup Image Banner */}
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px]">
                <Image
                  src={setup.image}
                  alt={setup.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-gold-500/80 text-navy-900 px-2.5 py-0.5 rounded-full">
                    Setup #{idx + 1}
                  </span>
                  <h2 className="text-xl font-bold">{setup.title}</h2>
                </div>
              </div>

              {/* Setup Products List */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-navy-900 text-lg sm:text-xl">{setup.title}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{setup.subtitle}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1.5 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-gold-500" />
                    <span>Featured Tech In This Setup:</span>
                  </h4>

                  <div className="space-y-2">
                    {setup.featuredProducts.map(fp => {
                      const matchedProd = products.find(p => p.id === fp.id);
                      return (
                        <div key={fp.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-150 bg-[#F5F5F7]">
                          <div>
                            <h5 className="font-bold text-navy-900 text-xs">{fp.name}</h5>
                            <span className="text-[10px] text-gray-400 font-semibold">{fp.category}</span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <span className="font-extrabold text-xs text-navy-900">${fp.price.toFixed(2)}</span>
                            {matchedProd && (
                              <button
                                onClick={() => addToCart(matchedProd)}
                                className="p-2 bg-navy-900 hover:bg-navy-800 text-white rounded-lg transition-colors shadow"
                                title="Add to Cart"
                              >
                                <ShoppingBag className="w-3.5 h-3.5 text-gold-500" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors pt-2 group"
                >
                  <span>Explore full catalog for this setup</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      <CartDrawer />
      <QuickViewModal />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Footer />
    </main>
  );
}
