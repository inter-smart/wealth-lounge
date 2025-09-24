import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import MultiStepApplicationForm from "@/components/form/profile-assessment-form";

const local_data = {
  title: "Connect With Us",
  description:
    "<p>LoremIpsum ther innovative, prestigious and reputable investment providers across multiple asset-classes, with our growing client base, giving them the ability to absorb ane will support and conthat they are always press.</p>",
  location_url:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.232854927268!2d55.278526275383975!3d25.262751177668807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f454aa34dacbf%3A0xc807568e929e8477!2sDUQE!5e0!3m2!1sen!2sin!4v1758698211772!5m2!1sen!2sin",
  form_title: "Get In Touch",
  button: null,
  item_list: [
    {
      media: {
        type: "image",
        path: "/images/contact-icon-1.svg",
        alt: "contact-icon",
      },
      title: "Headquarters",
      description:
        "<p>DUQE Square Business Center Quarter Deck, QE2, Port Rashid, Dubai, UAE</p>",
      phone: ["+971 4 871 6555", "+971 4 871 6555"],
      email: null,
    },
  ],
};

export default function ProfileSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block pb-[30px] sm:pb-[40px] xl:pb-[90px] 2xl:pb-[100px] overflow-hidden relative z-0">
      <div className="container">
        <div className="w-full max-sm:text-center">
          <Heading
            as="h2"
            size="heading2"
            className="text-primary mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
          >
            {data?.title}
          </Heading>
          <Text
            as="div"
            size="text1"
            className="text-[#191919] max-w-[420px] xl:max-w-[420px] 2xl:max-w-[620px] mb-[20px] xl:mb-[30px] 2xl:mb-[40px] max-sm:mx-auto"
          >
            {parse(data?.description)}
          </Text>
        </div>
        <div className="w-full">
          <MultiStepApplicationForm />
        </div>
      </div>
    </section>
  );
}
