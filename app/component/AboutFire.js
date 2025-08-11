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
              src="/collage.png"
              alt="Firemax fact"
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
            Your Safety, Our Priority: Firemax Safety & Security
          </h2>
          <p className="text-base leading-relaxed text-gray-800">
             
At Firemax Safety & Security Pvt Ltd., we don't just sell fire protection equipment; we provide comprehensive fire safety solutions tailored to your specific needs. As project integrators and consultants, we take a holistic approach to fire safety, guiding you from initial risk assessment and design to installation and ongoing maintenance.
Our expertise spans all aspects of fire and safety. We're your single point of contact for everything from advanced fire suppression systems and alarm networks to passive fire protection and emergency planning following NBCC, NFPA, WBFES & regional authorities. We're committed to protecting your people, your assets, and your business with cutting-edge technology and unparalleled expertise. We're not just a vendor; we're your partner in safety. We also undertake the entire project on a turnkey basis, starting from designing, drawing, supply, commissioning & testing of Fire Detection & Protection systems
Let's build a safer future together.

          </p>
        </div>
      </div>
    </section>
  );
}
