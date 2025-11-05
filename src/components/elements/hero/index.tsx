"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../navbar";
import CountUp from "../count-up";
import RotatingTexts from "../rotating-texts";
import Image from "next/image";
import phone from "@/assets/phone.svg";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const statistics = [
  {
    id: 1,
    title: "Audio podkastlar",
    count: 12,
    duration: 1500,
  },
  {
    id: 2,
    title: "Ko‘nikmalar",
    count: 100,
    duration: 1500,
  },
  {
    id: 3,
    title: "Foydalanuvchilar",
    count: 200,
    duration: 1500,
  },
  {
    id: 4,
    title: "Maslahatchilar",
    count: 12,
    duration: 1500,
  },
];

const Hero = () => {
  const texts = ["Hisob", "Biznes", "Huquq"];
  const [active, setActive] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const MotionImage = motion(Image);
  const phoneImage = useMemo(
    () => (
      <MotionImage
        src={phone}
        alt="Iphone Image"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-3/4 h-full lg:h-auto mx-auto"
      />
    ),
    []
  );

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActive((prev) => (prev + 1) % texts.length);
    }, 2500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [texts.length]);

  return (
    <section className="w-full h-screen flex flex-col">
      <Navbar />
      {/* Desktop Content 🚩 */}
      <div className="hidden w-full flex-1 lg:flex items-end justify-center gap-10 pb-5 px-24">
        {/* Left Nubers 🚩 */}
        <div className="flex items-center gap-16">
          <div className="flex flex-col items-end">
            <CountUp
              to={12}
              duration={1500}
              format={(n) => `${Math.floor(n)}+`}
              className="text-main-green font-bold text-3xl"
            />
            <span className="text-base font-medium">Audio podkastlar</span>
          </div>
          <div className="flex flex-col items-end">
            <CountUp
              to={100}
              duration={1500}
              format={(n) => `${Math.floor(n)}+`}
              className="text-main-green font-bold text-3xl"
            />
            <span className="text-base font-medium">Ko&apos;nikmalar</span>
          </div>
        </div>
        {/* Center Content 🚩 */}
        <div className="w-[40%] h-full rounded-3xl bg-main-gray flex flex-col items-center justify-between overflow-hidden">
          <RotatingTexts texts={texts} active={active} />
          <span>bilimlari bir ilovada</span>
          {phoneImage}
        </div>
        {/* Right Nubers 🚩 */}
        <div className="flex items-center gap-16">
          <div className="flex flex-col items-start">
            <CountUp
              to={200}
              duration={1500}
              format={(n) => `${Math.floor(n)}+`}
              className="text-main-green font-bold text-3xl"
            />
            <span className="text-base font-medium">Foydalanuvchilar</span>
          </div>
          <div className="flex flex-col items-start">
            <CountUp
              to={12}
              duration={1500}
              format={(n) => `${Math.floor(n)}+`}
              className="text-main-green font-bold text-3xl"
            />
            <span className="text-base font-medium">Maslahatchilar</span>
          </div>
        </div>
      </div>

      {/* Tablet and Mobile Content 🚩 */}
      <div className="w-[95%] md:w-[80%] mx-auto flex-1 flex flex-col gap-8 md:gap-20 pb-10 lg:hidden">
        {/* Center Content 🚩 */}
        <div className="w-full h-full rounded-3xl bg-main-gray flex flex-col items-center justify-between overflow-hidden">
          <RotatingTexts texts={texts} active={active} />
          <span className="mt-10">bilimlari bir ilovada</span>
          {phoneImage}
        </div>
        {/* Tablet 🚩 */}
        <div className="hidden relative w-full md:grid grid-cols-4 gap-5">
          <div className="absolute h-16 w-[2px] bg-[#F0F0F0] left-[48%]"></div>
          {statistics.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                idx < 2 ? "items-start" : "items-end"
              }`}
            >
              <CountUp
                to={item.count}
                duration={item.duration}
                format={(n) => `${Math.floor(n)}+`}
                className="text-main-green font-bold text-3xl"
              />
              <span className="text-base font-medium">{item.title}</span>
            </div>
          ))}
        </div>
        {/* Mobile 🚩 */}
        <div className="md:hidden relative w-full grid grid-cols-2 gap-5 px-5">
          <div className="absolute h-32 w-[2px] bg-[#F0F0F0] left-[52%]"></div>
          {statistics.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                idx % 2 == 0 ? "items-start" : "items-end"
              }`}
            >
              <CountUp
                to={item.count}
                duration={item.duration}
                format={(n) => `${Math.floor(n)}+`}
                className="text-main-green font-bold text-2xl"
              />
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
