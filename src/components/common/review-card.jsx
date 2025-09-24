import parse from "html-react-parser";
import Image from "next/image";
import { Text } from "@/components/utils/text";
export default function ReviewCard({ data }) {
  return (
    <div className="w-full h-full min-h-[200px] 2xs:min-h-[220px] sm:min-h-[200px] xl:min-h-[220px] 2xl:min-h-[268px] 3xl:min-h-[320px] flex flex-col justify-between bg-white border border-[#c8c8c8] p-[15px] sm:p-[20px] xl:p-[30px_30px_25px] 2xl:p-[40px_40px_30px]">
      <div className="w-full [mask-image:linear-gradient(to_bottom,white_80%,transparent)] h-[140px] sm:h-[130px] xl:h-[150px] 2xl:h-[170px] 3xl:h-[190px] overflow-y-auto pb-2">
        <Text as="div" size="text1" className="text-[#191919]">
          {parse(data?.description)}
        </Text>
      </div>
      <div className="flex flex-wrap items-center justify-between mt-[10px]">
        <div className="flex flex-wrap items-center">
          <div className="w-[26px] 2xl:w-[30px] aspect-square overflow-hidden rounded-full">
            <Image
              src={data?.author?.media?.path || "/images/placeholder.jpg"}
              alt={data?.author?.media?.alt || "review-item"}
              width={30}
              height={30}
              className="w-full h-full hover:scale-150 transition"
            />
          </div>
          <div className="flex-1 ml-[8px]">
            <Text
              as="div"
              size="text1"
              className="!leading-none text-[#191919]"
            >
              {data?.author?.title}
            </Text>
            <Text
              as="div"
              size="none"
              className="text-[8px] sm:text-[8px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px] leading-normal font-light text-[#191919]"
            >
              {data?.author?.title}
            </Text>
          </div>
        </div>
        <Image
          src="/images/home-review-elmt-1.svg"
          alt="home-serv-bg"
          width={32}
          height={28}
          unoptimized
          className="w-[20px] xl:w-[30px] 2xl:w-[34px]"
        />
      </div>
    </div>
  );
}
