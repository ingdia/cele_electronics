'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_SLIDES = [
  {
    label: "NEW COLLECTION",
    heading: "Upgrade Your Lifestyle Today",
    subtitle: "Find the latest gadgets, top brands and exclusive deals all in one place. Specializing in high-performance electronics.",
    buttonText: "Shop Now",
    link: "/shop",
    image: "/images/hero_woman.jpg",
    archColor: "from-teal-600/30 via-navy-800 to-gold-500/20",
    badgeColor: "text-gold-500 bg-gold-500/10 border-gold-500/30",
    plant: "🌿 Snake Plant"
  },
  {
    label: "AUDIO EXPLOSION",
    heading: "Premium Sound, Zero Distractions",
    subtitle: "Immerse yourself in true high-fidelity audio. Grab premium noise-canceling headsets with 40-hour playback limits.",
    buttonText: "Listen Now",
    link: "/shop?category=audio",
    image: "/images/gaming_headset.jpg",
    archColor: "from-blue-600/30 via-navy-800 to-emerald-500/20",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    plant: "🍃 Monstera"
  },
  {
    label: "WEARABLE TECH",
    heading: "Track Your Health In High Style",
    subtitle: "Stay connected, monitor daily vitals, heart rate, sleep cycles, and workout progress with our smartwatch range.",
    buttonText: "Explore Wearables",
    link: "/shop?category=wearables",
    image: "/images/smart_watch.jpg",
    archColor: "from-purple-600/30 via-navy-800 to-rose-500/20",
    badgeColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
    plant: "🌱 Bonsai"
  }
];

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Variants for sliding animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 220, damping: 25 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative bg-navy-900 rounded-2xl overflow-hidden shadow-card p-4 sm:p-10 lg:p-12 text-white h-full min-h-[240px] sm:min-h-[420px] lg:min-h-[480px] flex flex-col justify-between border border-navy-800">
      
      {/* Background Subtle Pattern & Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-500 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-teal-500 blur-3xl"></div>
      </div>

      {/* Slide Content */}
      <div className="relative z-10 grid grid-cols-12 items-center gap-2 sm:gap-8 h-full">
        
        {/* Left Side Content */}
        <div className="col-span-7 sm:col-span-7 space-y-2 sm:space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textVariants}
              className="space-y-2 sm:space-y-4"
            >
              <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 border rounded-full ${slide.badgeColor}`}>
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase">
                  {slide.label}
                </span>
              </div>

              <h1 className="text-base sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {slide.heading}
              </h1>

              <p className="text-gray-300 text-[11px] sm:text-base max-w-lg font-light leading-snug line-clamp-2 sm:line-clamp-none">
                {slide.subtitle}
              </p>

              <div className="pt-1 sm:pt-2 flex items-center gap-4">
                <Link
                  href={slide.link}
                  className="inline-flex items-center gap-1.5 bg-white text-navy-900 hover:bg-gold-500 hover:text-navy-900 font-extrabold text-xs sm:text-sm px-4 py-2 sm:px-7 sm:py-3.5 rounded-full shadow-lg transition-all duration-200"
                >
                  <span>{slide.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side Image Composition */}
        <div className="col-span-5 sm:col-span-5 relative flex items-center justify-center min-h-[160px] sm:min-h-[300px] overflow-hidden">
          
          <AnimatePresence mode="wait" custom={direction}>
            {/* Decorative Arch */}
            <motion.div 
              key={`arch-${currentSlide}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`absolute w-36 h-44 sm:w-72 sm:h-96 rounded-t-full bg-gradient-to-tr ${slide.archColor} border-2 border-white/10 bottom-0 shadow-inner`}
            />

            {/* Slider Main Image */}
            <motion.div
              key={`img-${currentSlide}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative z-10 w-32 sm:w-64 h-40 sm:h-80 overflow-hidden rounded-2xl flex items-center justify-center"
            >
              <Image
                src={slide.image}
                alt={slide.heading}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Plant badge - desktop only */}
            <motion.div 
              key={`plant-${currentSlide}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden sm:flex absolute bottom-0 -right-2 z-20 w-24 h-28 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 flex-col items-center justify-end shadow-lg"
            >
              <div className="w-full py-1.5 bg-white rounded-lg shadow-inner flex items-center justify-center text-[9px] font-bold text-navy-900 border border-gray-100">
                {slide.plant}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* Manual Arrow Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1 sm:left-2 z-20">
        <button 
          onClick={handlePrev}
          className="p-1 sm:p-2 rounded-full bg-navy-950/40 hover:bg-navy-950/80 border border-white/10 text-white transition-all"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:right-2 z-20">
        <button 
          onClick={handleNext}
          className="p-1 sm:p-2 rounded-full bg-navy-950/40 hover:bg-navy-950/80 border border-white/10 text-white transition-all"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Bottom Slider Dots Indicator */}
      <div className="absolute bottom-2 sm:bottom-4 left-4 sm:left-10 lg:left-12 flex items-center gap-1.5 sm:gap-2 z-20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentSlide ? 1 : -1);
              setCurrentSlide(idx);
            }}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === idx ? 'w-5 sm:w-8 bg-white' : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

    </div>
  );
};
