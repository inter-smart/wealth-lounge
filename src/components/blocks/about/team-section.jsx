"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Heading } from "@/components/utils/heading";
import Image from "next/image";

import parse from "html-react-parser";
import { Text } from "@/components/utils/text";
import { Button } from "@/components/ui/button";

import { motion, AnimatePresence } from "framer-motion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

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
              slidesPerView: 3,
              spaceBetween: 10,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              },
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1920: {
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
                <TeamCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

function SocialLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div className="absolute z-1 top-0 left-[10px] sm:left-auto sm:right-[10px] xl:right-[15px] 2xl:right-[20px]">
      <div className="flex flex-col w-[20px] xl:w-[25px] 2xl:w-[35px] h-auto bg-primary py-2 p-1 xl:p-2 relative z-0">
        {links.map((socialItem, i) => (
          <div key={`social-item-${i}`}>
            <a
              href={socialItem?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={socialItem?.icon}
                alt={socialItem?.label}
                width={20}
                height={20}
                className="w-[10px] xl:w-[12px] 2xl:w-[16px] aspect-square object-contain mx-auto transition hover:scale-110"
              />
            </a>
            {i !== links.length - 1 && (
              <hr className="border-[#d5a356] my-[6px]" />
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-[10px] [clip-path:polygon(0_0,100%_0,100%_100%)] bg-primary" />
    </div>
  );
}

function TeamCard({ item, withDialog = false }) {
  return (
    <div className="group w-full h-full min-h-[268px] sm:min-h-[240px] xl:min-h-[268px] 2xl:min-h-[376px] bg-black p-[10px] xl:p-[15px] 2xl:p-[20px] overflow-hidden flex flex-col justify-end relative z-0">
      <div className="w-full h-full absolute -z-1 inset-0 bg-gradient-to-t from-black via-50% via-transparent to-transparent opacity-100 pointer-events-none" />

      <Image
        src={item?.media?.path}
        alt={item?.media?.alt}
        fill
        sizes="320px"
        className="object-cover -z-2 transition duration-300 group-hover:scale-110"
      />

      <SocialLinks links={item?.social_link} />

      <div>
        <Heading
          as="div"
          size="heading5"
          className="line-clamp-1 font-medium !font-roboto text-white mb-[2px] sm:mb-[6px] 2xl:mb-[10px]"
        >
          {parse(item?.title)}
        </Heading>
        <Text
          as="div"
          size="none"
          className="text-[8px] sm:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] leading-normal font-normal line-clamp-3 text-white mb-[2px] sm:mb-[6px] 2xl:mb-[10px]"
        >
          {parse(item?.short_description)}
        </Text>

        {item?.description &&
          (withDialog ? (
            <Button
              variant="link"
              className="group !h-auto text-primary border-none"
            >
              Biography
              <Image
                src="/images/about-team-btn.svg"
                alt="about-team-btn"
                width={20}
                height={20}
                unoptimized
                className="w-[2px] xl:w-[4px] 2xl:w-[6px] transition group-hover:scale-105"
              />
            </Button>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="link"
                  className="group !h-auto text-primary border-none"
                >
                  Biography
                  <Image
                    src="/images/about-team-btn.svg"
                    alt="about-team-btn"
                    width={20}
                    height={20}
                    unoptimized
                    className="w-[2px] xl:w-[4px] 2xl:w-[6px] transition group-hover:scale-105"
                  />
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent className="p-0 max-w-[320px] sm:max-w-[576px] xl:max-w-[768px] 2xl:max-w-[1024px] 3xl:max-w-[1176px]">
                <div className="flex flex-wrap items-center">
                  <div className="w-full sm:w-[168px] xl:w-[220px] 2xl:w-[320px]">
                    <TeamCard item={item} withDialog />
                  </div>

                  <div className="w-full sm:w-[calc(100%-168px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-320px)]">
                    <div className="w-full p-[10px] sm:p-[20px] xl:p-[30px] 2xl:p-[40px] 3xl:p-[50px]">
                      <AlertDialogHeader className={"text-start"}>
                        <AlertDialogTitle>
                          <Heading
                            as="div"
                            size="heading5"
                            className="line-clamp-1 !font-semibold !font-roboto text-[#191919]"
                          >
                            Biography
                          </Heading>
                        </AlertDialogTitle>
                        <AlertDialogDescription
                          className={
                            "w-full max-h-[176px] sm:max-h-[140px] xl:max-h-[176px] 2xl:max-h-[240px] [mask-image:linear-gradient(to_bottom,white_80%,transparent)] overflow-y-auto pb-5"
                          }
                        >
                          <Text
                            as="span"
                            size="text1"
                            className="text-[#191919]"
                          >
                            {parse(item?.description)}
                          </Text>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                    </div>
                  </div>
                </div>

                <AlertDialogFooter className="absolute z-1 top-0 right-1 sm:right-0 sm:-translate-y-full">
                  <AlertDialogCancel className="text-white px-0 border-0 hover:text-primary hover:bg-transparent">
                    <X className="size-6 " />
                  </AlertDialogCancel>
                  <AlertDialogAction className="sr-only">
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
      </div>
    </div>
  );
}

function AnimatedAlertDialogContent({ children, open, ...props }) {
  return (
    <AnimatePresence>
      {open && (
        <AlertDialogContent asChild {...props}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="p-0 xl:max-w-[768px] 2xl:max-w-[1176px] overflow-hidden"
          >
            {children}
          </motion.div>
        </AlertDialogContent>
      )}
    </AnimatePresence>
  );
}

function TeamCard2({ item }) {
  return (
    <div className="group w-full h-full min-h-[200px] sm:min-h-[240px] xl:min-h-[268px] 2xl:min-h-[376px] bg-black p-[10px] xl:p-[15px] 2xl:p-[20px] overflow-hidden flex flex-col justify-end relative z-0">
      <div className="w-full h-full absolute -z-1 inset-0 bg-gradient-to-t from-black via-50% via-transparent to-transparent opacity-100 pointer-events-none" />
      <Image
        src={item?.media?.path}
        alt={item?.media?.alt}
        fill
        sizes="320px"
        className="object-cover -z-2 transition duration-300 group-hover:scale-110"
      />
      {item?.social_link?.length > 0 && (
        <div className=" absolute z-1 top-0 right-[10px] xl:right-[15px] 2xl:right-[20px]">
          <div className="flex flex-col w-[25px] h-auto bg-primary p-2 relative z-0">
            {item?.social_link?.map((socialItem, socialIndex) => (
              <div key={`social-item-${socialIndex}`}>
                <a
                  href={socialItem?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={socialItem?.icon}
                    alt={socialItem?.label}
                    width={20}
                    height={20}
                    className="w-[10px] xl:w-[12px] aspect-square object-contain mx-auto transition hover:scale-110"
                  />
                </a>
                {socialIndex !== item?.social_link?.length - 1 && (
                  <hr className="border-[#d5a356] my-[6px]" />
                )}
              </div>
            ))}
          </div>
          <div className="w-full h-[10px] [clip-path:polygon(0_0,100%_0,100%_100%)] bg-primary" />
        </div>
      )}

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
          className="text-[8px] sm:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] leading-normal font-normal line-clamp-3 text-white mb-[2px] sm:mb-[6px] 2xl:mb-[10px]"
        >
          {parse(item?.short_description)}
        </Text>
        {item?.description && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="group !h-auto text-primary border-none">
                Biography
                <Image
                  src={"/images/about-team-btn.svg"}
                  alt="about-team-btn"
                  width={20}
                  height={20}
                  unoptimized
                  className="w-[2px] xl:w-[4px] 2xl:w-[8px] transition group-hover:scale-105"
                />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent
              className={"p-0 xl:max-w-[768px] 2xl:max-w-[1176px]"}
            >
              <div className="flex flex-wrap items-center">
                <div className="w-full sm:w-[168px] xl:w-[220px] 2xl:w-[320px]">
                  <div className="w-full h-full min-h-[200px] sm:min-h-[240px] xl:min-h-[268px] 2xl:min-h-[376px] bg-black p-[10px] xl:p-[15px] 2xl:p-[20px] overflow-hidden flex flex-col justify-end relative z-0">
                    <div className="w-full h-full absolute -z-1 inset-0 bg-gradient-to-t from-black via-50% via-transparent to-transparent opacity-100 pointer-events-none" />
                    <Image
                      src={item?.media?.path}
                      alt={item?.media?.alt}
                      fill
                      sizes="320px"
                      className="object-cover -z-2 transition duration-300 group-hover:scale-110"
                    />
                    {item?.social_link?.length > 0 && (
                      <div className=" absolute z-1 top-0 right-[10px] xl:right-[15px] 2xl:right-[20px]">
                        <div className="flex flex-col w-[25px] h-auto bg-primary p-2 relative z-0">
                          {item?.social_link?.map((socialItem, socialIndex) => (
                            <div key={`social-item-${socialIndex}`}>
                              <a
                                href={socialItem?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                              >
                                <Image
                                  src={socialItem?.icon}
                                  alt={socialItem?.label}
                                  width={20}
                                  height={20}
                                  className="w-[10px] xl:w-[12px] aspect-square object-contain mx-auto transition hover:scale-110"
                                />
                              </a>
                              {socialIndex !==
                                item?.social_link?.length - 1 && (
                                <hr className="border-[#d5a356] my-[6px]" />
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="w-full h-[10px] [clip-path:polygon(0_0,100%_0,100%_100%)] bg-primary" />
                      </div>
                    )}
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
                        className="text-[8px] sm:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] leading-normal font-normal line-clamp-3 text-white mb-[2px] sm:mb-[6px] 2xl:mb-[10px]"
                      >
                        {parse(item?.short_description)}
                      </Text>
                      {item?.description && (
                        <Button
                          variant="link"
                          className="group !h-auto text-primary border-none"
                        >
                          Biography
                          <Image
                            src={"/images/about-team-btn.svg"}
                            alt="about-team-btn"
                            width={20}
                            height={20}
                            unoptimized
                            className="w-[2px] xl:w-[4px] 2xl:w-[8px] transition group-hover:scale-105"
                          />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-[calc(100%-168px)] xl:w-[calc(100%-220px)] 2xl:w-[calc(100%-320px)]">
                  <div className="w-full p-[15px] sm:p-[20px] xl:p-[30px] 2xl:p-[50px]">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <Heading
                          as={"h5"}
                          size={"heading5"}
                          className="line-clamp-1 font-medium !font-roboto text-[#191919]"
                        >
                          Biography
                        </Heading>
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        <Text
                          as={"div"}
                          size="text1"
                          className="text-[#191919]"
                        >
                          {parse(item?.description)}
                        </Text>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </div>
                </div>
              </div>

              <AlertDialogFooter className={"absolute z-1 top-0 right-0"}>
                <AlertDialogCancel className={"text-black px-4"}>
                  Close
                </AlertDialogCancel>
                <AlertDialogAction className={"sr-only"}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
}
