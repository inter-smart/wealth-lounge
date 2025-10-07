import { Heading } from "@/components/utils/heading";
import { Text } from "@/components/utils/text";
import Image from "next/image";
import parse from "html-react-parser";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const local_data = {
  media: {
    type: "image",
    path: "/images/alternatives-info-1.jpg",
    alt: "about",
  },
  title: "Approaches We Provide",
  sub_title: "Preserving wealth. Creating legacy.",
  description:
    "<p>The investment world is changing shape and financial markets cannot alone be depended upon to take forward our investment growth and combat spiraling inflation. Our extensive research and long-standing relationships with innovative, established investment partners with strong track record and credentials allows us to introduce our clients to a world of alternative investments. We cannot afford to ignore the possibilities of diversifying across these asset classes. Our in house analysts now identify new assets that fit key criteria common across our client base, while ensuring that risk is mitigated wherever possible.</p>",
  button: null,
  types: {
    title: "Types of Alternatives",
    item_list: [
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-1.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-1-1.jpg",
          alt: "alternatives-item",
        },
        title: "Real Estate",
        description:
          "<p>We are specialists in UK real estate, and provide a holistic approach from identifying the property, financing, introduction of lawyers through to completion and lettings management. We are also able to help with setting up UK-based bank accounts to support the process.</p><ul><li>How strong is the growth potential of the town?</li><li>How has employment increased locally?</li><li>What local infrastructure will help increase value?</li><li>Will the buyer be able to get a mortgage?</li><li>How can we maintain occupancy at all times? We also have developments with approval for short-term let, which can see yields in excess of 9% per annum. Please click here for a selection of our properties.</li></ul>",
        additional_description:
          "<p><b>Real Estate:</b></p><ul><li>UK, Germany, Portugal</li><li>Rental yields - 4-9% p.a.</li><li>Short-term rental yields 10-14%</li><li>Resale - 5-10% p.a.</li></ul>",
        button: null,
      },
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-2.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-2-1.jpg",
          alt: "alternatives-item",
        },
        title: "Fixed Income Loan Notes",
        description:
          "<p>We are able to bring a unique opportunity of holding a stake in a UK-based real estate developer, established for over 30 years and with over 200 developments on their books, who will provide a fixed income as well as profit over a term of 3-5 years, generated from the returns of a rolling book of projects.</p>",
        additional_description:
          "<p><b>Fixed Income Loan Notes:</b></p><ul><li>UK commercial property</li><li>UK litigation finance</li><li>UK residential property</li><li>Entry – £10,000</li><li>2-3 year fixed term</li><li>12-15% p.a net income</li></ul>",
        button: null,
      },
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-3.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-3-1.jpg",
          alt: "alternatives-item",
        },
        title: "Fixed Income + Profit share",
        description:
          "<p>We are specialists in UK real estate. We partner with developers and distributors up and down the whole of UK to bring our clients an armchair service. All developments are handpicked, based on key criteria. The UK property market has an undersupply of 2 million homes, meaning that investors can enjoy both strong rental yields and steady capital appreciation.</p>",
        additional_description:
          "<p><b>Fixed income + profit share:</b></p><ul><li>UK residential and holiday property</li><li>Entry – GBP5000</li><li>3-5 year fixed term</li><li>12-17% p.a. net income</li></ul>",
        button: null,
      },
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-4.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-4-1.jpg",
          alt: "alternatives-item",
        },
        title: "UK Private Equity",
        description:
          "<p>The lucrative world of private equity generated over £30 billion in 2024 and this is set to be surpassed by at least 7% in 2025. Investors are now able to invest in and participate in the exciting arena for as little as £20,000 entry. Taking a stake in an early stage company jointly owned by a well-run private equity firm, could see capital returned in excess of four times on exit. Our partners are well-regulated and have an excellent track record of picking winning companies and successfully exiting these businesses, providing a spike in investor portfolios.</p><p>At any time, we have 5-10 private equity opportunities outside of our core offering, with qualified companies to whom we act as LP. In this space, we are industry agnostic but do run the opportunity through stringent due diligence and product analysis, in order to qualify an investment that provides measured risk and attractive upside, within a reasonable time frame.</p><h5>We look at these factors among many wider ones to determine our decision:</h5><h6>Business Model and Market:</h6><p>There should be a credible strategy for growth and sustainability with a product or service in high demand.</p><h6>Quality of Earnings (QoE):</h6><p>What is the company's 'true earnings potential'</p><h6>Cash Flow:</h6><p>The company should have stable, predictable cash flow.</p><h6>Revenue Growth:</h6><p>Consistency in growth</p><h6>Capital Requirements:</h6><p>Understanding the breakdown of growth capital versus maintenance capital expenditure?</p><h6>Valuation:</h6><p>The investment must be priced at a competitive entry point with the potential for a significant return at the time of exit.</p>",
        additional_description:
          "<p><b>UK Private Equity:</b></p><ul><li>Entry – £20,000</li><li>3-5 year hold within each company</li><li>3.5X minimum exit multiple</li></ul>",
        button: null,
      },
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-5.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-5-1.jpg",
          alt: "alternatives-item",
        },
        title: "Gold Exploration",
        description:
          "<p>As the US dollar weakens, and central banks continue to buy gold, we see gold prices reaching new heights, as it continues to prove itself as a safe haven asset. We offer an exclusive opportunity for investors to take a stake in a private gold exploration company in British Columbia, Canada, with proven reserves of circa 10m oz of gold, within an 80 sq km area. As the company begins the process of an exit, they are offering investors to come in one final time, the funds from which will be utilised towards the exit process. Minimum anticipated yield is 3-4X for new investors.</p><p>The company is backed by its sister concern, a publicly listed gold exploration company with neighbouring land, headquartered in London, themselves having proven reserves of over 13m oz and approaching a valuation of USD1 billion.</p>",
        additional_description:
          "<ul><li><b>Entry – USD25000</b></li><li><b>Projected 3-4x current value</b></li><li><b>by Q4 2025</b></li></ul>",
        button: null,
      },
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-6.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-6-1.jpg",
          alt: "alternatives-item",
        },
        title: "US Pre-developed Land",
        description:
          "<p>US cities continue to expand outwards through employment and people migration. This provides a perfect investment proposition to hold land in areas poised for expansion, before selling at a profit. Cost per plot is USD50,000 and the investor will receive a title deed in their name from First American. The investor holds the land for 5-7 years on average, during which they receive an income and then the final capital and remaining profit is paid out on sale and exit, with all aspects taken care of by the company. Average (audited/reported) annual growth is 12%+. Walton have been in this businesses for 40 years and is today USD4.5 billion, yet still family owned.</p>",
        additional_description:
          "<ul><li><b>US Pre-developed land</b></li><li><b>Buy and hold outside key US cities</b></li><li><b>Entry – USD50000</b></li><li><b>5-7 year average hold</b></li><li><b>Annual income IRR12-15% p.a.</b></li></ul>",
        button: null,
      },
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-7.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-7-1.jpg",
          alt: "alternatives-item",
        },
        title: "Wealth Media",
        description:
          "<p>“Media content (film and television) is becoming a lucrative and booming asset class of its own. Since the introduction of streaming services, television and film-makers have a range of sale options, and the industry is booming as a result. Wealth Media is a partnership with Creativity Capital in UK and Asanti Films in India to allow investors to take advantage of this asset class, either via a debt arrangement where returns from a movie, or profit from a movie are settled within a 24 month period.”</p>",
        additional_description:
          "<ul><li><b>Film and television production</b></li><li><b>Debt or equity options</b></li><li><b>Entry – From USD20,000</b></li><li><b>USD15 to 24 months average hold</b></li><li><b>Return of 8-10% on debt and 50-100% on equity</b></li></ul>",
        button: null,
      },
      {
        primary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-8.jpg",
          alt: "alternatives-item",
        },
        secondary_media: {
          type: "image",
          path: "/images/alternatives-infoRepeat-8-1.jpg",
          alt: "alternatives-item",
        },
        title: "Private Banking Services",
        description:
          "<p>We are partnered with Intercontinental Investment Bank (IIB), who have branches in The Bahamas, East and West Africa, headquartered out of Bahrain.<a href='https://www.iibanks.com/' target='_blank' rel='noopener noreferrer'>www.iibanks.com</a></p><p>We are able to facilitate the opening of private offshore bank accounts for both individuals and companies, regardless of nationality, so long as the applicant passes KYC and AML checks. IIB provide current accounts as well as term deposits and savings accounts with competitive rates.</p><p>For any interest in our products or services, please complete and submit the Enquiry Form</p>",
        additional_description: null,
        button: {
          type: "primary",
          icon: "icons/brand-icon-black.svg",
          label: "Enquire Now",
          link: "/",
        },
      },
    ],
  },
};

export default function InfoSection({ data = local_data }) {
  return (
    <section className="w-full h-auto block pt-[20px] sm:pt-[30px] xl:pt-[40px] 2xl:pt-[60px] overflow-hidden relative z-0">
      <div className="container">
        <div className="flex flex-wrap sm:items-center sm:-mx-[15px] md:-mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] sm:[&>*]:p-[15px] md:[&>*]:p-[20px] xl:[&>*]:p-[40px_30px] 2xl:[&>*]:p-[50px_40px]">
          <div className="w-full sm:w-[calc(100%-220px)] md:w-[calc(100%-300px)] xl:w-[calc(100%-520px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-768px)]">
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
          <div className="w-full sm:w-[220px] md:w-[300px] xl:w-[520px] 2xl:w-[576px] 3xl:w-[768px]">
            <div className="w-full h-auto aspect-[70/32] overflow-hidden max-sm:my-[20px]">
              <Image
                src={data?.media?.path}
                alt={data?.media?.alt}
                width={692}
                height={324}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
        <hr className="border-primary" />
      </div>

      {data?.types?.item_list?.map((item, index) => (
        <div
          key={"types-item" + index}
          className={`w-full h-auto py-[30px] sm:py-[40px] xl:py-[60px] 2xl:py-[80px] ${
            index % 2 === 0 ? "bg-white" : "bg-[#fffbf4]"
          } `}
        >
          <div className="container">
            <div
              className={`flex flex-wrap sm:items-center -mx-[15px] md:-mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] [&>*]:p-[15px] md:[&>*]:p-[20px] xl:[&>*]:p-[30px] 2xl:[&>*]:p-[40px]
                ${
                  index % 2 === 0
                    ? "flex-row-reverse sm:flex-row-reverse"
                    : "flex-row-reverse sm:flex-row"
                }
                `}
            >
              {index === 0 && (
                <div className="w-full">
                  <Heading
                    as="h2"
                    size="heading2"
                    className="text-primary -mb-[10px] xl:-mb-[15px]"
                  >
                    {data?.types?.title}
                  </Heading>
                </div>
              )}
              <div className="w-full sm:w-[calc(100%-220px)] md:w-[calc(100%-300px)] xl:w-[calc(100%-520px)] 2xl:w-[calc(100%-576px)] 3xl:w-[calc(100%-768px)]">
                <div className="w-full">
                  <Heading
                    as="h2"
                    size="heading2"
                    className="text-primary mb-[10px] xl:mb-[15px] 2xl:mb-[20px] max-sm:text-[18px]"
                  >
                    {item?.title}
                  </Heading>
                  <div className="typography mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
                    {parse(item?.description)}
                  </div>
                  {item?.additional_description && (
                    <div
                      className={`inline-block rounded-[10px] border-[1px] border-[#f0dfc0] p-[10px] md:p-[15px] xl:p-[20px] 2xl:p-[30px]
                    ${index % 2 === 0 ? "bg-[#fffbf4]" : "bg-white"}
                `}
                    >
                      <div className="typography [&_ul]:pl-0 [&_ul>li]:list-none [&_*]:m-0">
                        {parse(item?.additional_description)}
                      </div>
                    </div>
                  )}
                  {item?.button && (
                    <Button
                      variant="outline"
                      className="text-black border-black min-w-[100px] sm:min-w-[100px] xl:min-w-[120px] 2xl:min-w-[130px] 3xl:min-w-[150px]"
                      asChild
                    >
                      <Link href={item?.button?.link}>
                        {item?.button?.label}
                        {item?.button?.icon && (
                          <Image
                            src={item?.button?.icon}
                            alt={item?.button?.label}
                            width={20}
                            height={20}
                            unoptimized
                            className="w-[12px] xl:w-[16px] 2xl:w-[18px]"
                          />
                        )}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className="w-full sm:w-[220px] md:w-[300px] xl:w-[520px] 2xl:w-[576px] 3xl:w-[768px]">
                <div
                  className={`w-full h-[340px] sm:h-[420px] md:h-[468px] xl:h-[576px] 2xl:h-[768px] relative z-0 flex flex-wrap items-end gap-[2%] xl:gap-[5%] max-sm:max-w-[468px]
                ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
                `}
                >
                  <Image
                    src="/images/alternatives-loop-bg.svg"
                    alt="alternatives-loop-bg"
                    width={332}
                    height={356}
                    unoptimized
                    className={`w-[120px] sm:w-[176px] xl:w-[220px] 2xl:w-[320px] object-cover absolute -z-1 hover:scale-140 hover:opacity-50 transition
                      ${
                        index % 2 === 0
                          ? "top-0 right-0 -translate-y-1/10 translate-x-1/4 "
                          : "top-0 left-0 -translate-y-1/10 -translate-x-1/3 "
                      }
                      `}
                  />
                  <div className="w-full max-w-[43%] h-full overflow-hidden">
                    <Image
                      src={item?.primary_media?.path}
                      alt={item?.primary_media?.alt}
                      width={692}
                      height={324}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>
                  <div className="w-full max-w-[55%] xl:max-w-[52%] h-[90%] overflow-hidden">
                    <Image
                      src={item?.secondary_media?.path}
                      alt={item?.secondary_media?.alt}
                      width={692}
                      height={324}
                      className="w-full h-full object-cover hover:scale-105 transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
