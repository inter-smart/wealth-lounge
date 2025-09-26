"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import useMedia from "use-media";

const local_data = [
  {
    enable: true,
    isExternal: true,
    title: "",
    icon: "/images/icon-floating-1.svg",
    href: "tel:+97148716555",
  },
  {
    enable: true,
    isExternal: true,
    title: "",
    icon: "/images/icon-floating-2.svg",
    href: "https://api.whatsapp.com/send?phone=15551234567",
  },
  {
    enable: true,
    isExternal: false,
    title: "Profile Assessment Form",
    icon: "/images/icon-floating-3.svg",
    href: "/profile-assessment",
  },
];

export default function FloatingMenu({
  items = local_data,
  desktopClassName,
  mobileClassName,
}) {
  const isDesktop = useMedia({ minWidth: "1024px" });
  return (
    <>
      {isDesktop ? (
        <FloatingDockDesktop items={items} className={desktopClassName} />
      ) : (
        <FloatingDockMobile items={items} className={mobileClassName} />
      )}
    </>
  );
}

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed z-9 bottom-10 right-6">
      <div className={cn("relative", className)}>
        <AnimatePresence>
          {open && (
            <motion.div
              layoutId="nav"
              className="absolute inset-x-0 bottom-full mx-auto mb-4 flex flex-col gap-y-2"
            >
              {items.map((item, idx) => (
                <motion.div
                  key={item.title || `item-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: idx * 0.05,
                    },
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                >
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 aspect-square flex items-center justify-center rounded-full bg-[#6c4200] shadow-lg dark:bg-white mx-auto"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title || "Menu item"}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="w-9 aspect-square flex items-center justify-center rounded-full bg-[#6c4200] shadow-lg dark:bg-white mx-auto"
                    >
                      <Image
                        src={item.icon}
                        alt={item.title || "Menu item"}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setOpen(!open)}
          className="w-10 aspect-square flex items-center justify-center rounded-full bg-[#6c4200] shadow-xl dark:bg-white transition-all duration-200 hover:scale-105"
        >
          <Image
            src="/icons/brand-icon.svg"
            alt="brand-icon"
            width={20}
            height={20}
            unoptimized
            className="w-6"
          />
        </button>
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  return (
    <div
      className={cn(
        "fixed bottom-1/3 right-10 z-50 flex flex-col items-end gap-y-3",
        className
      )}
    >
      {items.map((item, index) => (
        <IconContainer key={"floating-menu" + index} {...item} />
      ))}
    </div>
  );
};

function IconContainer({ title, icon, href, isExternal }) {
  let ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Each icon now tracks its own mouse position
  let mouseX = useMotionValue(Infinity);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let size = useSpring(useTransform(distance, [-100, 0, 100], [35, 50, 35]), {
    mass: 0.2,
    stiffness: 150,
    damping: 18,
  });

  let iconSize = useSpring(
    useTransform(distance, [-100, 0, 100], [35, 40, 35]),
    { mass: 0.2, stiffness: 150, damping: 18 }
  );

  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          mouseX.set(Infinity);
        }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        className={`relative flex aspect-square items-center justify-center bg-[#6c4200] dark:bg-white shadow-lg
          ${
            hovered && title
              ? "rounded-tl-0 rounded-bl-0 rounded-tr-full rounded-br-full"
              : "rounded-full"
          }
          `}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && title && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ height: size }}
              className="text-[10px] xl:text-[12px] 3xl:text-[14px] leading-none font-normal text-white absolute right-full whitespace-nowrap rounded-tl-[10px] rounded-bl-[10px] bg-[#6c4200] px-3 py-1 dark:bg-white dark:text-black
                flex items-center"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          ref={ref}
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center pointer-events-none"
        >
          <Image src={icon} alt={title} width={35} height={35} />
        </motion.div>
      </motion.div>
    </a>
  ) : (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          mouseX.set(Infinity);
        }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        className={cn(
          "relative flex aspect-square items-center justify-center bg-[#6c4200] dark:bg-white shadow-lg",
          hovered
            ? title
              ? "rounded-tl-0 rounded-bl-0 rounded-tr-full rounded-br-full"
              : "rounded-full"
            : "rounded-full"
        )}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {hovered && title && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 1 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              style={{ height: size }}
              className="text-[10px] xl:text-[12px] 3xl:text-[14px] leading-none font-normal text-white absolute right-full whitespace-nowrap rounded-tl-[10px] rounded-bl-[10px] bg-[#6c4200] px-3 py-1 dark:bg-white dark:text-black flex items-center"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Icon */}
        <motion.div
          ref={ref}
          style={{ width: iconSize, height: iconSize }}
          className={`flex items-center justify-center
            `}
        >
          <Image src={icon} alt={title} width={35} height={35} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
