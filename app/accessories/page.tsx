import ModelsGrid from "../components/ModelGrid";
import { getAccessoriesData } from "@/lib/models";
import { ModelsPageProps } from "@/types";
import Form from "next/form"

export default async function page({ searchParams }: ModelsPageProps){
  const query = (await searchParams)?.query?.toLowerCase() || "";

  const models = await getAccessoriesData();
  
  const filteredModels = query
    ? models.filter((obj) => obj.name.toLowerCase().includes(query)) ||
      models.filter((obj) => obj.description.toLowerCase().includes(query))
    : models;
  return (
     <>
      <Form action="/men"  className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder="E.g. Dragon"
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
          autoComplete="off"
          defaultValue={query}
        />
      </Form>
      <ModelsGrid title="Accerories" models={filteredModels} />
    </>
  )
}
