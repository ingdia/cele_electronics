'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { QuickViewModal } from '@/components/ui/QuickViewModal';
import { AuthModal } from '@/components/auth/AuthModal';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartSubtotal } = useStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
            <span>Continue Shopping</span>
          </Link>
        </div>

        {/* Title */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900">Your Shopping Cart</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Review the list of electronics items selected for purchase.</p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart View */
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 bg-white border border-gray-150 rounded-2xl shadow-soft">
            <ShoppingBag className="w-12 h-12 text-gray-300" />
            <h3 className="font-extrabold text-navy-900 text-base">Your Cart is Empty</h3>
            <p className="text-gray-500 text-xs max-w-xs font-light leading-relaxed">
              You haven't added any electronic devices to your shopping cart yet.
            </p>
            <Link
              href="/shop"
              className="px-6 py-2.5 bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold rounded-full shadow"
            >
              Shop Electronics catalog
            </Link>
          </div>
        ) : (
          /* Cart Details Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Items Table */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-2xl border border-gray-150 shadow-soft overflow-hidden">
                <div className="p-4 bg-gray-50/50 border-b border-gray-150 font-bold text-xs text-gray-400 uppercase tracking-wider hidden sm:grid sm:grid-cols-12">
                  <div className="col-span-6">Product Details</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Subtotal</div>
                </div>

                <div className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {cart.map((item) => (
                      <motion.div 
                        key={item.product.id}
                        layout
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 sm:grid sm:grid-cols-12 items-center gap-4 text-xs font-semibold text-navy-900"
                      >
                        {/* Product Info */}
                        <div className="col-span-6 flex gap-4 items-center">
                          <div className="relative w-16 h-16 shrink-0 bg-[#F5F5F7] rounded-xl border border-gray-150/40 overflow-hidden flex items-center justify-center">
                            <Image
                              src={item.product.image}
                              alt={item.product.name}
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-bold text-navy-900 text-sm line-clamp-1">{item.product.name}</h4>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wide font-bold">{item.product.category}</p>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="col-span-2 text-left sm:text-center mt-2 sm:mt-0 font-bold">
                          <span className="sm:hidden text-gray-400 mr-2">Price:</span>
                          ${item.product.price.toFixed(2)}
                        </div>

                        {/* Quantity Counter */}
                        <div className="col-span-2 flex justify-start sm:justify-center items-center mt-2 sm:mt-0">
                          <span className="sm:hidden text-gray-400 mr-2">Qty:</span>
                          <div className="flex items-center border border-gray-200 rounded-lg p-0.5 bg-white scale-90">
                            <button 
                              onClick={() => updateQuantity(item.product.id, -1)}
                              className="p-1 hover:bg-cream-100 rounded text-gray-500"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 font-bold text-navy-900">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, 1)}
                              className="p-1 hover:bg-cream-100 rounded text-gray-500"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Subtotal & Delete */}
                        <div className="col-span-2 flex items-center justify-between sm:justify-end gap-3 mt-2 sm:mt-0 font-bold">
                          <div>
                            <span className="sm:hidden text-gray-400 mr-2">Subtotal:</span>
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-gray-400 hover:text-rose-500 p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Right Side: Order Summary Panel */}
            <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-150 p-6 shadow-soft space-y-4">
              <h3 className="font-extrabold text-navy-900 text-sm border-b border-gray-100 pb-3">Checkout Summary</h3>
              
              <div className="space-y-2 text-xs font-semibold text-gray-500">
                <div className="flex justify-between">
                  <span>Cart Subtotal</span>
                  <span className="text-navy-900">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                  <span className="text-navy-900">${(cartSubtotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Cost</span>
                  <span className="text-navy-900">$5.00</span>
                </div>
                <div className="flex justify-between font-bold text-navy-900 border-t border-gray-100 pt-3 text-sm">
                  <span>Order Total</span>
                  <span className="text-base font-black">${(cartSubtotal * 1.08 + 5).toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 mt-4"
              >
                <CreditCard className="w-4 h-4 text-gold-500" />
                <span>Proceed to Checkout</span>
              </Link>
            </div>

          </div>
        )}

      </div>

      <QuickViewModal />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Footer />
    </main>
  );
}
