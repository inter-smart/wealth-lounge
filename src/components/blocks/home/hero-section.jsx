"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import { Button } from "@/components/ui/button";

import parse from "html-react-parser";

import * as motion from "motion/react-client";
import { useState } from "react";

const local_data = {
  item_banner: [
    {
      media: {
        mobile: {
          type: "image",
          path: "/images/home-hero-1.jpg",
          alt: "hero",
        },
        desktop: {
          type: "image",
          path: "/images/home-hero-1.jpg",
          alt: "hero",
        },
      },
      title: "Access a World of <br/> Exclusive Investment Opportunities",
      description:
        "The Wealth Lounge provides simple, accessible, customized and profitable investment and wealth management solutions to everyone, everywhere.",
      button: [
        {
          type: "primary",
          icon: "icons/brand-icon.svg",
          label: "Explore Opportunities",
          link: "/",
        },
      ],
    },
    {
      media: {
        mobile: {
          type: "image",
          path: "/images/home-hero-1.jpg",
          alt: "hero",
        },
        desktop: {
          type: "image",
          path: "/images/home-hero-1.jpg",
          alt: "hero",
        },
      },
      title: "11 Access a World of <br/> Exclusive Investment Opportunities",
      description:
        "The Wealth Lounge provides simple, accessible, customized and profitable investment and wealth management solutions to everyone, everywhere.",
      button: [
        {
          type: "primary",
          icon: "icons/brand-icon.svg",
          label: "Explore Opportunities",
          link: "/",
        },
      ],
    },
    {
      media: {
        mobile: {
          type: "image",
          path: "/images/home-hero-1.jpg",
          alt: "hero",
        },
        desktop: {
          type: "image",
          path: "/images/home-hero-1.jpg",
          alt: "hero",
        },
      },
      title: "22 Access a World of <br/> Exclusive Investment Opportunities",
      description:
        "The Wealth Lounge provides simple, accessible, customized and profitable investment and wealth management solutions to everyone, everywhere.",
      button: [
        {
          type: "primary",
          icon: "icons/brand-icon.svg",
          label: "Explore Opportunities",
          link: "/",
        },
      ],
    },
  ],
};

const slideContentVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.95,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const titleVariants = {
  initial: {
    opacity: 0,
    y: -40,
    scale: 0.9,
    rotateX: -15,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const descriptionVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    filter: "blur(8px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
};

const buttonContainerVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.4,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function HeroSection({ data = local_data }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  return (
    <section className="w-full h-auto xl:min-h-screen block bg-black relative z-0">
      <Swiper
        loop={true}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
            shadow: true,
            translate: [-10, 0, -10],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        autoplay={false}
        speed={1200}
        pagination={true}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="[--swiper-pagination-bullet-size:4px] [--swiper-theme-color:#fff] [--swiper-pagination-bottom:15px] xl:[--swiper-pagination-bottom:20px] 2xl:[--swiper-pagination-bottom:25px] [--swiper-pagination-bullet-inactive-color:#fff] [--swiper-pagination-bullet-horizontal-gap:5px] xl:[--swiper-pagination-bullet-horizontal-gap:10px] 2xl:[--swiper-pagination-bullet-horizontal-gap:15px]"
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
      >
        {data?.item_banner?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full absolute -z-1 inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-65 pointer-events-none" />
            {item?.media?.type === "video" ? (
              <motion.video
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover absolute -z-2 inset-0"
              >
                <source src={item?.media?.path} type="video/mp4" />
              </motion.video>
            ) : (
              <motion.picture
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute -z-2 inset-0"
              >
                <source
                  media="(max-width: 640px)"
                  srcSet={item?.media?.mobile?.path}
                />
                <Image
                  src={item?.media?.desktop?.path}
                  alt={item?.media?.desktop?.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                  className="-z-2 object-cover"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                  priority={index === 0}
                />
              </motion.picture>
            )}
            <div className="container">
              <div className="w-full min-h-screen flex items-end py-[calc(var(--header-y)+30px)_50px] sm:py-[calc(var(--header-y)+40px)_50px] xl:py-[calc(var(--header-y)+60px)_60px] 2xl:py-[calc(calc(var(--header-y)+80px)_80px] 3xl:py-[calc(calc(var(--header-y)+100px)_100px]">
                <motion.div
                  key={activeSlide === index ? "active" : "inactive"}
                  variants={slideContentVariants}
                  initial="initial"
                  animate={activeSlide === index ? "animate" : "initial"}
                  exit="exit"
                  className="w-full max-w-[576px] sm:max-w-[768px] xl:max-w-[880px] 2xl:max-w-[1080px] 3xl:max-w-[1320px] mx-auto"
                >
                  <Heading
                    as="h1"
                    size="heading1"
                    className="text-center text-white mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                  >
                    <motion.div
                      variants={titleVariants}
                      className="transform-gpu"
                    >
                      {parse(item?.title)}
                    </motion.div>
                  </Heading>
                  <Text
                    as="div"
                    size="text1"
                    className="lg:line-clamp-2 text-center text-white max-w-[100%] lg:max-w-[60%] mx-auto mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                  >
                    <motion.div
                      variants={descriptionVariants}
                      className="transform-gpu"
                    >
                      {item?.description}
                    </motion.div>
                  </Text>
                  <motion.div
                    variants={buttonContainerVariants}
                    className="flex justify-center space-x-[10px] xl:space-x-[15px]"
                  >
                    {item?.button?.map((buttonItem, index) => (
                      <Button
                        key={"button-" + index}
                        variant="outline"
                        className="min-w-[160px] sm:min-w-[160px] xl:min-w-[170px] 2xl:min-w-[200px] 3xl:min-w-[246px]"
                        asChild
                      >
                        <Link href={buttonItem?.link}>
                          {buttonItem?.label}
                          {buttonItem?.icon && (
                            <Image
                              src={buttonItem?.icon}
                              alt={buttonItem?.label}
                              width={20}
                              height={20}
                              unoptimized
                              className="w-[12px] xl:w-[16px] 2xl:w-[18px]"
                            />
                          )}
                        </Link>
                      </Button>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
