"use client";

import Image from "next/image";
import Link from "next/link";
import { Heading } from "../utils/heading";
import { Button } from "../ui/button";
import parse from "html-react-parser";
import useMedia from "use-media";

const local_data = {
  title: "footer",
  description:
    "<p>Disclaimer: Financial investments, you should understand that past performance can only be used as a guide and is no guarantee of future returns, and that your investments can go up. This website has been prepared for informational purposes only, and is not intended to provide, and should not be relied on for, tax, legal, accounting advice. You are advised to discuss the specific tax and social security implications of this website, if any, with your own independent professional tax, legal, and accounting advisers. This website has been prepared for informational purposes only, and is not intended to provide, and should not be relied on for financial advice. You are advised to discuss your specific circumstances with one of our financial advisers to determine the best advice for your unique position. The Wealth Lounge is licensed with DUQE Dubai FZCO</p>",
  media: {
    type: "image",
    path: "/images/brand-logo-footer.svg",
    alt: "brand-icon-footer",
  },
  address:
    "Duqe Square Business Center LLC , Quarter<br/> Deck, Mina Rashid- Queen Elizabeth 2nd,<br/> 554789 -Dubai -UAE",
  navigation: [
    {
      title: "Quick Links",
      item_list: [
        {
          link: "/alternatives-approach",
          label: "Alternatives Approach",
        },
        {
          link: "/",
          label: "Mainstream Services",
        },
        {
          link: "/",
          label: "Burning questions",
        },
        {
          link: "/",
          label: "Corporate Social Responsibility",
        },
        {
          link: "/about",
          label: "About Us",
        },
      ],
    },
    {
      title: "Useful Links",
      item_list: [
        {
          link: "/contact",
          label: "Contact Us",
        },
        {
          link: "/privacy-policy",
          label: "Privacy Policy",
        },
        {
          link: "/privacy-policy",
          label: "Terms",
        },
      ],
    },
    {
      title: "Contact Us",
      item_list: [
        {
          link: "tel:+97148716555",
          label: "+971-48716555",
        },
        {
          link: "mailto:info@thewealthlounge.com",
          label: "info@thewealthlounge.com",
        },
      ],
    },
  ],
  copyright: "© 2025 <span>The Wealth Lounge</span>. All Rights Reserved",
  office_location: {
    title: "Office Locations",
    item_list: [
      {
        is_external: true,
        icon: "/icons/icon-ae.svg",
        label: "UAE",
        link: "/",
      },
      {
        is_external: false,
        icon: "/icons/icon-london.svg",
        label: "London",
        link: "/",
      },
    ],
  },
  social_link: {
    title: "Follow Us",
    item_list: [
      {
        icon: "/icons/icon-youtube.svg",
        label: "youtube",
        link: "/",
      },
      {
        icon: "/icons/icon-insta.svg",
        label: "insta",
        link: "/",
      },
      {
        icon: "/icons/icon-linkedin.svg",
        label: "linkedin",
        link: "/",
      },
      {
        icon: "/icons/icon-x.svg",
        label: "x",
        link: "/",
      },
    ],
  },
};

export default function Footer({ data = local_data }) {
  const isDesktop = useMedia({ minWidth: "640px" });
  return (
    <footer className="w-full pt-[30px] sm:pt-[40px] xl:pt-[80px] 2xl:pt-[100px] bg-[#171717] overflow-hidden relative z-0">
      <div className="w-full h-px absolute z-1 inset-x-0 top-0 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-100" />
      <Image
        src="/images/footer-bg-1.png"
        alt="footer-bg-1"
        width={868}
        height={419}
        className="w-[376px] sm:w-[468px] xl:w-[576px] 2xl:w-[676px] 3xl:w-[868px] absolute -z-1 top-[30px] sm:top-[40px] xl:top-[80px] 2xl:top-[50px] 3xl:top-[60px] left-[6%] xl:left-[calc((100%-var(--container-xl))/2)] 2xl:left-[calc((100%-var(--container-2xl))/2)] 3xl:left-[calc((100%-var(--container-3xl))/2)] ml-4"
      />
      <div className="container">
        <div className="flex flex-wrap -mx-[15px] sm:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[40px] [&>*]:p-[15px] sm:[&>*]:p-[15px] xl:[&>*]:p-[20px] 2xl:[&>*]:p-[40px]">
          {!isDesktop && <CompanyInfoCard data={data} />}
          {data?.navigation?.map((item, index) => (
            <div
              key={"navigation" + index}
              className="w-1/2 sm:sm:w-1/3 md:w-1/5 lg:w-[calc((100%-240px)/4)] xl:w-[calc((100%-276px)/4)] 2xl:w-[calc((100%-368px)/4)] 3xl:w-[calc((100%-476px)/4)]"
            >
              <div>
                <Heading
                  as="h6"
                  size="none"
                  className="text-[12px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-tight font-semibold text-primary mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
                >
                  {item?.title}
                </Heading>
                {item?.item_list?.map((linkItem, index) => (
                  <div key={"navigation_item_list" + index}>
                    <Button
                      variant="link"
                      size="none"
                      animate={false}
                      asChild
                      className="text-[10px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-[#b9b9b9] transition [&>a]:hover:text-primary block my-[10px] xl:my-[15px] 2xl:my-[20px]"
                    >
                      <Link href={linkItem?.link}>{linkItem?.label}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="w-1/2 sm:w-1/2 md:w-1/5 lg:w-[calc((100%-240px)/4)] xl:w-[calc((100%-276px)/4)] 2xl:w-[calc((100%-368px)/4)] 3xl:w-[calc((100%-476px)/4)]">
            <div className="w-full mb-[15px] xl:mb-[25px] 2xl:mb-[30px]">
              <Heading
                as="h6"
                size="none"
                className="text-[12px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-tight font-semibold text-primary mb-[10px] sm:mb-[15px] xl:mb-[20px] 2xl:mb-[30px]"
              >
                {data?.office_location?.title}
              </Heading>
              {data?.office_location?.item_list?.map((linkItem, index) => (
                <div key={"office_location_item_list" + index}>
                  <Button
                    variant="link"
                    size="none"
                    animate={false}
                    asChild
                    className="text-[10px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-[#b9b9b9] transition [&>a]:hover:text-primary block my-[10px] xl:my-[15px] 2xl:my-[20px] justify-start"
                  >
                    {linkItem?.is_external ? (
                      <a
                        href={linkItem?.link}
                        className="flex items-center gap-x-[10px]"
                      >
                        {linkItem?.icon && (
                          <Image
                            src={linkItem?.icon}
                            alt={linkItem?.label}
                            width={38}
                            height={24}
                            unoptimized
                            className="w-[20px] xl:w-[24px] 2xl:w-[35px]"
                          />
                        )}
                        {linkItem?.label}
                      </a>
                    ) : (
                      <Link
                        href={linkItem?.link}
                        className="flex items-center gap-x-[10px]"
                      >
                        {linkItem?.icon && (
                          <Image
                            src={linkItem?.icon}
                            alt={linkItem?.label}
                            width={38}
                            height={24}
                            unoptimized
                            className="w-[20px] xl:w-[24px] 2xl:w-[35px]"
                          />
                        )}
                        {linkItem?.label}
                      </Link>
                    )}
                  </Button>
                </div>
              ))}
            </div>

            <div className="w-full">
              <Heading
                as="h6"
                size="none"
                className="text-[12px] sm:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-tight font-semibold text-primary mb-[5px] sm:mb-[5px] xl:mb-[10px] 2xl:mb-[15px]"
              >
                {data?.social_link?.title}
              </Heading>
              <div className="flex flex-wrap items-center -mx-[4px] xl:-mx-[10px] 2xl:-mx-[14px] [&>*]:px-[4px] xl:[&>*]:px-[10px] 2xl:[&>*]:px-[14px]">
                {data?.social_link?.item_list?.map((linkItem, index) => (
                  <div key={"social_link_item_list" + index}>
                    <Button
                      variant="link"
                      size="none"
                      asChild
                      className="justify-start"
                    >
                      <a href={linkItem?.link} target="_blank">
                        <Image
                          src={linkItem?.icon}
                          alt={linkItem?.label}
                          width={15}
                          height={11}
                          unoptimized
                          className="w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[20px] block hover:scale-110 transition"
                        />
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {isDesktop && <CompanyInfoCard data={data} />}
        </div>
        <div className="w-full my-[15px] sm:my-[30px] xl:my-[40px] 2xl:my-[60px]">
          <div className="text-[8px] sm:text-[8px] xl:text-[10px] 2xl:text-[11px] 3xl:text-[12px] leading-normal font-normal text-[#b9b9b9]">
            {parse(data?.description)}
          </div>
        </div>
        <hr className="border-[#323232]" />
        <div className="flex flex-wrap justify-between py-[15px] xl:py-[20px] 2xl:py-[30px]">
          <div className="text-[10px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-normal font-medium text-right text-[#b9b9b9] [&>span]:text-primary">
            {parse(data?.copyright)}
          </div>
          <div className="text-[10px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-normal font-medium text-right text-[#b9b9b9] [&>span]:text-primary">
            Designed By{" "}
            <a href={"https://www.intersmartsolution.com/"} target="_blank">
              <Image
                src="/icons/icon-intersmart.svg"
                alt="icon-intersmart"
                width={100}
                height={15}
                className="w-[70px] xl:w-[90px] 3xl:w-[100px] inline ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CompanyInfoCard({ data }) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/5 lg:w-[240px] xl:w-[276px] 2xl:w-[368px] 3xl:w-[476px]">
      <div className="w-[140px] sm:w-[120px] lg:w-[180px] xl:w-[200px] 2xl:w-[240px] 3xl:w-[300px] sm:ml-auto mb-[10px] xl:mb-[15px] 2xl:mb-[20px]">
        <Image
          src={data?.media?.path}
          alt={data?.media?.alt}
          width={200}
          height={80}
          className="w-full h-full"
        />
      </div>
      <div className="text-[10px] sm:text-[10px] xl:text-[11px] 2xl:text-[12px] 3xl:text-[16px] leading-normal font-medium sm:text-right text-[#b9b9b9] justify-start">
        {parse(data?.address)}
      </div>
    </div>
  );
}
