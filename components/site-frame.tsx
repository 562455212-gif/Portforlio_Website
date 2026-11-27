import Link from "next/link";
import { personName, sections } from "@/lib/content";

export function SiteFrame({
  children,
  activeId,
}: {
  children: React.ReactNode;
  activeId?: string;
}) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-6xl px-5 sm:px-8">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        跳到正文
      </a>
      <header className="flex flex-wrap items-end justify-between gap-4 border-b border-ink py-5">
        <Link href="/" className="font-serif text-lg tracking-wide">
          {personName}
        </Link>
        <nav aria-label="六个板块" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {sections.map((section) => {
            const current = activeId === section.id;
            return (
              <Link
                key={section.id}
                href={`/#${section.id}`}
                aria-current={current ? "true" : undefined}
                className={current ? "text-seal" : "text-ink hover:text-seal"}
              >
                <span className="mr-1 text-xs tracking-widest text-muted">{section.index}</span>
                {section.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main id="content">{children}</main>
      <footer className="flex flex-wrap items-end justify-between gap-4 border-t border-line py-8 text-sm text-muted">
        <p className="max-w-xl">未写明的个人信息保持【待补充】，页面上不补造经历、数据或联系方式。</p>
        <p>© 2026 {personName}</p>
      </footer>
    </div>
  );
}
