import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";

// Dynamic imports with SSR enabled for better performance
const InfoSection = dynamic(
  () => import("@/components/blocks/testimonial/info-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Testimonials", href: "/testimonial" },
  ],
  hero_section: {
    background_media: {
      mobile: {
        type: "image",
        path: "/images/testimonial-hero-1.jpg",
        alt: "hero",
      },
      desktop: {
        type: "image",
        path: "/images/testimonial-hero-1.jpg",
        alt: "hero",
      },
    },
    title: "What Our Clients Say",
    description: "<p>Trust built through experience, one client at a time.</p>",
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
