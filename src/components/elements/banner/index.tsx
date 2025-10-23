import React from "react";
import banner from "@/assets/banner.svg";

const Banner = () => {
  return (
    <section
      className="pt-20 flex justify-center w-full bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="mx-auto flex flex-col gap-5 w-[51%] items-center">
        <h1 className="font-bold text-5xl text-center">
          Biznesda eng katta kapital — bu to‘g‘ri maslahat bera oladigan odamlar
          bilan ishlashdir.
        </h1>
        <i className="text-lg font-medium">Warren Buffett</i>
      </div>
    </section>
  );
};

export default Banner;
