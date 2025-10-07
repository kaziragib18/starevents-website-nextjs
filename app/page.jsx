"use client";

import React, { useEffect, useState } from "react";
import Hero from "@component/components/Hero";
import Topbar from "@component/components/Topbar";
import Header from "@component/components/Header";
import About from "@component/components/About";
import Stats from "@component/components/Stats";
import Work from "@component/components/Work";
import Testimonials from "@component/components/Testimonials";
import Faq from "@component/components/Faq";
import Contact from "@component/components/Contact";
import Footer from "@component/components/Footer";
import Services from "@component/components/Services";

const Home = () => {
  const [headerActive, setHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("headerActive", headerActive);
  return (
    <div className="overflow-hidden">
      <Topbar />
      {/* static header */}
      <div className="relative z-10">
        <Header />
      </div>
      {/* animated header */}
      <div
        className={`w-full transition-transform duration-500 fixed top-0 left-0 z-50 ${
          headerActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Header />
      </div>
      <Hero />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Stats />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
