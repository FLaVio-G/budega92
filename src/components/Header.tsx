import React, { ReactNode } from "react";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    className="text-gray-800 text-xl transition duration-300 hover:border-b-2 hover:border-red-600"
    href={href}
  >
    {children}
  </Link>
);

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="/bebidas">Bebidas</a>,
  },
  {
    key: "2",
    label: <a href="/mapa">Mapa</a>,
  },
  {
    key: "3",
    label: <a href="/sobre">Sobre</a>,
  },
  {
    key: "4",
    label: <a href="/">Em breve</a>,
  },
];

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
      <Dropdown className="lg:hidden" menu={{ items }} placement="bottomLeft">
        <Button>Menu</Button>
      </Dropdown>
    </header>
  );
}
