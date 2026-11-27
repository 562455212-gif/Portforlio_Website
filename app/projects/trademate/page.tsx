import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";

export const metadata: Metadata = {
  title: "TradeMate AI",
  description: "TradeMate AI 敬请期待。项目正文尚未公开。",
};

export default function TradeMatePage() {
  return <ComingSoon />;
}
