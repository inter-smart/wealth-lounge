import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";

// Dynamic imports with SSR enabled for better performance
const AboutSection = dynamic(
  () => import("@/components/blocks/home/about-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);
const MiviSection = dynamic(
  () => import("@/components/blocks/about/mivi-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);
const DrivesSection = dynamic(
  () => import("@/components/blocks/about/drives-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);
const TeamSection = dynamic(
  () => import("@/components/blocks/about/team-section"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],
  hero_section: {
    background_media: {
      mobile: {
        type: "image",
        path: "/images/about-hero-1.jpg",
        alt: "hero",
      },
      desktop: {
        type: "image",
        path: "/images/about-hero-1.jpg",
        alt: "hero",
      },
    },
    title: "About",
    description:
      "<p>Empowering Generations with Legacy-Focused Financial Strategies</p>",
  },
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
        id: 1,
        media: {
          type: "image",
          path: "/images/about-team-1.jpg",
          alt: "team-item",
        },
        title: "Sandeep Ghosh",
        short_description:
          "<p>Founder and CEO, UK Qualified Independent Financial Adviser, Tax and Pensions Specialist, and Author</p>",
        description:
          "Sandeep’s base of high net-worth, family office and corporate clients stretches from the Middle East to Europe and the Far East. The Wealth Lounge was founded by Sandeep as a result of the disenchantment felt by many investors with the global markets and their lack of consistency. Today, The Wealth Lounge operates as a fully functional wealth management brokerage, with a strong focus on alternative assets such as generic private equity, gold exploration, real estate, REIT, and structured income products. There is a continuous effort to bring new asset classes into the fore, the latest major vertical being media and content, alongside emerging assets such as wine and fine art.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        id: 2,
        media: {
          type: "image",
          path: "/images/about-team-2.jpg",
          alt: "team-item",
        },
        title: "Neil Ghosh",
        short_description: "<p>Head of Business Development, UK & Europe</p>",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.</p><>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        id: 3,
        media: {
          type: "image",
          path: "/images/about-team-3.jpg",
          alt: "team-item",
        },
        title: "Amanda Tolentino",
        short_description: "Personal Assistant to Sandeep Ghosh",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        id: 4,
        media: {
          type: "image",
          path: "/images/about-team-4.jpg",
          alt: "team-item",
        },
        title: "Claude Paul Chineegadoo",
        short_description: "<p>Head of Social and Corporate Responsibility</p>",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        id: 5,
        media: {
          type: "image",
          path: "/images/about-team-5.jpg",
          alt: "team-item",
        },
        title: "Hitesh Maggu",
        short_description: "<p>Partner, India</p>",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        id: 6,
        media: {
          type: "image",
          path: "/images/about-team-4.jpg",
          alt: "team-item",
        },
        title: "Claude Paul Chineegadoo",
        short_description: "<p>Head of Social and Corporate Responsibility</p>",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        id: 7,
        media: {
          type: "image",
          path: "/images/about-team-5.jpg",
          alt: "team-item",
        },
        title: "Hitesh Maggu",
        short_description: "<p>Partner, India</p>",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
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
        short_description:
          "Director, UK Property Accountants (UKPA) | (UK GENERAL AND PROPERTY TAX)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        media: {
          type: "image",
          path: "/images/about-advisory-2.jpg",
          alt: "advisory-item",
        },
        title: "George Chedid",
        short_description: "Managing Partner, 3RT Smart Gold Holdings",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        media: {
          type: "image",
          path: "/images/about-advisory-3.jpg",
          alt: "advisory-item",
        },
        title: "Johnny Conran",
        short_description:
          "Partner, Head of Middle East and Africa, Joseph Mews",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
      {
        media: {
          type: "image",
          path: "/images/about-advisory-4.jpg",
          alt: "advisory-item",
        },
        title: "Sophia Kazmi",
        short_description:
          "Director | International Mortgage Consultant, Maidwell Group",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur mollitia earum dolore minima veniam amet quasi libero veritatis ratione perferendis fugit repellat, suscipit explicabo ut dignissimos asperiores quaerat architecto! Autem atque repellat, non ullam culpa obcaecati sed dolores, corrupti veritatis animi tenetur dolorum aliquid maiores. Voluptas id alias culpa voluptatum deleniti beatae animi adipisci perferendis, nesciunt iste, rerum aut necessitatibus explicabo dolor ratione dolores ipsam minus distinctio repudiandae consequuntur assumenda repellendus doloremque quibusdam! Quaerat aperiam officiis eos iure eligendi sapiente fugiat. At ipsa quam recusandae. Soluta sint excepturi porro eius rerum assumenda minus enim libero alias? Suscipit doloremque tempora quae.",
        social_link: [
          {
            icon: "/images/icon-light-linkedin.svg",
            label: "linkedin",
            link: "/",
          },
          {
            icon: "/images/icon-light-fb.svg",
            label: "fb",
            link: "/",
          },
        ],
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <InnerHero
        data={local_data?.hero_section}
        breadcrumb={local_data?.breadcrumb}
      />
      <AboutSection variant="about" data={local_data?.about_section} />
      <MiviSection />
      <DrivesSection />
      <TeamSection data={local_data?.team_section} />
      <TeamSection data={local_data?.advisory_section} />
    </>
  );
}
