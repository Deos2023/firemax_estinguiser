"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BrandBar } from "../component/BrandBar";
import { FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" },
  }),
};

function ContactHeroSection() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden rounded-xl shadow-lg mb-10">
      <Image
        src="/hero1.jpg"
        alt="Contact SafePro"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-lg sm:text-2xl text-white/90 max-w-2xl text-center">
          We're here to answer your questions and provide expert fire safety
          solutions.
        </p>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;

    const whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0APhone: ${phone}%0AService Interested In: ${service}%0AMessage: ${message}`;
    const phoneNumber = "919051737934";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURI(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative z-10">
        <ContactHeroSection />
        {/* <BrandBar /> */}

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              custom={0}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Our Office
                    </h3>
                    <p className="text-gray-600">
                      72A/3 PURBACHAL MAIN ROAD, KOLKATA - 700078
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">+91 9051737934</p>
                  </div>
                </div>

                 {/* Whatsapp */}
                <div className="flex items-start">
  <div className="bg-red-100 p-3 rounded-full mr-4">
    <FaWhatsapp className="text-green-500 w-6 h-6" />
  </div>
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-1">
      Whatsapp Number
    </h3>
    <p className="text-gray-600">+91 9830039346</p>
  </div>
</div>
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Email Address
                    </h3>
                    <p className="text-gray-600">firemaxsafety91@gmail.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-red-100 p-3 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday : 10:00 AM - 8:00 PM
                    </p>
                    {/* <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p> */}
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              custom={1}
              className="bg-white text-black rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Fire Extinguishers">Fire Extinguishers</option>
                    <option value="Installation Services">Installation Services</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Safety Training">Safety Training</option>
                    <option value="Safety Audits">Safety Audits</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-lg font-medium hover:from-red-700 hover:to-red-800 transition-all"
                >
                  Send via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            custom={2}
            className="rounded-xl shadow-xl overflow-hidden"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Location
            </h2>
            
            <div className="h-96 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7372.056080969082!2d88.3935138!3d22.5031311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02714f8764d2fd%3A0xb3cc83e9fd542bec!2sFIREMAX%20SAFETY%20%26%20SECURITY%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1749463722708!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SafePro Location Map"
              ></iframe>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Background Elements */}
      <div className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 rotate-12 opacity-30 rounded-tr-[80%]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 rotate-[-12deg] opacity-15 rounded-tl-[60%]" />
        <div className="absolute top-1/3 left-[-40px] w-48 h-48 bg-red-700 opacity-15 rotate-[25deg] rounded-br-[50%]" />
      </div>
    </div>
  );
}
