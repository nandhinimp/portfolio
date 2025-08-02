import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nandhini - Full-Stack Developer Portfolio",
  description:
    "Passionate full-stack developer crafting digital experiences with cutting-edge technology. Specializing in MERN stack, AI integration, and modern web applications.",
  keywords:
    "full-stack developer, React, Node.js, MongoDB, JavaScript, Python, Java, web development, portfolio, Framer Motion, Tailwind CSS",
  authors: [{ name: "Nandhini" }],
  creator: "Nandhini",
  publisher: "Nandhini",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nandhini-portfolio.vercel.app"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nandhini - Full-Stack Developer Portfolio",
    description: "Passionate full-stack developer crafting digital experiences with cutting-edge technology.",
    url: "https://nandhini-portfolio.vercel.app", // Replace with your actual domain
    siteName: "Nandhini Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Nandhini - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandhini - Full-Stack Developer Portfolio",
    description: "Passionate full-stack developer crafting digital experiences with cutting-edge technology.",
    images: ["/og-image.jpg"], // Ensure this image exists in your public folder
    creator: "@nandhini", // Replace with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}