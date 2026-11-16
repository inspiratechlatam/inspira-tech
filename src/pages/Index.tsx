import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Program from "@/components/Program";
import ContentSection from "@/components/ContentSection";
import WhyJoin from "@/components/WhyJoin";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Program />
      <ContentSection />
      <WhyJoin />
      <Testimonials />
      <Team />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
