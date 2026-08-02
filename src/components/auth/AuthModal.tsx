'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { X, Lock, Mail, ShieldAlert, User, ArrowRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { setRole, showToast } = useStore();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleGoogleAuth = () => {
    setRole('client');
    showToast('Signed in successfully with Google (alex.rwanda@gmail.com)!', 'success');
    setErrorMsg('');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = formData.email.trim().toLowerCase();
    const password = formData.password.trim();

    if (email === 'admin@cele.com' && password === 'admin123') {
      setRole('owner');
      showToast('Welcome back, Admin! Redirected to Shop Owner Portal.', 'success');
      setErrorMsg('');
      onClose();
    } else {
      setRole('client');
      showToast(mode === 'signup' ? 'Account created successfully!' : 'Logged in successfully.', 'success');
      setErrorMsg('');
      onClose();
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
        <div className="text-center space-y-1">
          <h3 className="font-extrabold text-navy-900 text-xl">
            {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </h3>
          <p className="text-xs text-gray-400">
            {mode === 'signin' ? 'Sign in to manage orders & wishlist' : 'Sign up to start shopping on Cele Electronics'}
          </p>
        </div>

        {/* Form Error */}
        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-2.5 rounded-xl text-center font-medium">
            {errorMsg}
          </div>
        )}

        {/* 1. Google OAuth Button */}
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="w-full py-3 px-4 bg-white hover:bg-gray-50 text-navy-900 border border-gray-200 rounded-full font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-3"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29c-1.64 3.26-1.64 7.12 0 10.38l3.99-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
            />
          </svg>
          <span>{mode === 'signin' ? 'Sign in with Google' : 'Sign up with Google'}</span>
        </button>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-2">
          <div className="border-t border-gray-200 w-full" />
          <span className="bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider shrink-0 absolute">
            Or with email
          </span>
        </div>

        {/* Email Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-semibold text-navy-900 pt-1">
          
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="block text-gray-500">Full Name</label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Mugisha"
                  className="w-full p-2.5 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                />
              </div>
            </div>
          )}

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
            <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
          </button>
        </form>

        {/* Mode Toggle Switcher */}
        <div className="text-center pt-1 border-t border-gray-100 text-xs">
          {mode === 'signin' ? (
            <p className="text-gray-500 font-medium">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className="text-navy-900 font-extrabold hover:underline ml-1"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="text-gray-500 font-medium">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signin')}
                className="text-navy-900 font-extrabold hover:underline ml-1"
              >
                Sign In
              </button>
            </p>
          )}
        </div>

        {/* Info panel with test credentials */}
        <div className="bg-cream-50 border border-gray-200/50 rounded-xl p-3 space-y-1 text-[11px] font-semibold text-navy-900">
          <div className="flex gap-1.5 text-gray-500">
            <ShieldAlert className="w-4 h-4 text-navy-900 shrink-0" />
            <span className="font-bold">Test Admin Credentials:</span>
          </div>
          <p className="text-gray-600 font-normal pl-5">admin@cele.com / admin123</p>
        </div>

      </div>
    </div>
  );
};
