'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-red-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">FIREMAX SAFETY & SECURITY PVT. LTD.</h3>
            <p className="text-gray-300 mb-6">
              Providing trusted fire safety and security solutions since 2017. Safeguarding lives and properties with advanced systems and experienced service.
            </p>
            <div className="flex gap-4">
              <a href="#" target="_blank" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Fire Safety Equipment</li>
              <li>Security System Installation</li>
              <li>Fire Extinguisher Supply</li>
              <li>Fire Alarm & Sprinkler Setup</li>
              <li>Annual Maintenance Contracts</li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white transition">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-blue-400" />
                <div>
                  <p className="text-gray-300">9051737934</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-300">firemaxsafety91@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-blue-400" />
                <span className="text-gray-300">
                  72A/3 PURBACHAL MAIN ROAD, KOLKATA - 700078
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white my-12"
        />

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7372.056080969082!2d88.3935138!3d22.5031311!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02714f8764d2fd%3A0xb3cc83e9fd542bec!2sFIREMAX%20SAFETY%20%26%20SECURITY%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1749463722708!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full"
          ></iframe>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} FIREMAX SAFETY & SECURITY PVT. LTD. All rights reserved.<br />
            Website Developed & Maintained by Digital Exposure Online Services
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">Sitemap</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
