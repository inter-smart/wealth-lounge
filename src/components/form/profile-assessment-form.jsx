"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { Heading } from "../utils/heading";
import parse from "html-react-parser";
import { Text } from "../utils/text";

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
  age: z
    .string()
    .min(1, "Age is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0 && Number(val) < 120,
      {
        message: "Please enter a valid age",
      }
    ),
  occupation: z.string().min(2, "Occupation is required"),

  // Step 2: Risk Assessment
  riskComfort: z.string().min(1, "Please select your risk comfort level"),

  // Step 3: Investment Experience
  investedBefore: z
    .string()
    .min(1, "Please specify if you have invested before"),
  investmentExperience: z.string().optional(),
  investmentProducts: z.string().min(1, "Please select investment products"),

  // Step 4: Investment Products Interest
  productInterest: z
    .string()
    .min(1, "Please select investment products of interest"),

  // Step 5: Investment Timeline
  readyToInvest: z
    .string()
    .min(1, "Please specify when you'll be ready to invest"),
  maximumPeriod: z.string().min(1, "Please select maximum lock-up period"),

  // Step 6: Contact & Additional Info
  annualIncome: z.string().min(1, "Please select your annual income range"),
  communication: z
    .string()
    .min(1, "Please select preferred communication method"),
  mostConvenient: z.string().min(2, "Please specify convenient time"),
  additionalComments: z.string().optional(),
});

// ✅ Individual step schemas for validation
const stepSchemas = {
  1: formSchema.pick({
    fullName: true,
    email: true,
    phone: true,
    age: true,
    occupation: true,
  }),
  2: formSchema.pick({
    riskComfort: true,
  }),
  3: formSchema.pick({
    investedBefore: true,
    investmentExperience: true,
    investmentProducts: true,
  }),
  4: formSchema.pick({
    productInterest: true,
  }),
  5: formSchema.pick({
    readyToInvest: true,
    maximumPeriod: true,
  }),
  6: formSchema.pick({
    annualIncome: true,
    communication: true,
    mostConvenient: true,
    additionalComments: true,
  }),
};

// ✅ Shared styles
const labelStyle = `
  text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-black mb-[5px] xl:mb-[10px] 2xl:mb-[15px]
`
  .replace(/\s+/g, " ")
  .trim();

const radioLabelStyle = `
  text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-black
`
  .replace(/\s+/g, " ")
  .trim();

const inputStyle = `
  text-[10px] sm:text-[10px] xl:text-[12px] 2xl:text-[12px] 3xl:text-[16px] leading-none font-medium text-black data-[placeholder]:text-[#1c1c1c]/80 placeholder:text-[#1c1c1c]/80 w-full h-[30px] 2xl:h-[35px] 3xl:h-[40px] bg-none border-transparent border-b-[#1c1c1c] shadow-none px-0 
  focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-transparent focus-visible:border-b-primary
  selection:bg-primary-800 appearance-none
`
  .replace(/\s+/g, " ")
  .trim();

const textareaStyle = `
  ${inputStyle}
`
  .replace(/\s+/g, " ")
  .trim();

export default function MultiStepApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const totalSteps = 6;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: "",
      occupation: "",
      riskComfort: "",
      investedBefore: "",
      investmentExperience: "",
      investmentProducts: "",
      productInterest: "",
      readyToInvest: "",
      maximumPeriod: "",
      annualIncome: "",
      communication: "",
      mostConvenient: "",
      additionalComments: "",
    },
    mode: "onChange",
  });

  // ✅ Step titles
  const stepTitles = {
    1: "Personal Information",
    2: "Risk Tolerance",
    3: "Investment Experience",
    4: "Investment Preferences",
    5: "Time Horizon",
    6: "Contact & Review",
  };
  // ✅ Step description
  const stepDescription = {
    1: "",
    2: "",
    3: "",
    4: "<p>The following list covers the range of investment products that we offer.</p>",
    5: "",
    6: "",
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

  // Handle previous step
  const handlePrevious = () => {
    if (currentStep > 1) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep); // Optionally remove the step you're leaving from the completed set

      setCompletedSteps((prev) => {
        const newCompleted = new Set(prev);
        newCompleted.delete(currentStep); // Remove the current step from the set
        return newCompleted;
      });
    }
  };

  // Handle next step (the logic is sound here, just adding context)
  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCompletedSteps((prev) => new Set([...prev, currentStep]));
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  // Recalculate progress based on the updated state
  // The progress logic needs to be simplified to always check against the current state
  const progress = Math.min(
    100,
    ((completedSteps.size + (form.formState.isValid ? 1 : 0)) / totalSteps) *
      100
  );

  // ✅ Handle final form submission
  const onSubmit = async (values) => {
    console.log("Final form submission:", values);
    // Handle your form submission logic here
    alert("Application submitted successfully!");
  };

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

  // ✅ Step 1: Personal Information
  const renderStep1 = () => (
    <div className="flex flex-wrap -mx-4 [&>*]:p-4">
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

  // ✅ Step 2: Risk Assessment
  const renderStep2 = () => (
    <div className="flex flex-wrap -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="riskComfort"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className={labelStyle}>
              How comfortable are you with investment risk?*
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-x-5 gap-y-5"
              >
                {[
                  "Very conservative",
                  "Conservative",
                  "Moderately Conservative",
                  "Balanced",
                  "Moderately Aggressive",
                  "Aggressive",
                ].map((item, index) => (
                  <FormItem
                    key={"riskComfort" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className={radioLabelStyle}>{item}</FormLabel>
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

  // ✅ Step 3: Investment Experience
  const renderStep3 = () => (
    <div className="flex flex-wrap -mx-4 [&>*]:p-4">
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
                className="flex flex-wrap gap-x-5 gap-y-5"
              >
                {["Yes", "No"].map((item, index) => (
                  <FormItem
                    key={"investedBefore" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className={radioLabelStyle}>{item}</FormLabel>
                  </FormItem>
                ))}
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
              If yes, how would you describe your investment experience?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-wrap gap-x-5 gap-y-5"
              >
                {["Beginner", "Intermediate", "Advanced"].map((item, index) => (
                  <FormItem
                    key={"investmentExperience" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className={radioLabelStyle}>{item}</FormLabel>
                  </FormItem>
                ))}
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
            <FormLabel className="sr-only">
              Investment products interest
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger size="none" className={inputStyle}>
                  <SelectValue placeholder="Which investment products interest you most?*" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="stocks">Stocks & Equities</SelectItem>
                <SelectItem value="bonds">Bonds & Fixed Income</SelectItem>
                <SelectItem value="reits">
                  Real Estate Investment Trusts
                </SelectItem>
                <SelectItem value="mutual-funds">Mutual Funds</SelectItem>
                <SelectItem value="etfs">Exchange Traded Funds</SelectItem>
                <SelectItem value="alternatives">
                  Alternative Investments
                </SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  // ✅ Step 4: Investment Products Interest
  const renderStep4 = () => (
    <div className="flex flex-wrap -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="productInterest"
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
                className="flex flex-wrap gap-x-5 gap-y-5"
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
                    key={"productInterest" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className={radioLabelStyle}>{item}</FormLabel>
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

  // ✅ Step 5: Investment Timeline
  const renderStep5 = () => (
    <div className="flex flex-wrap -mx-4 [&>*]:p-4">
      <FormField
        control={form.control}
        name="readyToInvest"
        render={({ field }) => (
          <FormItem className="w-full mt-[10px] xl:mt-[15px] 2xl:mt-[20px]">
            <FormLabel className="sr-only">Ready to invest timeline</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger size="none" className={inputStyle}>
                  <SelectValue placeholder="What date will you be ready to invest?*" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="immediately">Immediately</SelectItem>
                <SelectItem value="1-3months">Within 1-3 months</SelectItem>
                <SelectItem value="3-6months">Within 3-6 months</SelectItem>
                <SelectItem value="6-12months">Within 6-12 months</SelectItem>
                <SelectItem value="1year+">More than 1 year</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="maximumPeriod"
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
                className="flex flex-wrap gap-x-5 gap-y-5"
              >
                {[
                  "Short-term (1-3 years)",
                  "Medium-term (3-5 years)",
                  "Long-term (5+ years)",
                ].map((item, index) => (
                  <FormItem
                    key={"maximumPeriod" + index}
                    className="flex items-center gap-2"
                  >
                    <FormControl>
                      <RadioGroupItem value={item.toLowerCase().trim()} />
                    </FormControl>
                    <FormLabel className={radioLabelStyle}>{item}</FormLabel>
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

  // ✅ Step 6: Contact & Review
  const renderStep6 = () => (
    <>
      <div className="flex flex-wrap -mx-4 [&>*]:p-4">
        <FormField
          control={form.control}
          name="annualIncome"
          render={({ field }) => (
            <FormItem className="w-full mt-[10px] xl:mt-[15px] 2xl:mt-[20px]">
              <FormLabel className="sr-only">Annual income</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger size="none" className={inputStyle}>
                    <SelectValue placeholder="What is your annual income?*" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="under-50k">Under $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                  <SelectItem value="200k-500k">$200,000 - $500,000</SelectItem>
                  <SelectItem value="500k+">$500,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="communication"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className={labelStyle}>
                Preferred Method of Communication?*
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-wrap gap-x-5 gap-y-5"
                >
                  {["Email", "Phone"].map((item, index) => (
                    <FormItem
                      key={"communication" + index}
                      className="flex items-center gap-2"
                    >
                      <FormControl>
                        <RadioGroupItem value={item.toLowerCase().trim()} />
                      </FormControl>
                      <FormLabel className={radioLabelStyle}>{item}</FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mostConvenient"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Convenient time</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Is there a specific time or day that is most convenient for us to reach out to you?*"
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
          name="additionalComments"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Additional comments</FormLabel>
              <FormControl>
                <Textarea
                  className={textareaStyle}
                  placeholder="Additional Comments or Questions"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Review Section */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-6">
        <h3 className="text-black text-lg font-semibold mb-4">
          Review Your Information
        </h3>
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-gray-600">Name:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("fullName") || "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Email:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("email") || "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Phone:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("phone") || "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Age:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("age") || "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Occupation:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("occupation") || "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Risk Level:</span>
              <span className="text-black ml-2 font-medium capitalize">
                {form.watch("riskComfort")?.replace(/[-_]/g, " ") ||
                  "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Investment Experience:</span>
              <span className="text-black ml-2 font-medium capitalize">
                {form.watch("investedBefore") || "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Product Interest:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("productInterest")?.replace(/[-_]/g, " ") ||
                  "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Investment Timeline:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("readyToInvest")?.replace(/[-_]/g, " ") ||
                  "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Lock-up Period:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("maximumPeriod")?.replace(/[-_]/g, " ") ||
                  "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Annual Income:</span>
              <span className="text-black ml-2 font-medium">
                {form.watch("annualIncome")?.replace(/[-_]/g, " ") ||
                  "Not provided"}
              </span>
            </div>
            <div>
              <span className="text-gray-600">Communication:</span>
              <span className="text-black ml-2 font-medium capitalize">
                {form.watch("communication") || "Not provided"}
              </span>
            </div>
            {form.watch("additionalComments") && (
              <div className="md:col-span-2">
                <span className="text-gray-600">Additional Comments:</span>
                <p className="text-black ml-2 font-medium">
                  {form.watch("additionalComments")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

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
      case 6:
        return renderStep6();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="w-full h-auto p-[20px_15px] sm:p-[30px_30px] xl:p-[40px_35px] 2xl:p-[60px_60px] bg-[#fffbf4] overflow-hidden relative z-0">
      <Progress
        value={progress}
        className={`w-full h-1 rounded-0 absolute z-1 top-0 left-0 right-0 ${
          currentStep === 1 ? "opacity-50" : "opacity-100"
        }`}
      />
      <div className="w-full mb-[15px] sm:mb-[20px] xl:mb-[30px] 2xl:mb-[40px]">
        <Heading
          as="h6"
          size="none"
          className="text-[12px] sm:text-[11px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-tight font-normal font-brownede text-[#1c1c1c] mb-1"
        >
          Step {currentStep} of {totalSteps}
        </Heading>
        <Heading
          as="h2"
          size="none"
          className="text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[30px] leading-none font-extralight font-brownede text-primary mb-1 xl:mb-2"
        >
          {stepTitles[currentStep]}
        </Heading>
        <Text
          as="div"
          size="none"
          className="text-[12px] sm:text-[11px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] leading-normal font-medium text-[#1c1c1c] mb-1"
        >
          {parse(stepDescription[currentStep])}
        </Text>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
          <div className="flex justify-between items-center mt-6">
            <Button
              type="button"
              variant="link"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`text-black !no-underline ${
                currentStep > 1 ? "visible" : "invisible pointer-events-none"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </Button>

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={handleNext}
                variant="outline"
                className="text-[#1c1c1c] border-[#1c1c1c] min-w-[100px] sm:min-w-[120px] xl:min-w-[120px] 2xl:min-w-[140px]"
                animate={true}
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
                type="button"
                onClick={async () => {
                  const isValid = await validateStep(currentStep);
                  if (isValid) {
                    const allFormData = form.getValues();
                    console.log("Final form submission:", allFormData);
                    alert("Application submitted successfully!");
                  }
                }}
                variant="outline"
                className="text-[#1c1c1c] border-[#1c1c1c] min-w-[100px] sm:min-w-[120px] xl:min-w-[120px] 2xl:min-w-[140px]"
                animate={true}
              >
                Submit
                <Image
                  src="/icons/brand-icon-black.svg"
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
