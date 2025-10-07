"use client";

import React, { useEffect, useState } from "react";
import Topbar from "@component/components/Topbar";
import Header from "@component/components/Header";
import Hero from "@component/components/Hero";
import About from "@component/components/About";
import Services from "@component/components/Services";
import Work from "@component/components/Work";
import Testimonials from "@component/components/Testimonials";
import Stats from "@component/components/Stats";
import Faq from "@component/components/Faq";
import Contact from "@component/components/Contact";

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
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <Stats />
        <Faq />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
