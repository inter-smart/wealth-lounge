import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import parse from "html-react-parser";

const local_data = {
  primary_media: {
    type: "image",
    path: "/images/testimonial-info-1.jpg",
    alt: "testimonial-info",
  },
  secondary_media: {
    type: "image",
    path: "/images/testimonial-info-2.jpg",
    alt: "testimonial-info",
  },
  tertiary_media: {
    type: "image",
    path: "/images/testimonial-info-3.jpg",
    alt: "testimonial-info",
  },
  title: "Testimonials",
  description:
    "<p>Our vision is to bring together innovative, prestigious and reputable investment providers across multiple asset-classes, with our growing client base, giving them the ability to absorb and apply these solutions into their own wealth creation initiatives. We will support and continue to work hard with our clients to ensure that they are always press.</p><p>Prestigious and reputable investment providers across multiple asset-classes, with our growing client base, giving them the ability to absorb and apply these solutions into their own wealth creation initiatives.</p>",
  button: null,
};
export default function InfoSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block pt-[30px] sm:pt-[40px] xl:pt-[60px] 2xl:pt-[80px] overflow-hidden relative z-0">
      <div className="container">
        <div className="flex flex-wrap sm:items-center sm:-mx-[15px] md:-mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] sm:[&>*]:p-[15px] md:[&>*]:p-[20px] xl:[&>*]:p-[40px_30px] 2xl:[&>*]:p-[50px_40px]">
          <div className="w-full sm:w-[220px] md:w-[300px] xl:w-[520px] 2xl:w-[576px] 3xl:w-[900px]">
            <div className="w-full h-[340px] sm:h-[420px] md:h-[468px] xl:h-[576px] 2xl:h-[768px] flex flex-wrap items-end border border-red-500 gap-[1%] xl:gap-[2%] max-sm:max-w-[468px]">
              <div className="w-full max-w-[30%] xl:max-w-[30%] aspect-[25/40] overflow-hidden">
                <Image
                  src={data?.primary_media?.path}
                  alt={data?.primary_media?.alt}
                  width={692}
                  height={324}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="w-full max-w-[45%] xl:max-w-[46%] h-full overflow-hidden">
                <Image
                  src={data?.secondary_media?.path}
                  alt={data?.secondary_media?.alt}
                  width={692}
                  height={324}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
              <div className="w-full max-w-[30%] xl:max-w-[20%] aspect-[16/27] overflow-hidden">
                <Image
                  src={data?.tertiary_media?.path}
                  alt={data?.tertiary_media?.alt}
                  width={692}
                  height={324}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[calc(100%-220px)] md:w-[calc(100%-300px)] xl:w-[calc(100%-520px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-900px)]">
            <div className="w-full">
              <Heading
                as="h2"
                size="heading2"
                className="text-primary mb-[5px] xl:mb-[10px]"
              >
                {data?.title}
              </Heading>
              <Text
                as="p"
                size="text2"
                className="leading-tight text-[#191919] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
              >
                {data?.sub_title}
              </Text>
              <Text as="div" size="text1" className="text-[#191919]">
                {parse(data?.description)}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
