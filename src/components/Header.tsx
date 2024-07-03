import React, { ReactNode } from "react";
import Link from "next/link";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} legacyBehavior>
    <a className="font-pt-serif text-gray-100 text-xl transition duration-300 hover:border-b-2 hover:border-red-600">
      {children}
    </a>
  </Link>
);

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link href="/bebidas" legacyBehavior>
        <a className="font-pt-serif text-gray-800 text-xl transition duration-300 hover:border-b-2 hover:border-red-600">
          Bebidas
        </a>
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link href="/map">
        <a className="font-pt-serif text-gray-800 text-xl transition duration-300 hover:border-b-2 hover:border-red-600">
          Map
        </a>
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link href="/sobre" legacyBehavior>
        <a className="font-pt-serif text-gray-100 text-xl transition duration-300 hover:border-b-2 hover:border-red-600">
          Sobre
        </a>
      </Link>
    ),
  },
];

export default function Header() {
  return (
    <header className="relative w-full h-28 flex px-8 font-extrabold text-sm items-center justify-center">
      <div className="absolute h-2 inset-0 z-0">
        <Carousel className="h-auto">
          <CarouselContent className="h-[800px]">
            <CarouselItem>
              <img
                className="w-full h-full object-cover"
                src="https://via.placeholder.com/800x400?text=Slide+1"
                alt="Slide 1"
              />
            </CarouselItem>
            <CarouselItem className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://via.placeholder.com/800x400?text=Slide+2"
                alt="Slide 2"
              />
            </CarouselItem>
            <CarouselItem className="h-full">
              <img
                className="w-full h-full object-cover"
                src="https://via.placeholder.com/800x400?text=Slide+3"
                alt="Slide 3"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="relative z-10 hidden lg:flex space-x-36">
        <NavLink href="/">INÍCIO</NavLink>
        <NavLink href="/bebidas">BEBIDAS</NavLink>
        <NavLink href="/mapa">MAPA</NavLink>
        <NavLink href="/sobre">SOBRE</NavLink>
      </div>
      <div className="relative z-10 lg:hidden">
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Button>Menu</Button>
        </Dropdown>
      </div>
    </header>
  );
}
