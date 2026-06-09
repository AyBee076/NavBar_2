"use client";

import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useCart } from "../app/context/CartContext";

export default function Header() {
  const router = useRouter();
  const { state } = useCart();
  const totalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <header className="mx-auto my-2 flex items-center h-22 justify-between px-2 xl:w-5/6">
      <h2 className="text-2xl font-bold xl:text-3xl">MegaStore</h2>
      <div className="relative">
        {totalItems > 0 && (
          <span className="flex items-center justify-center absolute -top-2 -right-2 w-5 h-5 text-xs rounded-full bg-red-600 text-white">
            {totalItems}
          </span>
        )}
        <ShoppingCartIcon
          size={32}
          className="cursor-pointer transition-colors hover:text-amber-600"
          onClick={() => router.push("/cart")}
        />
      </div>
    </header>
  );
}
