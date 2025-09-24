import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";

const HeadSection = dynamic(
  () => import("@/components/blocks/news/listing-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "news", href: "/news" },
  ],
  hero_section: {
    background_media: {
      mobile: {
        type: "image",
        path: "/images/news-hero-1.jpg",
        alt: "hero",
      },
      desktop: {
        type: "image",
        path: "/images/news-hero-1.jpg",
        alt: "hero",
      },
    },
    title: "News & Insights",
    description:
      "<p>Stay informed with the latest from the world of finance.</p>",
  },
  news_section: {
    title: "News & Insights",
    description: "Our vision is to bring together innovative, prestigious and reputable investment providers across multiple asset-classes, with our growing client base, giving them the ability to absorb and apply these solutions into their own wealth creation initiatives. We will support and continue to work hard with our clients to ensure that they are always presented with the most robust investment opportunities from an ever-changing economic landscape.",
  },
};

export default function Page() {
  return (
    <>
      <InnerHero
        data={local_data?.hero_section}
        breadcrumb={local_data?.breadcrumb}
      />
      <HeadSection variant="news" data={local_data?.news_section} />
    </>
  );
}
