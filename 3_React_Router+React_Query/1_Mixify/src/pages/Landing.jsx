import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { SearchForm, CocktailList } from "../components";


// Search cocktail by name
const cocktailsSearchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailQuery = (searchTerm) => {
    return {
        queryKey: ["search", searchTerm || "all"],
        queryFn: async () => {
            const response = await axios(`${cocktailsSearchUrl}${searchTerm}`);
            return response.data.drinks;
        }
    };
};

export const loader = (queryClient) => async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
    return { searchTerm };
};


const Landing = () => {
    const { searchTerm } = useLoaderData();
    const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

    return (
        <>
            <SearchForm searchTerm={searchTerm} />
            <CocktailList drinks={drinks} />
        </>
    );
};
export default Landing;