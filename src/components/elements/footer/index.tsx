import React from "react";
import logo2 from "@/assets/logo2.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import goole_play from "@/assets/google_play.png";
import apple from "@/assets/apple.png";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-16 flex flex-col gap-10 bg-main-gray px-24">
      <Image src={logo2} alt="Hasba Logo" />
      <div className="w-[85%] flex items-start justify-between gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-base mb-16">
            All rights reserved ©. Hasba 2025©
          </span>
          <a className="font-medium text-base cursor-pointer">
            Terms & Conditions
          </a>
          <a className="font-medium text-base cursor-pointer">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-5">
          <a href="#" className="font-medium text-base cursor-pointer">
            Biz haqimizda
          </a>
          <a href="#services" className="font-medium text-base cursor-pointer">
            Xizmatlar
          </a>
          <a href="#why_hasba" className="font-medium text-base cursor-pointer">
            Nega Hasba
          </a>
          <a href="#faq" className="font-medium text-base cursor-pointer">
            FAQ
          </a>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-main-green mb-3">
            Ilovani yuklab oling!
          </h2>
          <Button
            variant={"outline"}
            className="w-[180px] flex items-center gap-1.5 shadow-none border-black cursor-pointer py-5"
          >
            <Image
              src={goole_play}
              alt="Google Play Store"
              className="w-7 h-7 object-cover"
            />
            <div className="flex flex-col items-start leading-tight gap-0">
              <span className="text-[10px] font-semibold">GET IT ON</span>
              <span className="text-sm font-bold">Google Play</span>
            </div>
          </Button>
          <Button
            variant={"outline"}
            className="w-[180px] flex items-center gap-1.5 shadow-none border-black cursor-pointer py-5"
          >
            <Image
              src={apple}
              alt="Apple Store"
              className="w-7 h-7 object-cover"
            />
            <div className="flex flex-col items-start leading-tight gap-0">
              <span className="text-[10px] font-semibold">Download on the</span>
              <span className="text-sm font-bold">App Store</span>
            </div>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
