import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 pb-16 pt-6">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      <div className="mt-2">
        <Profile profile={profile} />
      </div>

      <div className="mt-8">
        <LinkList links={links} />
      </div>

      <footer className="mt-auto pt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        🌳 링크나무로 만든 페이지
      </footer>
    </main>
  );
}
