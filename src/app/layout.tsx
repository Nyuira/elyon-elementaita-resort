import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RESORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default:  `${RESORT.name} | ${RESORT.tagline}`,
    template: `%s | ${RESORT.name}`,
  },
  description: RESORT.description,
  keywords: [
    "Elyon Elementaita Resort",
    "Lake Elementaita hotel",
    "Rift Valley resort Kenya",
    "luxury lodge Naivasha",
    "flamingo lake Kenya",
    "UNESCO heritage hotel Kenya",
    "Nakuru resort",
  ],
  openGraph: {
    type:        "website",
    locale:      "en_KE",
    siteName:    RESORT.name,
    title:       `${RESORT.name} | ${RESORT.tagline}`,
    description: RESORT.description,
    images: [
      {
        url:    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1200&q=80",
        width:  1200,
        height: 630,
        alt:    "Elyon Elementaita Resort — Lake Elementaita at sunrise",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       RESORT.name,
    description: RESORT.description,
  },
  robots: {
    index:  true,
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
