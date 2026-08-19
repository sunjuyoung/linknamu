"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  // 서버 렌더 시점에는 사용자의 테마를 알 수 없으므로, 마운트 후에만 아이콘을 그린다.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // layout.tsx의 인라인 스크립트가 이미 html 클래스를 확정해 둔 상태다.
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-lg shadow-sm backdrop-blur transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 dark:border-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700"
    >
      {/* 마운트 전에는 빈 문자열이라 서버/클라이언트 HTML이 어긋나지 않는다 */}
      <span aria-hidden="true">{theme === null ? "" : theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
}
