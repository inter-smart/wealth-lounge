"use client";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import useMedia from "use-media";

const local_data = {
  media: {
    type: "image",
    path: "/images/home-about-1.jpg",
    alt: "about",
  },
  title: "Services <br/> We Provide",
  description:
    "<p>At The Wealth Lounge we offer wealth management, securities execution and custody services across multiple regions around the world.</p>",
  button: {
    type: "primary",
    icon: "icons/brand-icon.svg",
    label: "View All",
    link: "/",
  },
  item_list: [
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-1.svg",
        alt: "service",
      },
      title: "Real Estate",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-2.svg",
        alt: "service",
      },
      title: "Fixed Income Loan Notes",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-3.svg",
        alt: "service",
      },
      title: "Fixed Income + Profit share",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-4.svg",
        alt: "service",
      },
      title: "UK Private Equity",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-5.svg",
        alt: "service",
      },
      title: "Private equity in gold exploration",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-6.svg",
        alt: "service",
      },
      title: "US Pre-developed Land",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-7.svg",
        alt: "service",
      },
      title: "UK Film and Television Production",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-8.svg",
        alt: "service",
      },
      title: "Wine Investment",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-9.svg",
        alt: "service",
      },
      title: "Fine Art",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-10.svg",
        alt: "service",
      },
      title: "Groundbreaking AI Fund",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    {
      media: {
        type: "image",
        path: "/icons/home-service-item-11.svg",
        alt: "service",
      },
      title: "Family Office co-investment",
      description: null,
      button: {
        type: "link",
        icon: "icons/brand-icon.svg",
        label: "Learn More",
        link: "/",
      },
    },
    ,
  ],
};
export default function ServiceSection({ data = local_data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null > null);

  const isDesktop = useMedia({ minWidth: "640px" });

  return (
    <section className="w-full h-auto block bg-[#191919] overflow-hidden relative z-0 max-sm:py-[30px]">
      <Image
        src="/images/home-serv-bg.png"
        alt="home-serv-bg"
        width={590}
        height={345}
        className="w-[320px] xl:w-[376px] 2xl:w-[420px] 3xl:w-[468px] absolute -z-1 left-0 top-0 bottom-0"
      />
      <div className="sp-container pl-4 ml-auto max-sm:px-4">
        <div className="flex flex-wrap items-center sm:-mx-[20px] xl:-mx-[35px] 2xl:-mx-[50px] sm:[&>*]:px-[20px] xl:[&>*]:px-[35px] 2xl:[&>*]:px-[50px] ">
          <div className="w-full sm:w-[268px] md:w-[300px] xl:w-[330px] 2xl:w-[390px] 3xl:w-[520px] max-sm:mb-[20px]">
            <div className="w-full sm:max-w-[240px] xl:max-w-[420px] 2xl:max-w-[668px] 3xl:max-w-[368px]">
              <Heading
                as="h2"
                size="heading2"
                className="text-primary mb-[10px] xl:mb-[15px]"
              >
                {parse(data?.title)}
              </Heading>
              <Text
                as="div"
                size="text1"
                className="text-white mb-[15px] xl:mb-[30px] 2xl:mb-[40px]"
              >
                {parse(data?.description)}
              </Text>
              <Button
                variant="link"
                className="text-white border-white"
                asChild
              >
                <Link href={data?.button?.link}>
                  {data?.button?.label}
                  {data?.button?.icon && (
                    <Image
                      src={data?.button?.icon}
                      alt={data?.button?.label}
                      width={20}
                      height={20}
                      unoptimized
                      className="w-[12px] xl:w-[16px] 2xl:w-[18px]"
                    />
                  )}
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full sm:w-[calc(100%-268px)] md:w-[calc(100%-300px)] xl:w-[calc(100%-330px)] 2xl:w-[calc(100%-390px)] 3xl:w-[calc(100%-520px)]">
            <div className="flex flex-wrap">
              {isDesktop && (
                <div className="w-[calc(100%/3)] sm:w-[calc(100%/3)] lg:w-[calc(100%/4)]">
                  <div className="group w-full h-auto aspect-square" />
                </div>
              )}
              {data?.item_list?.map((item, index) => (
                <div
                  key={"service-item-" + index}
                  className="w-[calc(100%/2)] 2xs:w-[calc(100%/3)] sm:w-[calc(100%/3)] lg:w-[calc(100%/4)]"
                >
                  <div
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="group w-full h-auto aspect-square border border-[#3c3c3c] block relative z-0"
                  >
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.span
                          className="absolute -z-1 inset-0 h-full w-full bg-linear-to-r from-[#c9913a] to-[#8c5500] block"
                          layoutId="hoverBackground"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: 1,
                            transition: { duration: 0.5, ease: "easeInOut" },
                          }}
                          exit={{
                            opacity: 0,
                            transition: { duration: 0.5, ease: "easeInOut" },
                          }}
                        />
                      )}
                    </AnimatePresence>

                    <div className="w-full h-full p-[15px] xl:p-[20px] 2xl:p-[30px] flex flex-col justify-between gap-1 group-hover:opacity-0 group-hover:invisible opacity-100 visible transition duration-400">
                      <Image
                        src={item?.media?.path}
                        alt={item?.media?.alt}
                        width={40}
                        height={40}
                        className="w-[25px] md:w-[30px] xl:w-[38px] 2xl:w-[42px] 3xl:w-[45px]"
                      />
                      <Heading
                        as="h4"
                        size="heading4"
                        className="font-brownede text-primary"
                      >
                        {parse(item?.title)}
                      </Heading>
                    </div>
                    <div className="w-full h-full p-[15px] xl:p-[20px] 2xl:p-[30px] absolute z-1 inset-0 flex flex-col justify-between gap-1 group-hover:opacity-100 group-hover:visible opacity-0 invisible transition duration-400">
                      <Image
                        src={item?.media?.path}
                        alt={item?.media?.alt}
                        width={40}
                        height={40}
                        className="w-[30px] xl:w-[38px] 2xl:w-[45px] hover:scale-105 transition"
                      />
                      <Heading
                        as="h4"
                        size="heading4"
                        className="font-brownede text-white"
                      >
                        {parse(item?.title)}
                      </Heading>
                      <div>
                        <Button
                          variant="link"
                          className="text-white border-white"
                          asChild
                        >
                          <Link href={data?.button?.link}>
                            {data?.button?.label}
                            {data?.button?.icon && (
                              <Image
                                src={data?.button?.icon}
                                alt={data?.button?.label}
                                width={20}
                                height={20}
                                unoptimized
                                className="w-[12px] xl:w-[16px] 2xl:w-[18px]"
                              />
                            )}
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
