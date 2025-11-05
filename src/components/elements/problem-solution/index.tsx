"use client";
import Image from "next/image";
import React from "react";
import angryEmoji from "@/assets/angry.svg";
import smileEmoji from "@/assets/smile.svg";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/animations";

const problem_solution = [
  {
    id: 1,
    title: "Muammo",
    desc: `Ko‘pchilik biznes egalari va xodimlar soliq, huquqiy, biznes masalalar, va buxgalteriya qoidalarida chalkashib qoladi.`,
    image: angryEmoji,
    variant: fadeRight,
  },
  {
    id: 2,
    title: "Yechim",
    desc: `Oson tushunarli maqolalar, testlar va mutaxassis maslahatlari orqali muammoni hal qiladi.`,
    image: smileEmoji,
    variant: fadeLeft,
  },
];

const ProblemSolution = () => {
  return (
    <section className="w-[95%] md:w-[80%] lg:w-full pt-8 md:pt-12 mx-auto lg:px-24 flex flex-col items-center gap-8">
      <h1 className="text-xl md:text-3xl lg:text-4xl text-main-green font-bold">
        Muammo & Yechim
      </h1>
      <div className="w-full flex flex-col md:flex-row items-start justify-between gap-5">
        {problem_solution.map((item) => (
          <motion.div
            key={item.id}
            variants={item.variant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-[280px] lg:h-[500px] bg-main-gray rounded-3xl p-5 lg:p-10 flex flex-col items-start justify-between"
          >
            <div className="flex flex-col gap-3 md:gap-5">
              <h1 className="font-semibold text-lg lg:text-4xl">
                {item.title}
              </h1>
              <p className="font-medium text-sm md:text-xs lg:text-xl w-3/4">
                {item.desc}
              </p>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              className="w-[83px] h-[83px] md:w-[66px] md:h-[66px] lg:w-auto lg:h-auto"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSolution;
