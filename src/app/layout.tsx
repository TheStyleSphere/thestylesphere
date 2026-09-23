import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import FloatingCTA from "@/components/layout/FloatingCTA";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thestylesphere.me"),

  title: {
    default: "Style Sphere | Personal Image & Professional Development",
    template: "%s | Style Sphere",
  },

  description:
    "Style Sphere helps individuals and organisations develop personal image, professional presence, communication, and practical soft skills.",

  keywords: [
    "personal image consulting",
    "professional presence",
    "soft skills training",
    "personal development",
    "image consulting",
    "professional development",
    "communication skills",
    "corporate training",
  ],

  authors: [{ name: "Sukanya Saha" }],

  openGraph: {
    title: "Style Sphere | Personal Image & Professional Development",
    description:
      "Personal image, professional presence, communication, and practical development for individuals and organisations.",
    url: "https://www.thestylesphere.me",
    siteName: "Style Sphere",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Style Sphere — Personal Image & Professional Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Style Sphere | Personal Image & Professional Development",
    description:
      "Personal image, professional presence, communication, and practical development.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerifDisplay.variable} antialiased`}
      >
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}