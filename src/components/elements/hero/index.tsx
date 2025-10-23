"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../navbar";
import CountUp from "../count-up";
import RotatingTexts from "../rotating-texts";
import Image from "next/image";
import phone from "@/assets/phone.svg";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

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
        className="w-3/4 mx-auto"
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
      <div className="w-full flex-1 flex items-end justify-center gap-10 pb-5 px-24">
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
            <span className="text-base font-medium">Ko'nikmalar</span>
          </div>
        </div>
        {/* Center Content 🚩 */}
        <div className="w-[40%] h-full rounded-3xl bg-main-gray flex flex-col items-center justify-between overflow-hidden">
          <RotatingTexts texts={texts} active={active} />
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
    </section>
  );
};

export default Hero;
