import React from "react";
import type { ModelDetailPageProps } from "@/types/index";
import { getWomenDataById } from "@/lib/models";

export default async function ModelDetailPage({
  params,
}: ModelDetailPageProps) {
  const { id } = await params;
  const model = await getWomenDataById(id);
  console.log(model);
  return <h1> The id of this model is {model.name}</h1>;
}
