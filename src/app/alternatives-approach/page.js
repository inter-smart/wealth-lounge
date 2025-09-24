import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";

// Dynamic imports with SSR enabled for better performance
const InfoSection = dynamic(
  () => import("@/components/blocks/alternatives-approach/info-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "The Alternatives Approach", href: "/alternatives-approach" },
  ],
  hero_section: {
    background_media: {
      mobile: {
        type: "image",
        path: "/images/alternatives-hero-1.jpg",
        alt: "hero",
      },
      desktop: {
        type: "image",
        path: "/images/alternatives-hero-1.jpg",
        alt: "hero",
      },
    },
    title: "The Alternatives Approach",
    description:
      "<p>Empowering Generations with Legacy-Focused Financial Strategies</p>",
  },
};

export default function Page() {
  return (
    <>
      <InnerHero
        data={local_data?.hero_section}
        breadcrumb={local_data?.breadcrumb}
      />
      <InfoSection />
    </>
  );
}
