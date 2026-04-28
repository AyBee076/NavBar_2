"use client";

import Link from "next/link";
import {
  SnapchatLogoIcon,
  InstagramLogoIcon,
  TiktokLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative text-white bg-green-900">
      <div
        className="absolute
    top-0
    left-0
    w-full
    overflow-hidden"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative
    block
    fill-[#b7b93d] z-100"
          ></path>
        </svg>

        <div className="relative  -top-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-20 gap-20 bg-green-900">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl text-pink-500 uppercase"> Footer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste
              doloremque soluta voluptates. Deserunt, quas suscipit quibusdam
              porro eius molestiae, ipsam quod commodi voluptatum tempore
              cupiditate quisquam quidem! 
            </p>
          </div>

          <div className="flex flex-col ">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
                {" "}
                Creativity{" "}
              </li>
              <li className="my-4 list-none"> Website Guidline & Ideas </li>
              <li className="my-4 list-none"> Tips & Tricks </li>
              <li className="my-4 list-none"> Photogriphy </li>
            </ul>
          </div>

          <div className="flex flex-col ">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
                {" "}
                Creativity{" "}
              </li>
              <li className="my-4 list-none"> Website Guidline & Ideas </li>
              <li className="my-4 list-none"> Tips & Tricks </li>
              <li className="my-4 list-none"> Photogriphy </li>
            </ul>
          </div>

       

          <div className="flex flex-col ">
            <ul>
              <li className="text-[22px] list-none font-semibold text-pink-500 py-2 uppercase">
                {" "}
                Contact{" "}
              </li>
              <li className="my-4 list-none">Email: youremail@gmail.com </li>
              <li className="my-4 list-none"> +233 23453535 </li>
            </ul>
            <div className="flex space-x-4">
              <Link href="">
                <SnapchatLogoIcon className="text-3xl transform transition duration-300 ease-out hover:scale-125 hover:-translate-y-1 hover:text-amber-300" size={22} />
              </Link>
              <Link href="">
                <InstagramLogoIcon className="text-3xl transform transition duration-300 ease-out hover:scale-125 hover:-translate-y-1 hover:text-pink-700" size={22} />
              </Link>
              <Link href="">
                <TiktokLogoIcon className="text-3xl transform transition duration-300 ease-out hover:scale-125 hover:-translate-y-1 hover:text-blue-400"size={22} />
              </Link>
              <Link href="">
                <WhatsappLogoIcon className="text-3xl transform transition duration-300 ease-out hover:scale-125 hover:-translate-y-1 hover:text-green-500"size={22} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-20">
            <div className="h-full flex items-center justify-center mb-5">
                <form className="w-96 relative" action="">
                    <input className="w-full text-gray-800 p-4 h-10 rounded-full focus:outline-none focus:border border-pink-800" type="email" />
                    <button type="submit"></button>
                </form>
            </div>
        </div>
      </div>
    </footer>
  );
}


// {footerSections.map(item => ( <h2 key={item.name} className='text-lg font-bold mb-4'>
//                         {item.name}
//                 </h2>))}
