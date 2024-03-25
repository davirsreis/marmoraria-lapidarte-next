import { Kameron } from "next/font/google";
import { Buda } from "next/font/google";
import { Mako } from "next/font/google";

const kameron = Kameron({
  subsets: ["latin"],
  weight: ['400', '600'],
});

const buda = Buda({
  subsets: ["latin"],
  weight: ['300']
});

const mako = Mako({
  subsets: ["latin"],
  weight: ['400']
});

export const fontePrincipal = kameron.className;