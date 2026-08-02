'use client';

import React from 'react';
import { useStore } from '@/context/StoreContext';
import { User, Store, ArrowRightLeft } from 'lucide-react';

export const RoleSwitcher = () => {
  const { role, setRole, showToast } = useStore();

  const handleToggle = (newRole: 'client' | 'owner') => {
    if (newRole !== role) {
      setRole(newRole);
      showToast(
        newRole === 'owner'
          ? 'Switched to Shop Owner Admin View (Manage Catalog & Orders)'
          : 'Switched to Client Customer View (Shop Marketplace)',
        'info'
      );
    }
  };

  return (
    <div className="bg-navy-950 text-white text-xs py-2 px-4 border-b border-navy-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-gray-300">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>
            {role === 'client'
              ? 'Viewing as Client Customer'
              : 'Viewing as Shop Owner (Admin Portal)'}
          </span>
        </div>

        <div className="flex items-center gap-1 bg-navy-900 rounded-full p-1 border border-navy-700">
          <button
            onClick={() => handleToggle('client')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all ${
              role === 'client'
                ? 'bg-gold-500 text-navy-900 shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Client View</span>
          </button>

          <button
            onClick={() => handleToggle('owner')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-medium transition-all ${
              role === 'owner'
                ? 'bg-gold-500 text-navy-900 shadow-sm'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <Store className="w-3.5 h-3.5" />
            <span>Shop Owner View</span>
          </button>
        </div>
      </div>
    </div>
  );
};
