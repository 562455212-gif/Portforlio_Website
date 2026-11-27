"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SiteFrame } from "@/components/site-frame";

export function ComingSoon() {
  const reduce = useReducedMotion();

  return (
    <SiteFrame activeId="work">
      <motion.section
        className="flex min-h-[68vh] flex-col justify-end border-b border-line py-16"
        initial={reduce ? false : { y: 16 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs tracking-[0.22em] text-seal">TradeMate AI</p>
        <h1 className="mt-4 font-serif text-6xl font-semibold leading-none sm:text-8xl">敬请期待</h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-muted">
          这则作品目前只保留封面入口。功能、界面和结果都还没有公开。
        </p>
        <Link href="/#work" className="mt-10 inline-flex text-sm tracking-widest hover:text-seal">
          ← 返回作品
        </Link>
      </motion.section>
    </SiteFrame>
  );
}
