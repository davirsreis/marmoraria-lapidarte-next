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
      'img_bg_fundo_marmores': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FBancadaBanheiro.jpg?alt=media&token=40d4a5b2-f4b5-4d94-ad5e-048c8455284f')",
      'img_bg_fundo_granitos': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FcozinhaSimples.jpg?alt=media&token=c4aa1988-8105-4670-8558-18c2ada66c1c')",
      'img_bg_fundo_quartzos': "url('https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FbancadaCozinhaPreta.jpg?alt=media&token=1e4ee5bf-c018-46da-8caf-31e3878fd67f')",
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
