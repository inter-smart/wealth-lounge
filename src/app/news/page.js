import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";
import ListingSection from "@/components/blocks/news/listing-section";


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
  }
};

export default function Page() {
  return (
    <>
      <InnerHero
        data={local_data?.hero_section}
        breadcrumb={local_data?.breadcrumb}
      />
      <ListingSection />
    </>
  );
}
