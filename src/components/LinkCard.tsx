import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  // mailto: 같은 내부 스킴은 새 탭으로 열지 않는다.
  const isExternal = link.url.startsWith("http");

  return (
    <a
      href={link.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 active:translate-y-0 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
    >
      {link.icon && (
        <span aria-hidden="true" className="text-xl">
          {link.icon}
        </span>
      )}

      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-slate-900 dark:text-slate-50">
          {link.title}
        </span>
        {link.description && (
          <span className="block truncate text-sm text-slate-500 dark:text-slate-400">
            {link.description}
          </span>
        )}
      </span>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </a>
  );
}
