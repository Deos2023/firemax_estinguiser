'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';



const stats = [
   { title: "Happy Customers", value: 50000 },
  { title: "Products", value: 100 },
  { title: "Countries", value: 15 },
  { title: "Years of Experience", value: 24 }
];

const CounterItem = ({ title, value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCount(Math.floor(start));
      }, 16);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white text-center"
    >
      <div className="text-5xl font-bold mb-2">{count}+</div>
      <p className="text-sm">{title}</p>
    </motion.div>
  );
};

export default function CounterBar() {
  return (
    <section
      className="py-20 px-4 md:px-10 bg-gradient-to-r from-red-900 via-red-700 to-neutral-800 text-white"
    >
      <div className="">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
          {stats.map((stat, idx) => (
            <CounterItem key={idx} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
