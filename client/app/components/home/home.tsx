"use client";

import { useEffect } from "react";
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
  // Remove showNav state - Nav handles its own visibility
  useEffect(() => {
    // Initialize any analytics or one-time effects here
    // Scroll restoration if needed
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const tendersData = [
    {
      id: "1",
      reference: "NCC/T/05/2025",
      description: "Supply and Installation of Traffic Management Systems",
      category: "Infrastructure",
      closingDate: "June 15, 2025",
      status: "Open",
      href: "/resources/tenders/NCC-T-05-2025",
    },
    {
      id: "2",
      reference: "NCC/T/06/2025",
      description:
        "Construction of Community Health Centers in Embakasi and Kasarani",
      category: "Health",
      closingDate: "June 8, 2025",
      status: "Closing Soon",
      href: "/resources/tenders/NCC-T-06-2025",
    },
    // ... more tenders
  ];

  return (
    <>
      {/* Always render Nav - it handles its own visibility */}
      <Nav />

      {/* Add top padding to account for fixed navbar */}
      <main className="flex flex-col min-h-screen pt-16 md:pt-20">
        <HeroSection {...blocks[0]} />
        <ServicesSection {...blocks[1]} />
        <Sectors {...blocks[2]} />
        <Tenders tenders={tendersData} />
        <Explore {...blocks[3]} />
        <NewsEventsSection {...blocks[4]} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
