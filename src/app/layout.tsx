import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GoldSilverSelect — Find Trusted Precious Metals Dealers",
    template: "%s | GoldSilverSelect",
  },
  description:
    "Independent directory of precious metals dealers, Gold & Silver IRA custodians, recyclers, and jewelers. Transparent pricing, honest dealers, zero pressure.",
  keywords: [
    "gold dealers",
    "silver dealers",
    "coin shops near me",
    "bullion dealers",
    "gold IRA",
    "silver IRA",
    "precious metals directory",
    "buy gold",
    "buy silver",
    "junk silver",
    "gold coins",
    "silver coins",
    "precious metals recycling",
    "sell gold jewelry",
  ],
  openGraph: {
    title: "GoldSilverSelect — Find Trusted Precious Metals Dealers",
    description:
      "Independent directory of precious metals dealers, Gold & Silver IRA custodians, recyclers, and jewelers.",
    url: "https://goldsilverselect.com",
    siteName: "GoldSilverSelect",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-cream font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
