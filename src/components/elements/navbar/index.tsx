import React from "react";
import logo from "@/assets/logo.svg";
import goole_play from "@/assets/google_play.png";
import apple from "@/assets/apple.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const nav_items = [
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
  return (
    <nav className="relative w-full p-4">
      <div className="w-[90%] mx-auto flex items-center justify-between">
        {/* Navigation Items 🚩 */}
        <div className="flex items-center gap-7">
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
        {/* Logo 🚩 */}
        <Image src={logo} alt="Hasba Logo" className="absolute left-[45%]" />
        {/* Action Buttons 🚩 */}
        <div className="flex items-center gap-3">
          <Button
            variant={"outline"}
            className="flex items-center gap-1.5 shadow-none border-black cursor-pointer py-4"
          >
            <Image
              src={goole_play}
              alt="Google Play Store"
              className="w-5 h-5 object-cover"
            />
            <div className="flex flex-col items-start leading-tight gap-0">
              <span className="text-[8px] font-semibold">GET IT ON</span>
              <span className="text-xs font-semibold">Google Play</span>
            </div>
          </Button>
          <Button
            variant={"outline"}
            className="flex items-center gap-1.5 shadow-none border-black cursor-pointer py-4"
          >
            <Image
              src={apple}
              alt="Apple Store"
              className="w-5 h-5 object-cover"
            />
            <div className="flex flex-col items-start leading-tight gap-0">
              <span className="text-[8px] font-semibold">Download on the</span>
              <span className="text-xs font-semibold">App Store</span>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
