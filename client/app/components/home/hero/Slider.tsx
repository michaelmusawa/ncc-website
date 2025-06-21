"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ImageProps } from "@/app/lib/types";
import { StrapiImage } from "../../StrapiImage";

export default function HeroSlider({ images }: { images: ImageProps[] }) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      if (isAnimating.current) return;
      const nextIndex = (current + 1) % images.length;
      isAnimating.current = true;
      setNext(nextIndex);
    }, 7000); // Faster transition

    return () => clearInterval(interval);
  }, [current, images]);

  const handleAnimationComplete = () => {
    if (next === null) return;
    setCurrent(next);
    setNext(null);
    isAnimating.current = false;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {images?.length > 0 && (
          <StrapiImage
            src={images[current].url}
            alt={images[current].alternativeText || "Hero image"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            width={1920}
            height={1080}
            priority
          />
        )}

        {next !== null && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onAnimationComplete={handleAnimationComplete}
          >
            <StrapiImage
              src={images[next].url}
              alt={images[next].alternativeText || "Next hero image"}
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}
