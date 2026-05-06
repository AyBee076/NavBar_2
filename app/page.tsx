import Image from "next/image";
import Firstsec from "@/public/images/IMG_4094.jpg";
import Secondsec from "@/public/images/IMG_4097.jpg";
import Wardrobe from "@/public/images/IMG_4462.jpg";
import Stylish from "@/public/images/IMG_2585.jpg";
import Men from "@/public/images/IMG_4461.jpg";
import Women1 from "@/public/images/IMG_4105.jpg";
import Women2 from "@/public/images/IMG_2107.jpg";
import Women3 from "@/public/images/IMG_3940.jpg";
 

export default function Home() {
  return (
    <div className="py-20 bg-linear-to-r from-[#c68d53] to-[#7f5a35] ">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:text-9xl">CABANA </h1>
        <h1 className="text-3xl md:text-5xl lg:text-9xl ml-20 md:ml-32 lg:ml-85">
          {" "}
          WEAR{" "}
        </h1>
      </div>

      <section className="mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full py-5">
          <div className="relative w-full aspect-square h-full flex justify-center">
            <Image
              src={Firstsec}
              alt="First section image"
              className="w-[90%] rounded-4xl"
            />
          </div>
          <div className="relative w-full aspect-square md:block hidden ">
            <Image
              src={Secondsec}
              alt="Second section image"
              className="w-[90%] rounded-4xl"
            />
          </div>
        </div>
      </section>

      <section className="mt-50 w-full gap-15 flex flex-col md:flex-row items-center justify-between px-15 py-12 ">
        {/* Text on the left */}
        <div className="flex flex-col shrink-0 ">
          <h1 className="text-3xl font-bold mb-4">Shop with Us</h1>
          <p className="text-lg">
            Upgrade your wardrobe with our trendy and affordable outfits. <br />{" "}
            Quality clothing, great prices and styles you'll love!{" "}
          </p>
        </div>

        {/* Image on the right, smaller */}
        <div className="relative flex justify-end w-full aspect-square ">
          <Image
            src={Wardrobe}
            alt="Wardrobe of shirts"
            className="w-[75%] rounded-4xl"
          />
        </div>
      </section>

      <section className="w-full flex gap-15 flex-col-reverse md:flex-row items-center justify-between  px-15 py-12">
        {/* Image on the right, smaller */}
        <div className="relative flex justify-start w-full aspect-square ">
          <Image
            src={Stylish}
            alt="Wardrobe of shirts"
            className="w-[75%] rounded-4xl"
          />
        </div>

        {/* Text on the left */}
        <div className="flex flex-col justify-items-end shrink-0">
          <h1 className="text-3xl font-bold mb-4">Shop with Us</h1>
          <p className="text-lg">
            Looking for a stylish outfit that makes you standout?. <br /> Send
            us a DM or ask about sizes available{" "}
          </p>
        </div>
      </section>

      {/* MEN SECTION */}
      <section className="w-full gap-20 flex-col md:flex-row flex items-center justify-between px-15 py-12 mb-10">
        {/* Text on the left */}
        <div className="shrink-0">
          <h1 className="text-3xl font-bold mb-4">Shop Men's Wear</h1>
          <span>
            Discover stylish, comfortable, and affordable men’s fashion for
            every occasion.
          </span>
          <ul className="text-lg">
            <li>Shirts (casual & formal)</li>
            <li>Quality, and Affordable African Wear</li>
            <li>Made to fit, and classy designs.</li>
          </ul>
        </div>

        {/* Image on the right, smaller */}
        <div className="relative flex justify-end w-full aspect-square ">
          <Image
            src={Men}
            alt="Wardrobe of shirts"
            className="w-[75%] rounded-4xl "
          />
        </div>
      </section>

{/* WOMEN CLOTHING */}
      <section>
        <div className="flex flex-col text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Shop Women's Clothing</h1>
        <p className="">
          Step into the world of modern women’s fashion. Our collection is
          carefully selected to bring you the latest trends, timeless styles,
          and high-quality pieces designed for confidence and comfort. <br /> Find the
          perfect outfit to express your unique style
        </p>
        </div>

        <div className="flex gap-5 px-4">
          <div><Image src={Women1} alt="Women 1" className="rounded-4xl h-full"/></div>
          <div><Image src={Women2} alt="Women 2" className="rounded-4xl h-full"/></div>
          <div><Image src={Women3} alt="Women 3" className="rounded-4xl h-full"/></div>
        </div>
      </section>
    </div>
  );
}
