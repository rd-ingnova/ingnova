import { DefaultProps } from "@/components/types";

function HeroSection({ className }: DefaultProps) {
  return (
    <section className="flex flex-col justify-center *:text-center px-8 h-[calc(100svh-6rem)] sm:h-[calc(100svh-7rem)] ">
      <h1 className="text-[2.5rem]/tight sm:text-6xl/tight font-display tracking-tight font-semibold after:content-[''] after:block after:h-0.5 after:my-2 after:w-4 after:bg-white after:mx-auto">
        RD INGNOVA
        <sup>®</sup>
      </h1>
      <p className="text-lg sm:text-xl font-sans font-light">
        Ingeniería de alto nivel para proyectos de gran envergadura.
      </p>
      <span className="material-symbols-outlined mt-6 font-extralight !text-6xl">
        keyboard_arrow_down
      </span>
    </section>
  );
}

function HistorySection({ className }: DefaultProps) {
  return (
    <section className="flex bg-amber-50 flex-col justify-center *:text-center font-normal h-lvh "></section>
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
