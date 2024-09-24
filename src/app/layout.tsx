import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Jorun Skålnes - designer",
  description:
    "Jeg er en engasjert designer som har erfaring med å designe digitale løsninger, innholdsproduksjon og andre designtjenester. I tillegg har jeg kompetanse om brukervennlighet og universell utforming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
