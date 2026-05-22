import modelsData from "../data/models.json"
import womenData from "../data/women.json"
import accessoriesData from "../data/accessories.json"
import type { Model, GetModelsParams } from "../types"

const models = modelsData as unknown as Model[]
const women = womenData as unknown as Model[]
const accessories = accessoriesData as unknown as Model[]

export async function getModels({ category }: GetModelsParams = {}): Promise<Model[]> {
  let filteredModels = [...models]
  if (category) {
    filteredModels = models.filter((model) => model.category === category)
  }
  return filteredModels
}

export async function getWomenData({ category }: GetModelsParams = {}): Promise<Model[]> {
  let filteredModels = [...women]
  if (category) {
    filteredModels = women.filter((model) => model.category === category)
  }
  return filteredModels
}

export async function getAccessoriesData({ category }: GetModelsParams = {}): Promise<Model[]> {
  let filteredModels = [...accessories]
  if (category) {
    filteredModels = accessories.filter((model) => model.category === category)
  }
  return filteredModels
}

export async function getModelById(id: string | number): Promise<Model> {
  const foundModel = models.find(
    (model) => model.id.toString() === id.toString()
  )
  if (!foundModel) {
    throw new Error(`Model with id ${id} not found`)
  }
  return foundModel
}