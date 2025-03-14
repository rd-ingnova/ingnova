import { DefaultProps } from "./types";

export default function Hero({ className }: DefaultProps) {
  return (
    <section className="flex flex-col justify-center *:text-center px-48 gap-2 font-normal h-[calc(100svh-8rem)] ">
      <h1 className="text-6xl/tight font-display font-bold tracking-tight">
        INGNOVA S.A.S
      </h1>
      <p className="text-2xl font-sans font-normal mb-12">
        Somos especialistas en Ingeniería y Rehabilitación Estructural.
      </p>
      <span className="material-symbols-rounded !text-5xl">
        keyboard_arrow_down
      </span>
    </section>
  );
}
