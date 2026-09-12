import type { Metadata } from "next";
import { DM_Sans, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const serif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tokyo · Fuji · Kyoto — family itinerary",
  description:
    "9-night Japan trip from Bangalore for 4 adults and an 18-month-old: Tokyo, Kawaguchiko, Kyoto. Shopping extra.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className={`${sans.variable} ${serif.variable} min-h-full font-sans antialiased grain`}>
        {children}
      </body>
    </html>
  );
}
