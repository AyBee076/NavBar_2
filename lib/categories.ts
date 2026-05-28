import menCategories from "../data/categories.json";
import categoriesWomen from "../data/categorieswomen.json";
import { Category } from "../types";
import modelsData from "../data/models.json"
import womenData from "../data/women.json"
import type { Model, PriceRange } from "@/types"

const models = modelsData as unknown as Model[]
const women = womenData as unknown as Model[]

export function getUniqueColors(section: string = "men"): string[] {
  const data = section === "women" ? women : models
  const allColors = data.map((model) => model.color)
  return [...new Set(allColors)]
}

export function getPriceRanges(section: string = "men"): PriceRange[] {
  const data = section === "women" ? women : models
  const prices = data.map((model) => model.price)
  const max = Math.max(...prices)
  const min = Math.min(...prices)

  const ranges: PriceRange[] = ["All"]
  if (min < 10) ranges.push("Under $10")
  if (max >= 10 && min <= 20) ranges.push("$10 - $20")
  if (max >= 20 && min <= 40) ranges.push("$20 - $40")
  if (max > 40) ranges.push("Over $40")

  return ranges
}

export function getAllCategories(section: string = "men"): Category[] {
  return section === "women" ? categoriesWomen : menCategories
}

export function getCategoryBySlug(slug: string): Category {
  const allCats = [...menCategories, ...categoriesWomen ]
  const category = allCats.find((c) => c.slug === slug)
  if (!category) throw new Error(`Category with slug ${slug} not found`)
  return category
}


export function getDisplayNameFromSlug(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category.displayName;
}
