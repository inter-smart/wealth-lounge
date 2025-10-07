import React from "react";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import parse from "html-react-parser";
import dynamic from "next/dynamic";
import Image from "next/image";

const ContactEnquiryForm = dynamic(
  () => import("@/components/form/contact-enquiry-form"),
  {
    ssr: true,
    loading: () => <p>Loading...</p>,
  }
);

const local_data = {
  title: "Investment Enquiry Form",
  description:
    "<p>We have created this form to help us ﬁnd the right investment opportunities for you. The questions below will give us a good insight into what type of investor you are, or would like to become, and which products would be the best ﬁt for you and your investment goals. Want to find out what the smartest investment options are for yourself? Complete this short questionnaire let us help you explore which type of investments are best suited to your needs:</p>",
  button: null,
  location_url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2328542636224!2d55.281101199999995!3d25.262751200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f454aa34dacbf%3A0xc807568e929e8477!2sDUQE!5e0!3m2!1sen!2sin!4v1758892501657!5m2!1sen!2sin",
  form_title: "Get in Touch",
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
export default function ContactEnquirySection({ data = local_data }) {
  return (
    <section className="w-full h-auto block pb-[30px] sm:pb-[40px] xl:pb-[90px] 2xl:pb-[100px] overflow-hidden relative z-0">
      <div className="container">
        <div className="flex flex-wrap -mx-[10px] sm:-mx-[10px] xl:-mx-[15px] 2xl:-mx-[30px] [&>*]:p-[10px] sm:[&>*]:p-[10px] xl:[&>*]:p-[15px] 2xl:[&>*]:p-[30px]">
          <div className="w-full sm:w-1/2 md:w-1/2">
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
              {data?.location_url && (
                <div className="w-full h-auto aspect-[8/6]">
                  <iframe
                    src={data?.location_url}
                    title="Google Maps Location"
                    width="820"
                    height="520"
                    style={{ width: "100%", height: "100%" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2">
            <div className="group w-full h-full xl:min-h-[540px] 2xl:min-h-[620px] 3xl:min-h-[768px] bg-[#141414] overflow-hidden relative z-0 p-[25px_20px_30px] sm:p-[35px_30px_40px] xl:p-[50px_60px_60px] 2xl:p-[80px_80px_80px] 3xl:p-[100px_80px_100px]">
              <Heading
                as="h2"
                size="heading2"
                className="text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-tight font-extralight font-brownede text-center text-white mb-[15px] xl:mb-[20px] 2xl:mb-[30px] 3xl:mb-[50px]"
              >
                {data?.form_title}
              </Heading>
              <ContactEnquiryForm />
              <Image
                src="/images/contact-enquiry-bg.png"
                alt="contact-enquiry-bg"
                width={332}
                height={356}
                unoptimized
                className="w-[120px] sm:w-[176px] xl:w-[220px] 2xl:w-[268px] 3xl:w-[320px] object-cover absolute -z-1 bottom-0 right-0 origin-bottom-right group-hover:scale-110 group-hover:opacity-50 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
