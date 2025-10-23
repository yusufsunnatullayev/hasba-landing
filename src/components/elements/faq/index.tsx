import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    id: 1,
    question:
      "Mobil ilova orqali Audio Podcastlarni bepul tinglasa bo‘ladimi, va asosan qaysi mavzularda podcastlar qilinadi?",
    answer:
      "Elektorn kitoblarni faqat mobil ilova orqali o‘qishingiz mumkin. Ilova yordamida o‘qish uchun sizga hamma sharoitlar tayyorlab qo‘yilgan masalan ilovadan chiqib ketib keyin yana qayta kirsangiz kelgan joyingizdan o‘qishni davom ettirishingiz mumkin. PDF faylda bunaqa qila olmaysiz masalan.",
  },
  {
    id: 2,
    question:
      "Asos Ibrohim Ahmadjonov tomonidan yozilgan elektron kitoblarni telefonimga yuklab olsam bo’ladimi, hech qanday muammo bo‘lmaydimi?",
    answer:
      "Elektorn kitoblarni faqat mobil ilova orqali o‘qishingiz mumkin. Ilova yordamida o‘qish uchun sizga hamma sharoitlar tayyorlab qo‘yilgan masalan ilovadan chiqib ketib keyin yana qayta kirsangiz kelgan joyingizdan o‘qishni davom ettirishingiz mumkin. PDF faylda bunaqa qila olmaysiz masalan.",
  },
  {
    id: 3,
    question: "Konsultantlar o‘rtacha qancha tajribaga ega mutaxassislar?",
    answer:
      "Elektorn kitoblarni faqat mobil ilova orqali o‘qishingiz mumkin. Ilova yordamida o‘qish uchun sizga hamma sharoitlar tayyorlab qo‘yilgan masalan ilovadan chiqib ketib keyin yana qayta kirsangiz kelgan joyingizdan o‘qishni davom ettirishingiz mumkin. PDF faylda bunaqa qila olmaysiz masalan.",
  },
  {
    id: 4,
    question:
      "Nazorat qilinadigan chet el kompaniyalari haqidagi xabarnoma qachon taqdim etiladimi?",
    answer:
      "Elektorn kitoblarni faqat mobil ilova orqali o‘qishingiz mumkin. Ilova yordamida o‘qish uchun sizga hamma sharoitlar tayyorlab qo‘yilgan masalan ilovadan chiqib ketib keyin yana qayta kirsangiz kelgan joyingizdan o‘qishni davom ettirishingiz mumkin. PDF faylda bunaqa qila olmaysiz masalan.",
  },
  {
    id: 5,
    question: "Mobil ilova Playmarketda ham mavujdmi?",
    answer:
      "Elektorn kitoblarni faqat mobil ilova orqali o‘qishingiz mumkin. Ilova yordamida o‘qish uchun sizga hamma sharoitlar tayyorlab qo‘yilgan masalan ilovadan chiqib ketib keyin yana qayta kirsangiz kelgan joyingizdan o‘qishni davom ettirishingiz mumkin. PDF faylda bunaqa qila olmaysiz masalan.",
  },
];

const Faq = () => {
  return (
    <section
      id="faq"
      className="w-full pt-16 pb-8 px-24 flex flex-col items-center gap-10"
    >
      <h1 className="text-4xl font-bold">FAQ</h1>
      <div className="w-1/2 flex flex-col gap-1">
        {faq.map((item) => (
          <Accordion
            key={item.id}
            className="w-full rounded-xl bg-main-gray px-4 py-2"
            type="single"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="cursor-pointer">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
