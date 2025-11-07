"use client";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import goole_play from "@/assets/google_play.png";
import apple from "@/assets/apple.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MobileNavigation from "../mobile-navigation";

export const nav_items = [
  {
    id: "1",
    title: "Ibrohim Ahmadjonov",
    link: "/",
  },
  {
    id: "2",
    title: "Mobil ilova",
    link: "/",
  },
  {
    id: "3",
    title: "Xizmatlar",
    link: "#services",
  },
  {
    id: "4",
    title: "Nega Hasba",
    link: "#why_hasba",
  },
  {
    id: "5",
    title: "FAQ",
    link: "#faq",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [screen, setScreen] = useState<"sm" | "md" | "lg">("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreen("sm");
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setScreen("md");
      } else {
        setScreen("lg");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative w-full p-4">
      <div className="w-[95%] md:w-[80%] lg:w-[90%] mx-auto flex items-center justify-between">
        {/* Navigation Items 🚩 */}
        <div className="lg:flex items-center gap-7 hidden">
          {nav_items.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="font-medium text-sm"
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/* Mobile and Tablet Menu 🚩 */}
        <Menu
          size={screen === "sm" ? 20 : 30}
          className="cursor-pointer lg:hidden"
          onClick={() => setOpen(true)}
        />
        {/* Logo 🚩 */}
        <Image
          src={logo}
          alt="Hasba Logo"
          className="absolute left-[38%] md:left-[45%] w-20 md:w-auto"
        />
        {/* Action Buttons 🚩 */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Button
            size={screen === "md" ? "sm" : "default"}
            variant={"outline"}
            className="flex items-center gap-1.5 shadow-none border-black cursor-pointer py-4"
          >
            <Image
              src={goole_play}
              alt="Google Play Store"
              className="w-4 h-4 lg:w-5 lg:h-5 object-cover"
            />
            <div className="flex flex-col items-start leading-tight gap-0">
              <span className="text-[6px] lg:text-[8px] font-semibold">
                GET IT ON
              </span>
              <span className="text-[10px] lg:text-xs font-bold lg:font-semibold">
                Google Play
              </span>
            </div>
          </Button>
          <Button
            size={screen === "md" ? "sm" : "default"}
            variant={"outline"}
            className="flex items-center gap-1.5 shadow-none border-black cursor-pointer py-4"
          >
            <Image
              src={apple}
              alt="Apple Store"
              className="w-4 h-4 lg:w-5 lg:h-5 object-cover"
            />
            <div className="flex flex-col items-start leading-tight gap-0">
              <span className="text-[6px] lg:text-[8px] font-semibold">
                Download on the
              </span>
              <span className="text-[10px] lg:text-xs font-semibold">
                App Store
              </span>
            </div>
          </Button>
        </div>
      </div>

      {/* Tablet and Mobile Navigation 🚩 */}
      <MobileNavigation open={open} setOpen={setOpen} screen={screen || "lg"} />
    </nav>
  );
};

export default Navbar;
