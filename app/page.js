import Image from "next/image";
import HeroSection from "./component/Hero";
import FloatingBar from "./component/FloatingBar";
import { BrandBar } from "./component/BrandBar";
import FeatureSection from "./component/FeatureSection";
import ProductSlider from "./component/ProductSlider";
import FaqSection from "./component/Faq";
import TestimonialsSlider from "./component/Testimonials";
import AboutFiremax from "./component/AboutFire";
import WhatsAppContact from "./component/WhatsAppContact";

export default function Home() {
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        

        {/* 🔝 Foreground Content */}
        <div className="relative z-10">
          <HeroSection />
          <FloatingBar />
          <BrandBar />
          {/* 🔴 Red geometric background elements */}
        <div className="absolute z-0 top-0 left-0 w-full h-full pointer-events-none">
          {/* Top-left sharp red block */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 rotate-12 opacity-30 rounded-tr-[80%]" />
          
          {/* Bottom-right diagonal block */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500 rotate-[-12deg] opacity-15 rounded-tl-[60%]" />

          {/* Mid background overlay */}
          <div className="absolute top-1/3 left-[-40px] w-48 h-48 bg-red-700 opacity-15 rotate-[25deg] rounded-br-[50%]" />
        </div>
          <FeatureSection />
          <AboutFiremax />
          <ProductSlider />
          <TestimonialsSlider />
          <FaqSection />
          <WhatsAppContact />
        </div>
      </div>
    </>
  );
}
