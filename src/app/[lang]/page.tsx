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
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              {c.name}
            </h1>
            <p className="text-zinc-700 dark:text-zinc-200">{c.role}</p>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              {c.location ? <span>{c.location}</span> : null}
              {c.personal?.cell ? <span className="ml-2">· Cell: {c.personal.cell}</span> : null}
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {c.links.find((l) => l.href.startsWith("mailto:")) ? (
                <CopyButton
                  label={safeLang === "en" ? "email" : "이메일"}
                  value={c.links.find((l) => l.href.startsWith("mailto:"))!.href.replace("mailto:", "")}
                />
              ) : null}
              {c.personal?.cell ? (
                <CopyButton
                  label={safeLang === "en" ? "phone" : "전화번호"}
                  value={c.personal.cell}
                />
              ) : null}
            </div>
          </div>
        </div>

        <p className="max-w-prose text-zinc-600 dark:text-zinc-300">{c.summary}</p>
        <div className="flex flex-wrap gap-3 pt-2 text-sm">
          {c.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      <section id="experience" className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{c.sections.experienceTitle}</h2>

        {c.experienceHighlights?.length ? (
          <div className="space-y-3">
            <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {experienceHighlightsLabel}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {c.experienceHighlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <div className="font-medium">{h.title}</div>
                  {h.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {h.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                    {h.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="space-y-3 pt-2">
          <div className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            {experienceDetailsLabel}
          </div>
          <div className="space-y-5">
            {c.experience.map((e) => (
              <div key={`${e.company}-${e.period}`} className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <div className="font-medium">{e.company}</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{e.title}</div>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-500">{e.period}</div>
                </div>

                {e.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="space-y-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{c.sections.projectsTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {c.projects.map((p) => (
            <div key={p.name} className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
              <div className="font-medium">{p.name}</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{p.oneLiner}</div>
              {p.bullets?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}
              {p.links?.length ? (
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="underline underline-offset-4"
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

      {/* Methods & Tools removed */}

      {c.education?.length ? (
        <section id="education" className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{c.sections.educationTitle}</h2>
          <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-200">
              {c.education.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section id="contact" className="space-y-3">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{c.sections.contactTitle}</h2>
        <div className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
          <div className="font-medium">{c.contact.headline}</div>
          <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">{c.contact.body}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {c.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md border border-zinc-200 px-3 py-1.5 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
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
