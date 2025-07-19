'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    src: '/products/powder.jpg',
    title: 'Dry Powder Extinguisher',
  },
  {
    id: 2,
    src: '/products/foam1.jpg',
    title: 'Foam Fire Extinguisher',
  },
  {
    id: 3,
    src: '/products/co2.jpg',
    title: 'CO₂ Fire Extinguisher',
  },
  {
    id: 4,
    src: '/products/water.jpg',
    title: 'Water Extinguisher',
  },
  {
    id: 5,
    src: '/products/wet.jpg',
    title: 'Wet Extinguisher',
  },
]

export default function ProductSlider() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let index = 0

    const interval = setInterval(() => {
      if (!container) return
      index = (index + 1) % products.length
      container.scrollTo({
        left: container.offsetWidth * index,
        behavior: 'smooth',
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#000823] mb-10">
          Our <span className="text-red-600 italic">Products</span>
        </h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-full sm:min-w-[50%] md:min-w-[33.3%] lg:min-w-[25%] px-4 snap-start"
            >
              <div className="bg-white  hover:shadow-xl transition p-4 flex flex-col items-center justify-center">
                <div className="w-[180px] h-[350px] flex items-center justify-center  rounded-lg overflow-hidden">
                  <Image
                    src={product.src}
                    alt={product.title}
                    width={160}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <h3 className="mt-4 text-center text-sm font-semibold text-gray-800">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
