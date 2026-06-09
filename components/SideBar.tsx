"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Category, PriceRange } from "@/types";
import {
  getAllCategories,
  getUniqueColors,
  getPriceRanges,
} from "@/lib/categories";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const section = pathname.startsWith("/women") ? "women" : "men";
  const priceRanges: PriceRange[] = getPriceRanges(section);
  const categories: Category[] = getAllCategories(section);
  const colors: string[] = getUniqueColors(section);

  const [price, setPrice] = useState<PriceRange>("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const handleCategory = (href: string) => {
    router.push(href);
  };

  const handlePrice = (range: PriceRange) => {
    setPrice(range);
    const params = new URLSearchParams(searchParams.toString());
    if (range === "All") params.delete("price");
    else params.set("price", range);
    router.push(`${pathname}?${params.toString()}`);
  };

  const toggleColor = (color: string) => {
    const updated = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updated);
    const params = new URLSearchParams(searchParams.toString());
    if (updated.length === 0) params.delete("colors");
    else params.set("colors", updated.join(","));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className="w-52 shrink-0 border-r pr-6 flex flex-col gap-6 p-4">

      {/* Price */}
      <div>
        <h3 className="font-medium mb-3 mt-20">Price</h3>
        {priceRanges.map((range) => (
          <label
            key={range}
            className="flex items-center gap-2 py-1 cursor-pointer text-sm"
          >
            <input
              type="radio"
              name="price"
              checked={price === range}
              onChange={() => handlePrice(range)}
            />
            {range}
          </label>
        ))}
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-medium mb-3">Colors</h3>
        {colors.map((color) => (
          <label
            key={color}
            className="flex items-center gap-2 py-1 cursor-pointer text-sm"
          >
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => toggleColor(color)}
            />
            {color}
          </label>
        ))}
      </div>
    </aside>
  );
}