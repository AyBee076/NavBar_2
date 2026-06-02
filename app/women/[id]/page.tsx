import React from "react";
import type { ModelDetailPageProps } from "@/types/index";
import { getWomenDataById } from "@/lib/models";

import ProductPage from "@/components/ProductPage";

export default async function ModelDetailPage({
  params,
}: ModelDetailPageProps) {
  const { id } = await params;
  const model = await getWomenDataById(id);
  console.log(model);
  return <ProductPage model={model} />;
}
