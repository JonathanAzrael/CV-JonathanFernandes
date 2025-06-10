import type { Metadata } from "next";
import { Lexend, Comforter_Brush } from "next/font/google";
import "./globals.css";


const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const comforterBrush = Comforter_Brush({
  weight: '400', // Comforter Brush geralmente tem apenas um peso
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comforter-brush', // Variável CSS para Comforter Brush
});

export const metadata: Metadata = {
  title: "Jonathan Fernandes",
  description: "Jonathan Fernandes | Portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${lexend.variable} ${comforterBrush.variable}`}>
      <body className="font-lexend">
        {children}
      </body>
    </html>
  );
}
