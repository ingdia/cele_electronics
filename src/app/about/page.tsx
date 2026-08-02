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
  Star, 
  Building2, 
  Sparkles,
  Phone,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const STATS = [
    { label: 'Rwanda & East Africa Shoppers', value: '500K+' },
    { label: 'Districts Delivered', value: '30/30' },
    { label: 'Verified Tech Products', value: '1,200+' },
    { label: 'Customer Rating', value: '4.9/5' }
  ];

  const LEADERSHIP_TEAM = [
    {
      name: 'Celestin Kwizera',
      role: 'Founder & Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Founded Cele Electronics in Kigali, Rwanda in 2020 to build East Africa’s premier electronics marketplace.'
    }
  ];

  const LOCATIONS = [
    { city: 'Kigali Heights (Main Store)', address: 'KG 7 Ave, Kigali Heights, 3rd Floor, Rwanda', type: 'Flagship Store & HQ', phone: '+250 787 335 768' },
    { city: 'Downtown Kigali Hub', address: 'KN 4 Ave, Commercial District, Kigali', type: 'Pickup & Repair Hub', phone: '+250 787 335 768' },
    { city: 'Musanze Hub', address: 'RN 4 Highway, Musanze City, Northern Province', type: 'Regional Express Hub', phone: '+250 787 335 768' }
  ];

  const REVIEWS = [
    {
      quote: "Ordered a laptop and earbuds in Kigali, delivered to my house in less than 4 hours! Excellent service in Rwanda.",
      author: "Patrick Kamanzi",
      title: "Verified Kigali Customer",
      rating: 5
    },
    {
      quote: "Cele Electronics is the best place to buy original phones and cables in Rwanda. The support team (+250787335768) is always helpful.",
      author: "Clarisse Umutoni",
      title: "Verified Shopper",
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
                <span>Rwanda's Premier Tech Store • Est. 2020</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                About Cele Electronics Rwanda
              </h1>
              <p className="text-gray-300 text-xs sm:text-base font-light leading-relaxed">
                Founded in Kigali, Rwanda in <strong>2020</strong> by <strong>Celestin Kwizera</strong>, Cele Electronics is dedicated to providing Rwanda and East Africa with 100% genuine smartphones, laptops, audio systems, smart home devices, and high-speed cables.
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-gold-500 hover:text-navy-900 font-bold text-xs px-7 py-3.5 rounded-full shadow-lg transition-all"
                >
                  <span>Explore Store Catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-2 text-xs font-bold text-gold-500 bg-white/10 px-4 py-3 rounded-full border border-white/15">
                  <Phone className="w-4 h-4" />
                  <span>Call Us: +250 787 335 768</span>
                </div>
              </div>
            </div>

            {/* Corporate Visual */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-white/10 shadow-floating">
              <Image
                src="/images/hero_woman.jpg"
                alt="Cele Electronics Rwanda Brand Ambassador"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs text-white">
                <p className="font-extrabold text-gold-500">Cele Electronics HQ • Kigali Heights</p>
                <p className="text-[10px] text-gray-300">KG 7 Ave, Kigali, Rwanda • Tel: +250 787 335 768</p>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Why Choose Cele Electronics Rwanda?</h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light">Built on fast delivery, warranty, and authentic tech in Rwanda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">100% Certified Authentic</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Directly sourced hardware with full manufacturer warranties valid across Rwanda.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">Same-Day Delivery in Kigali</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Express same-day doorstep delivery across Kigali and 24h delivery to all provinces in Rwanda.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">Rwanda Local Support</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Dedicated local Rwanda helpline (<strong>+250787335768</strong>) available in Kinyarwanda, English, and French.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-navy-900 text-sm">30-Day Easy Returns</h3>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Hassle-free return policy and instant warranty replacement at our Kigali Heights flagship center.
              </p>
            </div>
          </div>
        </div>

        {/* 4. Founder & Visionary */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Founder & CEO</h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light">The visionary behind Cele Electronics Rwanda.</p>
          </div>

          <div className="max-w-md mx-auto">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-150 shadow-soft space-y-4 text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-gold-500/30 shadow-md">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-black text-navy-900 text-xl">{member.name}</h3>
                  <p className="text-xs font-bold text-gold-600 uppercase tracking-widest">{member.role}</p>
                  <p className="text-gray-500 text-xs font-light pt-2 leading-relaxed max-w-xs mx-auto">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Rwanda Store Hubs */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-150 shadow-soft space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-gray-100 pb-4">
            <div>
              <h2 className="text-2xl font-extrabold text-navy-900">Physical Store Locations in Rwanda</h2>
              <p className="text-xs text-gray-500">Visit our tech stores or pickup hubs in Rwanda.</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-navy-900 bg-cream-200 px-3 py-1.5 rounded-full">
              <Globe className="w-4 h-4 text-gold-500" />
              <span>Rwanda Operations</span>
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
                <div className="flex items-center gap-1 text-xs text-navy-900 font-bold">
                  <Phone className="w-3 h-3 text-gold-500" />
                  <span>{loc.phone}</span>
                </div>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">What Rwanda Shoppers Say</h2>
            <p className="text-gray-500 text-xs sm:text-sm font-light">Trusted across Kigali and all provinces.</p>
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
          <h2 className="text-2xl sm:text-4xl font-extrabold">Ready to Shop Electronics in Rwanda?</h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light">
            Order online now with same-day Kigali delivery. Contact us at <strong>+250 787 335 768</strong> or use promo code <strong>CELE20</strong>.
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
