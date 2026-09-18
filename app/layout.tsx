import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingProvider from "@/components/BookingProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://sarahdmark.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SarahDMark | Digital Marketer & Social Media Specialist",
    template: "%s · SarahDMark",
  },
  description:
    "Expert Digital Marketer, SEO Specialist, and Content Creator offering Social Media Management, Lead Generation, and Brand Growth services.",
  keywords: [
    "Digital Marketing Specialist",
    "SEO Expert",
    "Social Media Manager",
    "SarahDMark",
    "Canva Designer",
  ],
  applicationName: "SarahDMark",
  authors: [{ name: "SarahDMark", url: SITE_URL }],
  creator: "SarahDMark",
  publisher: "SarahDMark",
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "SarahDMark",
    title: "SarahDMark | Digital Marketer & Social Media Specialist",
    description:
      "Expert Digital Marketer, SEO Specialist, and Content Creator offering Social Media Management, Lead Generation, and Brand Growth services.",
    images: [
      {
        url: "/sara_logo.png",
        width: 1024,
        height: 1024,
        alt: "SarahDMark — Digital Marketer & Social Media Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SarahDMark | Digital Marketer & Social Media Specialist",
    description:
      "Expert Digital Marketer, SEO Specialist, and Content Creator offering Social Media Management, Lead Generation, and Brand Growth services.",
    images: ["/sara_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Digital Marketing",
};

export const viewport: Viewport = {
  themeColor: "#0A192F",
  // (viewportFit stays default — avoids the fixed navbar sliding under the notch on iOS landscape)
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <BookingProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
