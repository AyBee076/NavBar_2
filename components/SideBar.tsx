"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PriceRange } from "@/types";
import { getUniqueColors, getPriceRanges } from "@/lib/categories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const section = pathname.startsWith("/women") ? "women" : "men";
  const priceRanges: PriceRange[] = getPriceRanges(section);
  const colors: string[] = getUniqueColors(section);

  const [price, setPrice] = useState<PriceRange>("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

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
    <aside className="w-52 shrink-0 md:border-r pr-6 flex md:flex-col  gap-6 p-4 pt-[8ch]">
      {/* Price */}
      <div className="hidden md:block">
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
      <div className="hidden md:block">
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

      <div className="md:hidden">
        <Select
          value={price}
          onValueChange={(val) => handlePrice(val as PriceRange)}
        >
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Select price range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Price</SelectLabel>
              {priceRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="md:hidden">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" className="w-full justify-between">
        {selectedColors.length > 0 ? selectedColors.join(", ") : "Colors"}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuGroup>
        <DropdownMenuLabel>Colors</DropdownMenuLabel>
        {colors.map((color) => (
          <DropdownMenuCheckboxItem
            key={color}
            checked={selectedColors.includes(color)}
            onCheckedChange={() => toggleColor(color)}
          >
            {color}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</div>
    </aside>
  );
}
