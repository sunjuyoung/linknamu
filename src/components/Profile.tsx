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
      <Image
        src={profile.avatarUrl}
        alt={`${profile.name} 프로필 사진`}
        width={112}
        height={112}
        priority
        unoptimized={isSvg}
        className="h-24 w-24 rounded-full border border-slate-200 object-cover shadow-sm sm:h-28 sm:w-28 dark:border-slate-700"
      />
      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl dark:text-slate-50">
        {profile.name}
      </h1>
      <p className="mt-1 text-sm text-slate-600 sm:text-base dark:text-slate-400">{profile.bio}</p>
    </header>
  );
}
