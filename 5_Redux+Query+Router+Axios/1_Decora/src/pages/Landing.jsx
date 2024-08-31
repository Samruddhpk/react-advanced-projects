import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "../utils";


// TODO: SETUP NODEJS API ENDPOINT
const url = "/products?featured=true";

// query
const featuredProductsQuery = {
    queryKey: ["featuredProducts"],
    queryFn: () => customFetch(url)
};


export const loader = (queryClient) => async () => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery);
    const products = response.data.data;
    return { products };
};


const Landing = () => {
    return (
        <>
            <Hero />
            <FeaturedProducts />
        </>
    );
};
export default Landing;