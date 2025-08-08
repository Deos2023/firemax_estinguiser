"use client";
import Image from "next/image";
import FloatingBar from "../component/FloatingBar";
import { BrandBar } from "../component/BrandBar";
import FeatureSection from "../component/FeatureSection";
import TestimonialsSlider from "../component/Testimonials";
import FaqSection from "../component/Faq";
import { motion } from "framer-motion";

const milestones = [
  { year: "1995", event: "FIREMAX was established with a mission to provide premier fire safety solutions." },
  { year: "2010", event: "Expanded operations across Kolkata and surrounding regions." },
  { year: "2014", event: "Launched certified extinguishers and industrial fire safety gear." },
  { year: "2018", event: "Recognized for excellence in corporate fire safety support." },
];

const tips = [
  "Ensure fire extinguishers are easily accessible.",
  "Train all staff in fire safety protocols.",
  "Conduct regular inspections and servicing.",
  "Maintain clear exit routes at all times.",
];

const certs = [
  // { name: "ISI Certified", image: "/isi.png" },
  { name: "MSME Certified", image: "/msme.png" },
  { name: "ISO 9001:2015", image: "/iso.png" },
  { name: "FSAI ", image: "/FSAI.png" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: 'easeOut' },
  }),
};

function AboutHeroSection() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-xl shadow-lg mb-10">
      <Image
        src="/hero2.jpg"
        alt="About FIREMAX"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center">
          About FIREMAX Safety & Security
        </h1>
        <p className="text-lg sm:text-2xl text-white/90 max-w-2xl text-center">
          Trusted experts in fire protection since 1995 — keeping homes and businesses safe with certified equipment and dedicated service.
        </p>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative z-10">
        <AboutHeroSection />
        {/* <BrandBar /> */}

        <section className="bg-gradient-to-r from-red-50 via-white to-red-100 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
            <ol className="relative border-l-4 border-red-200">
              {milestones.map((m, idx) => (
                <motion.li
                  key={idx}
                  className="mb-10 ml-6 relative"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={idx}
                  variants={itemVariants}
                >
                  <span className="absolute -left-3 flex items-center justify-center p-1 -mt-5 bg-red-600 rounded-full ring-8 ring-white text-white font-bold shadow-lg">
                    {m.year}
                  </span>
                  <div className="bg-white p-6 rounded-xl shadow transition hover:shadow-lg">
                    <p className="text-gray-700">{m.event}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Fire Safety Tips</h2>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </section>

        <div className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 rotate-12 opacity-30 rounded-tr-[80%]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 rotate-[-12deg] opacity-15 rounded-tl-[60%]" />
          <div className="absolute top-1/3 left-[-40px] w-48 h-48 bg-red-700 opacity-15 rotate-[25deg] rounded-br-[50%]" />
        </div>

        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-8">
            FIREMAX SAFETY & SECURITY PVT. LTD. is a Kolkata-based leader in fire safety equipment and solutions. Established in 1995, we deliver certified fire extinguishers, industrial protection, and safety consulting services. Our mission is to safeguard lives and assets with innovation, compliance, and customer-first values.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>ISI and ISO certified safety equipment</li>
            <li>Over 15 years of industry experience</li>
            <li>Dedicated customer support</li>
            <li>Located at 72A/3 PURBACHAL MAIN ROAD, KOLKATA - 700078</li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Certifications & Partners</h2>
          <div className="flex flex-wrap justify-between gap-8">
            {certs.map((c, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={c.image} alt={c.name} className="sm:w-40 sm:h-40 w-10 h-10 object-contain mb-2 opacity-50" />
                <span className="text-gray-700 font-semibold">{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        <FeatureSection />
        <FaqSection />
      </div>
    </div>
  );
}
