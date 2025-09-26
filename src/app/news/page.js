import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";

const ListingSection = dynamic(
  () => import("@/components/blocks/news/listing-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
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
