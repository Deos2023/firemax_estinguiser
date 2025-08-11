'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: ' What Is an ABC Fire Extinguisher?',
    answer:
      'An ABC extinguisher is a multi-purpose dry chemical extinguisher that uses a specially treated monoammonium phosphate powder, sometimes mixed with ammonium sulfate. This agent can combat.',
  },
  {
    question: 'CO₂ fire extinguisher',
    answer:
      'A CO₂ fire extinguisher is a pressurized cylinder that discharges carbon dioxide gas, designed primarily to suppress Class B (flammable liquid) and Class C (electrical) fires. Because CO₂ is non‑conductive and leaves no residue, it’s especially suited for environments with sensitive electronic or electrical equipment.',
  },
  {
    question: 'Dry Chemical (Powder) Extinguishers ',
    answer:
      'Dry Chemical (Powder) extinguishers—commonly labeled ABC or BC—use a fine powder (such as monoammonium phosphate, sodium or potassium bicarbonate) to snuff out fires by interrupting the chemical reaction and smothering flames for Class A (solids), B (liquids), and C (electrical) hazards.',
  },
  {
    question: 'Kitchen fire extinguisher ',
    answer:
      'Designed specifically for combating deep-frying and cooking oil/fat fires, these extinguishers release a potassium-based mist that cools the burning oil and initiates saponification, forming a soapy foam layer that smothers the fire and prevents re-ignition.',
  },
  {
    question: 'Clean Agent Fire Extinguisher',
    answer:
      'Clean agent extinguishers discharge a fast-evaporating, non-conductive gas that suppresses Class A, B, and C fires by interrupting the chemical reaction or removing heat, all without leaving residue or damaging sensitive equipment. They are ideal for data centers, museums, laboratories, telecom rooms, and other environments where minimal cleanup and equipment protection are paramount.',
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
              src="/faq.jpg" // update with your image path
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
