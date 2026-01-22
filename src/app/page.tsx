import React from "react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Work from "@/components/Home/Services";
import AboutUs from "@/components/Home/AboutUs";
import Platform from "@/components/Home/platform";
import FAQ from "@/components/Home/FAQ";
import Contact from "@/components/Home/Contact";
import WorkApp from "@/components/Home/WorkApp";
import Interestform from "@/components/Home/Interestform";
import { Metadata } from "next";
import { features } from "./api/data";
export const metadata: Metadata = {
  title: "RunBeta",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Features />
      <WorkApp />

      <FAQ />
      <AboutUs />

      <Contact />
      <Platform />
    </main>
  );
}
