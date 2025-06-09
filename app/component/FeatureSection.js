'use client'

import { FileText, BarChart, Users, Handshake } from 'lucide-react'

export default function FeatureSection() {
  const features = [
    {
      icon: <FileText size={32} className="text-white" />,
      title: 'Assured Quality',
      description:
        'Safe pro fire, a Mumbai (Maharashtra) based business entity, is setting new paradigms of excellence by catering to various industrial sectors.',
    },
    {
      icon: <BarChart size={32} className="text-white" />,
      title: 'ISI Marked Products',
      description:
        'The products are also ISI Marked that further reflects the genuineness of the products and our credibility, adopting ethical business practices.',
    },
    {
      icon: <Users size={32} className="text-white" />,
      title: 'Experienced & Skilled Team',
      description:
        'The company has acquired huge clientele in the regions of South America, Eastern Europe, Southeast Asia, Africa etc.',
    },
    {
      icon: <Handshake size={32} className="text-white" />,
      title: 'Timely Delivery',
      description:
        'Professionally managed company. Superior communication, prompt response and proper action make us different from others.',
    },
  ]

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="bg-red-600 p-4 rounded-full mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#000823] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            <button className="mt-auto text-black bg-white border border-gray-300 px-4 py-2 rounded font-semibold hover:bg-gray-100">
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
