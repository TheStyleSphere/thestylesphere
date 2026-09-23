import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Header from "@/components/layout/Header";
import BiggerPicture from "@/components/sections/BiggerPicture";
import Gaps from "@/components/sections/Gaps";
import WhyStyleSphere from "@/components/sections/WhyStyleSphere";
import Individuals from "@/components/sections/Individuals";
import Organisations from "@/components/sections/Organisations";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";
import { HeroCTA } from "@/components/sections/HeroCTA";
import { AboutSukanya } from "@/components/sections/AboutSukanya";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.thestylesphere.me/#business",
      name: "Style Sphere",
      description:
        "Style Sphere provides personal image, professional presence, communication, and soft skills development for individuals and organisations across India.",
      url: "https://www.thestylesphere.me",
      provider: {
        "@id": "https://www.thestylesphere.me/#person",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: [
        "Personal Image & Presence",
        "Professional Development",
        "Soft Skills Training",
        "Training & Workshops",
      ],
    },

    {
      "@type": "Person",
      "@id": "https://www.thestylesphere.me/#person",
      name: "Sukanya Saha",
      jobTitle: "Soft Skills & Professional Development",
      url: "https://www.thestylesphere.me",
    },

    {
      "@type": "WebSite",
      "@id": "https:/www.thestylesphere.me/#website",
      url: "https://www.thestylesphere.me",
      name: "Style Sphere",
      publisher: {
        "@id": "https://www.thestylesphere.me/#person",
      },
    },

    {
      "@type": "Service",
      "@id": "https://www.thestylesphere.me/#individual-details",
      name: "Personal Image & Presence",
      description:
        "Personalised development focused on personal style, grooming, body language, presence, communication, and self-presentation.",
      provider: {
        "@id": "https://www.thestylesphere.me/#business",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },

    {
      "@type": "Service",
      "@id": "https://www.thestylesphere.me/#organisation-details",
      name: "Training & Workshops",
      description:
        "Practical programmes for organisations focused on communication, interpersonal skills, professional presence, body language, and self-presentation.",
      provider: {
        "@id": "https://www.thestylesphere.me/#business",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HeroCTA />
      <AboutSukanya />
      <ServicesPreview />
      <BiggerPicture />
      <Gaps />
      <WhyStyleSphere />
      <Individuals />
      <Organisations />
      <FinalCTA />
      <Footer />
    </main>
  </>
  );
}
