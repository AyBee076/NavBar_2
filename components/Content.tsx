"use client";

import Image from "next/image";
import Firstsec from "@/public/images/IMG_4094.jpg";
import Secondsec from "@/public/images/IMG_4097.jpg";
import Wardrobe from "@/public/images/IMG_4462.jpg";
import Stylish from "@/public/images/IMG_2585.jpg";
import Men from "@/public/images/IMG_4461.jpg";
import Women1 from "@/public/images/IMG_4105.jpg";
import Women2 from "@/public/images/IMG_2107.jpg";
import Women3 from "@/public/images/IMG_3940.jpg";
import {
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function Home() {
  

  return (
    <>
      <main className="overflow-x-hidden">
        <div className="py-20 bg-homepage-bg">
          {/* HERO HEADING */}
          <div className="flex flex-col items-center px-4">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 1.9, ease: easeInOut }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              className="text-5xl md:text-6xl lg:text-9xl text-center font-mashle text-header-1 "
            >
              CABANA
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1.9, ease: easeInOut }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              className="text-5xl md:text-6xl lg:text-9xl ml-8 sm:ml-16 md:ml-24 lg:ml-85 font-mashle text-header-1"
            >
              WEAR
            </motion.h1>
          </div>

          {/* TOP IMAGE GRID */}
          <section className="mt-10 mb-20 px-4 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full py-5">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: easeOut }}
                className="relative w-full aspect-square overflow-hidden rounded-4xl shadow-2xl shadow-black/50"
              >
                <Image
                  src={Firstsec}
                  alt="First section image"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: easeOut }}
                className="relative w-full aspect-square overflow-hidden rounded-4xl hidden lg:block shadow-2xl shadow-black/50"
              >
                <Image
                  src={Secondsec}
                  alt="Second section image"
                  fill
                  sizes="45vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* SHOP WITH US (image right) */}
          <section className="w-full gap-8 lg:gap-15 flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 lg:px-16 py-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: easeOut }}
              className="shrink-0 text-center lg:text-left lg:ml-20"
            >
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-mashle mb-4 text-header-1">
                Shop with Us
              </h1>

              <p className="font-grotesque text-lg md:text-xl lg:text-2xl font-semibold text-header-2">
                Upgrade your wardrobe with our trendy and affordable outfits.{" "}
                <br className="hidden lg:block" />
                Quality clothing, great prices and styles you&apos;ll love!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: easeOut }}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden rounded-4xl shadow-2xl shadow-black/50"
            >
              <Image
                src={Wardrobe}
                alt="Wardrobe of shirts"
                className="w-full h-auto rounded-4xl"
              />
            </motion.div>
          </section>

          {/* SHOP WITH US (image left) */}
          <section className="w-full gap-8 lg:gap-15 flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-10 lg:px-16 py-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: easeOut }}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl  overflow-hidden rounded-4xl shadow-2xl shadow-black/50"
            >
              <Image
                src={Stylish}
                alt="Stylish outfit"
                className="w-full h-auto rounded-4xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: easeOut }}
              className="flex flex-col shrink-0 text-center items-center lg:items-start lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-mashle mb-4 lg:mr-20 text-header-1">
                Shop with Us
              </h1>

              <p className="font-grotesque text-lg md:text-xl lg:text-2xl font-semibold text-header-2">
                Looking for a stylish outfit that makes you standout?{" "}
                <br className="hidden lg:block" />
                Send us a DM or ask about sizes available
              </p>
            </motion.div>
          </section>

          {/* MEN SECTION */}
          <section className="w-full gap-8 lg:gap-15 flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 lg:px-16 py-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: easeOut }}
              className="shrink-0 text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-mashle mb-4 text-header-1">
                Shop Men&apos;s Wear
              </h1>
              <span className="font-grotesque text-lg md:text-xl lg:text-2xl font-semibold text-header-2">
                Discover stylish, comfortable, and affordable men &apos;s
                fashion for every occasion.
              </span>
              <ul className="text-lg md:text-xl lg:text-2xl mt-2 list-none text-header-2 font-grotesque font-semibold lg:list-disc lg:pl-5">
                <li>Shirts (casual & formal)</li>
                <li>Quality, and Affordable African Wear</li>
                <li>Made to fit, and classy designs.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: easeOut }}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl overflow-hidden rounded-4xl shadow-2xl shadow-black/50"
            >
              <Image
                src={Men}
                alt="Men's wear"
                className="w-full h-auto rounded-4xl"
              />
            </motion.div>
          </section>

          {/* WOMEN CLOTHING */}
          <section className="mb-20 px-4 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: easeOut }}
              className="flex flex-col text-center mb-10"
            >
              <h1 className="text-4xl md:text-6xl lg:text-9xl font-mashle mb-4 text-header-1">
                Shop Women&lsquo;s Clothing
              </h1>
              <p className="font-grotesque text-lg md:text-xl lg:text-2xl font-semibold text-header-2">
                Step into the world of modern women&apos;s fashion. Our
                collection is carefully selected to bring you the latest trends,
                timeless styles, and high-quality pieces designed for confidence
                and comfort. <br className="hidden lg:block" /> Find the perfect
                outfit to express your unique style
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0 }}
                className="relative w-full aspect-[3/4] overflow-hidden rounded-4xl shadow-2xl shadow-black/50"
              >
                <Image
                  src={Women1}
                  alt="Women's fashion 1"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
                className="relative w-full aspect-[3/4] overflow-hidden rounded-4xl shadow-2xl shadow-black/50"
              >
                <Image
                  src={Women2}
                  alt="Women's fashion 2"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.3 }}
                className="relative w-full aspect-[3/4] overflow-hidden rounded-4xl shadow-2xl shadow-black/50"
              >
                <Image
                  src={Women3}
                  alt="Women's fashion 3"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
