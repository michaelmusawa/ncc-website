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
    if (!images || images?.length <= 1) return;

    const interval = setInterval(() => {
      // Don’t start a new animation if one is already running
      if (isAnimating.current) return;

      const nextIndex = (current + 1) % images?.length;
      isAnimating.current = true;
      setNext(nextIndex);
    }, 9000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, images?.length]);

  // Called when the slide-in animation for “next” finishes
  const handleAnimationComplete = () => {
    if (next === null) return;
    setCurrent(next);
    setNext(null);
    isAnimating.current = false;
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Static “current” image always visible in the background */}
        {images && images?.length > 0 && (
          <StrapiImage
            src={images[current].url}
            alt={images[current].alternativeText || "Hero image"}
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        )}

        {/* When next !== null, we render it as a motion.div sliding in from the right */}
        {next !== null && (
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
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
