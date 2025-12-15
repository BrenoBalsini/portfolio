import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breno Balsini | Frontend Engineer - React & TypeScript Specialist",
  description: "Product-focused Frontend Engineer with expertise in React, TypeScript, and Next.js. Specializing in B2B SaaS solutions, performance optimization, and clean architecture.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Web Development",
    "B2B SaaS",
    "Breno Balsini"
  ],
  authors: [{ name: "Breno Balsini" }],
  creator: "Breno Balsini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brenobalsini.dev",
    title: "Breno Balsini | Frontend Engineer",
    description: "Product-focused Frontend Engineer specializing in React, TypeScript, and Next.js",
    siteName: "Breno Balsini Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breno Balsini | Frontend Engineer",
    description: "Product-focused Frontend Engineer specializing in React, TypeScript, and Next.js",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
