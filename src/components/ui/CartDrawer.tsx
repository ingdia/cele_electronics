'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { X, Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cart, 
    removeFromCart, 
    updateQuantity, 
    cartSubtotal, 
    placeOrder 
  } = useStore();

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [shippingInfo, setShippingInfo] = useState({
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    address: '123 Tech Lane, Austin, TX 78701',
    paymentMethod: 'Visa Ending in 8890'
  });

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    placeOrder(shippingInfo);
    setCheckoutStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity" 
        onClick={() => {
          setIsCartOpen(false);
          setCheckoutStep('cart');
        }}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-floating flex flex-col">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-150 flex items-center justify-between">
            <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gold-500" />
              {checkoutStep === 'cart' && 'Your Shopping Cart'}
              {checkoutStep === 'shipping' && 'Shipping Details'}
              {checkoutStep === 'success' && 'Order Placed!'}
            </h2>
            <button 
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutStep('cart');
              }}
              className="p-1.5 rounded-full hover:bg-cream-100 text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutStep === 'cart' && (
              <>
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center space-y-3">
                    <ShoppingBag className="w-12 h-12 text-gray-300" />
                    <p className="text-navy-900 font-bold text-sm">Your cart is empty</p>
                    <p className="text-gray-400 text-xs">Add products from our catalog to get started.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex gap-4 p-3 rounded-xl border border-gray-100 bg-cream-50/50">
                        <div className="relative w-16 h-16 shrink-0 bg-white border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-navy-900 text-xs line-clamp-1">{item.product.name}</h4>
                            <p className="text-xs font-semibold text-gray-500 mt-0.5">${item.product.price.toFixed(2)}</p>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-gray-200 rounded-lg p-0.5 bg-white scale-90 origin-left">
                              <button 
                                onClick={() => updateQuantity(item.product.id, -1)}
                                className="p-1 hover:bg-cream-100 rounded text-gray-500"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2.5 text-xs font-bold text-navy-900">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.product.id, 1)}
                                className="p-1 hover:bg-cream-100 rounded text-gray-500"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-gray-400 hover:text-rose-500 p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === 'shipping' && (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs font-medium text-navy-900">
                <div className="space-y-1">
                  <label className="block text-gray-500">Full Name</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-gray-500">Email Address</label>
                  <input
                    type="email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-gray-500">Shipping Address</label>
                  <textarea
                    required
                    rows={2}
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-gray-500">Payment Details</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.paymentMethod}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, paymentMethod: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-4 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4 text-gold-500" />
                  <span>Confirm Order (${(cartSubtotal * 1.08 + 5).toFixed(2)})</span>
                </button>
              </form>
            )}

            {checkoutStep === 'success' && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl shadow-sm">
                  ✓
                </div>
                <h3 className="font-extrabold text-navy-900 text-lg">Thank You For Your Order!</h3>
                <p className="text-gray-500 text-xs max-w-xs leading-relaxed">
                  Your order has been successfully placed. It is now visible in the **Shop Owner Portal** under orders management for processing.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep('cart');
                  }}
                  className="px-6 py-2.5 bg-navy-900 text-white hover:bg-navy-800 text-xs font-bold rounded-full shadow"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer Subtotal Area */}
          {cart.length > 0 && checkoutStep === 'cart' && (
            <div className="border-t border-gray-150 p-6 bg-cream-50/30 space-y-3">
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>Subtotal</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>Estimated Tax (8%)</span>
                <span>${(cartSubtotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between font-bold text-navy-900 border-t border-gray-200/50 pt-2 text-sm">
                <span>Total Amount</span>
                <span>${(cartSubtotal * 1.08 + 5).toFixed(2)}</span>
              </div>

              <button
                onClick={() => setCheckoutStep('shipping')}
                className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold shadow-md transition-colors flex items-center justify-center gap-2 mt-4 text-xs"
              >
                <span>Proceed to Checkout</span>
                <span>→</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
