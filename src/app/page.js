import dynamic from "next/dynamic";
import HeroSection from "@/components/blocks/home/hero-section";

// Dynamic imports with SSR enabled for better performance
const AboutSection = dynamic(
  () => import("@/components/blocks/home/about-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const ServiceSection = dynamic(
  () => import("@/components/blocks/home/service-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const ReviewSection = dynamic(
  () => import("@/components/blocks/home/review-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const BlogSection = dynamic(
  () => import("@/components/blocks/home/blog-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const ConnectSection = dynamic(
  () => import("@/components/blocks/home/connect-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  about_section: {
    media: {
      type: "image",
      path: "/images/home-about-1.jpg",
      alt: "about",
    },
    title: "Who We Are",
    sub_title:
      "The Wealth Lounge was created after many years of observing the habits of individuals managing their finances, realising that there was a shortfall in basic information and the direction in which the world of wealth creation is heading.",
    description:
      "Our vision is to bring together innovative, prestigious and reputable investment providers across multiple asset-classes, with our growing client base, giving them the ability to absorb and apply these solutions into their own wealth creation initiatives. We will support and continue to work hard with our clients to ensure that they are always presented with the most robust investment opportunities from an ever-changing economic landscape.",
    button: {
      type: "primary",
      icon: "icons/brand-icon-black.svg",
      label: "Learn More",
      link: "/",
    },
    item_specs: [
      {
        title: "Years Combined Experience",
        value: "75",
        sufix: "+",
      },
      {
        title: "High Net Worth Clients",
        value: "1200",
        sufix: "+",
      },
      {
        title: "Countries Being Served",
        value: "35",
        sufix: "+",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection data={local_data?.about_section} />
      <ServiceSection />
      <ReviewSection />
      <BlogSection />
      <ConnectSection />
    </>
  );
}
