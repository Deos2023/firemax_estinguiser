'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Clock } from 'lucide-react'; // Example icons
import Image from 'next/image';
import CounterBar from './Counterbar';

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: 'Certified Safety',
    desc: 'All products meet international safety standards.',
  },
  {
    icon: <Flame className="w-6 h-6 text-red-500" />,
    title: 'Fire Protection',
    desc: 'Advanced extinguishing technology.',
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-500" />,
    title: '24/7 Support',
    desc: 'We are here for you anytime.',
  },
];

export default function FloatingBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full flex justify-center  pointer-events-none"

      style={{ position: 'relative', zIndex: 20, marginTop: '-7.5rem' }} // Negative margin to float over hero
    >
      <div className="pointer-events-auto bg-white/90 backdrop-blur-md shadow-xl  px-20 py-10 flex flex-col gap-8 items-center max-w-5xl w-full mx-4 border border-neutral-300">
       <div className='flex'>
         {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="bg-gray-100 rounded-full text-lg p-2">{f.icon}</div>
            <div>
              <div className=" text-gray-900 text-xl">{f.title}</div>
              <div className=" text-gray-500">{f.desc}</div>
            </div>
          </div>
        ))}
       </div>
        
            <Image
            src="/838.jpg" // <-- Replace with your image path (e.g., /banner.jpg)
            alt="Descriptive alt text"
            width={1200} // Set width as needed
            height={400} // Set height as needed
            className="rounded-xl shadow-lg object-cover"
            priority
          />


          <CounterBar />

          
        
      </div>

       
    </motion.div>
  );
}
