import React, { ReactNode } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} legacyBehavior>
    <a className="font-pt-serif z-10 text-xl text-gray-100 transition duration-300 hover:border-b-2 hover:border-red-600">
      {children}
    </a>
  </Link>
);

export default function Header() {
  return (
    <header className="relative flex w-full items-center justify-center text-sm font-extrabold lg:h-28 lg:px-8">
      <div className="absolute inset-0 z-0 h-auto w-full lg:h-2">
        <Carousel className="h-[800px] w-[800px] lg:h-auto lg:w-full">
          <CarouselContent className="w-[800px] lg:h-[800px] lg:w-auto">
            <CarouselItem>
              <img
                className="h-full w-full object-cover"
                src="https://via.placeholder.com/800x400?text=Slide+1"
                alt="Slide 1"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="relative z-10 flex space-x-36">
        <NavLink href="/">INÍCIO</NavLink>
        <NavLink href="/bebidas">BEBIDAS</NavLink>
        <NavLink href="/mapa">MAPA</NavLink>
        <NavLink href="/sobre">SOBRE</NavLink>
      </div>
      <div className="absolute right-0 top-0 p-4 lg:hidden"></div>
    </header>
  );
}
