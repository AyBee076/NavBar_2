"use client";

import Link from "next/link";
import { HeartIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { ModelCardProps } from "@/types";
import Image from "next/image";

export default function ModelCard({ model, section = "men" }: ModelCardProps) {
  return (
    <Link
      href={`/${section}/${model.id}`}
      className="block group hover:shadow-[0_5px_12px_rgba(0,0,0,0.1)] hover:-translate-y-[3px] transition-all"
      aria-labelledby={`model-${model.id}-title`}
    >
      <div
        className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
        role="article"
      >
        <div className="relative aspect-square">
          <Image
            src={model.images[0]}
            alt={model.name}
            fill
            className="object-cover"
          />
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
          <div className="flex items-center mt-2 text-gray-600" aria-label={`${model.likes} likes`}>
            <HeartIcon className="w-5 h-5 mr-1 text-gray-400" aria-hidden="true" />
            <span>{model.likes}</span>
          </div>
          <div className="mt-2">
            {model.size.map((item) => (
              <Button variant="outline" className="bg-gray-300" key={item}>{item}</Button>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}