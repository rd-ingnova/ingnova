import clsx from "clsx";
import { DefaultProps } from "./types";
import Image from "next/image";

interface HeaderNavPillProps extends DefaultProps {
  label: string;
  href?: string;
  isActive?: boolean;
}

function LogoSection({ className }: DefaultProps) {
  return (
    <div className={clsx("flex-shrink-0", className)}>
      <a href="#">
        <Image
          height={80}
          width={53.18}
          className="h-20 my-4 ml-4 object-cover"
          src="/logo_no_text.png"
          alt="Ingnova S.A.S. Logo"
        />
      </a>
    </div>
  );
}

function NavigationMenu({ className }: DefaultProps) {
  const navItems: HeaderNavPillProps[] = [
    { label: "Inicio", isActive: true },
    { label: "Nosotros" },
    { label: "Servicios" },
    { label: "Proyectos" },
  ];

  return (
    <nav className={clsx("inline-flex items-start", className)}>
      {navItems.map((pill, index) => (
        <NavItem key={index} {...pill} />
      ))}
    </nav>
  );
}

function NavItem({
  label,
  href = "#",
  isActive = false,
  className,
}: HeaderNavPillProps) {
  return (
    <div
      className={clsx(
        "text-base/loose hover:font-bold hover:tracking-tight hover:cursor-pointer inline-flex items-start mt-6 py-2 px-6 font-sans font-light hover:opacity-95 *:focus:outline-offset-8",
        className
      )}
    >
      <a href={href}>{label}</a>
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex w-full justify-between px-4">
      <LogoSection />
      <NavigationMenu />
      <div className="inline-flex items-start">
        <NavItem label="Contacto" />
      </div>
    </header>
  );
}
