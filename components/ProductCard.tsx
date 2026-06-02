"use client";

import Image from "next/image";
import { useCart } from "../app/context/CartContext";
import type { CartItem } from "../app/context/CartReducer";

export default function ProductCard({ item }: { item: CartItem }) {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };

  return (
    <div className="w-full rounded-xl bg-white py-4 shadow-md sm:w-72 xl:w-80">
      <div className="relative flex h-56 items-center justify-center py-3">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, 288px"
          className="object-contain"
        />
      </div>
      <div className="mt-6 space-y-2 px-4">
        <h2 className="text-2xl font-bold">{item.name}</h2>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Size</span>
          <span>{item.size[0]}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Color</span>
          <span>{item.color}</span>
        </div>
        <div className="flex justify-between text-sm font-medium">
          <span className="text-gray-500">Price</span>
          <span>${item.price}</span>
        </div>
        <button
          className="mt-5 w-full cursor-pointer rounded-se-2xl bg-black p-3 text-white transition-colors duration-200 hover:bg-amber-800"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
