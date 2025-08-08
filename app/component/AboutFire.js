"use client";
import Image from "next/image";

export default function AboutFiremax() {
  return (
    <section className="bg-white text-[#0d2b24] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/img3.png"
              alt="Firemax Factory"
              width={800}
              height={500}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div>
          {/* <div>
            <Image
              src="/images/firemax-production.jpg"
              alt="Production Floor"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div>
          <div>
            <Image
              src="/images/firemax-office.jpg"
              alt="Office Team"
              width={400}
              height={300}
              className="rounded-lg shadow-md object-cover w-full"
            />
          </div> */}
        </div>

        {/* Right Side - Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            FIREMAX SAFETY & SECURITY
          </h2>
          <p className="text-base leading-relaxed text-gray-800">
            Established in 1995, <strong>FIREMAX SAFETY & SECURITY</strong> is a
            Kolkata-based pioneer in fire safety manufacturing. We specialize in
            high-quality portable, trolley-mounted, and modular fire extinguishers
            for industrial, commercial, and residential applications.
          </p>
          <p className="text-base mt-4 leading-relaxed text-gray-800">
            With a modern factory in Kolkata, our production capacity exceeds
            <strong> 8,000 units per day</strong>. Our facility is equipped with an
            advanced R&D lab, precision testing units, and an experienced technical
            team that ensures consistent product quality aligned with national and
            international safety standards.
          </p>
          <p className="text-base mt-4 leading-relaxed text-gray-800">
            We offer third-party testing upon request, ensuring transparency and
            compliance. Our mission is to protect lives and assets with fire safety
            products that deliver peace of mind. At FIREMAX, we go beyond compliance
            — we set the benchmark in protection.
          </p>
        </div>
      </div>
    </section>
  );
}
