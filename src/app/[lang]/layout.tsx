import Link from "next/link";
import type { Lang } from "@/content/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const safeLang: Lang = lang === "en" ? "en" : "ko";
  const other: Lang = safeLang === "en" ? "ko" : "en";

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-background/80 backdrop-blur dark:border-zinc-800/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center justify-between">
            <Link href={`/${safeLang}`} className="font-semibold tracking-tight">
              MJ
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <Link
              href={`/${safeLang}#experience`}
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              {safeLang === "en" ? "Experience" : "경력"}
            </Link>
            <Link
              href={`/${safeLang}#projects`}
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              {safeLang === "en" ? "Projects" : "프로젝트"}
            </Link>
            <Link
              href={`/${safeLang}#contact`}
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              {safeLang === "en" ? "Contact" : "연락처"}
            </Link>

            <span className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />

            <ThemeToggle />

            <Link
              href={`/${other}`}
              className="rounded-md border border-zinc-200 px-2 py-1 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              {other.toUpperCase()}
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">{children}</main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-zinc-500 dark:text-zinc-400 sm:px-6">
          © {new Date().getFullYear()} MJ
        </div>
      </footer>
    </div>
  );
}

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ko" }];
}
