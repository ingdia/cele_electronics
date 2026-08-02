'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { AuthModal } from '@/components/auth/AuthModal';
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  Award, 
  Truck, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Building2, 
  Sparkles,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const STATS = [
    { label: 'Happy Customers', value: '2.5M+' },
    { label: 'Countries Shipped', value: '85+' },
    { label: 'Verified Tech Products', value: '1,200+' },
    { label: 'Customer Rating', value: '4.9/5' }
  ];

  const LEADERSHIP_TEAM = [
    {
      name: 'Elena Rostova',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      bio: 'Former VP of Consumer Hardware with 15+ years scaling global tech retail.'
    },
    {
      name: 'Marcus Vance',
      role: 'Head of Product Engineering',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Pioneered quality assurance pipelines for high-end audio and mobile devices.'
    },
    {
      name: 'Sophia Chen',
      role: 'VP of Customer Experience',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      bio: 'Leads our 24/7 technical support network and 30-day customer guarantee policy.'
    }
  ];

  const LOCATIONS = [
    { city: 'San Jose, CA', address: '100 Technology Plaza, CA 95110', type: 'Global HQ & Flagship Store' },
    { city: 'London, UK', address: '45 Tech Hub Avenue, EC2A 4NE', type: 'European Logistics Center' },
    { city: 'Tokyo, Japan', address: 'Akihabara Tech Tower, Tokyo 101-0021', type: 'Asia-Pacific Testing Lab' }
  ];

  const REVIEWS = [
    {
      quote: "Cele Electronics delivered my laptop in less than 24 hours. The packaging, build quality, and customer support were top tier!",
      author: "David Miller",
      title: "Verified Tech Enthusiast",
      rating: 5
    },
    {
      quote: "I've bought headsets, cables, and smart home lighting from Cele. Everything works seamlessly together.",
      author: "Amanda Ruiz",
      title: "Verified Buyer",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-cream">
      {/* Header & Navigation */}
      <TopHeader onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      <SecondaryNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* 1. Hero Showcase Banner */}
        <div className="relative bg-navy-900 text-white rounded-3xl overflow-hidden p-8 sm:p-14 border border-navy-800 shadow-card">
          <div className="absolute inset-0 opacity-25 bg-gradient-to-r from-gold-500 via-teal-500 to-indigo-500 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Story & Mission</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Redefining How The World Shops For Electronics.
              </h1>
              <p className="text-gray-300 text-xs sm:text-base font-light leading-relaxed">
                Founded in 2026, Cele Electronics is on a mission to connect people with world-class technology. From flagship 5G smartphones to studio audio and smart home ecosystems, we deliver verified tech right to your doorstep.
              </p>
              
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-gold-500 hover:text-navy-900 font-bold text-xs px-7 py-3.5 rounded-full shadow-lg transition-all"
                >
                  <span>Explore Store Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Corporate Visual */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-white/10 shadow-floating">
              <Image
                src="/images/hero_woman.jpg"
                alt="Cele Electronics Corporate Ambassador"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-white">
                <p className="font-extrabold text-gold-500">Cele Electronics HQ</p>
                <p className="text-[10px] text-gray-300">San Jose, California • 100% Quality Verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Key Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft text-center space-y-1">
              <p className="text-2xl sm:text-4xl font-black text-navy-900">{stat.value}</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* 3. Four Core Pillars */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Why Shop With Cele Electronics?</h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light">Built on trust, speed, and hardware authenticity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">100% Certified Authentic</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                We work directly with original hardware manufacturers to guarantee genuine components and full warranties.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">Express Worldwide Express</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Dispatched from local logistics hubs within 12 hours. Free express delivery on orders over $50.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">30-Day Money-Back</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Not satisfied with your device? Return it within 30 days for a zero-hassle full refund or exchange.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">24/7 Tech Specialists</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Our team of certified technicians is on standby to help you setup, troubleshoot, or choose gear.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Leadership Team */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Leadership & Hardware Experts</h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light">The visionaries behind Cele Electronics platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-150 shadow-soft space-y-4 text-center">
                <div className="relative w-28 h-28 rounded-full overflow-hidden mx-auto border-2 border-gold-500/40">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-extrabold text-navy-900 text-base">{member.name}</h3>
                  <p className="text-xs font-bold text-gold-600 uppercase tracking-wide">{member.role}</p>
                  <p className="text-gray-500 text-xs font-light pt-2 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Global Store Locations */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-150 shadow-soft space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900">Global Hubs & Testing Facilities</h2>
              <p className="text-xs text-gray-500">Visit our flagship technology hubs around the world.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900 bg-cream-200 px-3 py-1.5 rounded-full">
              <Globe className="w-4 h-4 text-gold-500" />
              <span>Worldwide Operations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LOCATIONS.map((loc, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-150 bg-[#F5F5F7] space-y-2">
                <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
                  <Building2 className="w-4 h-4 text-gold-500" />
                  <span>{loc.city}</span>
                </div>
                <p className="text-xs text-gray-500 font-light">{loc.address}</p>
                <span className="inline-block bg-white text-[10px] font-bold text-gray-600 px-2 py-0.5 rounded border border-gray-200">
                  {loc.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Customer Reviews Wall */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">What Our Customers Say</h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light">Trusted by over 2.5 million shoppers worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-navy-900 font-medium italic leading-relaxed">"{rev.quote}"</p>
                <div className="pt-2 border-t border-gray-100">
                  <p className="font-bold text-xs text-navy-900">{rev.author}</p>
                  <p className="text-[10px] text-gray-400">{rev.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Call To Action Banner */}
        <div className="relative bg-navy-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-navy-800 shadow-card">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to Upgrade Your Tech Setup?</h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light">
            Browse through over 1,200 verified electronic devices with 20% OFF using promo code <strong>CELE20</strong>.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-extrabold text-xs px-8 py-3.5 rounded-full shadow-lg transition-all"
            >
              <span>Explore Marketplace Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      <CartDrawer />
      <QuickViewModal />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Footer />
    </main>
  );
}
