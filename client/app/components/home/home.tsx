"use client";

import { useEffect, useState } from "react";
import AnimationStyles from "./AnimationStyles";
import Nav from "../nav-bar";
import HeroSection from "./hero/HeroSection";
import ServicesSection from "./services/ServicesSection";
import NewsEventsSection from "./news/NewsEventsSection";
import Footer from "../footer";
import Contact from "./contact/contact";
import Explore from "./explore/Explore";
import Sectors from "./sectors/Sectors";
import Tenders from "./tenders/Tenders";

export default function Home({ blocks }: { blocks: any }) {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If the user has scrolled down at all, show the nav
      if (window.scrollY > 0) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Perform an initial check in case the page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <AnimationStyles /> */}
      {showNav && <Nav />}

      <main className="flex flex-col min-h-screen">
        <HeroSection {...blocks[0]} />
        <ServicesSection {...blocks[1]} />
        <Sectors {...blocks[2]} />
        <Tenders />
        <Explore {...blocks[3]} />
        <NewsEventsSection {...blocks[4]} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
