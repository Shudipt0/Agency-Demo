
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Pricing } from "@/components/Pricing";
import { prisma } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  const services = await prisma.service.findMany();
  console.log(services)
  return (
    <div className="bg-[#080809]" >    
     <HeroSection/>
     <Features/>
     <Pricing/>
     <Footer/>
    </div>
  );
}
