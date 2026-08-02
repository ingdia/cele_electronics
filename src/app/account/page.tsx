'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/ui/CartDrawer';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { AuthModal } from '@/components/auth/AuthModal';
import { User, Package, MapPin, CreditCard, LogOut, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AccountPage() {
  const { role, setRole, orders, showToast } = useStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogout = () => {
    setRole('client');
    showToast('Logged out of customer account.', 'info');
  };

  return (
    <main className="min-h-screen bg-cream">
      {/* Header & Navigation */}
      <TopHeader onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      <SecondaryNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Navigation Link */}
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Storefront</span>
          </Link>
        </div>

        {/* Account Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-2xl p-6 border border-gray-150 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-500 flex items-center justify-center text-xl font-bold">
              SJ
            </div>
            <div>
              <h1 className="text-xl font-black text-navy-900">Sarah Jenkins</h1>
              <p className="text-xs text-gray-400 font-semibold">customer@cele.com • Preferred Customer Member</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-4 py-2 bg-cream-200 hover:bg-gray-200 text-navy-900 font-bold text-xs rounded-full transition-colors"
            >
              Switch Account / Role
            </button>
            <button
              onClick={handleLogout}
              className="p-2 text-rose-600 hover:bg-rose-50 rounded-full transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Account Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Account Details & Default Address */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Customer Details */}
            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-soft space-y-3 text-xs text-navy-900">
              <h3 className="font-extrabold text-navy-900 text-sm border-b border-gray-100 pb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-gold-500" />
                <span>Profile Settings</span>
              </h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-400 font-semibold block text-[10px]">Full Name</span>
                  <span className="font-bold">Sarah Jenkins</span>
                </div>
                <div>
                  <span className="text-gray-400 font-semibold block text-[10px]">Email Address</span>
                  <span className="font-bold">customer@cele.com</span>
                </div>
                <div>
                  <span className="text-gray-400 font-semibold block text-[10px]">Membership</span>
                  <span className="font-bold text-gold-600">Cele VIP Rewards Member</span>
                </div>
              </div>
            </div>

            {/* Saved Shipping Address */}
            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-soft space-y-3 text-xs text-navy-900">
              <h3 className="font-extrabold text-navy-900 text-sm border-b border-gray-100 pb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>Saved Shipping Address</span>
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                742 Evergreen Terrace, Springfield, OR 97477
              </p>
            </div>

          </div>

          {/* Right Column: Customer Order History */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-gray-150 shadow-soft space-y-4">
            <h3 className="font-extrabold text-navy-900 text-sm border-b border-gray-100 pb-3 flex items-center gap-2">
              <Package className="w-4 h-4 text-gold-500" />
              <span>Order History & Tracking</span>
            </h3>

            {orders.length === 0 ? (
              <p className="text-xs text-gray-400 text-center py-8">No past orders found.</p>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 rounded-xl border border-gray-150 bg-cream-50/20 space-y-3">
                    
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-2">
                      <div>
                        <span className="font-extrabold text-xs text-navy-900">{order.id}</span>
                        <span className="text-gray-400 text-[10px] ml-2 font-medium">Placed on: {order.date}</span>
                      </div>
                      
                      <span className={`px-2.5 py-0.5 rounded-full font-extrabold text-[9px] uppercase ${
                        order.status === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-700'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs bg-white p-2 rounded-lg border border-gray-50">
                          <div className="flex items-center gap-2">
                            <div className="relative w-8 h-8 rounded shrink-0 overflow-hidden bg-[#F5F5F7]">
                              <Image src={item.image} alt={item.productName} fill className="object-contain p-0.5" />
                            </div>
                            <span className="font-bold text-navy-900 line-clamp-1">{item.productName} (x{item.quantity})</span>
                          </div>
                          <span className="font-bold text-navy-900">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-xs font-bold text-navy-900 pt-1">
                      <span className="text-gray-400 text-[10px]">Total Charged:</span>
                      <span className="font-black text-sm">${order.totalAmount.toFixed(2)}</span>
                    </div>

                  </div>
                ))}
              </div>
            )}
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
