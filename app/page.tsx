
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Pricing } from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#080809]" >    
     <HeroSection/>
     <Features/>
     <Pricing/>
     <Footer/>
    </div>
  );
}
