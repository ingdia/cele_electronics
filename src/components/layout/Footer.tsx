'use client';

import React, { useState } from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones, Send } from 'lucide-react';
import { useStore } from '@/context/StoreContext';

export const Footer = () => {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      showToast('Thank you for subscribing to Cele Electronics newsletter!', 'success');
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy-900 text-white mt-16 border-t border-navy-800">
      
      {/* Top 4 Perk Icons Row */}
      <div className="border-b border-navy-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/40 border border-navy-700/50">
            <div className="w-12 h-12 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Free Shipping</h4>
              <p className="text-xs text-gray-400">On orders over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/40 border border-navy-700/50">
            <div className="w-12 h-12 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Easy Returns</h4>
              <p className="text-xs text-gray-400">30-day return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/40 border border-navy-700/50">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Secure Payments</h4>
              <p className="text-xs text-gray-400">SSL encrypted checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/40 border border-navy-700/50">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">24/7 Support</h4>
              <p className="text-xs text-gray-400">We're here to help</p>
            </div>
          </div>

        </div>
      </div>

      {/* Newsletter Signup Row */}
      <div className="py-10 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Subscribe for exclusive deals</h3>
            <p className="text-xs text-gray-400 mt-1">Get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 w-full md:w-auto max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full bg-navy-800 text-white placeholder-gray-400 px-4 py-2.5 rounded-full text-xs border border-navy-700 focus:outline-none focus:border-gold-500"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-xs rounded-full transition-colors flex items-center gap-1.5 shrink-0 shadow-md"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 text-center text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2026 Cele Electronics. All rights reserved. Designed with modern tech excellence.</p>
        </div>
      </div>

    </footer>
  );
};
