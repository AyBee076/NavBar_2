"use client";

import Link from "next/link";
import { HeartIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { ModelCardProps } from "@/types";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ModelCard({ model, section = "men" }: ModelCardProps) {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const { addToCart } = useCart(); 
const toggleSize = (e: React.MouseEvent, size: string) => {
  e.preventDefault();
  setSelectedSizes((prev) =>
    prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
  );
};

const handleAddToCart = (e: React.MouseEvent) => {
  e.preventDefault();
  if (selectedSizes.length === 0) return;
  selectedSizes.forEach((size) => {
    addToCart({
      id: model.id,
      name: model.name,
      price: model.price,
      image: model.images[0],
      size,
      quantity: 1,
      section,
    });
  });
};

  return (
    <div

      className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all"
      aria-labelledby={`model-${model.id}-title`}
    >
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
        role="article"
      >
        
        <div className="relative aspect-square">
          <Link href={`/${section}/${model.id}`} >
          <Image
            src={model.images[0]}
            alt={model.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </Link>
        </div>
        <div className="p-4">
          <div className="flex flex-col justify-between mb-2 min-h-[3.5rem]">
            <span id={`model-${model.id}-title`} className="text-sm">
              {model.category}
            </span>
            <h2
              id={`model-${model.id}-title`}
              className="text-base font-semibold text-gray-800 line-clamp-2"
            >
              {model.name}
            </h2>
            <p className="text-gray-800 text-sm line-clamp-2 min-h-[2rem] leading-[1.25rem]">
              {`GH₵ ${model.price}`}
            </p>
          </div>
          <div
            className="flex items-center mt-2 text-gray-600"
            aria-label={`${model.likes} likes`}
          >
            <HeartIcon
              className="w-5 h-5 mr-1 text-gray-400"
              aria-hidden="true"
            />
            <span>{model.likes}</span>
          </div>
          <div className="mt-2">
            {model.size.map((item) => (
  <Button
    variant="outline"
    key={item}
    onClick={(e) => toggleSize(e, item)}
    className={selectedSizes.includes(item) ? "bg-sky-600 text-white" : "bg-gray-300"}
  >
    {item}
  </Button>
))}
          </div>
          <div className="mt-5">
            <Button className="w-full" onClick={handleAddToCart}>
              Add to Cart <ShoppingCartIcon size={32} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
