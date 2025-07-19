'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Globe, Lock, MapPin, Mail, Menu, X } from 'lucide-react'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    // { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href) => pathname === href

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="text-white w-full top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="hidden sm:block text-sm w-full bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center flex-wrap gap-2">
          <div className="flex gap-4 items-center flex-wrap text-xs">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-red-500" />
              <span className=''>72 A/3 Purbachal Main Road, Kolkata - 700078</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} className="text-red-500" />
              <span>firemaxsafety91@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium">
            <button className="hover:underline">Help</button>
            <button className="hover:underline">Support</button>
            <button className="hover:underline">Faqs</button>
            <div className="hidden sm:flex items-center gap-2 text-lg ml-2">
              <FaTwitter className="hover:text-red-500 transition-colors" />
              <FaFacebookF className="hover:text-red-500 transition-colors" />
              <FaInstagram className="hover:text-red-500 transition-colors" />
              <FaYoutube className="hover:text-red-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white w-full shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 flex justify-between items-center">
          {/* Logo & Desktop Links */}
          <div className="flex items-center gap-0 md:gap-6">
            {/* Logo with white background */}
            <div className=" rounded-md">
              <div className="relative w-40 h-20 -ml-6 sm:-ml-0">
                <Image 
                  src="/logonoBg.png" 
                  alt="Firemax Safety & Security"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            
            <div className=" bg-red-600 px-4 py-2 -skew-x-12">
              <div className="flex items-center skew-x-12">
                <span className="text-xs sm:text-xl font-semibold">FIREMAX SAFETY & SECURITY</span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex gap-6 text-neutral-700 font-medium text-sm">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={isActive(href) ? 'text-red-500 font-bold underline underline-offset-4' : 'font-semibold hover:text-red-500 transition-colors'}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Icons & Hamburger */}
          <div className="flex items-center gap-4">
            <Link 
              href={"tel:9051737934"} 
              className="hidden sm:block border rounded-3xl border-neutral-500 text-sm font-semibold text-neutral-700 p-2 hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors"
            >
              PH : 9051737934
            </Link>
            {/* Hamburger menu for mobile */}
            <button
              className="lg:hidden flex items-center justify-center p-2 rounded-md focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={28} className="text-white" /> : <Menu className="text-neutral-700" size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 bg-gray-900">
              <div className="bg-white p-2 rounded-md">
                <div className="relative w-32 h-10">
                  <Image 
                    src="/logo.png" // Replace with your actual logo path
                    alt="Firemax Safety & Security"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <button
                className="text-white p-2"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-8 text-lg font-semibold">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-white hover:text-red-400 ${isActive(href) ? 'text-red-400 underline underline-offset-4' : ''}`}
                  onClick={handleLinkClick}
                >
                  {name}
                </Link>
              ))}
              <Link
                href={"tel:9051737934"}
                className='border rounded-3xl border-white text-sm font-semibold text-white p-3 hover:bg-red-500 hover:border-red-500 transition-colors'
                onClick={handleLinkClick}
              >
                PH : 9051737934
              </Link>
              <div className="flex gap-6 text-2xl mt-4">
                <FaTwitter className="hover:text-red-500 transition-colors" />
                <FaFacebookF className="hover:text-red-500 transition-colors" />
                <FaInstagram className="hover:text-red-500 transition-colors" />
                <FaYoutube className="hover:text-red-500 transition-colors" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}