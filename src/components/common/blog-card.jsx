import React from "react";
import { Heading } from "../utils/heading";
import { Text } from "../utils/text";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { format } from "date-fns";

export default function BlogCard({ data }) {
  const formattedDate = format(new Date(data?.timestamp), "dd.MM.yyyy");
  return (
    <div className="w-full h-full flex flex-col justify-between bg-white p-[15px] sm:p-[15px] xl:p-[25px] 2xl:p-[25px] 3xl:p-[30px]">
      <div className="w-full flex-1 flex flex-col justify-between gap-y-[10px] xl:gap-y-[15px] 2xl:gap-y-[20px]">
        <div className="flex-1">
          <Heading
            as="div"
            size="heading5"
            className="font-medium line-clamp-3 !font-roboto text-[#191919] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
          >
            {parse(data?.title)}
          </Heading>
          <Text
            as="div"
            size="text1"
            className="!font-medium line-clamp-2 text-[#191919]"
          >
            {parse(data?.description)}
          </Text>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-1 my-[10px] xl:my-[15px] 3xl:mt-[20px]">
          <Button variant="link" className="!h-auto !font-medium text-primary" asChild>
            <Link href={data?.link}>Read More</Link>
          </Button>
          <Text as="div" size="text1" className="!font-medium text-[#191919]">
            {formattedDate}
          </Text>
        </div>
      </div>
      <div className="w-full h-auto aspect-[32/20] overflow-hidden relative z-0">
        <Image
          src={data?.media?.path || "/images/placeholder.jpg"}
          alt={data?.media?.alt || "blog-item"}
          width={320}
          height={200}
          className="w-full h-full hover:scale-105 transition"
        />
        <div className="text-[8px] sm:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium capitalize text-white p-[4px_10px] xl:p-[6px_12px] 3xl:p-[10px_15px] bg-primary rounded-full absolute z-1 bottom-[4px] xl:bottom-[6px] 2xl:bottom-[8px] right-[4px] xl:right-[6px] 2xl:right-[8px]">{data?.category}</div>
      </div>
    </div>
  );
}
