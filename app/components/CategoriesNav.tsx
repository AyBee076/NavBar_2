"use client";

import { Category } from "@/types";
import { getAllCategories } from "@/lib/categories";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

export default function ModelNavBar() {
  const categories: Category[] = getAllCategories();
  const pathname = usePathname();
  return (
    <aside className="absolute top-0 z-10 w-full bg-white border-b border-gray-200 md:w-64 md:top-1/3 md:-translate-y-1/2 md:border-none p-4">
      <div className="relative ">
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-3">
            <NavLink href="/men" isActive={pathname === "/men"}>
              All
            </NavLink>
            {categories.map((item: Category) => {
              return (
                <NavLink
                  href={`/men/categories/${item.slug}`}
                  key={item.slug}
                  isActive={pathname === `/men/categories/${item.slug}`}
                >
                  {item.displayName}
                </NavLink>
              );
            })}
          </ul>
        </nav>
        {/* Fading edge/gradient for horizontal scroll hint on mobile */}
        <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-linear-to-l from-white to-transparent md:hidden" />
      </div>
    </aside>
  );
}
