"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingBar from "../component/FloatingBar";
import { BrandBar } from "../component/BrandBar";
import TestimonialsSlider from "../component/Testimonials";
import FaqSection from "../component/Faq";

const services = [
  {
    title: "Fire Extinguisher Sales",
    description: "Premium quality ISI-certified fire extinguishers for all types of fires including ABC, CO2, DCP, and specialized variants.",
    icon: "/extinguisher-icon.png",
    features: [
      "All types - ABC, CO2, DCP, Foam",
      "ISI & ISO certified products",
      "Competitive pricing",
      "Bulk order discounts"
    ]
  },
  {
    title: "Installation Services",
    description: "Professional installation by certified technicians ensuring optimal placement and compliance with safety regulations.",
    icon: "/installation-icon.png",
    features: [
      "Wall mounting & cabinet installation",
      "Proper signage placement",
      "Compliance with local regulations",
      "Post-installation inspection"
    ]
  },
  {
    title: "Regular Maintenance",
    description: "Scheduled maintenance programs to keep your extinguishers in perfect working condition at all times.",
    icon: "/maintenance-icon.png",
    features: [
      "Monthly/quarterly inspections",
      "Pressure testing",
      "Recharging services",
      "Detailed service reports"
    ]
  },
  {
    title: "Safety Training",
    description: "Comprehensive fire safety training programs for your staff to ensure proper usage during emergencies.",
    icon: "/training-icon.png",
    features: [
      "Hands-on extinguisher training",
      "Fire drill coordination",
      "Evacuation procedures",
      "Customized training modules"
    ]
  },
  {
    title: "Fire Safety Audits",
    description: "Complete assessment of your premises to identify risks and recommend optimal safety measures.",
    icon: "/audit-icon.png",
    features: [
      "Comprehensive risk assessment",
      "Regulatory compliance check",
      "Detailed report with recommendations",
      "Follow-up consultations"
    ]
  },
  {
    title: "Emergency Support",
    description: "24/7 emergency response team for immediate assistance with fire safety equipment issues.",
    icon: "/emergency-icon.png",
    features: [
      "24/7 helpline",
      "Rapid response team",
      "On-site troubleshooting",
      "Emergency replacements"
    ]
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' },
  }),
};

function ServicesHeroSection() {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden rounded-xl shadow-lg mb-10">
      <Image
        src="/hero3.jpg"
        alt="SafePro Services"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center">
          Our Comprehensive Services
        </h1>
        <p className="text-lg sm:text-2xl text-white/90 max-w-2xl text-center">
          Complete fire safety solutions tailored to protect your business, employees, and assets.
        </p>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Foreground Content */}
      <div className="relative z-10">
        <ServicesHeroSection />
        {/* <BrandBar /> */}

        {/* Main Services Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our <span className="text-red-600">Fire Safety</span> Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From equipment supply to complete safety management, we offer end-to-end fire protection services backed by certified expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={idx}
                variants={itemVariants}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {/* <div className="bg-red-100 p-3 rounded-full mr-4">
                      <Image 
                        src={service.icon} 
                        alt={service.title} 
                        width={40} 
                        height={40} 
                        className="w-10 h-10 object-contain"
                      />
                    </div> */}
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gradient-to-r from-red-50 via-white to-red-100 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Service Process</h2>
            <div className="space-y-8">
              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={itemVariants}
              >
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  1
                </div>
                <div className="bg-white p-6 rounded-xl shadow flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation & Assessment</h3>
                  <p className="text-gray-600">We begin with a thorough evaluation of your premises to understand your specific fire safety needs and regulatory requirements.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={itemVariants}
              >
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  2
                </div>
                <div className="bg-white p-6 rounded-xl shadow flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Customized Solution</h3>
                  <p className="text-gray-600">Our experts design a tailored fire safety plan with the right equipment, placement, and maintenance schedule for your business.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={itemVariants}
              >
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  3
                </div>
                <div className="bg-white p-6 rounded-xl shadow flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation</h3>
                  <p className="text-gray-600">Certified technicians install your equipment and provide comprehensive training to designated staff members.</p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={itemVariants}
              >
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                  4
                </div>
                <div className="bg-white p-6 rounded-xl shadow flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Ongoing Support</h3>
                  <p className="text-gray-600">We provide regular maintenance, inspections, and 24/7 emergency support to ensure continuous protection.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Business?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and fire safety assessment of your premises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105">
                Request Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105">
                Call: +91 9051737934
              </button>
            </div>
          </div>
        </section>

        {/* <TestimonialsSlider /> */}
        {/* <FaqSection /> */}
      </div>

      {/* Red geometric background elements */}
      <div className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rotate-12 opacity-30 rounded-bl-[80%]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500 rotate-[-12deg] opacity-15 rounded-tr-[60%]" />
        <div className="absolute bottom-1/3 right-[-40px] w-48 h-48 bg-red-700 opacity-15 rotate-[25deg] rounded-tl-[50%]" />
      </div>
    </div>
  );
}