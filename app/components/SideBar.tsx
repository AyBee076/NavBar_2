"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Category, PriceRange, FilterState, SidebarProps } from "@/types";
import {
  getAllCategories,
  getUniqueColors,
  getPriceRanges,
} from "@/lib/categories";

export default function Sidebar({ onFilter }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

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
    const params = new URLSearchParams(window.location.search);
    if (range === "All") params.delete("price");
    else params.set("price", range);
    router.push(`${pathname}?${params.toString()}`);
  };

  const toggleColor = (color: string) => {
    const updated = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(updated);
    const params = new URLSearchParams(window.location.search);
    if (updated.length === 0) params.delete("colors");
    else params.set("colors", updated.join(","));
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <aside className="w-52 shrink-0 border-r pr-6 flex flex-col gap-6 p-4">
      {/* Category */}
      <div>
        <h3 className="font-medium mb-3">Category</h3>
        <ul className="flex flex-col gap-1">
          <li>
            <label className="flex items-center gap-2 py-1 cursor-pointer text-sm">
              <input
                type="radio"
                name="category"
                checked={pathname === `/${section}`}
                onChange={() => handleCategory(`/${section}`)}
              />
              <span
                className={
                  pathname === `/${section}` ? "text-sky-700 font-medium" : ""
                }
              >
                All
              </span>
            </label>
          </li>
          {categories.map((item: Category) => (
            <li key={item.slug}>
              <label className="flex items-center gap-2 py-1 cursor-pointer text-sm">
                <input
                  type="radio"
                  name="category"
                  checked={pathname === `/${section}/categories/${item.slug}`}
                  onChange={() =>
                    handleCategory(`/${section}/categories/${item.slug}`)
                  }
                />
                <span
                  className={
                    pathname === `/${section}/categories/${item.slug}`
                      ? "text-sky-700 font-medium"
                      : ""
                  }
                >
                  {item.displayName}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-medium mb-3">Price</h3>
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
