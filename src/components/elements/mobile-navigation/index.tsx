import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { X } from "lucide-react";
import { nav_items } from "../navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import goole_play from "@/assets/google_play.png";
import apple from "@/assets/apple.png";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  screen: string;
}

const MobileNavigation = ({ open, setOpen, screen }: Props) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left">
        <div className="w-full h-full flex flex-col justify-between pt-5 px-5 md:pt-14 pb-8 md:px-10">
          <div className="w-full flex flex-col gap-10">
            <div className="w-full flex items-center justify-between">
              <h3 className="font-bold text-lg md:text-2xl">Menu</h3>
              <X
                size={screen === "sm" ? 20 : 30}
                onClick={() => setOpen(false)}
              />
            </div>
            <ul className="w-full flex flex-col gap-7">
              {nav_items.map((item) => (
                <li key={item.id} className="font-medium text-sm md:text-lg">
                  <a
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      setTimeout(() => {
                        const target = document.querySelector(item.link);
                        if (target)
                          target.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className="font-bold text-base md:text-xl text-main-green">
              Ilovani yuklab oling!
            </h1>
            <div className="flex gap-1.5 md:gap-3">
              <Button
                variant={"outline"}
                className="w-[100px] md:w-[130px] flex items-center gap-1.5 shadow-none border-black cursor-pointer py-0 md:py-5"
              >
                <Image
                  src={goole_play}
                  alt="Google Play Store"
                  className="w-4 h-4 md:w-7 md:h-7 object-cover"
                />
                <div className="flex flex-col items-start leading-tight gap-0">
                  <span className="text-[8px] md:text-[10px] font-semibold">
                    GET IT ON
                  </span>
                  <span className="text-[10px] md:text-sm font-bold">
                    Google Play
                  </span>
                </div>
              </Button>
              <Button
                variant={"outline"}
                className="w-[100px] md:w-[130px] flex items-center gap-1.5 shadow-none border-black cursor-pointer py-0 md:py-5"
              >
                <Image
                  src={apple}
                  alt="Apple Store"
                  className="w-4 h-4 md:w-7 md:h-7 object-cover"
                />
                <div className="flex flex-col items-start leading-tight gap-0">
                  <span className="text-[8px] md:text-[10px] font-semibold">
                    Download on the
                  </span>
                  <span className="text-[10px] md:text-sm font-bold">
                    App Store
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
