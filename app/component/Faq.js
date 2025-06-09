'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Safe Pro ABC Fire Extinguisher',
    answer:
      'Safe Pro ABC Fire Extinguishers are suitable for class A, B, and C fires. They are multipurpose and ideal for home, office, or industrial use.',
  },
  {
    question: 'Safe Pro BC Powder Fire Extinguishers',
    answer:
      'These extinguishers are designed to combat class B and C fires involving flammable liquids and gases.',
  },
  {
    question: 'Safe Pro Clean Agent Fire Extinguishers',
    answer:
      'Clean agent extinguishers are ideal for sensitive environments like server rooms, as they leave no residue.',
  },
  {
    question: 'Safe Pro Kitchen Fire Extinguishers',
    answer:
      'Specially made for cooking oil fires (Class K), these extinguishers ensure kitchen safety.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-[#000823]"
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-red-600 transform -skew-y-6 rounded-xl -z-10"></div>
         
            <Image
              src="/838.jpg" // update with your image path
              alt="Safe Pro Fire Extinguisher"
              width={600}
              height={700}
              className="mx-auto object-contain"
            />
          
        </div>
      </div>
    </section>
  )
}
