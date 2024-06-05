import React, { ReactNode } from "react";
import Link from "next/link";
import DropMenu from "./DropMenu";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    className="text-black text-xl transition duration-300 hover:border-b-2 hover:border-black"
    href={href}
  >
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="w-full h-28 flex px-8 font-mono text-sm items-center justify-between">
      <div className="flex">
        <NavLink href="/">Budega 92</NavLink>
      </div>
      <div className="hidden lg:flex space-x-8">
        <NavLink href="/bebidas">Bebidas</NavLink>
        <NavLink href="/mapa">Mapa</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
        <NavLink href="/">Em breve</NavLink>
      </div>
      <div className="lg:hidden">
        <DropMenu />
      </div>
    </header>
  );
}
