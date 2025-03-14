import { DefaultProps } from "@/components/types";

function HeroSection({ className }: DefaultProps) {
  return (
    <section className="flex flex-col justify-center *:text-center px-48 gap-2 font-normal h-[calc(100svh-8rem)] ">
      <h1 className="text-6xl/tight font-display font-bold tracking-tight">
        RD INGNOVA
      </h1>
      <p className="text-2xl font-sans font-normal mb-12">
        Ingeniería de alto nivel para proyectos de gran envergadura.
      </p>
      <span className="material-symbols-rounded !text-5xl">
        keyboard_arrow_down
      </span>
    </section>
  );
}

function HistorySection({ className }: DefaultProps) {
  return (
    <section className="flex flex-col justify-center *:text-center font-normal h-lvh ">
      New Section
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HistorySection />
    </>
  );
}
