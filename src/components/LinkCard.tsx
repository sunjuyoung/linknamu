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
      className="group flex items-center gap-3.5 rounded-3xl border border-white/70 bg-white/70 px-5 py-4 shadow-[0_8px_22px_-12px_rgba(150,95,55,0.45)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_16px_30px_-14px_rgba(150,95,55,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 active:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_8px_22px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/[0.11]"
    >
      {link.icon && (
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-50/90 text-lg shadow-inner dark:bg-white/[0.07]"
        >
          {link.icon}
        </span>
      )}

      <span className="min-w-0 flex-1">
        <span className="block truncate font-semibold text-stone-800 dark:text-stone-50">
          {link.title}
        </span>
        {link.description && (
          <span className="block truncate text-sm text-stone-500 dark:text-stone-400">
            {link.description}
          </span>
        )}
      </span>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 text-stone-400 transition-transform duration-200 group-hover:translate-x-0.5 dark:text-stone-500"
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
