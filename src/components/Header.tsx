import React, { ReactNode } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import barOne from "../../public/images/barOne.jpg";
import budega92 from "../../public/images/budega92-final.png";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} legacyBehavior>
    <a
      className="font-pt-serif z-10 text-xl text-gray-100 transition duration-300 hover:border-b-2 hover:border-red-600"
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
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
            <CarouselItem className="relative">
              <Image
                src={barOne}
                alt={"foto de bar"}
                className="brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  className="h-[300px] w-[300px]"
                  alt={"logo Budega 92"}
                  src={budega92}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="relative z-10 flex space-x-36">
        <NavLink href="#inicio">INÍCIO</NavLink>
        <NavLink href="#bebidas">BEBIDAS</NavLink>
        <NavLink href="#maps">MAPA</NavLink>
        <NavLink href="#sobre">SOBRE</NavLink>
      </div>
      <div className="absolute right-0 top-0 p-4 lg:hidden"></div>
    </header>
  );
}
