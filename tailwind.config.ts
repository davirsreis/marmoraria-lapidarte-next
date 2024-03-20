import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_slogan': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FfundoSlogan.jpg?alt=media&token=8079c58b-db6c-451c-9113-e76bfd0f5335')",
      'img_bg_fundo_contato': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FBancadaCozinhaEscura2.png?alt=media&token=8bcd4d92-f4db-472f-922c-513ba32f49c8')",
      'img_bg_fundo_marmore': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FfundoMarmore.jpg?alt=media&token=7372d73b-c38f-47e1-9a8f-4115fa853e50')",
      'img_bg_fundo_granito': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FfundoGranito.jpg?alt=media&token=8726901d-ffad-4643-86d8-63ff29bd7201')",
      'img_bg_fundo_quartzo': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FfundoQuartzo.jpg?alt=media&token=e60e5ecf-b07d-418e-9b59-cca1ee52c991')",
    },
    extend: {
      colors: {
        'primary-blue': '#001524',
        'second-blue': '#294380',
        'primary-neutral': '#FFECD1',
        'second-neutral': '#FFEFF1',
        'third-neutral': '#F6F3EF',
        'fourth-neutral': '#F4EEE5',
        'fifth-neutral': '#FFDFB0',
        'opacity-neutral': 'rgba(255, 255, 255, 0.1)',
        'primary-orange': '#FF7D00',
        'second-orange': '#78290F',
        'txt-gray': '#7A7786',
        'opacity-gray': 'rgba(0, 0, 0, 0.3)',
        'opacity-20-neutral': 'rgba(255, 236, 209, 0.2)',
        'opacity-60-neutral': 'rgba(255, 236, 209, 0.6)',
        'opacity-20-blue': 'rgba(0, 21, 36, 0.2)',
        'opacity-60-blue': 'rgba(0, 21, 36, 0.6)',
        'opacity-50-second-blue': 'rgba(41, 67, 128, 0.5)',
      },
      screens: {
        'smLess': '400px',
        'lgPlus': '1200px',
        'lgUltra': '1400px',
      },
    },
  },
  plugins: [],
};
export default config;
