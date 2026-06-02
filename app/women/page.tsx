import ModelsGrid from "../../components/ModelGrid";
import { getWomenData } from "@/lib/models";
import Form from "next/form";

type SearchParams = {
  query?: string;
  price?: string;
  colors?: string;
};

export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { query, price, colors } = await searchParams;

  const normalizedQuery = query?.toLowerCase() || "";
  const allModels = await getWomenData();

  const filtered = allModels.filter((model) => {
    // Search filter
    if (normalizedQuery) {
      const matchesName = model.name.toLowerCase().includes(normalizedQuery);
      const matchesDescription = model.description
        .toLowerCase()
        .includes(normalizedQuery);
      if (!matchesName && !matchesDescription) return false;
    }

    // Price filter
    if (price && price !== "All") {
      if (price === "Under $10" && model.price >= 10) return false;
      if (price === "$10 - $20" && (model.price < 10 || model.price > 20))
        return false;
      if (price === "$20 - $40" && (model.price < 20 || model.price > 40))
        return false;
      if (price === "Over $40" && model.price <= 40) return false;
    }

    // Color filter
    if (colors) {
      const selectedColors = colors.split(",");
      if (!selectedColors.includes(model.color)) return false;
    }

    return true;
  });

  return (
    <>
      <Form action="/women" className="w-full px-5 md:px-0 md:max-w-xl">
        <input
          type="text"
          name="query"
          placeholder="E.g. Dragon"
          className="w-full py-3 pl-5 pr-5 text-sm placeholder-gray-500 bg-white border border-[#606060] rounded-full focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
          autoComplete="off"
          defaultValue={normalizedQuery}
        />
      </Form>
      <ModelsGrid title="Women" models={filtered} section="women" />
    </>
  );
}
