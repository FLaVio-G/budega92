import React, { ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import barOne from "../../public/images/barOne.jpg";
import budega92 from "../../public/images/Component 3.svg";
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
      <div className="inset-0 z-0 h-auto w-full lg:absolute lg:h-2">
        <Carousel className="relative h-full lg:h-[800px] lg:w-full">
          <CarouselContent className="relative h-auto lg:h-[800px] lg:w-auto">
            <CarouselItem className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[800px]">
              <Image
                src={barOne}
                alt={"foto de bar"}
                className="object-cover brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-0">
                <Image
                  className="h-[120px] w-[120px] lg:h-[300px] lg:w-[300px]"
                  alt={"logo Budega 92"}
                  src={budega92}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="relative z-10 hidden space-x-36 lg:flex">
        <NavLink href="#inicio">INÍCIO</NavLink>
        <NavLink href="#bebidas">BEBIDAS</NavLink>
        <NavLink href="#maps">MAPA</NavLink>
        <NavLink href="#sobre">SOBRE</NavLink>
      </div>
      <div className="fixed right-0 top-0 p-4 lg:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="text-violet11 shadow-blackA4 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-customBeige shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black sm:h-[50px] sm:w-[50px]"
              aria-label="Customise options"
            >
              <HamburgerMenuIcon />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade min-w-[220px] border-2 border-black bg-customBeige p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
              sideOffset={5}
            >
              <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                ÍNICIO
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                BEBIDAS
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                MAPA
              </DropdownMenu.Item>
              <DropdownMenu.Item className="text-violet11 data-[disabled]:text-mauve8 data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 group relative flex h-[25px] select-none items-center rounded-[3px] px-[5px] pl-[25px] text-[13px] leading-none outline-none data-[disabled]:pointer-events-none">
                SOBRE
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
