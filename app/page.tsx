import Image from "next/image";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Links from "@/components/Links";
import { FloatingNav } from "@/components/ui/FloatingBar";
import { navItems } from "@/data";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <main>
      <Hero />
      <FloatingNav navItems={navItems} />
      <About/>
      <RecentProjects />
      <Skills />
      <Testimonials />
      <Contact />
      <Links />
      <Footer/>
      <div className="h-[5000vh] w-screen bg-amber-50 p-20"></div>
    </main>
  );
}
