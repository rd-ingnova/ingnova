import type { Metadata, Viewport } from "next";
import { Inter, Work_Sans } from "next/font/google";
import 'material-symbols';
import "./globals.css";
import Header from "@/components/header";

const fontDisplay = Inter({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fontSans = Work_Sans({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ingnova S.A.S",
  description: "Especialistas en ingeniería y rehabilitación estructural",
};

export const viewport: Viewport = {
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fontDisplay.variable} ${fontSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
