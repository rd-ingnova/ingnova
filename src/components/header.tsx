import clsx from "clsx";
import { DefaultProps } from "./types";
import Image from "next/image";

interface HeaderNavPillProps extends DefaultProps {
  label?: string;
  isActive?: boolean;
  href?: string;
}

function LogoSection({ className }: DefaultProps) {
  const viewSizes = [
    { className: "hidden sm:block", width: 53.18, height: 80 },
    { className: "sm:hidden", width: 42.59, height: 60 },
  ];

  return (
    <div className={clsx("flex-shrink-0", className)}>
      <a href="#">
        {viewSizes.map(({ className, width, height }, index) => (
          <Image
            key={index}
            height={height}
            width={width}
            className={clsx("m-4 ml-2 sm:ml-4 object-cover", className)}
            src="/logo_no_text.png"
            alt="Ingnova S.A.S. Logo"
          />
        ))}
      </a>
    </div>
  );
}

function NavigationMenu({ className }: DefaultProps) {
  const navItems: HeaderNavPillProps[] = [
    { label: "Inicio" },
    { label: "Nosotros" },
    { label: "Servicios" },
    { label: "Proyectos" },
  ];

  return (
    <nav className={clsx("hidden sm:inline-flex items-start", className)}>
      {navItems.map((pill, index) => (
        <NavigationItem key={index} {...pill} />
      ))}
    </nav>
  );
}

function NavigationItem({
  label,
  isActive = false,
  href = "#",
  className,
  children,
}: HeaderNavPillProps) {
  return (
    <div className={clsx("mt-6", className)}>
      {label ? (
        <a
          className={clsx(
            "select-none text-base/loose hocus:font-bold hocus:tracking-tight hocus:cursor-pointer inline-flex items-start py-2 px-6 font-sans hocus:opacity-95",
            {
              "font-bold tracking-tight opacity-95": isActive,
              "font-light": !isActive,
            }
          )}
          href={href}
        >
          {label}
        </a>
      ) : (
        children
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex w-full items-center *:flex-1 sm:items-start justify-between px-4">
      <LogoSection />
      <NavigationMenu />
      <div className="inline-flex items-start justify-end">
        <NavigationItem
          className="!hidden sm:!inline-flex"
          label="Contacto"
          isActive={true}
        />
        <NavigationItem className="!inline-flex !mt-0 !mr-2 sm:!hidden">
          <span className="material-symbols-outlined !text-3xl">menu</span>
        </NavigationItem>
      </div>
    </header>
  );
}
