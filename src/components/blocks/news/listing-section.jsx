"use client";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function HeadSection({ data, variant = "default" }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[90px] 2xl:py-[110px] bg-[#FFFBF4] relative z-0">
      {variant === "news" && (
        <Image
          src="/images/about-about-bg.png"
          alt="about-about-bg"
          width={436}
          height={467}
          className="w-[200px] xl:w-[276px] 2xl:w-[320px] 3xl:w-[420px] opacity-10 absolute -z-1 top-[-20px] sm:top-[-30px] xl:top-[-40px] right-[6%] xl:right-[calc((100%-var(--container-xl))/2)] 2xl:right-[calc((100%-var(--container-2xl))/2)] 3xl:right-[calc((100%-var(--container-3xl))/2)] mr-4"
        />
      )}
      <div className="container">
        <div className="flex flex-wrap">
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
        <div className="flex justify-end w-full h-auto z-0">
          <Select>
            <SelectTrigger className="relative w-[152px] !h-[40px] px-[20px] xl:px-[28px] border-1 border-[#000] focus:outline-none [&_.lucide-chevron-down]:hidden">
              <SelectValue placeholder="View All" />
              <div className="absolute w-[15px] h-[15px] right-[20px] xl:right-[28px]">
                <Image
                  src="/images/news-dwn-arrw.svg"
                  alt="arrow"
                  width={15}
                  height={14}
                  className="w-[15px] xl:w-[15px] 2xl:w-[15px] h-[15px] xl:h-[15px] 2xl:h-[15px] -z-1 object-contain"
                />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="blog">Blog</SelectItem>
              <SelectItem value="news">News</SelectItem>
            </SelectContent>
          </Select>
          
        </div>
      </div>
    </section>
  );
}
