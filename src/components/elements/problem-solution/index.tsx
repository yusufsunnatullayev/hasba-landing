"use client";
import Image from "next/image";
import React from "react";
import angryEmoji from "@/assets/angry.svg";
import smileEmoji from "@/assets/smile.svg";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/animations";

const ProblemSolution = () => {
  return (
    <section className="w-full pt-12 px-24 flex flex-col items-center gap-8">
      <h1 className="text-4xl text-main-green font-bold">Muammo & Yechim</h1>
      <div className="w-full flex items-start justify-between gap-5">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-1/2 h-[500px] bg-main-gray rounded-3xl p-10 flex flex-col items-start justify-between"
        >
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-4xl">Muammo</h1>
            <p className="font-medium text-xl w-3/4">
              Ko‘pchilik biznes egalari va xodimlar soliq, huquqiy, biznes
              masalalar, va buxgalteriya qoidalarida chalkashib qoladi.
            </p>
          </div>
          <Image src={angryEmoji} alt="Angry Emoji" />
        </motion.div>
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-1/2 h-[500px] bg-main-gray rounded-3xl p-10 flex flex-col items-start justify-between"
        >
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-4xl">Yechim</h1>
            <p className="font-medium text-xl w-3/4">
              Oson tushunarli maqolalar, testlar va mutaxassis maslahatlari
              orqali muammoni hal qiladi.
            </p>
          </div>
          <Image src={smileEmoji} alt="Smile Emoji" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
