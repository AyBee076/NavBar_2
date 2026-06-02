"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@phosphor-icons/react";
import type { ModelCardProps } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useCart } from "@/context/CartContext";

export default function ProductPage({ model }: ModelCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleAddToBag = () => {
    if (selectedSizes.length === 0) return;
    selectedSizes.forEach((size) => {
      addToCart({
        id: model.id,
        name: model.name,
        price: model.price,
        image: model.images[0],
        size,
        quantity,
        section: "men",
      });
    });
  };

  return (
    <div>
      {/* IMAGE AND ADD TO BAG */}
      <div className="flex gap-5 p-10">
        {/* IMAGE */}
        <div className="w-1/2 px-5">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              duration: 25,
            }}
          >
            <CarouselContent>
              {model.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-square">
                    <Image
                      src={image}
                      alt={`Shirt ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* DETAILS */}
        <div className="w-1/2 flex flex-col px-5 md:px-8">
          <h1 className="text-lg md:text-4xl">{model.name}</h1>
          <h3 className="mt-4 text-2xl">{model.category}</h3>
          <h3 className="mt-4 text-2xl">{`GH₵ ${model.price}`}</h3>

          {/* COLOR CHOICE */}
          <div className="flex gap-2 mt-4">
            <Button className="w-10 h-10 bg-amber-300" />
            <Button className="w-10 h-10 bg-green-800" />
          </div>

          {/* SIZES */}
          <div className="mt-4">
            <h3>SELECT SIZE</h3>
            <div className="mt-2 flex gap-2 flex-wrap">
              {model.size.map((item) => (
                <Button
                  variant="outline"
                  key={item}
                  onClick={() => toggleSize(item)}
                  className={
                    selectedSizes.includes(item)
                      ? "bg-sky-600 text-white border-sky-600"
                      : "bg-gray-300"
                  }
                >
                  {item}
                </Button>
              ))}
            </div>
            {selectedSizes.length === 0 && (
              <p className="text-xs text-red-400 mt-1">Please select a size</p>
            )}
          </div>

          {/* STOCK INDICATOR */}
          <div className="mt-4">
            {model.stock > 0 ? (
              <p
                className={`text-sm font-medium ${
                  model.stock <= 5 ? "text-orange-500" : "text-green-600"
                }`}
              >
                {model.stock <= 5
                  ? `Only ${model.stock} left in stock`
                  : "In Stock"}
              </p>
            ) : (
              <p className="text-sm font-medium text-red-500">Out of Stock</p>
            )}
          </div>

          {/* QUANTITY SELECTOR */}
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">QUANTITY</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-6 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(model.stock, q + 1))}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO BAG AND WISH LIST */}
          <div className="flex flex-col gap-2 mt-4 lg:mt-27">
            <Button
              size="lg"
              className="bg-gray-900"
              onClick={handleAddToBag}
              disabled={selectedSizes.length === 0 || model.stock === 0}
            >
              ADD TO BAG
            </Button>
            <Button size="lg" variant="outline" className="bg-gray-300">
              <HeartIcon size={32} color="pink" />
              ADD TO WISH LIST
            </Button>
          </div>
        </div>
      </div>

      <div className="px-5">
        {/* PRODUCT DESCRIPTION */}
        <div className="flex gap-5 mt-10 justify-between border-t pt-6">
          <div className="flex-1 border-r pr-6">
            <h1 className="font-semibold mb-2">DESCRIPTION</h1>
            <p className="text-gray-600 text-sm">{model.description}</p>
          </div>
          <div className="flex-1 border-r pr-6">
            <h1 className="font-semibold mb-2">FIT AND FEATURES</h1>
            <p className="text-gray-600 text-sm">{model.fit}</p>
          </div>
          <div className="flex-1">
            <h1 className="font-semibold mb-2">FABRIC AND CARE</h1>
            <p className="text-gray-600 text-sm">{model.fabric}</p>
          </div>
        </div>

        {/* YOU MIGHT ALSO LIKE */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">You Might Also Like</h2>
        </div>

        {/* REVIEWS */}
        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-gray-500 text-sm">4.0 out of 5</span>
          </div>
          <p className="text-gray-500 text-sm">
            No reviews yet. Be the first to review this product.
          </p>
        </div>
      </div>
    </div>
  );
}