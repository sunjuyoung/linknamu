import Image from "next/image";
import type { Profile as ProfileType } from "@/data/profile";

type Props = {
  profile: ProfileType;
};

export default function Profile({ profile }: Props) {
  // SVG는 next/image 최적화 대상이 아니라 그대로 내보내야 한다(기본 아바타용).
  const isSvg = profile.avatarUrl.endsWith(".svg");

  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative">
        {/* ① 아래로 퍼지는 따뜻한 글로우 — 사진이 살짝 떠 있는 느낌을 만든다 */}
        <div
          aria-hidden="true"
          className="absolute inset-x-2 -bottom-2 top-3 -z-10 rounded-full bg-orange-300/45 blur-xl dark:bg-orange-500/25"
        />

        {/* ② 흰색 링 + 부드러운 드롭섀도로 배경에서 분리 */}
        <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-white/85 shadow-[0_14px_30px_-12px_rgba(150,85,45,0.55)] sm:h-28 sm:w-28 dark:ring-white/15 dark:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.7)]">
          <Image
            src={profile.avatarUrl}
            alt={`${profile.name} 프로필 사진`}
            width={112}
            height={112}
            priority
            unoptimized={isSvg}
            className="h-full w-full object-cover"
          />

          {/* ③ 위에서 빛이 드는 듯한 하이라이트 → 아래쪽 음영 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/40 via-transparent to-stone-900/15"
          />
        </div>
      </div>

      <h1 className="mt-5 text-xl font-bold tracking-tight text-stone-800 sm:text-2xl dark:text-stone-50">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-sm text-stone-500 sm:text-base dark:text-stone-400">{profile.bio}</p>
    </header>
  );
}
