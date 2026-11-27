import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans-sc",
  display: "swap",
});

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "赵榕 · AI 产品作品集",
    template: "%s · 赵榕",
  },
  description: "赵榕的中文个人作品集。六个板块；TradeMate AI 目前只开放封面入口。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
