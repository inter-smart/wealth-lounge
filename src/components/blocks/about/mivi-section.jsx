import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import parse from "html-react-parser";

const local_data = [
  {
    title: "Our Mission",
    description:
      "<p>Founded by Sandeep after years in financial advisory, The Wealth Lounge was born from a clear need for better financial understanding and guidance. Our vision is to connect clients with top investment providers and experts, offering valuable insights and future-ready opportunities to help them Understand Money, Create Wealth.</p>",
  },
  {
    title: "Our Vision",
    description:
      "<p>With our mission already in full swing, we look forward to creating an ecosystem of aspiring investors who are fully aware of the best investment opportunities available, in order to grow their wealth exponentially, always bringing together more like-minded individuals.</p>",
  },
];

export default function MiviSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block pb-[30px] sm:pb-[40px] xl:pb-[60px] 2xl:pb-[80px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[10px] md:-mx-[15px] xl:-mx-[20px] 2xl:-mx-[25px] [&>*]:px-[10px] sm:[&>*]:px-[15px] xl:[&>*]:px-[20px] 2xl:[&>*]:px-[25px]">
          {data?.map((item, index) => (
            <div key={"mivi-item" + index} className="w-full sm:w-1/2">
              <div className="w-full h-full bg-[#fffbf4] p-[15px_20px] sm:p-[20px_30px] xl:p-[30px_40px] 2xl:p-[50px_55px]">
                <div>
                  <Heading
                    as={"h2"}
                    size={"none"}
                    className="text-[12px] sm:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[30px] leading-tight font-extralight font-brownede text-primary mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
                  >
                    {item?.title}
                  </Heading>
                  <Text as="div" size="text1" className="text-[#191919]">
                    {parse(item?.description)}
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
