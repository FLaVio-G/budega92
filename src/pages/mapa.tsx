import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleMap from "@/components/GoogleMap";

export default function mapa() {
  return (
    <div className="mx-auto max-w-7xl">
      <Header />
      <main className="flex items-center mx-auto max-w-7xl max-h-full justify-center w-full">
        <div className="bg-gray-800 w-full  rounded-lg p-8">
          <GoogleMap />
        </div>
      </main>
      <Footer />
    </div>
  );
}
