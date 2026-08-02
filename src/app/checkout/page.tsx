'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { TopHeader } from '@/components/layout/TopHeader';
import { SecondaryNav } from '@/components/layout/SecondaryNav';
import { Footer } from '@/components/layout/Footer';
import { AuthModal } from '@/components/auth/AuthModal';
import { CheckCircle2, CreditCard, ShieldCheck, ArrowLeft, Truck, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const { cart, cartSubtotal, placeOrder } = useStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [step, setStep] = useState<'checkout' | 'confirmation'>('checkout');
  const [placedOrder, setPlacedOrder] = useState<any>(null);

  const [formData, setFormData] = useState({
    fullName: 'Sarah Jenkins',
    email: 'customer@cele.com',
    phone: '(123) 456-7890',
    address: '100 Market St, Suite 400',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    paymentMethod: 'Credit Card (Visa ending 4242)'
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const order = placeOrder({
      name: formData.fullName,
      email: formData.email,
      address: `${formData.address}, ${formData.city}, ${formData.state} ${formData.zip}`,
      paymentMethod: formData.paymentMethod
    });

    setPlacedOrder(order);
    setStep('confirmation');
  };

  const totalAmount = (cartSubtotal * 1.08 + 5).toFixed(2);

  return (
    <main className="min-h-screen bg-cream">
      {/* Header & Navigation */}
      <TopHeader onOpenAuthModal={() => setIsAuthModalOpen(true)} />
      <SecondaryNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Navigation Link */}
        <div className="flex items-center gap-2">
          <Link 
            href="/cart" 
            className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Cart</span>
          </Link>
        </div>

        {step === 'checkout' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Shipping & Payment Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-150 p-6 shadow-soft space-y-6">
              <div>
                <h1 className="text-xl font-extrabold text-navy-900 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-gold-500" />
                  <span>Secure SSL Checkout</span>
                </h1>
                <p className="text-xs text-gray-400 mt-0.5">Enter your shipping destination and payment information.</p>
              </div>

              <form onSubmit={handlePlaceOrder} className="space-y-4 text-xs font-semibold text-navy-900">
                
                {/* Contact Information */}
                <div className="space-y-3 pt-2">
                  <h3 className="font-extrabold text-navy-900 text-xs uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">1. Contact Information</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="block text-gray-500">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-gray-500">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="space-y-3 pt-4">
                  <h3 className="font-extrabold text-navy-900 text-xs uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">2. Shipping Destination</h3>
                  
                  <div className="space-y-1">
                    <label className="block text-gray-500">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <label className="block text-gray-500">City</label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-gray-500">State</label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-gray-500">ZIP Code</label>
                      <input
                        type="text"
                        required
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="space-y-3 pt-4">
                  <h3 className="font-extrabold text-navy-900 text-xs uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-1">3. Payment Gateway</h3>
                  
                  <div className="p-3 bg-cream-50 border border-gray-200 rounded-xl space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-navy-900">
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked
                        className="accent-navy-900"
                      />
                      <span>Credit Card / Debit Card (Encrypted)</span>
                    </label>
                    <p className="text-[10px] text-gray-400 leading-relaxed font-light pl-5">
                      SSL Encrypted 256-bit payment processing via Cele Pay Gateway.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 mt-6 disabled:opacity-50"
                >
                  <CreditCard className="w-4 h-4 text-gold-500" />
                  <span>Complete Purchase (${totalAmount})</span>
                </button>

              </form>
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-150 p-6 shadow-soft space-y-4">
              <h3 className="font-extrabold text-navy-900 text-sm border-b border-gray-100 pb-3">Order Items ({cart.length})</h3>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3 items-center text-xs">
                    <div className="relative w-12 h-12 shrink-0 bg-[#F5F5F7] rounded-lg overflow-hidden border border-gray-150/40">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-contain p-1" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-navy-900 line-clamp-1">{item.product.name}</h4>
                      <p className="text-gray-400 text-[10px]">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-bold text-navy-900">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-3 space-y-2 text-xs font-semibold text-gray-500">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-navy-900">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="text-navy-900">${(cartSubtotal * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  <span className="text-navy-900">$5.00</span>
                </div>
                <div className="flex justify-between font-bold text-navy-900 border-t border-gray-100 pt-3 text-sm">
                  <span>Total Amount</span>
                  <span className="text-base font-black">${totalAmount}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-bold pt-2 border-t border-gray-50">
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <span>30-Day Money Back Guarantee</span>
              </div>
            </div>

          </div>
        ) : (
          /* Confirmation Screen */
          <div className="max-w-xl mx-auto bg-white rounded-2xl border border-gray-150 p-8 shadow-soft text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-black text-navy-900">Order Confirmed!</h2>
              <p className="text-xs text-gray-500">Order Reference: <strong className="text-navy-900">{placedOrder?.id}</strong></p>
            </div>

            <p className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed">
              Thank you for shopping with Cele Electronics. A confirmation receipt has been sent to <strong>{formData.email}</strong>.
            </p>

            <div className="bg-cream-50 p-4 rounded-xl border border-gray-150 text-left text-xs space-y-2 font-medium text-navy-900">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Paid:</span>
                <span className="font-extrabold">${placedOrder?.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Delivery Address:</span>
                <span className="font-bold line-clamp-1">{formData.address}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3 justify-center">
              <Link
                href="/account"
                className="px-6 py-2.5 bg-navy-900 text-white font-bold text-xs rounded-full shadow hover:bg-navy-800"
              >
                View Order History
              </Link>
              <Link
                href="/"
                className="px-6 py-2.5 bg-cream-200 text-navy-900 font-bold text-xs rounded-full hover:bg-gray-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}

      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Footer />
    </main>
  );
}
