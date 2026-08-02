import { Product, Category, Order } from '@/types';

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'smartphones', name: 'Smartphones & Tablets', iconName: 'Smartphone', colorBg: 'bg-amber-100 text-amber-600', itemCount: 42 },
  { id: 'audio', name: 'Audio & Headphones', iconName: 'Headphones', colorBg: 'bg-pink-100 text-pink-600', itemCount: 38 },
  { id: 'laptops', name: 'Laptops & Computers', iconName: 'Laptop', colorBg: 'bg-blue-100 text-blue-600', itemCount: 29 },
  { id: 'smarthome', name: 'Smart Home Devices', iconName: 'Home', colorBg: 'bg-emerald-100 text-emerald-600', itemCount: 31 },
  { id: 'gaming', name: 'Gaming & Consoles', iconName: 'Gamepad2', colorBg: 'bg-rose-100 text-rose-600', itemCount: 24 },
  { id: 'wearables', name: 'Wearable Tech', iconName: 'Watch', colorBg: 'bg-purple-100 text-purple-600', itemCount: 19 },
  { id: 'cameras', name: 'Cameras & Drones', iconName: 'Camera', colorBg: 'bg-teal-100 text-teal-600', itemCount: 15 },
  { id: 'accessories', name: 'Accessories & Cables', iconName: 'Plug', colorBg: 'bg-orange-100 text-orange-600', itemCount: 53 },
  { id: 'tv', name: 'TV & Home Theater', iconName: 'Tv', colorBg: 'bg-indigo-100 text-indigo-600', itemCount: 18 },
  { id: 'offers', name: 'Top Offers', iconName: 'Tag', colorBg: 'bg-yellow-100 text-yellow-700', itemCount: 12 },
  { id: 'giftcards', name: 'Gift Cards', iconName: 'Gift', colorBg: 'bg-cyan-100 text-cyan-600', itemCount: 5 },
];

export const BROWSE_CATEGORIES_CIRCLES = [
  { 
    name: 'Smartphones', 
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80',
    categoryId: 'smartphones' 
  },
  { 
    name: 'Audio', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=150&q=80',
    categoryId: 'audio' 
  },
  { 
    name: 'Laptops', 
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=150&q=80',
    categoryId: 'laptops' 
  },
  { 
    name: 'Smart Home', 
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=150&q=80',
    categoryId: 'smarthome' 
  },
  { 
    name: 'Gaming', 
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=150&q=80',
    categoryId: 'gaming' 
  },
  { 
    name: 'Wearables', 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80',
    categoryId: 'wearables' 
  },
  { 
    name: 'Cameras', 
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=150&q=80',
    categoryId: 'cameras' 
  },
  { 
    name: 'Accessories', 
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=150&q=80',
    categoryId: 'accessories' 
  },
];

export const INITIAL_PRODUCTS: Product[] = [
  // 6 Specified Trending Products
  {
    id: 'p1',
    name: 'Bluetooth Speaker',
    category: 'audio',
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.8,
    reviewCount: 142,
    image: '/images/bluetooth_speaker.jpg',
    isTrending: true,
    inStock: true,
    stockCount: 45,
    description: 'Crisp 360° stereo sound with deep bass and 16-hour continuous battery life. IPX7 waterproof for outdoor use.',
    specs: { 'Battery': '16 Hours', 'Waterproof': 'IPX7', 'Connectivity': 'Bluetooth 5.3' }
  },
  {
    id: 'p2',
    name: 'Smart Watch',
    category: 'wearables',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.6,
    reviewCount: 98,
    image: '/images/smart_watch.jpg',
    isTrending: true,
    inStock: true,
    stockCount: 28,
    description: 'Track heart rate, sleep cycles, SPO2 blood oxygen, and 50+ workout modes with vibrant AMOLED touchscreen.',
    specs: { 'Display': '1.4 inch AMOLED', 'Battery': '7 Days', 'Sensors': 'Heart Rate, SpO2, GPS' }
  },
  {
    id: 'p3',
    name: 'Wireless Earbuds',
    category: 'audio',
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviewCount: 215,
    image: '/images/wireless_earbuds.jpg',
    isTrending: true,
    inStock: true,
    stockCount: 60,
    description: 'Active Noise Cancelling (ANC) wireless earbuds with touch controls, low latency gaming mode, and USB-C fast charging case.',
    specs: { 'Noise Cancellation': 'Active ANC', 'Playtime': '32 Hours with Case', 'Mic': 'Dual Beamforming' }
  },
  {
    id: 'p4',
    name: 'Gaming Headset',
    category: 'gaming',
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviewCount: 87,
    image: '/images/gaming_headset.jpg',
    isTrending: true,
    inStock: true,
    stockCount: 19,
    description: '7.1 Surround Sound gaming headset with noise-canceling detachable mic, plush memory foam earcups, and customizable RGB.',
    specs: { 'Audio': '7.1 Virtual Surround', 'Mic': 'Detachable Noise Canceling', 'Compatibility': 'PC, PS5, Xbox, Switch' }
  },
  {
    id: 'p5',
    name: 'Portable Charger',
    category: 'accessories',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.4,
    reviewCount: 164,
    image: '/images/portable_charger.jpg',
    isTrending: true,
    inStock: true,
    stockCount: 85,
    description: 'Ultra-slim 20,000mAh fast-charging power bank with dual USB-C Power Delivery and LED power level display.',
    specs: { 'Capacity': '20,000 mAh', 'Output': '22.5W Fast Charge', 'Ports': '2x USB-C, 1x USB-A' }
  },
  {
    id: 'p6',
    name: 'Smart Sunglasses',
    category: 'wearables',
    price: 74.99,
    originalPrice: 99.99,
    rating: 4.3,
    reviewCount: 53,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 14,
    description: 'Open-ear audio smart sunglasses with UV400 polarized lenses, hands-free voice calls, and voice assistant support.',
    specs: { 'Lens': 'Polarized UV400', 'Speakers': 'Dual Directional', 'Weight': '42g' }
  },

  // Additional 8+ Premium Electronics Products to populate the landing page
  {
    id: 'p7',
    name: 'Cele Pro Max 5G Smartphone',
    category: 'smartphones',
    price: 899.99,
    originalPrice: 999.99,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 15,
    description: 'Flagship 6.7" OLED display smartphone with 108MP triple camera system, 5G Connectivity, and 5000mAh battery.',
    specs: { 'Processor': 'Octa-core 3.2GHz', 'RAM': '12GB', 'Storage': '256GB' }
  },
  {
    id: 'p8',
    name: 'UltraBook Slim 15 Laptop',
    category: 'laptops',
    price: 1199.99,
    originalPrice: 1349.99,
    rating: 4.8,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 10,
    description: 'Ultra-thin aluminum laptop with 15.6" Retina anti-glare display, 16GB RAM, 1TB NVMe SSD, and 14h battery life.',
    specs: { 'CPU': 'Latest Gen i7', 'Memory': '16GB DDR5', 'Storage': '1TB NVMe SSD' }
  },
  {
    id: 'p9',
    name: 'Nylon Braided USB-C Cable (6ft)',
    category: 'accessories',
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.9,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 150,
    description: 'Heavy duty 100W PD fast charging USB-C to USB-C cable with durable aluminum connectors and tangle-free nylon shielding.',
    specs: { 'Length': '6 Feet (1.8m)', 'Power': '100W PD 5A', 'Data Speed': '480 Mbps' }
  },
  {
    id: 'p10',
    name: 'Smart Ambient Living Hub Light',
    category: 'smarthome',
    price: 64.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 22,
    description: 'Voice-activated smart lighting hub with RGB light sync for desktop displays and living spaces.',
    specs: { 'Colors': '16 Million RGB', 'Protocol': 'Wi-Fi 2.4G / Zigbee', 'Voice Control': 'Alexa & Google Home' }
  },
  {
    id: 'p11',
    name: '4K Ultra HD Action Camera',
    category: 'cameras',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.6,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 18,
    description: 'Action camera with 4K recording, electronic image stabilization, 131ft waterproof shell, and dual-touch displays.',
    specs: { 'Resolution': '4K @ 60FPS', 'Sensor': 'Sony IMX', 'Battery': '1350 mAh' }
  },
  {
    id: 'p12',
    name: 'VR Cyber headset Controller',
    category: 'gaming',
    price: 399.99,
    originalPrice: 449.99,
    rating: 4.8,
    reviewCount: 65,
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 8,
    description: 'Standalone virtual reality headset with 128GB storage, high-density 3D spatial optics, and interactive motion tracking controllers.',
    specs: { 'Storage': '128GB', 'Optics': 'Fast-switch LCD', 'Refresh Rate': '120Hz' }
  },
  {
    id: 'p13',
    name: 'Noise Cancelling Headphones',
    category: 'audio',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 154,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 20,
    description: 'Premium over-ear studio headphones with active adaptive noise cancellation, high-res audio drivers, and 40-hour battery life.',
    specs: { 'Battery': '40 Hours', 'Drivers': '40mm Dynamic', 'Hi-Res Audio': 'LDAC/AAC' }
  },
  {
    id: 'p14',
    name: 'Smart Thermostat Console',
    category: 'smarthome',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.5,
    reviewCount: 48,
    image: 'https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=600&q=80',
    isTrending: true,
    inStock: true,
    stockCount: 30,
    description: 'Intelligent learning thermostat to automatically schedule temperature adjustments and cut monthly energy bills.',
    specs: { 'Sensor': 'Proximity & Humidity', 'Wi-Fi': 'Yes', 'Compatibility': '95% of HVAC units' }
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ORD-8821',
    customerName: 'Patrick Kamanzi',
    customerEmail: 'kigali.shopper@gmail.com',
    items: [
      { productId: 'p1', productName: 'Bluetooth Speaker', price: 49.99, quantity: 1, image: '/images/bluetooth_speaker.jpg' },
      { productId: 'p3', productName: 'Wireless Earbuds', price: 34.99, quantity: 1, image: '/images/wireless_earbuds.jpg' }
    ],
    totalAmount: 84.98,
    status: 'Processing',
    date: '2026-08-02 10:14',
    shippingAddress: 'KG 7 Ave, Kigali Heights, Kigali, Rwanda (Tel: +250 787 335 768)',
    paymentMethod: 'MTN Mobile Money (MoMo Pay: 0787335768)'
  },
  {
    id: 'ORD-8820',
    customerName: 'Clarisse Umutoni',
    customerEmail: 'clarisse.u@gmail.com',
    items: [
      { productId: 'p2', productName: 'Smart Watch', price: 89.99, quantity: 1, image: '/images/smart_watch.jpg' }
    ],
    totalAmount: 89.99,
    status: 'Shipped',
    date: '2026-08-01 16:45',
    shippingAddress: 'KN 4 Ave, Commercial District, Kigali, Rwanda',
    paymentMethod: 'MTN Mobile Money (MoMo Pay: 0788123456)'
  }
];
