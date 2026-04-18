"use client";

import { navItems } from "@/lib/constants";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname(); // Gets the path (e.g., "/about")
  const searchParams = useSearchParams(); // Gets query params (e.g., "?id=123")

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  const closeNavBar = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  //Adding event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className={`w-full h-[8ch] backdrop-blur-sm flex items-center justify-between md:px-16 sm:px-10 px-4 fixed top-0 transition-all ease-in-out duration-300 z-50 border-b border-neutral-200 ${isScrolled ? "bg-sky-50/30 border-sky-200" : "bg-transparent"}`}
    >
      {/* Logo section */}
      <div className="flex items-center gap-2 md:pr-16 pr-0">
        <Link
          href="/"
          className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
        >
          <BookOpen size={24} />
          <span>Learnhub</span>
        </Link>
      </div>

      {/* Hamburger menu for mobile/ Toggle menu */}
      <div className="md:hidden">
        <button
          onClick={toggleNavbar}
          className="text-neutral-600 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Navbar items and buttons */}
      <div
        className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-sky-50 border-1 md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none transition-all ease-in-out duration-300 transition-transform flex-1 ${open ? "translate-x-0" : "translate-x-full"} md:translate-x-0 z-60`}
      >
        {/* Logo and close icon inside toggle menu card */}
        <div className="w-full md:hidden flex items-center justify-between px-4">
          <Link
            href="/"
            className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
          >
            <BookOpen size={24} />
            <span>Learnhub</span>
          </Link>

          {/* Close icon */}
          <div className="md:hidden flex justify-end py-6">
            <button
              onClick={closeNavBar}
              className="text-red-600 focus:outline-none"
            >
              <X size={24} color="gray" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-300 md:hidden"></div>

        {/* Navbar Items and button */}
        <div className="flex-1 flex items-center flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-0">
          <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-base text-lg text-neutral-700 md:font-normal font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={closeNavBar}
                className={`hover:text-sky-700 ease-in-out duration-200 ${pathname === item.href ? "text-sky-700" : "text-neutral-600"} cursor-pointer`}
              >
                {item.name}
              </li>
            ))}
          </ul>

          {/* Navbar buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-fit px-6 py-2 md:text-sky-700 ease-in-out duration-300 cursor-pointer">
                Sign In
            </button>
            <button className="w-fit px-6 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 md:text-base text-2x1 text-neutral-50 eas-in-out duration-300 cursor-pointer" >
                Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

