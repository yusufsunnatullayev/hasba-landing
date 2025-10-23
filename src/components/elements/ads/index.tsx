"use client";
import React from "react";
import phone2 from "@/assets/phone2.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import goole_play from "@/assets/google_play.png";
import apple from "@/assets/apple.png";
import { motion } from "framer-motion";
import { fadeUp, flipX } from "@/lib/animations";

const Ads = () => {
  const MotionImage = motion(Image);

  return (
    <section className="w-full flex flex-col items-center gap-7 py-14 px-24">
      <h1 className="text-3xl font-bold text-center w-[40%]">
        Moliya, Biznes, Soliq va huquqiy qarorlaringizni ishonch bilan qabul
        qiling. Hasbani hoziroq yuklab oling!
      </h1>
      <MotionImage
        src={phone2}
        alt="Ads via Phone"
        variants={flipX}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      />
      <motion.div
        className="flex items-center gap-5"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Button
          variant={"outline"}
          className="flex items-center gap-1.5 shadow-none border-black cursor-pointer py-5"
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
          className="flex items-center gap-1.5 shadow-none border-black cursor-pointer py-5"
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
      </motion.div>
    </section>
  );
};

export default Ads;
