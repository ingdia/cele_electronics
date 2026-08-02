'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@/context/StoreContext';
import { Home, Grid, ShoppingBag, Heart, User } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenAuthModal?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenAuthModal }) => {
  const pathname = usePathname();
  const { cartCount, wishlist, role } = useStore();

  const NAV_ITEMS = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Shop', href: '/shop', icon: Grid },
    { label: 'Cart', href: '/cart', icon: ShoppingBag, badge: cartCount },
    { label: 'Wishlist', href: '/wishlist', icon: Heart, badge: wishlist.length },
    { label: role === 'owner' ? 'Admin' : 'Account', href: '/account', icon: User, isAccount: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-floating px-2 py-1.5">
      <div className="flex items-center justify-around">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.isAccount && role !== 'owner') {
            return (
              <button
                key={item.label}
                onClick={() => {
                  if (onOpenAuthModal) onOpenAuthModal();
                }}
                className="flex flex-col items-center justify-center py-1 px-2 text-navy-900 group"
              >
                <div className="relative">
                  <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-gold-500 stroke-[2.5]' : 'text-gray-500'}`} />
                </div>
                <span className={`text-[10px] font-bold mt-0.5 ${isActive ? 'text-navy-900 font-extrabold' : 'text-gray-500'}`}>
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center py-1 px-2 text-navy-900 group"
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110 text-gold-500 stroke-[2.5]' : 'text-gray-500'}`} />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 bg-rose-500 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] font-bold mt-0.5 ${isActive ? 'text-navy-900 font-extrabold' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
