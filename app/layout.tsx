import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveBackground from "@/components/ResponsiveBackground";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f8fafc",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yashanshrastogi.netlify.app"),
  title: "Yashansh Rastogi | Software Engineer",
  description:
    "I build things that actually work. B.Tech CS student shipping full-stack and AI-powered software.",
  keywords: [
    "Yashansh Rastogi",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Yashansh Rastogi" }],
  openGraph: {
    type: "website",
    title: "Yashansh Rastogi — Software Engineer, Builder, Problem Solver",
    description:
      "I build things that actually work. B.Tech CS student shipping full-stack and AI-powered software.",
    images: [{ url: "/images/yashansh.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashansh Rastogi — Software Engineer, Builder, Problem Solver",
    description:
      "I build things that actually work. B.Tech CS student shipping full-stack and AI-powered software.",
    images: ["/images/yashansh.jpg"],
  },
};

import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <ResponsiveBackground />
        <CursorGlow />
        <ScrollProgress />
        <div className="relative z-10">{children}</div>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
