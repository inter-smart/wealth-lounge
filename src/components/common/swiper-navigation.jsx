"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function SwiperNavigation({ swiperRef }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    // Initial state
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    // Update state on slide change
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachBeginning", () => setIsBeginning(true));
    swiper.on("reachEnd", () => setIsEnd(true));
    swiper.on("fromEdge", () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });

    // Cleanup
    return () => {
      if (swiper && !swiper.destroyed) {
        swiper.off("slideChange", handleSlideChange);
        swiper.off("reachBeginning");
        swiper.off("reachEnd");
        swiper.off("fromEdge");
      }
    };
  }, [swiperRef]);

  return (
    <div className="[--bx-xy:35px] sm:[--bx-xy:35px] xl:[--bx-xy:40px] 2xl:[--bx-xy:42px] flex gap-x-[10px] xl:gap-x-[5px] 2xl:gap-x-[10px]">
      {/* Previous Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        className={`w-[var(--bx-xy)] h-auto aspect-square rounded-full transition ${
          isBeginning
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer  hover:bg-primary/20"
        }`}
      >
        <Image
          src="/images/icon-arrow-nav.svg"
          alt="Previous"
          width={42}
          height={42}
          unoptimized
          className="w-full h-full rotate-180"
        />
      </button>

      {/* Next Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        className={`w-[var(--bx-xy)] h-auto aspect-square rounded-full transition ${
          isEnd
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer  hover:bg-primary/20"
        }`}
      >
        <Image
          src="/images/icon-arrow-nav.svg"
          alt="Next"
          width={42}
          height={42}
          unoptimized
          className="w-full h-full"
        />
      </button>
    </div>
  );
}
