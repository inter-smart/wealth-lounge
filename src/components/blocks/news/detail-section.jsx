"use client";
import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";

const local_data = {
  media: null,
  title: "Activities Mania Deluxe Slot Opinion Play Free Demonstration 2024",
  timestamp: "16-05-2025",
  
}
export default function DetailSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block py-[30px] sm:py-[60px] xl:py-[90px] 2xl:py-[110px] bg-[#FFFBF4] relative z-0">
      <div className="container">
        <div className="flex flex-wrap -mx-[10px] xl:-mx-[22px] 2xl:-mx-[26px] 3xl:-mx-[35px] [&>*]:px-[10px] xl:[&>*]:px-[22px] 2xl:[&>*]:px-[26px] 3xl:[&>*]:px-[35px]">
          <div className="w-full sm:w-[75%]">
            <Heading
              as="h2"
              size="heading4"
              className="3xl:text-[30px] text-primary mb-[10px]"
            >
              {data?.title}
            </Heading>
            <Text
              as="p"
              size="text1"
              className="3xl:text-[16px] text-[#191919] mb-[15px] xl:mb-[30px] 2xl:mb-[40px]"
            >
              {data?.timestamp}
            </Text>
            <div className="w-full h-auto">
              <div className="typography mb-[28px] xl:mb-[35px] 2xl:mb-[50px]">
                <div className="w-[100%] 3xl:h-[410px] 2xl:h-[495px] 3xl:h-[600px] mb-[15px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[38px]">
                  <Image
                    src="/images/news-detail-img.jpg"
                    alt="image"
                    width={1180}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                </p>
                <p>
                  Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[25%]">
              
          </div>
        </div>
      </div>
    </section>
  );
}
