'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Facility Manager",
    quote: "SafePro extinguishers are reliable and easy to use. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "Business Owner",
    quote: "Excellent customer service and top-quality products.",
  },
  {
    name: "Emily Chen",
    role: "Safety Officer",
    quote: "Their products give us peace of mind. Installation was quick and professional.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    position: "absolute",
  }),
};

export default function TestimonialsSlider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([prev, _]) => [
        (prev + 1) % testimonials.length,
        1,
      ]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (dir) => {
    setIndex(([prev, _]) => {
      let next = prev + dir;
      if (next < 0) next = testimonials.length - 1;
      if (next >= testimonials.length) next = 0;
      return [next, dir];
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-red-600 via-yellow-300 to-black">
  <div className="max-w-xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">What Our Clients Say</h2>
    <div className="relative h-48 flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, type: "tween" }}
          className="w-full"
        >
          <div className="bg-gradient-to-r from-white via-red-50 to-white p-8 rounded-xl shadow text-center">
            <p className="text-gray-700 italic mb-4 text-lg">"{testimonials[index].quote}"</p>
            <div className="font-semibold text-red-700">{testimonials[index].name}</div>
            <div className="text-sm text-gray-500">{testimonials[index].role}</div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-red-100"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-red-100"
        aria-label="Next"
      >
        &#8594;
      </button>
    </div>
    {/* Dots */}
    <div className="flex justify-center gap-2 mt-4">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex([i, i > index ? 1 : -1])}
          className={`w-3 h-3 rounded-full ${i === index ? "bg-red-600" : "bg-gray-300"}`}
          aria-label={`Go to testimonial ${i + 1}`}
        />
      ))}
    </div>
  </div>
</section>

  );
}
