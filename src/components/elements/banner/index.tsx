"use client";

import React, { useEffect, useState } from "react";
import banner_desktop from "@/assets/banner.svg";
import banner_tablet from "@/assets/banner-tablet.svg";
import banner_mobile from "@/assets/banner-mobile.svg";

const Banner = () => {
  const [banner, setBanner] = useState(banner_desktop);

  useEffect(() => {
    const updateBanner = () => {
      if (window.innerWidth <= 640) {
        setBanner(banner_mobile);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setBanner(banner_tablet);
      } else {
        setBanner(banner_desktop);
      }
    };

    updateBanner();

    window.addEventListener("resize", updateBanner);
    return () => window.removeEventListener("resize", updateBanner);
  }, []);

  return (
    <section
      className="pt-20 flex justify-center w-full bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="mx-auto flex flex-col gap-5 w-[90%] md:w-[51%] items-center">
        <h1 className="font-bold text-[29px] md:text-3xl lg:text-5xl text-center">
          Biznesda eng katta kapital — bu to‘g‘ri maslahat bera oladigan odamlar
          bilan ishlashdir.
        </h1>
        <i className="text-lg font-medium">Warren Buffett</i>
      </div>
    </section>
  );
};

export default Banner;
