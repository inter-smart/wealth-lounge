"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

// ✅ Complete validation schema for all steps
const formSchema = z.object({
  // Step 1: Personal Information
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name cannot exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number is required")
    .max(20, "Phone number is too long"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),

  // Step 2: Address Information
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().min(5, "Valid zip code is required"),
  country: z.string().min(2, "Country is required"),

  // Step 3: Professional Information
  occupation: z.string().min(2, "Occupation is required"),
  company: z.string().min(2, "Company name is required"),
  experience: z.string().min(1, "Experience level is required"),
  salary: z.string().min(1, "Salary range is required"),

  // Step 4: Preferences & Requirements
  serviceType: z.string().min(1, "Service type is required"),
  preferences: z.array(z.string()).min(1, "Select at least one preference"),
  additionalDetails: z.string().optional(),

  // Step 5: Terms & Review
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
  newsletter: z.boolean().optional(),
});

// ✅ Individual step schemas for validation
// const stepSchemas = {
//   1: formSchema.pick({
//     fullName: true,
//     email: true,
//     phone: true,
//     dateOfBirth: true,
//   }),
//   2: formSchema.pick({
//     address: true,
//     city: true,
//     state: true,
//     zipCode: true,
//     country: true,
//   }),
//   3: formSchema.pick({
//     occupation: true,
//     company: true,
//     experience: true,
//     salary: true,
//   }),
//   4: formSchema.pick({
//     serviceType: true,
//     preferences: true,
//     additionalDetails: true,
//   }),
//   5: formSchema.pick({
//     terms: true,
//     newsletter: true,
//   }),
// };

// ✅ Shared styles (keeping your existing style)
const labelStyle = `
  text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-black mb-[5px] xl:mb-[10px] 2xl:mb-[15px]
`
  .replace(/\s+/g, " ")
  .trim();
const inputStyle = `
  text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-black placeholder:text-[#1c1c1c] w-full !h-[30px] 2xl:!h-[35px] 3xl:!h-[40px] bg-none border-transparent border-b-[#1c1c1c] px-0 
  focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent focus-visible:border-b-red-500
  selection:bg-primary-800 appearance-none
`
  .replace(/\s+/g, " ")
  .trim();

const textareaStyle = `
  ${inputStyle} min-h-auto resize-none
`
  .replace(/\s+/g, " ")
  .trim();

const glowWrapperClass =
  "w-full p-[1px] overflow-hidden relative z-0 after:content-[''] after:absolute after:-z-1 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:scale-150 after:w-[200px] after:h-[200px] after:bg-white/60 after:rounded-full after:blur-[40px]";

export default function MultiStepApplicationForm() {
  const [currentStep, setCurrentStep] = useState(5);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const totalSteps = 7;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      occupation: "",
      company: "",
      experience: "",
      salary: "",
      serviceType: "",
      preferences: [],
      additionalDetails: "",
      terms: false,
      newsletter: false,
    },
    mode: "onChange",
  });

  // ✅ Step titles
  const stepTitles = {
    1: "Personal Information",
    2: "Address Details",
    3: "Professional Information",
    4: "Preferences & Requirements",
    5: "Review & Submit",
  };

  // ✅ Validate current step
  const validateStep = async (step) => {
    const schema = stepSchemas[step];
    const stepData = {};

    // Get only the fields for current step
    Object.keys(schema.shape).forEach((key) => {
      stepData[key] = form.getValues(key);
    });

    try {
      await schema.parseAsync(stepData);
      return true;
    } catch (error) {
      // Trigger validation errors in the form
      Object.keys(schema.shape).forEach((key) => {
        form.trigger(key);
      });
      return false;
    }
  };

  // ✅ Handle next step
  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  // ✅ Handle previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // ✅ Handle final form submission
  const onSubmit = async (values) => {
    console.log("Final form submission:", values);
    // Handle your form submission logic here
    alert("Application submitted successfully!");
  };

  // ✅ Calculate progress
  const progress = (completedSteps.size / totalSteps) * 100;

  // ✅ Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  // ✅ Step 1
  const renderStep1 = () => (
    <div className="flex flex-wrap items-start -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem className="w-full sm:w-1/3 lg:w-1/3">
            <FormLabel className="sr-only">Name*</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Name*"
                className={inputStyle}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-full sm:w-1/3 lg:w-1/3">
            <FormLabel className="sr-only">Email*</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="Email*"
                className={inputStyle}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem className="w-full sm:w-1/3 lg:w-1/3">
            <FormLabel className="sr-only">Age*</FormLabel>
            <FormControl>
              <Input
                type="number"
                placeholder="Age*"
                className={inputStyle}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem className="w-full sm:w-1/3 lg:w-1/3">
            <FormLabel className="sr-only">Phone*</FormLabel>
            <FormControl>
              <Input
                type="tel"
                placeholder="Phone*"
                className={inputStyle}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="occupation"
        render={({ field }) => (
          <FormItem className="w-full sm:w-2/3 lg:w-2/3">
            <FormLabel className="sr-only">Occupation*</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Occupation*"
                className={inputStyle}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  // ✅ Step 2
  const renderStep2 = () => (
    <div className="flex flex-wrap items-start -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="type"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className={labelStyle}>
              How comfortable are you with investment risk?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-10"
              >
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="veryConservative" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Very conservative
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="onservative" />
                  </FormControl>
                  <FormLabel className="font-normal">Onservative</FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="moderately" />
                  </FormControl>
                  <FormLabel className="font-normal">Moderately</FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="conservativeBalanced" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Conservative Balanced
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="moderatelyAggressive" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Moderately Aggressive
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="aggressive" />
                  </FormControl>
                  <FormLabel className="font-normal">Aggressive</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  // ✅ Step 3
  const renderStep3 = () => (
    <div className="flex flex-wrap items-start -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="investedBefore"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className={labelStyle}>
              Have you invested before?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-10"
              >
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="investedYes" />
                  </FormControl>
                  <FormLabel className="font-normal">Yes</FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="investedNo" />
                  </FormControl>
                  <FormLabel className="font-normal">No</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="investmentExperience"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className={labelStyle}>
              If yes, how would you describe your investment experience?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-10"
              >
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="beginner" />
                  </FormControl>
                  <FormLabel className="font-normal">Beginner</FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="intermediate" />
                  </FormControl>
                  <FormLabel className="font-normal">Intermediate</FormLabel>
                </FormItem>
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <RadioGroupItem value="advanced" />
                  </FormControl>
                  <FormLabel className="font-normal">Advanced</FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="investmentProducts"
        render={({ field }) => (
          <FormItem className="w-full mt-[10px] xl:mt-[15px] 2xl:mt-[20px]">
            <FormLabel className={"sr-only"}>What date will</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className={inputStyle}>
                  <SelectValue placeholder="Which of the following investment products would you like to know more about?*" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1">Investment products 1</SelectItem>
                <SelectItem value="2">Investment products 2</SelectItem>
                <SelectItem value="3">Investment products 3</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  // ✅ Step 4
  const renderStep4 = () => (
    <div className="flex flex-wrap items-start -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="investmentProducts"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className={labelStyle}>
              Which of the following investment products would you like to know
              more about?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-x-10 gap-y-5"
              >
                {[
                  "Physical Real Estate",
                  "Real Estate Investment Trust",
                  "Gold exploration",
                  "Pre-developed Land (US)",
                  "Private Equity",
                  "Fixed Income",
                  "Fixed Income + Profit Share",
                  "Fine Art",
                  "Wine",
                  "Media – Film and Television",
                  "Other",
                ].map((item, index) => (
                  <FormItem
                    key={"investment" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className="font-normal">{item}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  // ✅ Step 5
  const renderStep5 = () => (
    <div className="flex flex-wrap items-start -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="investmentProducts"
        render={({ field }) => (
          <FormItem className="w-full mt-[10px] xl:mt-[15px] 2xl:mt-[20px]">
            <FormLabel className={"sr-only"}>
              You be ready to invest?*
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className={inputStyle}>
                  <SelectValue placeholder="You be ready to invest?*" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1">Ready to invest 1</SelectItem>
                <SelectItem value="2">Ready to invest 2</SelectItem>
                <SelectItem value="3">Ready to invest 3</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="investmentProducts"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className={labelStyle}>
              What is the maximum time period you are prepared to lock up your
              capital for?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-x-10 gap-y-5"
              >
                {[
                  "Short-term (1-3 years)",
                  "Medium-term (3-5 years)",
                  "Long-term (5+ years)",
                ].map((item, index) => (
                  <FormItem
                    key={"investment" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className="font-normal">{item}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
  // ✅ Step 6
  const renderStep6 = () => (
    <div className="flex flex-wrap items-start -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="investmentProducts"
        render={({ field }) => (
          <FormItem className="w-full mt-[10px] xl:mt-[15px] 2xl:mt-[20px]">
            <FormLabel className={"sr-only"}>
              You be ready to invest?*
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className={inputStyle}>
                  <SelectValue placeholder="You be ready to invest?*" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="1">Ready to invest 1</SelectItem>
                <SelectItem value="2">Ready to invest 2</SelectItem>
                <SelectItem value="3">Ready to invest 3</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="investmentProducts"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className={labelStyle}>
              What is the maximum time period you are prepared to lock up your
              capital for?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-x-10 gap-y-5"
              >
                {[
                  "Short-term (1-3 years)",
                  "Medium-term (3-5 years)",
                  "Long-term (5+ years)",
                ].map((item, index) => (
                  <FormItem
                    key={"investment" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className="font-normal">{item}</FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  // const renderStep5 = () => (
  //   <div className="space-y-6">
  //     {/* Review Section */}
  //     <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-800">
  //       <h3 className="text-white text-lg font-semibold mb-4">
  //         Review Your Information
  //       </h3>
  //       <div className="space-y-3 text-sm">
  //         <div className="grid grid-cols-2 gap-4">
  //           <div>
  //             <span className="text-gray-400">Name:</span>
  //             <span className="text-white ml-2">{form.watch("fullName")}</span>
  //           </div>
  //           <div>
  //             <span className="text-gray-400">Email:</span>
  //             <span className="text-white ml-2">{form.watch("email")}</span>
  //           </div>
  //           <div>
  //             <span className="text-gray-400">Phone:</span>
  //             <span className="text-white ml-2">{form.watch("phone")}</span>
  //           </div>
  //           <div>
  //             <span className="text-gray-400">Service:</span>
  //             <span className="text-white ml-2 capitalize">
  //               {form.watch("serviceType")}
  //             </span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Terms and Conditions */}
  //     <FormField
  //       control={form.control}
  //       name="terms"
  //       render={({ field }) => (
  //         <FormItem className="flex flex-row items-start space-x-3 space-y-0">
  //           <FormControl>
  //             <Checkbox
  //               checked={field.value}
  //               onCheckedChange={field.onChange}
  //             />
  //           </FormControl>
  //           <div className="space-y-1 leading-none">
  //             <FormLabel className="text-white cursor-pointer">
  //               I accept the terms and conditions*
  //             </FormLabel>
  //           </div>
  //           <FormMessage />
  //         </FormItem>
  //       )}
  //     />

  //     <FormField
  //       control={form.control}
  //       name="newsletter"
  //       render={({ field }) => (
  //         <FormItem className="flex flex-row items-start space-x-3 space-y-0">
  //           <FormControl>
  //             <Checkbox
  //               checked={field.value}
  //               onCheckedChange={field.onChange}
  //             />
  //           </FormControl>
  //           <div className="space-y-1 leading-none">
  //             <FormLabel className="text-white cursor-pointer">
  //               Subscribe to newsletter for updates
  //             </FormLabel>
  //           </div>
  //         </FormItem>
  //       )}
  //     />
  //   </div>
  // );

  // ✅ Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="w-full h-auto p-[50px_60px] bg-[#fffbf4]">
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-black">Application Form</h2>
          <span className="text-sm text-gray-400">
            Step {currentStep} of {totalSteps}
          </span>
        </div>

        <Progress value={progress} className="w-full h-2 mb-4" />

        {/* <div className="flex items-center justify-between">
          {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  completedSteps.has(step)
                    ? "bg-green-600 text-white"
                    : step === currentStep
                    ? "bg-blue-600 text-white"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {completedSteps.has(step) ? (
                  <Check className="w-4 h-4" />
                ) : (
                  step
                )}
              </div>
              {step < totalSteps && (
                <div
                  className={`h-0.5 w-12 md:w-24 ${
                    completedSteps.has(step) ? "bg-green-600" : "bg-gray-600"
                  }`}
                />
              )}
            </div>
          ))}
        </div> */}

        <h3 className="text-xl font-semibold text-black mt-4">
          {stepTitles[currentStep]}
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Step Content with Animation */}
          <AnimatePresence mode="wait" custom={currentStep}>
            <motion.div
              key={currentStep}
              custom={currentStep}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 ">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="text-black flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            {currentStep < totalSteps ? (
              // <Button
              //   type="button"
              //   onClick={handleNext}
              //   className="flex items-center space-x-2"
              // >
              //   <span>Next</span>
              //   <ChevronRight className="w-4 h-4" />
              // </Button>
              <Button
                type="button"
                onClick={handleNext}
                variant="outline"
                className={
                  "text-[#1c1c1c] border-[#1c1c1c] max-w-[120px] xl:max-w-[120px] 2xl:max-w-[140px]"
                }
                animate={false}
              >
                Next
                <Image
                  src="/icons/brand-icon-black.svg"
                  alt="brand icon"
                  width={20}
                  height={20}
                  unoptimized
                  className="w-[12px] xl:w-[16px] 2xl:w-[18px]"
                />
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
              >
                <span>Submit Application</span>
                <Image
                  src="/icons/brand-icon.svg"
                  alt="brand icon"
                  width={20}
                  height={20}
                  unoptimized
                  className="w-[12px] xl:w-[16px] 2xl:w-[18px]"
                />
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
