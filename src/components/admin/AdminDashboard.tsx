'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Product } from '@/types';
import { 
  TrendingUp, 
  Package, 
  ShoppingBag, 
  PlusCircle, 
  Trash2, 
  Edit, 
  Check, 
  AlertCircle, 
  RefreshCcw, 
  Eye, 
  Layers 
} from 'lucide-react';
import Image from 'next/image';

export const AdminDashboard = () => {
  const { 
    products, 
    orders, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    updateOrderStatus 
  } = useStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'catalog' | 'orders'>('overview');
  
  // Product Creation State
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'smartphones',
    price: 0,
    rating: 5,
    reviewCount: 1,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    description: '',
    inStock: true,
    stockCount: 10,
    specs: { 'Brand': 'Cele' }
  });

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || newProduct.price <= 0) return;
    
    addProduct({
      name: newProduct.name,
      category: newProduct.category,
      price: Number(newProduct.price),
      rating: newProduct.rating,
      reviewCount: newProduct.reviewCount,
      image: newProduct.image,
      description: newProduct.description || 'Premium high-performance electronics device from Cele Electronics.',
      inStock: newProduct.inStock,
      stockCount: Number(newProduct.stockCount),
      specs: newProduct.specs
    });

    setNewProduct({
      name: '',
      category: 'smartphones',
      price: 0,
      rating: 5,
      reviewCount: 1,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      description: '',
      inStock: true,
      stockCount: 10,
      specs: { 'Brand': 'Cele' }
    });
  };

  // Metrics Calculations
  const totalRevenue = orders.reduce((sum, o) => sum + (o.status !== 'Cancelled' ? o.totalAmount : 0), 0);
  const lowStockProducts = products.filter(p => p.stockCount <= 15);
  const pendingOrders = orders.filter(o => o.status === 'Processing');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-navy-900">Shop Owner Admin Portal</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Manage Cele Electronics store catalog, inventory, and order fulfillment in real-time.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 bg-cream-100 rounded-full p-1 border border-gray-200 w-fit">
          {[
            { id: 'overview', label: 'Overview', icon: TrendingUp },
            { id: 'catalog', label: 'Catalog Manager', icon: Layers },
            { id: 'orders', label: 'Customer Orders', icon: ShoppingBag }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-navy-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <span className="text-xs font-bold text-gray-400 uppercase">Total Revenue</span>
              <p className="text-2xl font-black text-navy-900 mt-1">${totalRevenue.toFixed(2)}</p>
              <div className="text-[10px] text-emerald-600 font-bold mt-2 flex items-center gap-1">
                <span>↑ 14.5%</span> <span className="text-gray-400">vs last month</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <span className="text-xs font-bold text-gray-400 uppercase">Incoming Orders</span>
              <p className="text-2xl font-black text-navy-900 mt-1">{orders.length}</p>
              <div className="text-[10px] text-navy-700 font-bold mt-2">
                <span>{pendingOrders.length} orders pending fulfillment</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
              <span className="text-xs font-bold text-gray-400 uppercase">Active Catalog Size</span>
              <p className="text-2xl font-black text-navy-900 mt-1">{products.length} Items</p>
              <div className="text-[10px] text-gray-500 mt-2">
                <span>Across 11 tech categories</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-gray-150 shadow-soft flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase">Low Stock Alerts</span>
                <p className="text-2xl font-black text-rose-600 mt-1">{lowStockProducts.length}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-rose-500 bg-rose-50 rounded-full p-1.5 shrink-0" />
            </div>

          </div>

          {/* Recent Orders Overview */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
            <h3 className="font-extrabold text-navy-900 text-sm mb-4">Latest Store Activity</h3>
            <div className="space-y-3">
              {orders.slice(0, 3).map(order => (
                <div key={order.id} className="flex justify-between items-center text-xs p-3 rounded-xl border border-gray-50 bg-cream-50/20">
                  <div>
                    <span className="font-bold text-navy-900">{order.customerName}</span>
                    <span className="text-gray-400 ml-1">placed order {order.id}</span>
                    <p className="text-[10px] text-gray-400 mt-0.5">{order.date}</p>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full font-bold text-[9px] uppercase ${
                    order.status === 'Delivered'
                      ? 'bg-emerald-100 text-emerald-700'
                      : order.status === 'Shipped'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CATALOG MANAGER TAB */}
      {activeTab === 'catalog' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Add New Product Form */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-soft h-fit">
            <h3 className="font-extrabold text-navy-900 text-sm mb-4 flex items-center gap-1.5">
              <PlusCircle className="w-5 h-5 text-gold-500" />
              <span>Add New Gadget</span>
            </h3>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs font-semibold text-navy-900">
              <div className="space-y-1">
                <label className="block text-gray-500">Product Name</label>
                <input
                  type="text"
                  required
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  placeholder="e.g. Cele Phone 16 Pro"
                  className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-gray-500">Category</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  >
                    <option value="smartphones">Smartphones</option>
                    <option value="laptops">Laptops</option>
                    <option value="audio">Audio</option>
                    <option value="smarthome">Smart Home</option>
                    <option value="gaming">Gaming</option>
                    <option value="wearables">Wearables</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-500">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={newProduct.price || ''}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                    placeholder="299.99"
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="block text-gray-500">Stock Count</label>
                  <input
                    type="number"
                    required
                    value={newProduct.stockCount}
                    onChange={(e) => setNewProduct({ ...newProduct, stockCount: Number(e.target.value) })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-gray-500">Image Source (URL)</label>
                  <input
                    type="text"
                    required
                    value={newProduct.image}
                    onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-gray-500">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                  placeholder="Provide technical specifications and descriptions..."
                  rows={2}
                  className="w-full p-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-navy-900 bg-cream-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-full font-bold shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <PlusCircle className="w-4 h-4 text-gold-500" />
                <span>Create Product Listing</span>
              </button>
            </form>
          </div>

          {/* Right: Products List & Action Controls */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
            <h3 className="font-extrabold text-navy-900 text-sm mb-4">Stock Directory</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-gray-150 text-gray-400 font-bold uppercase tracking-wider pb-2">
                    <th className="py-3 px-2">Product</th>
                    <th className="py-3 px-2">Category</th>
                    <th className="py-3 px-2">Price</th>
                    <th className="py-3 px-2">Stock Level</th>
                    <th className="py-3 px-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {products.map(prod => (
                    <tr key={prod.id} className="hover:bg-cream-50/40">
                      <td className="py-3 px-2 flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-gray-100 bg-white">
                          <Image src={prod.image} alt={prod.name} fill className="object-contain p-0.5" />
                        </div>
                        <span className="font-bold text-navy-900 line-clamp-1">{prod.name}</span>
                      </td>
                      <td className="py-3 px-2 text-gray-500 uppercase text-[10px] tracking-wide font-bold">{prod.category}</td>
                      <td className="py-3 px-2 font-bold text-navy-900">${prod.price.toFixed(2)}</td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <span className={`inline-block w-2.5 h-2.5 rounded-full ${
                            prod.stockCount === 0 
                              ? 'bg-rose-500' 
                              : prod.stockCount <= 15 
                              ? 'bg-amber-400' 
                              : 'bg-emerald-400'
                          }`} />
                          <span className="font-medium text-gray-600">{prod.stockCount} left</span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-right space-x-1 shrink-0">
                        <button
                          onClick={() => updateProduct(prod.id, { stockCount: prod.stockCount + 10, inStock: true })}
                          className="p-1.5 text-gray-400 hover:text-navy-900"
                          title="Restock (+10)"
                        >
                          <RefreshCcw className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteProduct(prod.id)}
                          className="p-1.5 text-gray-400 hover:text-rose-500"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>

        </div>
      )}

      {/* CUSTOMER ORDERS TAB */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-soft">
          <h3 className="font-extrabold text-navy-900 text-sm mb-4">Incoming Order Queue</h3>

          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id} className="p-4 rounded-xl border border-gray-150 bg-cream-50/10 space-y-4">
                
                {/* Order Top Meta */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-100 pb-3">
                  <div>
                    <span className="font-black text-sm text-navy-900">Order ID: {order.id}</span>
                    <span className="text-gray-400 text-xs ml-2 font-medium">Placed on: {order.date}</span>
                  </div>
                  
                  {/* Status Dropdown */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Order Status:</span>
                    <select
                      value={order.status}
                      onChange={(e) => updateOrderStatus(order.id, e.target.value as any)}
                      className="text-xs font-bold border border-gray-200 rounded-lg p-1.5 focus:outline-none focus:border-navy-900 bg-white"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                {/* Items & Fulfillment Address */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  {/* Order Items */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-400 uppercase tracking-wide">Ordered Items</h4>
                    <div className="space-y-1.5">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-white p-2 rounded-lg border border-gray-50">
                          <span className="font-semibold text-navy-900 line-clamp-1">{item.productName} (x{item.quantity})</span>
                          <span className="font-bold text-gray-500">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Address & Customer Info */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-400 uppercase tracking-wide">Delivery Address</h4>
                    <div className="bg-white p-3 rounded-lg border border-gray-50 space-y-1.5">
                      <p className="font-bold text-navy-900">{order.customerName} ({order.customerEmail})</p>
                      <p className="text-gray-500 font-light leading-relaxed">{order.shippingAddress}</p>
                      <p className="text-[10px] text-gray-400">Payment: {order.paymentMethod}</p>
                    </div>
                  </div>
                </div>

                {/* Amount summary */}
                <div className="flex justify-between items-center border-t border-gray-100 pt-3 text-xs font-bold text-navy-900">
                  <span>Fulfillment Total:</span>
                  <span className="text-base font-black">${order.totalAmount.toFixed(2)}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

    </div>
  );
};
