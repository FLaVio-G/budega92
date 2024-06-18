import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

export default function mapa() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <main className="flex items-center mx-auto max-w-7xl max-h-full justify-center w-full">
        <div className="bg-gray-100 h-[500px]    lg:w-[1100px] md:w-[780px] lg:h-[780px] max-w-7xl  mx-4 lg:p-4  rounded-lg">
          <GoogleMap />
        </div>
      </main>
      <Footer />
    </div>
  );
}
