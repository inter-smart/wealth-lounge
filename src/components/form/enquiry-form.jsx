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
  text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-white placeholder:text-white/90 w-full !h-[30px] 2xl:!h-[35px] 3xl:!h-[40px] bg-none border-transparent border-b-[#424242] px-0 
  focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent focus-visible:border-b-white
  selection:bg-primary-800 appearance-none
`
  .replace(/\s+/g, " ")
  .trim();

const textareaStyle = `
  ${inputStyle} min-h-auto resize-none
`
  .replace(/\s+/g, " ")
  .trim();

export default function EnquiryForm() {
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
        className="flex flex-wrap items-start -mx-4 [&>*]:p-4"
      >
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="w-full sm:w-1/3 lg:w-1/3">
              <FormLabel className="sr-only">Name*</FormLabel>
              <FormControl>
                <Input
                  className={inputStyle}
                  placeholder="Name*"
                  {...field}
                />
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
            <FormItem className="w-full sm:w-1/3 lg:w-1/3">
              <FormLabel className="sr-only">Email*</FormLabel>
              <FormControl>
                <Input
                  className={inputStyle}
                  type="email"
                  placeholder="Email*"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full sm:w-1/3 lg:w-1/3">
              <FormLabel className="sr-only">Phone</FormLabel>
              <FormControl>
                <Input
                  className={inputStyle}
                  type="tel"
                  placeholder="Phone"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Additional Details */}
        <FormField
          control={form.control}
          name="additionalDetails"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[calc(100%-160px)] lg:w-[calc(100%-170px)] 2xl:w-[calc(100%-180px)] 3xl:w-[calc(100%-220px)]">
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Textarea
                  className={textareaStyle}
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="w-full sm:w-[160px] lg:w-[170px] 2xl:w-[180px] 3xl:w-[220px]">
          <Button type="submit" variant="outline" animate={false}>
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
