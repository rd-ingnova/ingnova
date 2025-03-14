import type { Metadata } from "next";
import { Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const fontDisplay = Montserrat({
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
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
