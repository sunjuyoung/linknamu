import type { Config } from "tailwindcss";

const config: Config = {
  // 토글 버튼으로 직접 제어하기 위해 class 전략 사용 (media 전략은 OS 설정에 종속)
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Pretendard: 둥근 느낌의 산세리프. layout.tsx에서 CDN으로 로드한다.
        sans: [
          '"Pretendard Variable"',
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
