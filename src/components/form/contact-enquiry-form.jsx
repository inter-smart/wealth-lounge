"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// ✅ Validation schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number is required")
    .max(20, "Phone number is too long"),
  additionalDetails: z
    .string()
    .optional()
    .refine((val) => !val || val.trim().length >= 2, "Message too short"),
});

// ✅ Shared styles
const inputStyle = `
  text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-white placeholder:text-[#d0d0d0] w-full !h-[50px] 2xl:!h-[60px] 3xl:!h-[75px] bg-[#141414] border-transparent px-[20px]
  focus:outline-none focus:ring-0 focus-visible:ring-1 focus-visible:border-transparent
  selection:bg-primary-800 appearance-none
`
  .replace(/\s+/g, " ")
  .trim();

const textareaStyle = `
  ${inputStyle} min-h-[75px] resize-none
`
  .replace(/\s+/g, " ")
  .trim();

export default function ContactEnquiryForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      additionalDetails: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-wrap items-start -mx-3 [&>*]:p-3"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Full Name*</FormLabel>
              <FormControl>
                <div className="w-full p-[1px] overflow-hidden relative z-0 after:content-[''] after:absolute after:-z-1 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-150 after:w-[200px] after:h-[200px] after:bg-white/60 after:rounded-full after:blur-[40px]">
                  <Input
                    className={inputStyle}
                    placeholder="Full Name*"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Email*</FormLabel>
              <FormControl>
                <div className="w-full p-[1px] overflow-hidden relative z-0 after:content-[''] after:absolute after:-z-1 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-150 after:w-[200px] after:h-[200px] after:bg-white/60 after:rounded-full after:blur-[40px]">
                  <Input
                    className={inputStyle}
                    type="email"
                    placeholder="Email*"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        {/* <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Phone*</FormLabel>
              <FormControl>
              <div className="w-full p-[1px] overflow-hidden relative z-0 after:content-[''] after:absolute after:-z-1 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-150 after:w-[200px] after:h-[200px] after:bg-white/60 after:rounded-full after:blur-[40px]">
                <Input
                  className={inputStyle}
                  type="tel"
                  placeholder="Phone*"
                  {...field}
                />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* Additional Details */}
        <FormField
          control={form.control}
          name="additionalDetails"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <div className="w-full p-[1px] overflow-hidden relative z-0 after:content-[''] after:absolute after:-z-1 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-150 after:w-[200px] after:h-[200px] after:bg-white/60 after:rounded-full after:blur-[40px]">
                  <Textarea
                    className={textareaStyle}
                    placeholder="Message*"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="w-full mt-[5px] xl:mt-[10px] 2xl:mt-[20px] flex">
          <Button
            type="submit"
            variant="outline"
            className={"max-w-[120px] xl:max-w-[140px] 2xl:max-w-[180px] mx-auto"}
            animate={false}
          >
            Submit Enquiry
            <Image
              src="/icons/brand-icon.svg"
              alt="brand icon"
              width={20}
              height={20}
              unoptimized
              className="w-[12px] xl:w-[16px] 2xl:w-[18px]"
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
