"use client";

import { navItems } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BookOpen, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { UserIcon } from '@phosphor-icons/react'
import { useUser } from '@/lib/useUser'
import { signOut } from '@/lib/auth'
import { Button } from "./ui/button";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const { user, loading } = useUser()

  const toggleNavbar = () => {
    console.log("clicked, open:", !open);
    setOpen((prev) => !prev);
  };

  const closeNavBar = () => setOpen(false);

  // -- Escape key to close --
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) closeNavBar();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // -- Body scroll lock --
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // -- Move focus into drawer when it opens, return it when it closes --
  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [open]);

  // -- Scroll listener --
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { totalItems } = useCart();

  return (
    <nav
      id="navbar"
      className={`w-full h-[8ch] backdrop-blur-sm flex items-center justify-between lg:px-12 px-4 fixed top-0 transition-all ease-in-out duration-300 z-50 ${
        isScrolled ? "bg-sky-50/30 border-sky-200" : "bg-white"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 md:pr-16 pr-0">
        <Link
          href="/"
          className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
        >
          <BookOpen size={24} />
          <span>Learnhub</span>
        </Link>
      </div>

      {/* Hamburger button */}
      <div className="md:hidden">
        <button
          ref={menuButtonRef}
          onClick={toggleNavbar}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Open navigation menu"
          className="text-neutral-600 focus:outline-none"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* -- Backdrop -- */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={closeNavBar}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed md:static top-0 right-0 h-screen md:h-auto w-full md:w-auto bg-sky-50 border md:border-none border-neutral-300 md:bg-transparent shadow-lg md:shadow-none ease-in-out duration-300 transition-transform flex-1 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 z-50`}
      >
        {/* Logo + close button inside drawer */}
        <div className="w-full md:hidden flex items-center justify-between px-4">
          <Link
            href="/"
            className="text-lg font-semibold text-sky-700 flex items-center gap-x-2"
          >
            <BookOpen size={24} />
            <span>Learnhub</span>
          </Link>

          <div className="md:hidden flex justify-end py-6">
            <button
              ref={closeButtonRef}
              onClick={closeNavBar}
              aria-label="Close navigation menu"
              className="focus:outline-none"
            >
              <X size={24} color="gray" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-neutral-300 md:hidden" />

        {/* Nav items + buttons */}
        <div className="flex-1 flex items-center flex-col md:flex-row justify-between gap-6 p-6 md:p-0">
          <ul className="flex flex-col md:flex-row items-center md:gap-7 gap-4 md:text-base text-lg text-neutral-700 md:font-normal font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                onClick={closeNavBar}
                className={`hover:text-sky-700 text-sm lg:text-base md:text-nowrap ease-in-out duration-200 ${
                  pathname === item.href ? "text-sky-700" : "text-neutral-600"
                } cursor-pointer`}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center p-4 gap-2">
  {!loading && (
    user ? (
      <div className="flex items-center gap-3">
        <button className="bg-white px-4"> <UserIcon size={28} weight="duotone" className="text-sky-700 cursor-pointer " /> </button>
        
        <button
          onClick={() => signOut()}
          className="w-fit px-6 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-50 ease-in-out duration-300 cursor-pointer whitespace-nowrap"
        >
          Sign Out
        </button>
      </div>
    ) : (
      <Link href="/email-password">
        <button className="w-fit md:text-nowrap px-6 py-2 md:text-sky-700 ease-in-out duration-300 cursor-pointer shrink-2">
          Sign In
        </button>
      </Link>
    )
  )}

  {/* Cart icon stays always visible */}
  <div className="relative" onClick={closeNavBar}>
    <Link href="/cart">
      <button className="bg-white px-4">
      <ShoppingCartIcon size={24} className="cursor-pointer" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
      </button>
    </Link>
  </div>
</div>
        </div>
      </div>
    </nav>
  );
}
