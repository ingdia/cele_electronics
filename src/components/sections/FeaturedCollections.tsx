'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useStore } from '@/context/StoreContext';

export const FeaturedCollections = () => {
  const { setSelectedCategory } = useStore();

  const COLLECTIONS = [
    {
      id: 'smarthome',
      title: 'Smart Living',
      subtitle: 'Smart home ecosystem',
      bg: 'bg-emerald-50 border-emerald-100',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 'gaming',
      title: 'Gaming Zone',
      subtitle: 'Level up your setup',
      bg: 'bg-blue-50 border-blue-100',
      image: '/images/gaming_headset.jpg',
    },
    {
      id: 'audio',
      title: 'Audio Excellence',
      subtitle: 'Pure studio sound',
      bg: 'bg-amber-50 border-amber-100',
      image: '/images/bluetooth_speaker.jpg',
    },
    {
      id: 'wearables',
      title: 'Wearable Tech',
      subtitle: 'Next-gen health track',
      bg: 'bg-rose-50 border-rose-100',
      image: '/images/smart_watch.jpg',
      hasDiagonalArrow: true
    }
  ];

  return (
    <section className="py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-navy-900">
            Featured Collections
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
            Curated collections to match your lifestyle
          </p>
        </div>

        <Link
          href="/shop"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-900 hover:text-gold-600 transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid of 4 Collection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {COLLECTIONS.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedCategory(item.id)}
            className={`relative rounded-2xl p-5 border ${item.bg} shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[220px] overflow-hidden`}
          >
            {/* Top Text Content */}
            <div className="z-10">
              <h3 className="font-extrabold text-navy-900 text-lg group-hover:text-gold-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
            </div>

            {/* Diagonal Arrow for the 4th card as specified in mockup */}
            {item.hasDiagonalArrow && (
              <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
              </div>
            )}

            {/* Collection Image */}
            <div className="relative w-full h-28 my-2 z-10">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain group-hover:scale-108 transition-transform duration-500"
              />
            </div>

            {/* CTA Link */}
            <div className="z-10 pt-2 flex items-center gap-1.5 text-xs font-extrabold text-navy-900 group-hover:text-gold-600">
              <span>Shop now</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
