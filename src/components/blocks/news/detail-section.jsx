"use client";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import parse from "html-react-parser";
import { format } from "date-fns";
import BlogCard from "@/components/common/blog-card";
import useMedia from "use-media";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const local_data = {
  link: "/news/news-detail",
  category: "news",
  timestamp: "2025-05-16T05:00:00.000000Z",
  media: {
    type: "image",
    path: "/images/home-blog-item-1.jpg",
    alt: "review-item",
  },
  title:
    "<h1>Activities Mania Deluxe Slot Opinion Play Free Demonstration 2024</h1>",
  description:
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p><p>Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>",
  recent_list: {
    title: "Recent News",
    item_list: [
      {
        link: "/news/news-detail",
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
        link: "/news/news-detail",
        category: "blog",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-2.jpg",
          alt: "review-item",
        },
        title:
          "Flux Position 100 percent free Casino slot games by Thunderkick",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
      {
        link: "/news/news-detail",
        category: "news",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-3.jpg",
          alt: "review-item",
        },
        title:
          "Fluffy Favourites Remastered Position Free Demo and Game Opinion",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
      {
        link: "/news/news-detail",
        category: "blog",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-4.jpg",
          alt: "review-item",
        },
        title:
          "Flux Position 100 percent free Casino slot games by Thunderkick",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
      {
        link: "/news/news-detail",
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
        link: "/news/news-detail",
        category: "blog",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-2.jpg",
          alt: "review-item",
        },
        title:
          "Flux Position 100 percent free Casino slot games by Thunderkick",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
      {
        link: "/news/news-detail",
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
        link: "/news/news-detail",
        category: "blog",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-2.jpg",
          alt: "review-item",
        },
        title:
          "Flux Position 100 percent free Casino slot games by Thunderkick",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
      {
        link: "/news/news-detail",
        category: "news",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-3.jpg",
          alt: "review-item",
        },
        title:
          "Fluffy Favourites Remastered Position Free Demo and Game Opinion",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
      {
        link: "/news/news-detail",
        category: "blog",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-4.jpg",
          alt: "review-item",
        },
        title:
          "Flux Position 100 percent free Casino slot games by Thunderkick",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
      {
        link: "/news/news-detail",
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
        link: "/news/news-detail",
        category: "blog",
        timestamp: "2025-05-16T05:00:00.000000Z",
        media: {
          type: "image",
          path: "/images/home-blog-item-2.jpg",
          alt: "review-item",
        },
        title:
          "Flux Position 100 percent free Casino slot games by Thunderkick",
        description:
          "<p>Lorem Ipsum is simply dummy text of the printing and types</p>",
      },
    ],
  },
};
export default function DetailSection({ data = local_data }) {
  const formattedDate = format(new Date(data?.timestamp), "dd.MM.yyyy");
  const isDesktop = useMedia({ minWidth: "640px" });
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[80px] 2xl:py-[100px] bg-[#FFFBF4] overflow-hidden relative z-0">
      <Image
        src="/images/news-info-bg.png"
        alt="news-info-bg"
        width={436}
        height={467}
        className="w-full max-w-[168px] sm:max-w-[300px] xl:max-w-[320px] 2xl:max-w-[376px] absolute -z-1 top-[-40px] right-[6%] xl:right-[calc((100%-var(--container-xl))/2)] 2xl:right-[calc((100%-var(--container-2xl))/2)] 3xl:right-[calc((100%-var(--container-3xl))/2)] mr-4"
      />
      <div className="container">
        <div className="flex flex-wrap -mx-[15px] md:-mx-[20px] xl:-mx-[25px] 2xl:-mx-[30px] [&>*]:p-[15px] md:[&>*]:p-[20px] xl:[&>*]:p-[25px] 2xl:[&>*]:p-[30px]">
          <div
            className={`w-full sm:w-[calc(100%-220px)] md:w-[calc(100%-268px)] xl:w-[calc(100%-310px)] 2xl:w-[calc(100%-368px)] 3xl:w-[calc(100%-440px)] ${
              data?.recent_list?.item_list?.length >= 0 ? "mx-0" : "m-auto"
            }`}
          >
            <div>
              <Heading
                as={"div"}
                size={"none"}
                className="text-[16px] sm:text-[18px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-tight font-extralight font-brownede text-primary mb-[5px] xl:mb-[10px]"
              >
                {parse(data?.title)}
              </Heading>
              <Text
                as="div"
                size="text1"
                className="!font-medium text-[#191919] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
              >
                {formattedDate}
              </Text>
              <div className="w-full h-auto aspect-[1200/560] overflow-hidden mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                <Image
                  src={data?.media?.path || "/images/placeholder.jpg"}
                  alt={data?.media?.alt || "blog-item"}
                  width={1185}
                  height={557}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="typography mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                {parse(data?.description)}
              </div>
            </div>
          </div>
          {!isDesktop ||
            (data?.recent_list?.item_list?.length > 0 && (
              <div className="w-full sm:w-[220px] md:w-[268px] xl:w-[310px] 2xl:w-[368px] 3xl:w-[440px]">
                <div>
                  <Heading
                    as={"div"}
                    size={"none"}
                    className="text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-none font-extralight font-brownede text-primary mb-[15px] 2xl:mb-[20px]"
                  >
                    {parse(data?.recent_list?.title)}
                  </Heading>
                  <div className="flex flex-wrap -mx-[4px] md:-mx-[8px] xl:-mx-[12px] 2xl:-mx-[15px] [&>*]:p-[4px] md:[&>*]:p-[8px] xl:[&>*]:p-[12px] 2xl:[&>*]:p-[15px]">
                    {data?.recent_list?.item_list
                      ?.slice(0, 3)
                      ?.map((item, index) => (
                        <div key={"recent-blog" + index} className="w-full">
                          <BlogCard data={item} />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          {!isDesktop && (
            <div className="w-full">
              <Heading
                as={"div"}
                size={"none"}
                className="text-[16px] leading-none font-extralight font-brownede text-primary mb-[15px]"
              >
                {parse(data?.recent_list?.title)}
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
                }}
                // autoplay: {
                //       delay: 5000,
                //       disableOnInteraction: false,
                //       pauseOnMouseEnter: true,
                //     },
                className="!-mr-4 [mask-image:linear-gradient(to_right,white_90%,transparent)]"
              >
                {data?.recent_list?.item_list?.map((item, index) => {
                  return (
                    <SwiperSlide
                      key={"recent-blog" + index}
                      style={{ width: "25%" }}
                      className="!h-auto"
                    >
                      <BlogCard data={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
