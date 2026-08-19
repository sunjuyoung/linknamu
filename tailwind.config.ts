import type { Config } from "tailwindcss";

const config: Config = {
  // 토글 버튼으로 직접 제어하기 위해 class 전략 사용 (media 전략은 OS 설정에 종속)
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
