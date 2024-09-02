import React, { ReactNode } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import barOne from "../../public/images/barOne.jpg";
import budega92 from "../../public/images/barril.png";
import budegaInitial from "../../public/images/IMG_5192.jpg";

import Image from "next/image";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} legacyBehavior>
    <a
      className="font-pt-serif z-10 p-2 text-xl text-gray-100 transition duration-300 hover:border-2"
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

const NavLinkTwo: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} legacyBehavior>
    <a
      className="z-10 text-xl text-gray-900 no-underline outline-none transition duration-300 hover:bg-customBeige active:text-customBeige"
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
                src={budegaInitial}
                alt={"foto de bar"}
                className="object-cover brightness-50"
                style={{
                  objectFit: "fill",
                  objectPosition: "center",
                  width: "100%",
                  height: "auto",
                }}
                priority
                placeholder="blur"
                blurDataURL="/path/to/low-res-image"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-0">
                <Image
                  className="h-[120px] w-[120px] lg:h-[300px] lg:w-[300px]"
                  alt="logo budega 92"
                  src={budega92}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "15%",
                    height: "auto",
                  }}
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
              className="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade mr-4 min-w-[220px] border-2 border-black bg-customBeige p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform]"
              sideOffset={5}
            >
              <DropdownMenu.Item className="group relative ml-4 mt-4 flex h-[25px] select-none items-center leading-none outline-none">
                <NavLinkTwo href="#inicio">INÍCIO</NavLinkTwo>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative ml-4 mt-4 flex h-[25px] select-none items-center leading-none outline-none">
                <NavLinkTwo href="#bebidas">BEBIDAS</NavLinkTwo>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative ml-4 mt-4 flex h-[25px] select-none items-center leading-none outline-none">
                <NavLinkTwo href="#maps">MAPA</NavLinkTwo>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="group relative ml-4 mt-4 flex h-[25px] select-auto items-center leading-none outline-none">
                <NavLinkTwo href="#sobre">SOBRE</NavLinkTwo>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </header>
  );
}
