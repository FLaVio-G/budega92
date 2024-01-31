"use client";
import React from "react";
import Image from "next/image";
import Header from "../components/header";

export default function Sobre() {
  return (
    <div className="flex min-h-screen  flex-col items-center justify-between">
      <Header />
      <div>
        <div className="flex row ">
          <h1>O que é a Budega 92, conheça nossa história!</h1>
          <div>
            <Image className="rounded-lg"
              width={300}
              height={500}
              src="/images/drink-1.png"
              alt="drink1"
            />
          </div>
        </div>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Eos odio illo veritatis veniam. Porro fugiat f
            acere, vitae rerum et quia hic provident ex suscip
            it, quidem exercitationem animi numquam quaerat laboriosam.</p>
        </div>
      </div>
    </div>
  );
}
