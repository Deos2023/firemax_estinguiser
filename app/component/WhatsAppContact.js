"use client";
import { useState } from "react";
import Image from "next/image";

export default function WhatsAppContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    product: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, phone, city, product } = form;

    const message = `Hello, I have an inquiry:\n\nFull Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nProduct: ${product}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919830039346?text=${encodedMessage}`, "_blank");
  };

  return (
    <section className="bg-[#0d1b2a] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-xl p-4">
          <Image
            src="/contact.png"
            alt="Support Team"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Right side form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Any Doubts <span className="text-red-500 italic">in Your Mind</span>?
          </h2>
          <p className="text-gray-300 mb-6">Clear up your doubts with our highly skilled team.</p>

          <form onSubmit={sendToWhatsApp} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full name *"
                onChange={handleChange}
                required
                className="w-full bg-black/80 border border-gray-600 px-4 py-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email *"
                onChange={handleChange}
                required
                className="w-full bg-black/80 border border-gray-600 px-4 py-2 rounded"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Your phone *"
                onChange={handleChange}
                required
                className="w-full bg-black/80 border border-gray-600 px-4 py-2 rounded"
              />
              <input
                type="text"
                name="city"
                placeholder="Enter Your City *"
                onChange={handleChange}
                required
                className="w-full bg-black/80 border border-gray-600 px-4 py-2 rounded"
              />
            </div>
            <input
              type="text"
              name="product"
              placeholder="Enter Your Product *"
              onChange={handleChange}
              required
              className="w-full bg-black/80 border border-gray-600 px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 text-white font-semibold rounded shadow"
            >
              Submit via WhatsApp
            </button>
          </form>

          {/* Contact info box */}
          <div className="mt-10 p-6 bg-white/10 rounded">
            <p className="mb-2">
              📞{" "}
              <a href="tel:+919051737934" className="text-red-400 hover:underline">
                click to call
              </a>
            </p>
            <p className="mb-2">
              ✉️{" "}
              <a href="mailto:firemaxsafety91@gmail.com" className="text-teal-300 hover:underline">
                click to email
              </a>
            </p>
            <p className="text-gray-300">
              🏢 72A/3 PURBACHAL MAIN ROAD, KOLKATA - 700078
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
