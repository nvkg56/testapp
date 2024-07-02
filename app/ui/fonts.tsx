import { Inter, Lusitana, Roboto } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  display: "fallback",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});
