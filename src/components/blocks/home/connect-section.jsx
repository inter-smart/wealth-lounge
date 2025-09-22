import { Heading } from "@/components/utils/heading";
import Image from "next/image";
import parse from "html-react-parser";
import EnquiryForm from "@/components/forms/enquiry-form";

const local_data = {
  media: null,
  title: "Let's Connect",
  description: null,
  button: null,
};

export default function ConnectSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block bg-[#1c1c1c] py-[20px] sm:py-[30px] xl:py-[50px] 2xl:py-[60px] relative z-0">
      <Image
        src="/images/home-blog-elmt-1.png"
        alt="home-blog-bg"
        width={321}
        height={323}
        className="w-[140px] xl:w-[200px] 2xl:w-[220px] 3xl:w-[240px] absolute -z-1 left-[5%] xl:left-[10%] 3xl:left-[12%] top-0 bottom-0 m-auto"
      />
      <div className="container">
        <div className="flex flex-wrap items-center -mx-[15px] sm:-mx-[20px] xl:-mx-[35px] 2xl:-mx-[50px] [&>*]:px-[15px] sm:[&>*]:px-[20px] xl:[&>*]:px-[35px] 2xl:[&>*]:px-[50px] ">
          <div className="w-full lg:w-[320px] xl:w-[320px] 2xl:w-[330px] 3xl:w-[440px]">
            <div className="w-full h-auto">
              <Heading
                as="h2"
                size="heading2"
                className="text-primary my-[10px] xl:my-[15px]"
              >
                {parse(data?.title)}
              </Heading>
            </div>
          </div>

          <div className="w-full lg:w-[calc(100%-320px)] xl:w-[calc(100%-320px)] 2xl:w-[calc(100%-330px)] 3xl:w-[calc(100%-440px)]">
            <div>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
