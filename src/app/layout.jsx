import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  title: "Tom Leonard Abella | Software Developer",
  description:
    "Software Developer specializing in React, Next.js, and Tailwind CSS. Building responsive web and mobile applications with clean, performant code.",
  keywords: [
    "Software Developer",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Web Developer",
    "Mobile Developer",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Tom Leonard Abella" }],
  openGraph: {
    title: "Tom Leonard Abella | Software Developer",
    description:
      "Software Developer specializing in React, Next.js, and Tailwind CSS.",
    url: "https://tomleonard-abella.vercel.app",
    siteName: "Tom Leonard Abella Portfolio",
    type: "website",
    images: [
      {
        url: "/mirror-selfie.jpg",
        width: 600,
        height: 600,
        alt: "Tom Leonard Abella",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tom Leonard Abella | Software Developer",
    description:
      "Front-End Developer specializing in React, Next.js, and Tailwind CSS.",
    images: ["/mirror-selfie.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/mirror-selfie.jpg`,
  email: `mailto:${siteConfig.email}`,
  worksFor: {
    "@type": "Organization",
    name: "XUREDEAL PTE. LTD.",
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
