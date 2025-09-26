import React from "react";
import parse from "html-react-parser";

export default function InfoSection({ data }) {
  return (
    <section className="w-full h-auto block py-[20px] sm:py-[30px] xl:py-[40px] 2xl:py-[50px]">
      <div className="container">
        <div className="typography [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-brownede [&_h1,&_h2,&_h3,&_h4,&_h5,&_h6]:font-normal [&_ul]:[list-style-image:url(../../public/images/icon-list.svg)] mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
          {parse(data?.description)}
        </div>
      </div>
    </section>
  );
}
