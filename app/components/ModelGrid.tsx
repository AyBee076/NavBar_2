import React from "react";
import ModelCard from "@/app/components/ModelCard";
import { ModelsGridProps, Model } from "@/types";

export default function ModelsGrid({ title, models, section = "men" }: ModelsGridProps) {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {models.map((model: Model) => (
          <ModelCard key={model.id} model={model} section={section} />
        ))}
      </div>
    </div>
  );
}