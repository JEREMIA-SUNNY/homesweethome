import Image from "next/image";
import Homes from "./components/Homes";
import { motion } from "framer-motion";
import HomePageImageSection from "./components/HomePageImageSection";
import WhatWeDo from "./components/WhatWeDo";
import About from "./components/About";
import Contact from "./components/Contact";
import AdSection from "./components/AdSection";
import { TimeLine } from "./components/TimeLine";
import Pricing from "./components/Pricing";
export default function Home() {
  return (
    <main className="w-screen">
      <section className="w-full flex font-mono justify-center">
        <Homes />
      </section>

      <section className="w-full flex font-mono justify-center">
        <HomePageImageSection />
      </section>

      <section className="w-full flex font-mono justify-center">
        <WhatWeDo />
      </section>
      <section className="w-full flex font-mono justify-center">
        <About />
      </section>
      <section className="w-full  flex font-mono justify-center">
        <TimeLine />
      </section>

      <section className="w-full flex font-mono justify-center">
        <Pricing />
      </section>
      <section className="w-full flex font-mono justify-center">
        <Contact />
      </section>

      <section className="w-full py-20 flex font-mono justify-center">
        <AdSection />
      </section>
    </main>
  );
}
