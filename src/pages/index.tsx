import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "keen-slider/keen-slider.min.css";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <Header />
        <main className="flex w-full"></main>
        <Footer />
      </div>
    </>
  );
}
