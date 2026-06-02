import ModelsGrid from "@/components/ModelGrid";
import { getCategoryBySlug } from "@/lib/categories";
import { getModels } from "@/lib/models";
import type { CategoryPageProps } from "@/types";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  const models = await getModels({ category: categoryName });

  return <ModelsGrid title={category.displayName} models={models} />;
}
