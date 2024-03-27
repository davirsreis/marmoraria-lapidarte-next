import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_slogan': "url('https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FfundoSlogan.jpg?alt=media&token=0ab5e4bf-990d-456e-931b-bb411af36599')",
      'img_bg_fundo_contato': "url('https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FBancadaCozinhaEscura2.png?alt=media&token=9d86961b-948d-47b5-9cee-93d54907be83')",
      'img_bg_fundo_marmores': "url('https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FBancadaBanheiro.jpg?alt=media&token=cd73f167-2f92-4d03-b6a8-460ceb344889')",
      'img_bg_fundo_granitos': "url('https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FcozinhaSimples.jpg?alt=media&token=6970b546-1174-4b12-8c81-167b8d6d2114')",
      'img_bg_fundo_quartzitos': "url('https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FbancadaCozinhaPreta.jpg?alt=media&token=c7ea8f9d-35bc-4d4d-bfd6-d56fdff0565e')",
      'img_bg_fundo_nobilestone': "url('https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FcozinhaNobileStone.jpg?alt=media&token=eab0521d-438d-426d-aa97-0b568f780cc2')",
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
        'opacity-black': 'rgba(0, 0, 0, 0.5)',
        'opacity-20-neutral': 'rgba(255, 236, 209, 0.2)',
        'opacity-60-neutral': 'rgba(255, 236, 209, 0.6)',
        'opacity-20-blue': 'rgba(0, 21, 36, 0.2)',
        'opacity-10-blue': 'rgba(0, 21, 36, 0.1)',
        'opacity-60-blue': 'rgba(0, 21, 36, 0.6)',
        'opacity-50-second-blue': 'rgba(41, 67, 128, 0.5)',
      },
      screens: {
        'smLess': '400px',
        'lgPlus': '1200px',
        'lgUltra': '1400px',
      },
      boxShadow: {
        '2xlPlus': '0px 0px 35px 5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
