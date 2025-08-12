'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    image: '/hero1.jpg',
    heading: 'Firemax extinguishers are reliable and easy to use. Highly recommended!',
  },
  {
    image: '/hero4.png',
    heading: 'Reliable Fire Safety Solutions for Every Business',
  },
  {
    image: '/img/CCTV.png',
    heading: 'We also provide the CCTV',
  },
  {
    image: '/img/FireDetection.jpg',
    heading: 'Advance FireDetection System, Your Safety, Our Priority – Firemax Safety & Security.',
  },
  {
    image: '/hero6.png',
    heading: 'Reliable Fire Safety Solutions for Every Business',
  },
  {
    image: '/img/suppression.jpg',
    heading: 'Suppression System for Safety Protection.',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden rounded-xl shadow-lg mb-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <Image
            src={slides[index].image}
            alt={slides[index].heading}
            fill
            className={`object-cover ${index === 0 ? 'brightness-110' : 'brightness-100'}`}
            priority
            sizes="100vw"
          />
          {/* Black gradient shadow overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
          </div>

          {/* Animated text block */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 px-8 sm:px-16 max-w-2xl"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4 text-left">
              {slides[index].heading}
            </h1>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
