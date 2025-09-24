import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";

// Dynamic imports with SSR enabled for better performance
const ContactInfoSection = dynamic(
  () => import("@/components/blocks/contact/contact-info-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const ContactEnquirySection = dynamic(
  () => import("@/components/blocks/contact/contact-enquiry-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ],
  hero_section: {
    background_media: {
      mobile: {
        type: "image",
        path: "/images/contact-hero-1.jpg",
        alt: "hero",
      },
      desktop: {
        type: "image",
        path: "/images/contact-hero-1.jpg",
        alt: "hero",
      },
    },
    title: "Let's Connect",
    description:
      "<p>Reach out to explore personalized financial strategies.</p>",
  },
};

export default function Page() {
  return (
    <>
      <InnerHero
        data={local_data?.hero_section}
        breadcrumb={local_data?.breadcrumb}
      />
      <ContactInfoSection />
      <ContactEnquirySection />
    </>
  );
}
