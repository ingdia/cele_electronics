'use client';

import React, { useState } from 'react';
import { 
  Truck, 
  RotateCcw, 
  ShieldCheck, 
  Headphones, 
  Send, 
  Mail, 
  MapPin, 
  Phone,
  CreditCard
} from 'lucide-react';
import { useStore } from '@/context/StoreContext';
import Link from 'next/link';

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
      
      {/* 1. Value Perks Row */}
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

      {/* 2. Main E-Commerce Directory & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        
        {/* Column 1: Brand Info & Socials */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-black text-2xl tracking-wider text-white">CELE</span>
            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">ELECTRONICS</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            Cele Electronics is a premium global tech store delivering cutting-edge devices, laptops, smartphones, wearables, and accessories.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="#" 
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="w-8 h-8 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="#" 
              aria-label="Youtube"
              className="w-8 h-8 rounded-full bg-navy-800 hover:bg-gold-500 hover:text-navy-900 flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.528 3.545 12 3.545 12 3.545s-7.528 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 002.11 2.11c1.86.508 9.388.508 9.388.508s7.528 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Shop Links */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="font-bold text-xs text-white uppercase tracking-wider">Shop Categories</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><Link href="/shop" className="hover:text-gold-500 transition-colors">Smartphones</Link></li>
            <li><Link href="/shop" className="hover:text-gold-500 transition-colors">Laptops & PCs</Link></li>
            <li><Link href="/shop" className="hover:text-gold-500 transition-colors">Audio Equipment</Link></li>
            <li><Link href="/shop" className="hover:text-gold-500 transition-colors">Smart Living</Link></li>
            <li><Link href="/shop" className="hover:text-gold-500 transition-colors">Wearables</Link></li>
            <li><Link href="/shop" className="hover:text-gold-500 transition-colors">Gaming Gear</Link></li>
          </ul>
        </div>

        {/* Column 3: Customer Support */}
        <div className="lg:col-span-2 space-y-3">
          <h3 className="font-bold text-xs text-white uppercase tracking-wider">Customer Support</h3>
          <ul className="space-y-2 text-xs text-gray-400">
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Help Center / FAQs</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Track Order</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Shipping & Delivery</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Returns & Refunds</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Warranty & Service</Link></li>
            <li><Link href="#" className="hover:text-gold-500 transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact & Newsletter Subscription */}
        <div className="lg:col-span-4 space-y-4">
          <h3 className="font-bold text-xs text-white uppercase tracking-wider">Join Our Newsletter</h3>
          <p className="text-[11px] text-gray-400 font-light">
            Stay up to date with fresh arrivals, exclusive summer sales, and member-only coupons.
          </p>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..."
              className="w-full bg-navy-800 text-white placeholder-gray-500 px-4 py-2 rounded-full text-xs border border-navy-700 focus:outline-none focus:border-gold-500"
            />
            <button
              type="submit"
              className="p-2 bg-gold-500 hover:bg-gold-600 text-navy-900 rounded-full transition-colors flex items-center justify-center shrink-0"
              title="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="space-y-2 pt-2 border-t border-navy-800 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span>100 Technology Plaza, San Jose, CA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-gold-500 shrink-0" />
              <span>(123) 456-7890</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. Bottom Payment Gateways & Licensing */}
      <div className="border-t border-navy-800 py-6 bg-navy-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          
          <div className="flex flex-wrap items-center gap-3">
            <span>Payment Options:</span>
            <div className="flex items-center gap-2 bg-navy-900 px-3 py-1 rounded-md border border-navy-800 text-[10px] font-bold">
              <CreditCard className="w-3.5 h-3.5 text-gold-500" />
              <span>VISA • MASTERCARD • PAYPAL • APPLE PAY • GOOGLE PAY</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="#" className="hover:text-gold-500 transition-colors">Terms of Service</Link>
            <span>•</span>
            <span>© 2026 Cele Electronics.</span>
          </div>

        </div>
      </div>

    </footer>
  );
};
