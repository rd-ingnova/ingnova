import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getMarkup } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rdingnova.com.co/"),
  title: "INGNOVA | Ingeniería Especializada",
  description:
    "Empresa líder en servicios de ingeniería, consultoría y construcción. Soluciones innovadoras para proyectos de infraestructura.",
  keywords:
    "ingeniería, consultoría, construcción, rehabilitación, proyectos, infraestructura",
  openGraph: {
    title: "INGNOVA | Ingeniería Especializada",
    description:
      "Empresa líder en servicios de ingeniería, consultoría y construcción. Soluciones innovadoras para proyectos de infraestructura.",
    siteName: "INGNOVA SAS",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contact_md = getMarkup("/content", "contact.md");

  if (!contact_md) return null;
  const data = contact_md.data;

  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer data={data} />
      </body>
    </html>
  );
}
