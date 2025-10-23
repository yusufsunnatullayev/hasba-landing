"use client";
import React from "react";
import user from "@/assets/user.svg";
import Image from "next/image";
import laurel from "@/assets/laurel.svg";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Men Abdullo Tursunovdan konsultatsiya xizmatini oldim. Men Buhgalteriya soxasida tor ko’chaga kirib qolgan edim. Abdullo akamlar manga nafaqat onlayn balki oflayn xizmatlarini ko’rsatib, meni bu ko’chadan olib chiqib ketdilar. Abdullo akamlarga qalbimni tub-tubidan cheksiz mehr muhabbat bilan minnatdorchiligimni bildiraman.",
    image: user,
  },
  {
    id: 2,
    name: "John Doe",
    review:
      "Abdullo akamlar mangayam ko’p yordam berganlar. Umrlari uzoq bo’lsin. Bunaqa professional mutaxassisni man hech qachon umrimda ko’rmagandim. Kelajakda albatta yana xizmatlaridan foydalanaman.",
    image: user,
  },
  {
    id: 3,
    name: "John Doe",
    review:
      "Tushunmadim sizlar Abdullo akamlarni qayerdan taniysizlar. Abdullo akamlar faqat sizga xizmat ko’rsataman boshqa hech kimga xizmat ko’rsatmayman deb va’da bergandilar. O‘ylab qadaminglarni bosinglar. oqibati yomon bo‘ladi aytib qo‘yay!!!",
    image: user,
  },
  {
    id: 4,
    name: "John Doe",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
    image: user,
  },
  {
    id: 5,
    name: "John Doe",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    image: user,
  },
  {
    id: 6,
    name: "John Doe",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: user,
  },
];

const Reviews = () => {
  return (
    <section className="w-full flex flex-col items-center gap-10 py-12 px-24 bg-main-gray">
      <h1 className="text-4xl font-bold">Sharhlar</h1>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="break-inside-avoid mb-6 bg-white rounded-2xl p-6 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <Image
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <p className="text-sm text-gray-500">Foydalanuvchi</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed">
              {review.review}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1">
        <Image src={laurel} alt="Laruel" />
        <h3 className="text-3xl font-bold mt-1">4.98</h3>
        <h3 className="text-2xl font-bold">Foydalanuvchi fikri</h3>
        <p className="font-normal text-base text-[#18181899] leading-tight text-center w-80">
          Appstore dagi foydalanuvchilar bizning mobil ilova uchun bergan bahosi
        </p>
      </div>
    </section>
  );
};

export default Reviews;
