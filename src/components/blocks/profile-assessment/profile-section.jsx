import React from "react";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import parse from "html-react-parser";
import MultiStepApplicationForm from "@/components/form/profile-assessment-form";

const local_data = {
  title: "Investment Enquiry Form",
  description:
    "<p>We have created this form to help us ﬁnd the right investment opportunities for you. The questions below will give us a good insight into what type of investor you are, or would like to become, and which products would be the best ﬁt for you and your investment goals. Want to find out what the smartest investment options are for yourself? Complete this short questionnaire let us help you explore which type of investments are best suited to your needs:</p>",
  button: null,
};

export default function ProfileSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[40px] xl:py-[50px_90px] 2xl:py-[70px_120px]">
      <div className="container">
        <div className="w-full mb-[20px] sm:mb-[30px] xl:mb-[40px] 2xl:mb-[60px]">
          <Heading
            as="h2"
            size="heading2"
            className="text-center text-primary mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
          >
            {data?.title}
          </Heading>
          <Text
            as="div"
            size="text1"
            className="text-center text-[#191919] max-w-[468px] sm:max-w-[640px] xl:max-w-[960px] 2xl:max-w-[1024px] 3xl:max-w-[1520px] mx-auto"
          >
            {parse(data?.description)}
          </Text>
        </div>
        <MultiStepApplicationForm />
      </div>
    </section>
  );
}
