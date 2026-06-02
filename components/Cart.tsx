"use client";

import CartSummary from "../components/CartSummary";
import { useRouter } from "next/navigation";
import { useCart } from "../app/context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const router = useRouter();
  const { state } = useCart();
  const { cartItems } = state;

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Your MegaStore Cart is empty</h1>
        <button
          onClick={() => router.push("/")}
          className="mt-12 px-8 py-3 rounded-3xl bg-black text-white transition-colors hover:bg-gray-900 cursor-pointer"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto my-8 w-full px-4 xl:my-10 xl:w-10/12">
      <div className="space-y-4">
        <div className="flex items-center text-sm xl:text-base">
          <h1
            className="cursor-pointer font-semibold text-gray-600 hover:underline"
            onClick={() => router.push("/")}
          >
            Home &gt;
          </h1>
          <h2 className="ml-2 font-semibold">Cart</h2>
        </div>

        <h1 className="font-mono text-4xl xl:text-5xl">YOUR CART</h1>
      </div>

      <div className="mt-8 flex flex-col gap-6 xl:flex-row">
        <div className="w-full xl:w-7/12">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="w-full xl:w-5/12">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
