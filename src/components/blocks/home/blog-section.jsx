"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Heading } from "@/components/utils/heading";
import BlogCard from "@/components/common/blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const local_data = {
  media: null,
  title: "News & Blogs",
  description: null,
  button: {
    type: "link",
    icon: "icons/brand-icon-black.svg",
    label: "View All",
    link: "/",
  },
  item_list: [
    {
      link: "/",
      category: "news",
      timestamp: "2025-05-16T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/home-blog-item-1.jpg",
        alt: "review-item",
      },
      title:
        "Activities Mania Deluxe Slot Opinion Play Free Demonstration 2024",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
    },
    {
      link: "/",
      category: "blog",
      timestamp: "2025-05-16T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/home-blog-item-2.jpg",
        alt: "review-item",
      },
      title: "Flux Position 100 percent free Casino slot games by Thunderkick",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
    },
    {
      link: "/",
      category: "news",
      timestamp: "2025-05-16T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/home-blog-item-2.jpg",
        alt: "review-item",
      },
      title: "Fluffy Favourites Remastered Position Free Demo and Game Opinion",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
    },
    {
      link: "/",
      category: "blog",
      timestamp: "2025-05-16T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/home-blog-item-2.jpg",
        alt: "review-item",
      },
      title: "Flux Position 100 percent free Casino slot games by Thunderkick",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
    },
    {
      link: "/",
      category: "news",
      timestamp: "2025-05-16T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/home-blog-item-1.jpg",
        alt: "review-item",
      },
      title:
        "Activities Mania Deluxe Slot Opinion Play Free Demonstration 2024",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
    },
    {
      link: "/",
      category: "blog",
      timestamp: "2025-05-16T05:00:00.000000Z",
      media: {
        type: "image",
        path: "/images/home-blog-item-2.jpg",
        alt: "review-item",
      },
      title: "Flux Position 100 percent free Casino slot games by Thunderkick",
      description:
        "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
    },
  ],
};

export default function BlogSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block bg-[#fffbf4] py-[30px] sm:py-[40px] xl:py-[60px_90px] 2xl:py-[80px_130px] relative z-0">
      <Image
        src="/images/home-blog-elmt-1.png"
        alt="home-blog-bg"
        width={321}
        height={323}
        className="w-[140px] xl:w-[200px] 2xl:w-[320px] absolute -z-1 right-[4%] xl:right-[4%] 2xl:right-[6%] top-[15px] xl:top-[30px] 2xl:top-[40px]"
      />
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-1 mb-[15px] xl:mb-[20px] 2xl:mb-[30px]">
          <Heading as="h2" size="heading2" className="text-primary">
            {data?.title}
          </Heading>
          <Button
            variant="link"
            className="text-black border-transparent"
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="max-sm:!-mr-4 max-sm:[mask-image:linear-gradient(to_right,white_90%,transparent)]"
        >
          {data?.item_list?.map((item, index) => {
            return (
              <SwiperSlide
                key={"blog-item" + index}
                style={{ width: "25%" }}
                className="!h-auto"
              >
                <BlogCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
