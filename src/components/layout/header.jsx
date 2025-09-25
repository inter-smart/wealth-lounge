"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Heading } from "../utils/heading";
import useMedia from "use-media";

const headerData = {
  brand: {
    media: {
      type: "image",
      path: "/static/brand.png",
      alt: "logo",
    },
  },
  navigation: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Company",
      link: "/about",
      item_company: [
        {
          label: "About us",
          link: "/about",
          item_about: [
            {
              label: "More about us",
              link: "/about",
            },
            {
              label: "Our Values",
              link: "/about",
            },
            {
              label: "Our Journey",
              link: "/about",
            },
            {
              label: "Meet our team",
              link: "/about",
            },
            {
              label: "Our Associates",
              link: "/about",
            },
            {
              label: "Media & Recognit",
              link: "/about",
            },
          ],
        },
        {
          label: "About us",
          link: "/about",
          item_about: [
            {
              label: "More about us",
              link: "/about",
            },
            {
              label: "Our Values",
              link: "/about",
            },
            {
              label: "Our Journey",
              link: "/about",
            },
            {
              label: "Meet our team",
              link: "/about",
            },
            {
              label: "Our Associates",
              link: "/about",
            },
            {
              label: "Media & Recognit",
              link: "/about",
            },
          ],
        },
        {
          label: "Careers",
          link: "/career",
        },
        {
          label: "Privacy Policy",
          link: "/privacy-policy",
        },
        {
          label: "Terms and conditions",
          link: "/terms-conditions",
        },
      ],
    },
    {
      label: "Invest in GO EC",
      link: "/invest",
    },
    {
      label: "Solutions",
      link: "/solutions",
      item_solution: [
        {
          label: "GOEC Charging Hub",
          link: "/about",
        },
        {
          label: "GOEC Exclusive",
          link: "/about",
        },
        {
          label: "Public Commercial Parking",
          link: "/about",
        },
      ],
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.2 } },
};

const navigationMenuTriggerStyle =
  "text-[14px] sm:text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-normal font-normal text-center text-white w-full h-auto p-[4px_10px] xl:p-[6px_12px] 2xl:p-[10px_15px] 2xl:p-[15px_25px] bg-transparent border border-transparent hover:text-white focus:text-white hover:bg-black/10 focus:bg-black/50 ring-0 hover:border-white/10 data-[state=open]:border-white/10 data-[state=open]:hover:bg-black/10 data-[state=open]:text-white data-[state=open]:focus:bg-black/10 data-[state=open]:bg-black/10";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [bg, setBg] = useState(false);

  const [open, setOpen] = useState(false);

  const isDesktop = useMedia({ minWidth: "640px" });

  // expo3 async function getGlobalData() {
  //   const res = await fetch("http://localhost:1337/api/global?populate=*", {
  //     headers: {
  //       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  //     },
  //   });
  //   const data = await res.json();
  //   return data;
  // }

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
        setBg(false);
      } else {
        if (direction < 0) {
          setVisible(true);
          setBg(true);
        } else {
          setVisible(false);
          setBg(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={`w-full h-[var(--header-y)]  z-50 top-0 inset-x-0 flex items-center
          ${
            bg
              ? "border-b border-white/10 bg-black/80 shadow-[0px_10px_4px_0px_rgba(0,0,0,0.1)] backdrop-blur-sm fixed"
              : "absolute"
          }
          `}
      >
        {bg && (
          <div className="w-full h-px absolute z-0 inset-x-0 -bottom-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent opacity-100" />
        )}
        <div className="container">
          <div className="flex justify-between">
            <div
              className={`w-[120px] xl:w-[170px] 2xl:w-[250px] transition
              ${bg && "scale-90"}
              `}
            >
              <Link href={"/"}>
                <Image
                  src="/images/brand-logo.svg"
                  alt="logo"
                  width={257}
                  height={101}
                  unoptimized
                  className="w-full h-full"
                  priority
                />
              </Link>
            </div>
            <div
              className={`flex items-center space-x-[20px] xl:space-x-[25px] 2xl:space-x-[35px] transition
              ${bg && "scale-90"}
              `}
            >
              {isDesktop && (
                <div className="hidden lg:block">
                  <MegaNavigationMenubar />
                </div>
              )}
              <div>
                <Button
                  variant="outline"
                  className="min-w-[70px] 3xs:min-w-[80px] xl:min-w-[80px] 2xl:min-w-[100px] 3xl:min-w-[120px]"
                  asChild
                >
                  <Link href="/">Login</Link>
                </Button>
              </div>
              {!isDesktop && (
                <div className="lg:hidden">
                  <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger>
                      <div className="text-[12px] leading-none font-normal text-center text-white w-full flex items-center justify-center ">
                        <Image
                          src="/images/header-hamburger.svg"
                          alt="hamburger"
                          width={24}
                          height={10}
                          unoptimized
                          className="w-[15px] mr-[6px]"
                        />
                        <span>Menu</span>
                      </div>
                    </SheetTrigger>
                    <SheetContent className="w-[320px] bg-[#030303]">
                      <SheetHeader>
                        <SheetTitle className={"sr-only"}>
                          navigations
                        </SheetTitle>
                        <SheetDescription className={"sr-only"}>
                          navigations
                        </SheetDescription>

                        <AnimatePresence mode="wait">
                          {open && (
                            <motion.div
                              key="menu-anim"
                              variants={containerVariants}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                            >
                              <MegaNavigationMenubar />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
}

function MegaNavigationMenubar() {
  const menuItems = [
    { label: "The Alternatives Approach", href: "/alternatives-approach" },
    { label: "Mainstream Services", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <NavigationMenu viewport={false} className={"max-w-full justify-normal"}>
      <NavigationMenuList
        className={
          "max-lg:flex-col max-lg:items-start max-lg:gap-[20px] max-lg:py-[20px]"
        }
      >
        {menuItems.map((item, i) => (
          <motion.div key={i} variants={itemVariants}>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </motion.div>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
