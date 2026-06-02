"use client";

import Form from "next/form";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { X } from "@phosphor-icons/react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("query") || "";
  const [value, setValue] = useState(initialQuery);

  const handleClear = () => {
    setValue("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("query");
    router.push(`/men?${params.toString()}`);
  };

  return (
    <Form action="/men" className="w-full px-5 md:px-0 md:max-w-xl">
      <div className="relative w-full">
        <input
          type="text"
          name="query"
          placeholder="E.g. Dragon"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full py-3 pl-5 pr-10 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
          autoComplete="off"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} weight="bold" />
          </button>
        )}
      </div>
    </Form>
  );
}