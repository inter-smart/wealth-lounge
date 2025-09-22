"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Heading } from "@/components/utils/heading";
import Image from "next/image";

import parse from "html-react-parser";
import { Text } from "@/components/utils/text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TeamSection({ data }) {
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
              slidesPerView: 2,
              spaceBetween: 15,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              },
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          className="max-sm:!-mr-4 max-sm:[mask-image:linear-gradient(to_right,white_90%,transparent)]"
        >
          {data?.item_list.map((item, index) => {
            return (
              <SwiperSlide
                key={"team-item" + index}
                style={{ width: "20%" }}
                className="!h-auto"
              >
                <div className="group w-full h-full min-h-[168px] sm:min-h-[200px] xl:min-h-[268px] 2xl:min-h-[376px] bg-black p-[10px] xl:p-[15px] 2xl:p-[20px] overflow-hidden flex flex-col justify-end relative z-0">
                  <div className="w-full h-full absolute -z-1 inset-0 bg-gradient-to-t from-black via-50% via-transparent to-transparent opacity-100 pointer-events-none" />
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    fill
                    sizes="320px"
                    className="object-cover -z-2 transition duration-300 group-hover:scale-110"
                  />
                  <div className="w-[40px] h-auto bg-primary absolute z-0 top-0 right-0">
                    {item?.social_link?.map((socialItem, socialIndex) => {
                      <div key={"social-item" + socialIndex} className="w-[10px]">
                        <Image
                          src={socialItem?.icon}
                          alt={socialItem?.label}
                          fill
                          sizes="320px"
                          className="object-cover -z-2 transition duration-300 group-hover:scale-110"
                        />
                      </div>;
                    })}
                  </div>
                  <div>
                    <Heading
                      as={"h5"}
                      size={"heading5"}
                      className="line-clamp-1 font-medium !font-roboto text-white mb-[2px] sm:mb-[6px] 2xl:mb-[10px]"
                    >
                      {parse(item?.title)}
                    </Heading>
                    <Text
                      as="div"
                      size="none"
                      className="text-[10px] sm:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] leading-normal font-normal line-clamp-3 text-white mb-[2px] sm:mb-[6px] 2xl:mb-[10px]"
                    >
                      {parse(item?.description)}
                    </Text>

                    <Button
                      variant="link"
                      className="!h-auto text-primary border-none"
                      asChild
                    >
                      <Link href={"/"}>
                        Biography
                        <Image
                          src={"/images/about-team-btn.svg"}
                          alt="about-team-btn"
                          width={20}
                          height={20}
                          unoptimized
                          className="w-[2px] xl:w-[4px] 2xl:w-[8px]"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
