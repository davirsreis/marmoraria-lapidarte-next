import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_slogan': "url('../assets/slogan-fundo.jpg')",
      'img_bg_fundo_contato': "url('../assets/fundo-contato.png')"
    },
    extend: {
      colors: {
        'primary-blue': '#001524',
        'second-blue': '#15616D',
        'primary-neutral': '#FFECD1',
        'second-neutral': '#FFEFF1',
        'third-neutral': '#F6F3EF',
        'opacity-neutral': 'rgba(255, 255, 255, 0.1)',
        'primary-orange': '#FF7D00',
        'second-orange': '#78290F',
        'txt-gray': '#7A7786',
        'opacity-gray': 'rgba(0, 0, 0, 0.3)',
        'opacity-20-neutral': 'rgba(255, 236, 209, 0.2)',
      }
    },
  },
  plugins: [],
};
export default config;
