const sizes = {
  heading1:
    "text-[22px] sm:text-[28px] lg:text-[38px] xl:text-[52px] 2xl:text-[64px] 3xl:text-[80px] leading-tight font-extralight font-brownede",
  heading2:
    "text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[40px] 2xl:text-[48px] 3xl:text-[60px] leading-tight font-extralight font-brownede",
  heading4:
    "text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[25px] leading-tight font-extralight font-brownede",
  heading5:
    "text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] leading-tight font-extralight font-brownede",
  heading6:
    "text-[11px] sm:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-tight font-extralight font-brownede",

  // ====
  heading3:
    "text-[16px] sm:text-[20px] lg:text-[26px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[48px] leading-tight font-normal",
};

const Heading = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
