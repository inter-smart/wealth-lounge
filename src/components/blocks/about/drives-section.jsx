"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Heading } from "@/components/utils/heading";
import Image from "next/image";

import parse from "html-react-parser";

const local_data = {
  media: null,
  title: "What Drives Us",
  description: null,
  button: null,
  item_list: [
    {
      media: {
        type: "image",
        path: "/images/about-drives-1.svg",
        alt: "drives-item",
      },
      title: "Integrity",
    },
    {
      media: {
        type: "image",
        path: "/images/about-drives-2.svg",
        alt: "drives-item",
      },
      title: "Innovation",
    },
    {
      media: {
        type: "image",
        path: "/images/about-drives-3.svg",
        alt: "drives-item",
      },
      title: "Long-Term Vision",
    },
    {
      media: {
        type: "image",
        path: "/images/about-drives-4.svg",
        alt: "drives-item",
      },
      title: "Client-Centricity",
    },
  ],
};

export default function DrivesSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block pb-[30px] sm:pb-[60px] xl:pb-[90px] 2xl:pb-[110px]">
      <div className="container">
        <Heading
          as={"h2"}
          size={"heading2"}
          className="text-primary mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
        >
          {data?.title}
        </Heading>
        <Swiper
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          navigation={false}
          speed={600}
          watchSlidesProgress={true}
          watchOverflow={true}
          autoplay={false}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            384: {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              },
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="max-sm:!-mr-4 max-sm:[mask-image:linear-gradient(to_right,white_90%,transparent)]"
        >
          {data?.item_list.map((item, index) => {
            return (
              <SwiperSlide
                key={"drives-item" + index}
                style={{ width: "25%" }}
                className="!h-auto"
              >
                <div className="group w-full h-full min-h-[100px] sm:min-h-[140px] xl:min-h-[180px] 2xl:min-h-[268px] bg-[#fffbf4] p-[15px] xl:p-[20px] 2xl:p-[30px] flex flex-col items-center justify-center transition duration-600 hover:bg-primary/20">
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    width={70}
                    height={70}
                    className="w-[25px] md:w-[30px] xl:w-[40px] 2xl:w-[60px] 3xl:w-[70px] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                  />
                  <Heading
                    as={"h2"}
                    size={"none"}
                    className="text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-none text-center font-medium text-[#191919]"
                  >
                    {parse(item?.title)}
                  </Heading>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
