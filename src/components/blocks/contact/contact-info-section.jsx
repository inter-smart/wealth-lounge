import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import parse from "html-react-parser";
import React from "react";

const local_data = {
  title: "Contact Information",
  description: null,
  button: null,
  item_list: [
    {
      media: {
        type: "image",
        path: "/images/contact-icon-1.svg",
        alt: "contact-icon",
      },
      title: "Headquarters",
      description:
        "<p>DUQE Square Business Center Quarter Deck, QE2, Port Rashid, Dubai, UAE</p>",
      phone: ["+971 4 871 6555", "+971 4 871 6555"],
      email: null,
    },
    {
      media: {
        type: "image",
        path: "/images/contact-icon-1.svg",
        alt: "contact-icon",
      },
      title: "London office",
      description:
        "<p>Hawthorn Capital, 1 King William Street, London, EC4N 7BJ</p>",
      phone: ["+44 203 514 3610"],
      email: null,
    },
    {
      media: {
        type: "image",
        path: "/images/contact-icon-1.svg",
        alt: "contact-icon",
      },
      title: "Private Banking Services",
      description:
        "<p>IIB, 14th Floor, Jeera Tower 1, 171-172 Building 683, Road 2811, Block 428, Seef District, Kingdom of Bahrain</p>",
      phone: ["+973 1711 6633"],
      email: null,
    },
  ],
};

export default function ContactInfoSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px_20px] sm:py-[40px_30px] xl:py-[60px_40px] 2xl:py-[80px_40px] overflow-hidden relative z-0">
      <div className="container">
        <Heading
          as="h2"
          size="heading2"
          className="text-center text-primary"
        >
          {data?.title}
        </Heading>
        <div className="flex flex-wrap sm:items-center -mx-[15px] md:-mx-[40px] xl:-mx-[100px] 2xl:-mx-[120px] [&>*]:p-[15px] md:[&>*]:p-[20px_40px] xl:[&>*]:p-[40px_100px] 2xl:[&>*]:p-[60px_120px]">
          {data?.item_list?.map((item, index) => {
            const isLastItem = index === data?.item_list?.length - 1;
            return (
              <div
                key={"contact-info-item" + index}
                className="w-full sm:w-1/2 md:w-1/3 relative z-0"
              >
                <div className="w-full h-auto block">
                  <div className="w-[40px] xl:w-[50px] 2xl:w-[70px] aspect-square mx-auto mb-[10px] xl:mb-[15px] 2xl:mb-[20px] overflow-hidden">
                    <Image
                      src={item?.media?.path}
                      alt={item?.media?.alt}
                      width={73}
                      height={73}
                      className="w-full h-full object-contain hover:scale-105 transition"
                    />
                  </div>
                  <Heading
                    as="h4"
                    size="heading4"
                    className="font-medium text-center text-black mb-[5px] xl:mb-[10px] 2xl:mb-[15px]"
                  >
                    {item?.title}
                  </Heading>
                  <Text
                    as="div"
                    size="text1"
                    className="text-center text-[#191919] mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
                  >
                    {parse(item?.description)}
                  </Text>
                  <Text
                    as="div"
                    size="text1"
                    className="text-center text-primary mb-[15px] xl:mb-[20px] 2xl:mb-[40px]"
                  >
                    <Image
                      src="/images/contact-phone-1.svg"
                      alt="contact-phone-1"
                      width={16}
                      height={16}
                      unoptimized
                      className="w-[10px] xl:w-[12px] 2xl:w-[14px] object-contain inline-block hover:scale-105 transition "
                    />
                    {item?.phone?.map((phoneItem, phoneIndex) => {
                      const isLast = phoneIndex === item?.phone?.length - 1;
                      return (
                        <React.Fragment key={`phone-item-${phoneIndex}`}>
                          <a
                            href={`tel:${phoneItem}`}
                            className="ml-2 text-[#191919] hover:text-primary transition"
                          >
                            {phoneItem}
                          </a>

                          {!isLast && ","}
                        </React.Fragment>
                      );
                    })}
                  </Text>
                </div>
                {!isLastItem && (
                  <div className="w-[1px] h-1/3 bg-linear-to-b from-[#f8f8f8] via-[#998262] to-[#f8f8f8] absolute z-0 top-1/2 right-0 -translate-y-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
