"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Heading } from "@/components/utils/heading";
import ReviewCard from "@/components/common/review-card";

const local_data = {
  media: null,
  title: "Customer Reviews",
  description: null,
  button: null,
  item_list: [
    {
      link: "/",
      author: {
        media: {
          type: "image",
          path: "/images/home-review-item-1.jpg",
          alt: "review-item",
        },
        title: "Director",
        bio: "Heartppp, UK",
      },
      title: "null",
      description:
        "<p>Sandeep has been an advisor to my family for over 10 years now. He has demonstrated the highest standards of integrity, honesty and ethics in his practice, and has proved highly knowledgeable in all areas of financial plannin.</p>",
    },
    {
      link: "/",
      author: {
        media: {
          type: "image",
          path: "/images/home-review-item-2.jpg",
          alt: "review-item",
        },
        title: "Mike O’Donoghue",
        bio: "Heartppp, UK",
      },
      title: "null",
      description:
        "<p>Whilst there are many companies and other advisors that will do this on your behalf, I found that Holborn’s Sandeep Ghosh to have a very common sense and conservative approach which I very much appreciate.</p>",
    },
    {
      link: "/",
      author: {
        media: {
          type: "image",
          path: "/images/home-review-item-3.jpg",
          alt: "review-item",
        },
        title: "Omar Al Saadoon",
        bio: "Senior Lawyer for ADNOC(DADCO0), UAE",
      },
      title: "null",
      description:
        "<p>Regardless of the complexity of any situation, Sandeep has always found a solution and has an ability to simplify even the most complex cases. Whether the issue is overcoming problems with Sharia Law or making up shortfalls in savings, Sandeep has a route planned, always keeping his client’s security as the highest priority.</p>",
    },
    {
      link: "/",
      author: {
        media: {
          type: "image",
          path: "/images/home-review-item-1.jpg",
          alt: "review-item",
        },
        title: "Director",
        bio: "Heartppp, UK",
      },
      title: "null",
      description:
        "<p>Sandeep has been an advisor to my family for over 10 years now. He has demonstrated the highest standards of integrity, honesty and ethics in his practice, and has proved highly knowledgeable in all areas of financial plannin.</p>",
    },
  ],
};

export default function ReviewSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[60px_80px] 2xl:py-[80px_100px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
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
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
          }}
          className="max-sm:!-mr-4 max-sm:[mask-image:linear-gradient(to_right,white_90%,transparent)]"
        >
          {data?.item_list.map((item, index) => {
            return (
              <SwiperSlide
                key={"review-item" + index}
                style={{ width: "33.333%" }}
              >
                <ReviewCard data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
