import Image from "next/image";
import { Heading } from "../utils/heading";
import { Text } from "../utils/text";

import parse from "html-react-parser";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import * as motion from "motion/react-client";
import React from "react";

export default function InnerHero({ data, breadcrumb }) {
  return (
    <section className="w-full h-auto min-h-[320px] xl:min-h-[376px] 2xl:min-h-[468px] 3xl:min-h-[576px] flex items-center bg-black py-[calc(40px+var(--header-y))_40px] sm:py-[calc(60px+var(--header-y))_60px] xl:py-[calc(100px+var(--header-y))_100px] 2xl:py-[calc(120px+var(--header-y))_120px] relative z-0">
      <div className="w-full h-full absolute -z-1 inset-0 bg-gradient-to-b from-black via-black/50 to-black opacity-65 pointer-events-none" />
      {data?.media?.type === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover absolute -z-2 inset-0"
        >
          <source src={data?.media?.path} type="video/mp4" />
        </video>
      ) : (
        <picture className="absolute -z-2 inset-0">
          <source
            media="(max-width: 640px)"
            srcSet={data?.background_media?.mobile?.path}
          />
          <Image
            src={
              data?.background_media?.desktop?.path || "/images/placeholder.jpg"
            }
            alt={data?.background_media?.desktop?.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
            className="-z-2 object-cover"
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
            priority
          />
        </picture>
      )}

      <div className="container">
        <div className="justify-center flex flex-wrap max-sm:flex-col-reverse max-sm:items-center relative z-0">
          <div className="w-full max-w-[320px] sm:max-w-[576px] xl:max-w-[768px] 2xl:max-w-[1024px]">
            <Breadcrumb className="mx-auto flex justify-center">
              <BreadcrumbList>
                {breadcrumb.map((item, i) => {
                  const isLast = i === breadcrumb.length - 1;
                  return (
                    <React.Fragment key={i}>
                      <BreadcrumbItem>
                        {isLast ? (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={item.href}>
                            {item.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator />}
                    </React.Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>
            <Heading
              as="h1"
              size="heading1"
              className="line-clamp-1 text-center text-white mb-[2px] 2xl:mb-[4px]"
            >
              {data?.title}
            </Heading>
            {data?.description && (
              <Text
                as="div"
                size="text3"
                className="line-clamp-2 text-center text-white mb-[2px] xl:mb-[4px] 2xl:mb-[6px]"
              >
                {parse(data?.description)}
              </Text>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
