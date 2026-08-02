'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  Home, 
  Gamepad2, 
  Watch, 
  Camera, 
  Tv, 
  Plug, 
  Tag, 
  Gift, 
  ChevronRight,
  ChevronDown 
} from 'lucide-react';

const CATEGORY_ITEMS = [
  { id: 'smartphones', label: 'Smartphones & Tablets', icon: Smartphone },
  { id: 'laptops', label: 'Laptops & Computers', icon: Laptop },
  { id: 'audio', label: 'Audio & Headphones', icon: Headphones },
  { id: 'smarthome', label: 'Smart Home Devices', icon: Home },
  { id: 'gaming', label: 'Gaming & Consoles', icon: Gamepad2 },
  { id: 'wearables', label: 'Wearable Tech', icon: Watch },
  { id: 'cameras', label: 'Cameras & Drones', icon: Camera },
  { id: 'tv', label: 'TV & Home Theater', icon: Tv },
  { id: 'accessories', label: 'Accessories', icon: Plug },
  { id: 'offers', label: 'Top Offers', icon: Tag, highlight: true },
  { id: 'giftcards', label: 'Gift Cards', icon: Gift },
];

export const CategorySidebar = () => {
  const { selectedCategory, setSelectedCategory } = useStore();

  return (
    <div className="bg-white rounded-2xl p-4 shadow-card border border-gray-100/80 w-full h-full flex flex-col justify-between">
      
      {/* Title Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-gray-100">
        <h3 className="font-bold text-navy-900 text-sm flex items-center gap-2">
          <span>Shop by Categories</span>
        </h3>
        <ChevronDown className="w-4 h-4 text-navy-900" />
      </div>

      {/* Category List */}
      <div className="space-y-1 overflow-y-auto max-h-[460px] pr-1">
        {CATEGORY_ITEMS.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedCategory === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedCategory(isSelected ? null : item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                isSelected
                  ? 'bg-navy-900 text-white font-semibold shadow-sm'
                  : item.highlight
                  ? 'text-rose-600 hover:bg-rose-50'
                  : 'text-gray-700 hover:bg-cream-100 hover:text-navy-900'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                  isSelected ? 'text-gold-500' : 'text-navy-900/80'
                }`} />
                <span>{item.label}</span>
              </div>
              <ChevronRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 ${
                isSelected ? 'text-gold-500' : 'text-gray-400'
              }`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
