"use client";

import { usePathname } from "next/navigation";
import { getAllCategories } from "@/lib/categories";
import type { Category } from "@/types";
import NavLink from "./NavLink";

export default function CategoriesNav() {
  const pathname = usePathname();
  const section = pathname.startsWith("/women") ? "women" : "men";
  const categories: Category[] = getAllCategories(section);

  return (
    <aside className="absolute top-0 z-10 w-full bg-white border-b border-gray-200 md:w-64 md:top-1/3 md:-translate-y-1/2 md:border-none p-4">
      <div className="relative">
        <nav className="w-full overflow-x-auto md:overflow-visible scrollbar-hide">
          <ul className="flex px-4 py-3 space-x-4 whitespace-nowrap md:flex-col md:p-0 md:space-x-0 md:space-y-2">
            {categories.map((item) => {
              const href = `/${section}/categories/${item.slug}`;
              return (
                <NavLink
                  key={item.slug}
                  href={href}
                  isActive={pathname === href}
                >
                  {item.displayName}
                </NavLink>
              );
            })}
          </ul>
        </nav>
        <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-linear-to-l from-white to-transparent md:hidden" />
      </div>
    </aside>
  );
}
