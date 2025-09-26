import dynamic from "next/dynamic";

import InnerHero from "@/components/common/inner-hero";
import InfoSection from "@/components/blocks/legal/info-section";

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
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  hero_section: {
    background_media: {
      mobile: {
        type: "image",
        path: "/images/privacy-hero-1.jpg",
        alt: "hero",
      },
      desktop: {
        type: "image",
        path: "/images/privacy-hero-1.jpg",
        alt: "hero",
      },
    },
    title: "Privacy Policy",
    description:
      "<p>Your privacy matters. Here’s how we protect and use your data.</p>",
  },
  info_section: {
    description:
      "<p>The protection and security of your personal information is one of House of Em5 top priorities. This Privacy Policy discloses House of Em5 practice with respect to the information collected from the users of this website. By using this website you agree to accept the terms of this Privacy Policy as well as the website's Terms of Use. By accessing or using this website you expressly consent to our use and disclosure of your personal information in any manner described in this Privacy Policy. This Privacy Policy extends to both, users who visit the website but do not transact business on the website, as well as users who are registered on the website.</p><p>'Personal Information' refers to any information that identifies or can be used to identify, contact or locate the person, to whom such information pertains including, but not limited to, name, address, phone number, fax number, email address, financial profiles, identification number, credit card information etc.</p><h4>Personal Information We Collect</h4><p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as Device Information.</p><h4>How Do We Use Your Personal Information </h4><p>We collect personal information to provide you with a seamless and personalized shopping experience. This includes processing your orders, managing deliveries, offering customer support, and keeping you informed about our latest products, offers, and updates—only if you choose to receive them.Your information also helps us improve our website, personalize product recommendations, and better understand customer preferences. We are committed to protecting your privacy and will never sell or share your personal data with third parties for marketing purposes without your explicit consent.</p><h4>Sharing Your Personal Information</h4><p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.</p><p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p><h4>Your Rights</h4><ul><li>Access – You can request a copy of the personal data we hold about you.</li><li>Correction – You may ask us to correct or update inaccurate or incomplete information.</li><li>Deletion – You can request that we delete your data, subject to certain legal or operational obligations.</li><li>Restriction – You have the right to request limited processing of your information.</li><li>Objection – You may object to the processing of your data for direct marketing or other purposes.</li><li>Data Portability – Where applicable, you can request a copy of your data in a structured, machine-readable format.</li></ul>",
  },
};

export default function Page() {
  return (
    <>
      <InnerHero
        data={local_data?.hero_section}
        breadcrumb={local_data?.breadcrumb}
      />
      <InfoSection data={local_data?.info_section} />
    </>
  );
}
