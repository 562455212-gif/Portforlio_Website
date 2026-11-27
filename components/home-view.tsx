"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { pending, personName, principles, sections } from "@/lib/content";
import { SiteFrame } from "@/components/site-frame";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeView() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const rise = reduce
    ? {}
    : {
        initial: { y: 14 },
        whileInView: { y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.55, ease },
      };

  return (
    <SiteFrame activeId={activeId}>
      <section id="opening" className="grid gap-10 border-b border-line py-16 md:grid-cols-[1.4fr_0.7fr] md:py-24">
        <div>
          <motion.p
            className="mb-4 text-xs tracking-[0.22em] text-seal"
            initial={reduce ? false : { y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            01 · 开场
          </motion.p>
          <motion.h1
            className="font-serif text-5xl font-semibold leading-none tracking-tight sm:text-7xl"
            initial={reduce ? false : { y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            {personName}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-muted"
            initial={reduce ? false : { y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, delay: reduce ? 0 : 0.08, ease }}
          >
            中文个人作品集，六个板块。目前可以点开的作品只有 TradeMate AI 的封面；项目正文、个人简介、经历和联系方式都还没有写上。
          </motion.p>
        </div>
        <motion.dl
          className="grid content-end grid-cols-[5rem_1fr] gap-x-4 gap-y-3 self-end border-t border-ink pt-5 text-sm"
          {...rise}
        >
          <dt className="text-muted">姓名</dt>
          <dd>{personName}</dd>
          <dt className="text-muted">作品</dt>
          <dd>TradeMate AI</dd>
          <dt className="text-muted">状态</dt>
          <dd>封面入口</dd>
          <dt className="text-muted">联系</dt>
          <dd>{pending}</dd>
        </motion.dl>
      </section>

      <motion.section id="about" className="border-b border-line py-16 md:py-20" {...rise}>
        <SectionLabel index="02" label="关于" />
        <div className="grid gap-8 md:grid-cols-2">
          <h2 className="font-serif text-4xl font-semibold">关于</h2>
          <div className="max-w-xl text-base leading-8 text-muted">
            <p>
              {personName}。这个站点按六个板块组织：开场、关于、作品、方法、经历、联系。
            </p>
            <p className="mt-4">个人简介 {pending}</p>
          </div>
        </div>
      </motion.section>

      <motion.section id="work" className="border-b border-line py-16 md:py-20" {...rise}>
        <SectionLabel index="03" label="作品" />
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl font-semibold">作品</h2>
          <p className="text-sm text-muted">只放封面</p>
        </div>
        <motion.div whileHover={reduce ? undefined : { y: -3 }} transition={{ duration: 0.25 }}>
        <Link
          href="/projects/trademate"
          className="group grid border border-ink bg-paper-2 transition-colors hover:border-seal md:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex min-h-72 flex-col justify-between p-6 sm:p-8">
            <p className="text-xs tracking-[0.18em] text-seal">封面入口</p>
            <div>
              <p className="font-serif text-5xl font-semibold leading-none sm:text-6xl">TradeMate</p>
              <p className="mt-3 font-serif text-3xl text-seal">AI</p>
            </div>
          </div>
          <div className="flex flex-col justify-between border-t border-line p-6 sm:p-8 md:border-l md:border-t-0">
            <p className="max-w-sm leading-8 text-muted">
              项目页只说明尚未公开。这里不放功能介绍、界面或结果数字。
            </p>
            <p className="mt-10 text-sm tracking-widest group-hover:text-seal">进入项目 →</p>
          </div>
        </Link>
        </motion.div>
      </motion.section>

      <motion.section id="method" className="border-b border-line py-16 md:py-20" {...rise}>
        <SectionLabel index="04" label="方法" />
        <h2 className="mb-8 font-serif text-4xl font-semibold">方法</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((item, index) => (
            <article key={item.title} className="border-t border-ink pt-4">
              <p className="text-xs tracking-[0.18em] text-muted">0{index + 1}</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section id="experience" className="border-b border-line py-16 md:py-20" {...rise}>
        <SectionLabel index="05" label="经历" />
        <h2 className="mb-8 font-serif text-4xl font-semibold">经历</h2>
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-ink text-muted">
              <th className="py-3 pr-4 font-medium">时间</th>
              <th className="py-3 pr-4 font-medium">事项</th>
              <th className="py-3 font-medium">说明</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-line">
              <td className="py-4 pr-4">{pending}</td>
              <td className="py-4 pr-4">{pending}</td>
              <td className="py-4 text-muted">教育、工作与项目经历尚未写入。</td>
            </tr>
          </tbody>
        </table>
      </motion.section>

      <motion.section id="contact" className="py-16 md:py-20" {...rise}>
        <SectionLabel index="06" label="联系" />
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-serif text-4xl font-semibold">联系</h2>
          <dl className="grid grid-cols-[6rem_1fr] gap-y-4 border-t border-ink pt-4 text-sm">
            <dt className="text-muted">邮箱</dt>
            <dd>{pending}</dd>
            <dt className="text-muted">电话</dt>
            <dd>{pending}</dd>
            <dt className="text-muted">其他</dt>
            <dd>{pending}</dd>
          </dl>
        </div>
      </motion.section>
    </SiteFrame>
  );
}

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <p className="mb-4 text-xs tracking-[0.22em] text-seal">
      {index} · {label}
    </p>
  );
}
