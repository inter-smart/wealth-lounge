import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

function Breadcrumb({ ...props }) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1 text-sm break-words sm:gap-2",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ asChild, className, ...props }) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "hover:text-foreground transition-colors",
        "text-[10px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-normal font-normal text-white",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "text-[10px] sm:text-[12px] lg:text-[12px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[18px] leading-normal font-normal text-primary",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? (
        <Image
          src="/images/breadcrumb-i.svg"
          alt="breadcrumb"
          width={15}
          height={15}
          unoptimized
          className="w-[10px] sm:w-[12px] object-contain"
        />
      )}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
