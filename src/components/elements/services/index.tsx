"use client";
import Image from "next/image";
import React from "react";
import image1 from "@/assets/service-image1.svg";
import image2 from "@/assets/service-image2.svg";
import image3 from "@/assets/service-image3.svg";
import image4 from "@/assets/service-image4.svg";
import { motion } from "framer-motion";
import { fadeDownLeft, fadeLeft, fadeUpLeft, flipX } from "@/lib/animations";

const services = [
  {
    id: 1,
    title: "Konsultatsiya",
    description:
      "Huquq, soliq, buxgalteriya va biznes bo‘yicha konsultantlar bilan chat.",
  },
  {
    id: 2,
    title: "Elektron kitoblar",
    description:
      "Ilova asoschisi Ibrohim Ahmadjonov yozgan amaliy qo‘llanmalar.",
  },
  {
    id: 3,
    title: "Audio Podkastlar",
    description:
      "Huquq, soliq, buxgalteriya va biznes bo‘yicha konsultantlar bilan chat.",
  },
  {
    id: 4,
    title: "Ko‘nikmalar",
    description: "Foydali tahliliy materiallar.",
  },
  {
    id: 5,
    title: "Testlar",
    description:
      "Maqolalardan keyin bilimni mustahkamlash uchun interaktiv testlar.",
  },
];

const Services = () => {
  const MotionImage = motion(Image);

  return (
    <section
      id="services"
      className="w-full pt-12 px-24 flex items-start justify-between gap-12"
    >
      <div className="w-[37%] h-full flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Asosiy Xizmatlar</h1>
        <div className="w-full flex flex-col gap-1">
          {services.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-col p-5 gap-3 rounded-xl cursor-pointer group bg-main-gray"
            >
              <h1 className="font-bold text-xl group-hover:text-main-green duration-150">
                {item.title}
              </h1>
              <p className="font-normal text-base opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[63%] h-full flex">
        <MotionImage
          src={image1}
          alt="Iphone Image"
          variants={flipX}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-[45%] h-[700px]"
        />
        <div className="flex-1 h-full flex flex-col items-end py-10 justify-between">
          <MotionImage
            src={image2}
            alt="Service second Image"
            variants={fadeDownLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
          <MotionImage
            src={image3}
            alt="Service third Image"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="self-start"
          />
          <MotionImage
            src={image4}
            alt="Service fourth Image"
            variants={fadeUpLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
