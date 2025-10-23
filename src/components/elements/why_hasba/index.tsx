import React from "react";
import { LuBookCheck, LuHourglass, LuSmartphone } from "react-icons/lu";
import { TbMessageCircle } from "react-icons/tb";

const reasons = [
  {
    id: 1,
    title: "Vaqtni tejaydi",
    description: "Mutaxassisni izlab yurishga hojat yo‘q, hammasi bir joyda.",
    icon: LuHourglass,
  },
  {
    id: 2,
    title: "Aniq va ishonchli javoblar",
    description:
      "O’z sohasida malakali va ko‘p yillik tajribaga ega konsultantlar.",
    icon: TbMessageCircle,
  },
  {
    id: 3,
    title: "Har doim yoningizda",
    description: "Maqola, elektron kitoblar audio podkastlar telefoningizda",
    icon: LuSmartphone,
  },
  {
    id: 4,
    title: "Bilimni chuqurlashtirish",
    description: "Maqoladan keyin test orqali bilimingizni o‘zlashtiring.",
    icon: LuBookCheck,
  },
];

const WhyHasba = () => {
  return (
    <section id="why_hasba" className="w-full flex flex-col gap-10 py-12 px-24">
      <h1 className="font-bold text-4xl">Nega Hasba?</h1>
      <div className="w-full flex items-start gap-3">
        {reasons.map((item) => (
          <div
            key={item.id}
            className="relative w-1/4 group h-[350px] flex flex-col justify-between p-6 rounded-xl bg-main-gray"
          >
            <item.icon
              size={90}
              style={{ strokeWidth: 0.5 }}
              className="font-normal text-main-green mt-3 ml-2"
            />
            <div className="flex flex-col gap-2 z-20">
              <h2 className="font-bold text-xl group-hover:text-main-green duration-150">
                {item.title}
              </h2>
              <p className="font-normal text-base">{item.description}</p>
            </div>
            <div className="absolute w-full h-full rounded-xl bg-gray-50/50 backdrop-blur-[2px] z-10 top-0 left-0 cursor-pointer hover:backdrop-blur-none hover:bg-transparent duration-150"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHasba;
