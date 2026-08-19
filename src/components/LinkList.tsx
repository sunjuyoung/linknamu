import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type Props = {
  links: LinkItem[];
};

export default function LinkList({ links }: Props) {
  if (links.length === 0) {
    return (
      <p className="rounded-3xl border border-dashed border-orange-200 py-10 text-center text-sm text-stone-500 dark:border-white/10 dark:text-stone-400">
        아직 등록된 링크가 없습니다.
      </p>
    );
  }

  return (
    <nav aria-label="내 링크 목록">
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
