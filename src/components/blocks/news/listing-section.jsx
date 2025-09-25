"use client";
import { useState } from "react";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import BlogCard from "@/components/common/blog-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const local_data = {
  media: null,
  title: "News & Blogs",
  description:
    "Our vision is to bring together innovative, prestigious and reputable investment providers across multiple asset-classes, with our growing client base, giving them the ability to absorb and apply these solutions into their own wealth creation initiatives. We will support and continue to work hard with our clients to ensure that they are always presented with the most robust investment opportunities from an ever-changing economic landscape.",
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
        path: "/images/home-blog-item-3.jpg",
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
        path: "/images/home-blog-item-4.jpg",
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
        path: "/images/home-blog-item-3.jpg",
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
        path: "/images/home-blog-item-4.jpg",
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

export default function ListingSection({ data = local_data, variant = "default" }) {
  const [filter, setFilter] = useState("all");
  const filteredItems =
    filter === "all"
      ? data.item_list
      : data.item_list.filter((item) => item.category === filter);
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[90px] 2xl:py-[110px] bg-[#FFFBF4] relative z-0">
      {variant === "about" && (
        <Image
          src="/images/about-about-bg.png"
          alt="news-news-bg"
          width={436}
          height={467}
          className="w-[200px] xl:w-[276px] 2xl:w-[320px] 3xl:w-[420px] opacity-10 absolute -z-1 top-[-20px] sm:top-[-30px] xl:top-[-40px] right-[6%] xl:right-[calc((100%-var(--container-xl))/2)] 2xl:right-[calc((100%-var(--container-2xl))/2)] 3xl:right-[calc((100%-var(--container-3xl))/2)] mr-4"
        />
      )}
      <div className="container">
        <div>
          <Heading
            as="h2"
            size="heading2"
            className="text-primary mb-[10px] xl:mb-[15px]"
          >
            {data?.title}
          </Heading>
          <Text
            as="p"
            size="text1"
            className="text-[#191919] mb-[15px] xl:mb-[30px] 2xl:mb-[40px]"
          >
            {data?.description}
          </Text>
        </div>
        <div className="w-full h-auto flex justify-end">
          <Select onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-[152px] !h-[40px] px-[20px] xl:px-[28px] border-1 border-[#000] focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:shadow-none [&_.lucide-chevron-down]:hidden relative z-0">
              <SelectValue placeholder="View All" />
              <div className="w-[15px] h-[14px] absolute -z-1 right-[20px] xl:right-[28px]">
                <Image
                  src="/images/news-dwn-arrw.svg"
                  alt="arrow"
                  width={15}
                  height={14}
                  className="w-[15px] h-[14px] object-contain"
                />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">View All</SelectItem>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="news">News</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap mx-[-5px] xl:mx-[-10px] 2xl:mx-[-12px] 3xl:mx-[-15px] [&>*]:p-[30px_5px] xl:[&>*]:p-[50px_10px] 2xl:[&>*]:p-[60px_12px] 3xl:[&>*]:p-[75px_15px] relative z-0">
          <div className="w-full h-full bg-[radial-gradient(circle,transparent_5%,#FFFBF4_100%)] pointer-events-none absolute  z-2 inset-0" />
          {filteredItems.map((item, index) => {
            const totalItems = filteredItems.length;
            const columns = 4; // Keep responsive logic if needed
            const isLastColumn = (index + 1) % columns === 0;
            const currentRow = Math.floor(index / columns) + 1;
            const numRows = Math.ceil(totalItems / columns);
            const isLastRow = currentRow === numRows;
            return (
              <div
                key={"item" + index}
                className={`w-full sm:w-1/2 md:w-1/3 xl:w-1/4 border-r border-r-[#998262] border-b border-b-[#998262]
              ${isLastColumn ? "border-r-0" : ""}
              ${isLastRow ? "border-b-0" : ""}
              `}
              >
                <div className="w-full h-full relative z-3">
                  <BlogCard data={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
