"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CountUp from "react-countup";
import parseInt from "html-react-parser";
import Image from "next/image";
import { Text } from "@/components/utils/text";
import { Heading } from "@/components/utils/heading";
import useMedia from "use-media";

export default function AboutSection({ data, variant = "default" }) {
  const isDesktop = useMedia({ minWidth: "640px" });

  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[90px] 2xl:py-[110px] overflow-hidden relative z-0">
      {variant === "about" && (
        <Image
          src="/images/about-about-bg.png"
          alt="about-about-bg"
          width={436}
          height={467}
          className="w-[200px] xl:w-[276px] 2xl:w-[320px] 3xl:w-[420px] opacity-10 absolute -z-1 top-[-20px] sm:top-[-30px] xl:top-[-40px] right-[6%] xl:right-[calc((100%-var(--container-xl))/2)] 2xl:right-[calc((100%-var(--container-2xl))/2)] 3xl:right-[calc((100%-var(--container-3xl))/2)] mr-4"
        />
      )}
      <div className="container">
        <div className="flex flex-wrap sm:items-center -mx-[15px] md:-mx-[20px] xl:-mx-[60px] 2xl:-mx-[80px] [&>*]:px-[15px] md:[&>*]:px-[20px] xl:[&>*]:px-[60px] 2xl:[&>*]:px-[80px] max-sm:flex-col-reverse">
          <div className="w-full sm:w-[220px] md:w-[300px] xl:w-[390px] 2xl:w-[468px] 3xl:w-[568px] max-sm:flex max-sm:flex-wrap max-sm:items-center">
            <div className="w-full h-auto aspect-[5/6] sm:aspect-[40/62] overflow-hidden max-sm:max-w-1/2">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                width={400}
                height={620}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            {!isDesktop && <CountSection data={data.item_specs} />}
          </div>
          <div className="w-full sm:w-[calc(100%-220px)] md:w-[calc(100%-300px)] xl:w-[calc(100%-390px)] 2xl:w-[calc(100%-468px)] 3xl:w-[calc(100%-568px)] max-sm:mb-[20px]">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full lg:max-w-[376px] xl:max-w-[420px] 2xl:max-w-[500px] 3xl:max-w-[668px]">
                <Heading
                  as="h2"
                  size="heading2"
                  className="text-primary mb-[10px] xl:mb-[15px]"
                >
                  {data?.title}
                </Heading>
                <Text
                  as="p"
                  size="text2"
                  className="!font-medium text-[#191919] mb-[10px] xl:mb-[15px]"
                >
                  {data?.sub_title}
                </Text>
                <Text
                  as="p"
                  size="text1"
                  className="text-[#191919] mb-[15px] xl:mb-[30px] 2xl:mb-[40px]"
                >
                  {data?.description}
                </Text>
                {data?.button && (
                  <Button
                    variant="outline"
                    className="text-black border-black min-w-[100px] sm:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[130px] 3xl:min-w-[150px]"
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
                )}
              </div>
              {isDesktop && <CountSection data={data.item_specs} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountSection({ data }) {
  return (
    <div className="w-full max-w-1/2 sm:max-w-full lg:max-w-[140px] xl:max-w-[168px] 2xl:max-w-[200px] 3xl:max-w-[230px]">
      <div className="flex flex-wrap justify-center sm:-mx-[15px] lg:m-0 [&>*]:p-[20px] sm:[&>*]:p-[15px] lg:[&>*]:p-0">
        {data.map((item, index) => (
          <div
            key={"spec" + index}
            className="w-full sm:w-1/3 lg:w-full lg:not-[:last-child]:mb-[40px] xl:not-[:last-child]:mb-[70px] 2xl:not-[:last-child]:mb-[80px]"
          >
            <div className="w-full h-auto">
              <Heading
                as={"div"}
                size={"none"}
                className="text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[33px] 2xl:text-[44px] 3xl:text-[56px] leading-none font-light lg:text-center whitespace-nowrap text-ellipsis font-brownede text-primary max-w-full mx-auto overflow-hidden mb-[5px] xl:mb-[10px] 2xl:mb-[15px]"
              >
                <CountUp
                  end={parseInt(item?.value)}
                  duration={2.75}
                  separator=","
                  suffix={item?.sufix}
                  enableScrollSpy
                />
              </Heading>
              <Text
                as="div"
                size="none"
                className="text-[10px] sm:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-none font-light lg:text-center text-ellipsis font-brownede text-[#191919] max-w-full"
              >
                {item?.title}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
