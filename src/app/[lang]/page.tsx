import Image from "next/image";
import { CopyButton } from "@/components/copy-button";
import { content, type Lang } from "@/content/portfolio";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const safeLang: Lang = lang === "en" ? "en" : "ko";
  const c = content[safeLang];

  const experienceHighlightsLabel = safeLang === "en" ? "Focus highlights" : "하이라이트";
  const experienceDetailsLabel = safeLang === "en" ? "Detailed experience" : "상세 경력";

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <div className="shrink-0">
            <Image
              src="/mj.png"
              alt="Profile photo"
              width={112}
              height={140}
              priority
              className="h-28 w-28 rounded-xl border border-zinc-200 object-cover dark:border-zinc-800 sm:h-32 sm:w-32"
            />
          </div>

          <div className="min-w-0 space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {c.name}
            </h1>
            <p className="text-lg text-zinc-700 dark:text-zinc-100">{c.role}</p>
            <div className="flex flex-wrap items-center gap-x-3 text-sm text-zinc-600 dark:text-zinc-400">
              {c.location ? <span>{c.location}</span> : null}
              {c.personal?.cell ? (
                <>
                  <span className="hidden sm:inline">·</span>
                  <span>Cell: {c.personal.cell}</span>
                </>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {c.links.find((l) => l.href.startsWith("mailto:")) ? (
                <CopyButton
                  label={safeLang === "en" ? "Email" : "이메일"}
                  value={c.links.find((l) => l.href.startsWith("mailto:"))!.href.replace("mailto:", "")}
                />
              ) : null}
              {c.personal?.cell ? (
                <CopyButton
                  label={safeLang === "en" ? "Phone" : "전화번호"}
                  value={c.personal.cell}
                />
              ) : null}
            </div>
          </div>
        </div>

        <p className="max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
          {c.summary}
        </p>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          {c.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-white"
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="group/section space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {c.sections.experienceTitle}
        </h2>

        {c.experienceHighlights?.length ? (
          <div className="space-y-4">
            <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {experienceHighlightsLabel}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.experienceHighlights.map((h) => (
                <div
                  key={h.title}
                  className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                >
                  <div className="font-semibold text-zinc-900 dark:text-white">{h.title}</div>
                  {h.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {h.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {h.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="space-y-4 pt-4">
          <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {experienceDetailsLabel}
          </div>
          <div className="space-y-6">
            {c.experience.map((e) => (
              <div
                key={`${e.company}-${e.period}`}
                className="group relative flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <div className="text-lg font-bold text-zinc-900 dark:text-white">{e.company}</div>
                    <div className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                      {e.title}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {e.period}
                  </div>
                </div>

                {e.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="group/section space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {c.sections.projectsTitle}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.projects.map((p) => (
            <div
              key={p.name}
              className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              <div className="text-lg font-bold text-zinc-900 dark:text-white">{p.name}</div>
              <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {p.oneLiner}
              </div>
              {p.bullets?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
              {p.links?.length ? (
                <div className="mt-auto pt-4 flex flex-wrap gap-3 text-sm font-medium">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-900 hover:decoration-zinc-600 dark:text-zinc-400 dark:decoration-zinc-600 dark:hover:text-white dark:hover:decoration-zinc-400"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {c.education?.length ? (
        <section id="education" className="space-y-6 scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {c.sections.educationTitle}
          </h2>
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {c.education.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section id="contact" className="space-y-6 scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          {c.sections.contactTitle}
        </h2>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="text-lg font-semibold text-zinc-900 dark:text-white">
            {c.contact.headline}
          </div>
          <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-300">
            {c.contact.body}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {c.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-white"
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
