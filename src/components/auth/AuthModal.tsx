'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { X, Lock, Mail, ShieldAlert } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { setRole, showToast } = useStore();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (email === 'admin@cele.com' && password === 'admin123') {
      setRole('owner');
      showToast('Welcome back, Admin! Redirected to Shop Owner Portal.', 'success');
      setErrorMsg('');
      onClose();
    } else if (email === 'customer@cele.com' && password === 'customer123') {
      setRole('client');
      showToast('Logged in successfully as Customer.', 'success');
      setErrorMsg('');
      onClose();
    } else {
      setErrorMsg('Invalid credentials. Check the helper accounts below.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-floating max-w-sm w-full p-6 sm:p-8 border border-gray-150 animate-in zoom-in-95 duration-200 z-10 space-y-5">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-cream-100 text-gray-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center">
          <h3 className="font-extrabold text-navy-900 text-xl">
            Account Sign In
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Access Cele Electronics Storefront & Dashboards
          </p>
        </div>

        {/* Form Error */}
        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-2.5 rounded-xl text-center">
            {errorMsg}
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold text-navy-900">
          
          <div className="space-y-1">
            <label className="block text-gray-500">Email Address</label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
                className="w-full p-2.5 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-gray-500">Password</label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full p-2.5 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
          >
            <span>Sign In</span>
          </button>
        </form>

        {/* Info panel with test credentials */}
        <div className="bg-cream-50 border border-gray-200/50 rounded-xl p-3 space-y-2 text-[11px] font-semibold text-navy-900">
          <div className="flex gap-2 text-gray-500">
            <ShieldAlert className="w-4 h-4 text-navy-900 shrink-0" />
            <span className="font-bold">Test Credentials:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="bg-white p-2 rounded-lg border border-gray-150">
              <p className="text-gray-400 uppercase text-[8px] tracking-wider">Customer View</p>
              <p className="mt-0.5 text-navy-900 font-bold">customer@cele.com</p>
              <p className="text-gray-500 font-normal">customer123</p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-gray-150">
              <p className="text-gray-400 uppercase text-[8px] tracking-wider">Admin/Owner View</p>
              <p className="mt-0.5 text-navy-900 font-bold">admin@cele.com</p>
              <p className="text-gray-500 font-normal">admin123</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
