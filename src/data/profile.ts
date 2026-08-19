export type Profile = {
  name: string;
  bio: string;
  avatarUrl: string;
};

export type LinkItem = {
  /** 클릭 수 집계 시 링크를 식별하는 키 (URL이 바뀌어도 통계가 이어지도록 별도 관리) */
  id: string;
  title: string;
  description?: string;
  url: string;
  icon?: string;
};

export const profile: Profile = {
  name: "김링크",
  bio: "프론트엔드 개발자 · 기록하는 사람",
  avatarUrl: "/avatar.svg",
};

export const links: LinkItem[] = [
  {
    id: "blog",
    title: "블로그",
    description: "개발하며 배운 것들을 기록합니다",
    url: "https://example.com/blog",
    icon: "📝",
  },
  {
    id: "github",
    title: "GitHub",
    description: "사이드 프로젝트와 오픈소스",
    url: "https://github.com",
    icon: "💻",
  },
  {
    id: "instagram",
    title: "Instagram",
    description: "일상과 사진",
    url: "https://instagram.com",
    icon: "📷",
  },
  {
    id: "email",
    title: "이메일 보내기",
    description: "협업 · 강연 문의",
    url: "mailto:hello@example.com",
    icon: "✉️",
  },
];
