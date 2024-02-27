import React from "react";

import Footer from "../components/footer";
import Header from "../components/header";

export default function Bebidas() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="flex flex-row gap-4 justify-center items-center max-w-5xl">
        <div>
          <h1 className="mb-4">Sobre a budega 92</h1>
          <h2 className="font-bold text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            ducimus nihil eligendi nisi eos,
          </h2>
        </div>
        <div className="bg-red-400 w-96 h-96">
          <p>teste</p>
        </div>
      </div>

      {/* Restante do seu código permanece inalterado */}

      <Footer />
    </div>
  );
}
