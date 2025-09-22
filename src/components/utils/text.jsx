const sizes = {
  text1:
    "text-[12px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-normal font-normal",
    text2:
    "text-[12px] sm:text-[12px] lg:text-[14px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[22px] leading-normal font-normal",
    text3:
      "text-[12px] sm:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[20px] leading-normal font-normal",
};

const Text = ({ children, className = "", as, size, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`${className} ${sizes[size]} `} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
