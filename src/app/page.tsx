import { DefaultProps } from "@/components/types";

function HeroSection({ className }: DefaultProps) {
  return (
    <section className="flex flex-col *:text-center px-8 h-[calc(100svh-6rem)] sm:h-[calc(100svh-7rem)]">
      <div className="mb-auto flex flex-col justify-center">
        <h1 className="text-[2.5rem]/tight sm:text-6xl/tight font-display tracking-tight font-bold after:separator after:bg-white">
          RD INGNOVA<sup>®</sup>
        </h1>
        <p className="text-lg sm:text-xl font-sans font-light">
          Ingeniería de alto nivel para proyectos de gran envergadura.
        </p>
      </div>
      <span className="material-symbols-outlined mt-6 !font-extralight !text-8xl">
        keyboard_arrow_down
      </span>
    </section>
  );
}

function HistorySection({ className }: DefaultProps) {
  return (
    <section className="px-40 h-dvh bg-white flex flex-col justify-center">
      <div className="flex flex-col px-8 gap-6 font-normal text-[#251078]">
        <h2 className="text-5xl font-display font-bold">Historia</h2>
        <p className="text-xl/relaxed font-sans font-light">
          RD INGNOVA<sup>®</sup> es una empresa joven respaldada por un equipo
          de profesionales con más de 20 años de experiencia en el sector de la
          ingeniería. Nos especializamos en ofrecer soluciones innovadoras y de
          alto impacto en consultoría, construcción y rehabilitación de
          infraestructuras a nivel nacional. Nuestro enfoque se basa en la
          excelencia técnica, el uso de tecnología de vanguardia y un compromiso
          inquebrantable con la calidad y la seguridad en cada uno de nuestros
          proyectos. Trabajamos en estrecha colaboración con nuestros clientes
          para garantizar resultados eficientes, sostenibles y adaptados a las
          necesidades específicas de cada obra.
        </p>
      </div>
    </section>
  );
}

function ServicesSection({ className }: DefaultProps) {
  return (
    <section className="flex flex-col justify-center font-normal h-svh bg-[#251078]">
      <div>
        <h2 className="text-2xl font-display font-bold text-center">
          Servicios
        </h2>
        <p className="text-base font-sans font-light text-center">
          Conoce los servicios que ofrecemos y cómo podemos ayudarte.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HistorySection />
      <ServicesSection />
    </>
  );
}
