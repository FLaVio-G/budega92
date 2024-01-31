"use client";
import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <div className=" flex flex-row items-center pt-4 justify-between w-full px-3">
                <Link className="flex w-full text-lg  lg:static lg:w-auto" href="/">Budega 92</Link>
                <div className="flex space-x-4">
                    <Link href="/bebidas">Bebidas</Link>
                    <Link href="/sobre">Sobre</Link>
                </div>

            </div>
        </header>
    );
}
