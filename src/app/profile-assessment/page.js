import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";

// Dynamic imports with SSR enabled for better performance
const ProfileSection = dynamic(
  () => import("@/components/blocks/profile-assessment/profile-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Profile Assessment Form", href: "/profile-assessment" },
  ],
  hero_section: {
    background_media: {
      mobile: {
        type: "image",
        path: "/images/profile-hero-1.jpg",
        alt: "hero",
      },
      desktop: {
        type: "image",
        path: "/images/profile-hero-1.jpg",
        alt: "hero",
      },
    },
    title: "Profile Assessment Form",
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
      <ProfileSection />
    </>
  );
}
