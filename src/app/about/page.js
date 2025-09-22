import DrivesSection from "@/components/blocks/about/drives-section";
import MiviSection from "@/components/blocks/about/mivi-section";
import TeamSection from "@/components/blocks/about/team-section";
import AboutSection from "@/components/blocks/home/about-section";
import InnerHero from "@/components/common/inner-hero";

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
    button: null,
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
  team_section: {
    media: null,
    title: "Meet the Team",
    description: null,
    button: null,
    item_list: [
      {
        media: {
          type: "image",
          path: "/images/about-team-1.jpg",
          alt: "team-item",
        },
        title: "Sandeep Ghosh",
        description:
          "<p>Founder and CEO, UK Qualified Independent Financial Adviser, Tax and Pensions Specialist, and Author</p>",
        social_link: [
          {
            icon: "images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        media: {
          type: "image",
          path: "/images/about-team-2.jpg",
          alt: "team-item",
        },
        title: "Neil Ghosh",
        description: "<p>Head of Business Development, UK & Europe</p>",
      },
      {
        media: {
          type: "image",
          path: "/images/about-team-3.jpg",
          alt: "team-item",
        },
        title: "Amanda Tolentino",
        description: "Personal Assistant to Sandeep Ghosh",
      },
      {
        media: {
          type: "image",
          path: "/images/about-team-4.jpg",
          alt: "team-item",
        },
        title: "Claude Paul Chineegadoo",
        description: "<p>Head of Social and Corporate Responsibility</p>",
      },
      {
        media: {
          type: "image",
          path: "/images/about-team-5.jpg",
          alt: "team-item",
        },
        title: "Hitesh Maggu",
        description: "<p>Partner, India</p>",
      },
      {
        media: {
          type: "image",
          path: "/images/about-team-4.jpg",
          alt: "team-item",
        },
        title: "Claude Paul Chineegadoo",
        description: "<p>Head of Social and Corporate Responsibility</p>",
      },
      {
        media: {
          type: "image",
          path: "/images/about-team-5.jpg",
          alt: "team-item",
        },
        title: "Hitesh Maggu",
        description: "<p>Partner, India</p>",
      },
    ],
  },
  advisory_section: {
    media: null,
    title: "Advisory Board",
    description: null,
    button: null,
    item_list: [
      {
        media: {
          type: "image",
          path: "/images/about-advisory-1.jpg",
          alt: "advisory-item",
        },
        title: "Peter Kyprianou",
        description:
          "Director, UK Property Accountants (UKPA) | (UK GENERAL AND PROPERTY TAX)",
      },
      {
        media: {
          type: "image",
          path: "/images/about-advisory-2.jpg",
          alt: "advisory-item",
        },
        title: "George Chedid",
        description: "Managing Partner, 3RT Smart Gold Holdings",
      },
      {
        media: {
          type: "image",
          path: "/images/about-advisory-3.jpg",
          alt: "advisory-item",
        },
        title: "Johnny Conran",
        description: "Partner, Head of Middle East and Africa, Joseph Mews",
      },
      {
        media: {
          type: "image",
          path: "/images/about-advisory-4.jpg",
          alt: "advisory-item",
        },
        title: "Sophia Kazmi",
        description:
          "Director | International Mortgage Consultant, Maidwell Group",
      },
    ],
  },
};
export default function page() {
  return (
    <>
      <InnerHero />
      <AboutSection variant="about" data={local_data?.about_section} />
      <MiviSection />
      <DrivesSection />
      <TeamSection data={local_data?.team_section} />
      <TeamSection data={local_data?.advisory_section} />
    </>
  );
}
