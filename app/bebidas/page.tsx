import React from "react";

import Footer from "../components/footer";
import Header from "../components/header";

export default function Bebidas() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      <div className="grid grid-cols-2  md:grid-cols-3  gap-8 pb-4 pt-4">
        <div className="bg-red-400 h-[350px] w-[350px] text-white">Cerveja</div>
        <div className="bg-blue-300 h-[350px] w-[350px]  text-white">Vinho</div>
        <div className="bg-yellow-400  h-[350px] w-[350px]   text-white">
          Destilados
        </div>
        <div className="bg-indigo-500 h-[350px] w-[350px]   text-white">
          Não Alcoólicos
        </div>
        <div className="bg-teal-400 h-[350px] w-[350px]   text-white">
          Snacks
        </div>
        <div className="bg-fuchsia-400  h-[350px] w-[350px] text-white">
          Outros
        </div>
      </div>

      <Footer />
    </div>
  );
}
