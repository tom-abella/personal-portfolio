import { Geist, Geist_Mono } from "next/font/google";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Leonard Abella | Software Developer",
    description:
      "Front-End Developer specializing in React, Next.js, and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
