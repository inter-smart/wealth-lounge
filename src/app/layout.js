// app/layout.tsx
import { Roboto_Flex } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FloatingMenu from "@/components/layout/floating-menu";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

// Local BrownedeCalvin font configuration
const brownedeCalvin = localFont({
  src: [
    {
      path: "../../public/fonts/BrownedeCalvin-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/BrownedeCalvin-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/BrownedeCalvin-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/BrownedeCalvin-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BrownedeCalvin-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/BrownedeCalvin-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/BrownedeCalvin-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-brownede-calvin",
});

export const metadata = {
  title: "The Wealth Lounge",
  description: "The Wealth Lounge description.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robotoFlex.variable} ${brownedeCalvin.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <FloatingMenu /> */}
      </body>
    </html>
  );
}
