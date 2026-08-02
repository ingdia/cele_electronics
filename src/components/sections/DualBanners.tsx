'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const DualBanners = () => {
  return (
    <section className="py-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Left Banner: Summer Sale (Soft Mint/Teal Gradient) */}
      <div className="relative bg-gradient-to-r from-teal-100 via-emerald-100 to-teal-50 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-card border border-teal-200/60 flex items-center justify-between min-h-[220px]">
        <div className="space-y-3 max-w-[60%] z-10">
          <span className="text-[11px] font-extrabold tracking-widest uppercase text-teal-800 bg-white/70 px-2.5 py-1 rounded-full border border-teal-200">
            SUMMER SALE
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
            Up To 50% Off On Bestsellers
          </h3>
          <Link
            href="/shop?filter=sale"
            className="inline-flex items-center gap-2 bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold px-5 py-2.5 rounded-full shadow-md transition-all duration-200"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Tech Accessory / Headphones Image */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0">
          <Image
            src="/images/bluetooth_speaker.jpg"
            alt="Summer Sale Bestseller Tech Accessory"
            fill
            className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Right Banner: New Arrivals (Soft Beige/Cream) */}
      <div className="relative bg-gradient-to-r from-cream-100 via-cream-50 to-amber-50 rounded-2xl p-6 sm:p-8 overflow-hidden shadow-card border border-amber-200/60 flex items-center justify-between min-h-[220px]">
        <div className="space-y-3 max-w-[60%] z-10">
          <span className="text-[11px] font-extrabold tracking-widest uppercase text-amber-800 bg-white/70 px-2.5 py-1 rounded-full border border-amber-200">
            NEW ARRIVALS
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-navy-900 leading-tight">
            Fresh Finds You'll Love
          </h3>
          <Link
            href="/shop?filter=new"
            className="inline-flex items-center gap-2 bg-white text-navy-900 hover:bg-navy-900 hover:text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-md transition-all duration-200 border border-gray-200"
          >
            <span>Explore Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Wireless Earbuds / Gadget Image */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0">
          <Image
            src="/images/wireless_earbuds.jpg"
            alt="New Arrivals Electronic Device"
            fill
            className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

    </section>
  );
};
