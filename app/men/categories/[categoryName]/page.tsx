import ModelsGrid from "@/app/components/ModelGrid"
import { getCategoryBySlug } from "@/lib/categories"
import { getModels } from "@/lib/models"
import type { CategoryPageProps } from "@/types"

type SearchParams = {
  price?: string
  colors?: string
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps & { searchParams: SearchParams }) {
  const { categoryName } = await params
  const { price, colors } = await searchParams

  const category = getCategoryBySlug(categoryName)
  const allModels = await getModels({ category: category.displayName })

  const filtered = allModels.filter((model) => {
    if (price && price !== "All") {
      if (price === "Under $10" && model.price >= 10) return false
      if (price === "$10 - $20" && (model.price < 10 || model.price > 20)) return false
      if (price === "$20 - $40" && (model.price < 20 || model.price > 40)) return false
      if (price === "Over $40" && model.price <= 40) return false
    }

    if (colors) {
      const selectedColors = colors.split(",")
      if (!selectedColors.includes(model.color)) return false
    }

    return true
  })

  return <ModelsGrid title={category.displayName} models={filtered} />
}