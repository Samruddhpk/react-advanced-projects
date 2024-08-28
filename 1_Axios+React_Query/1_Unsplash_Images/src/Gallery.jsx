import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./context";

import axios from "axios";
const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}`;


const Gallery = () => {

    const { searchTerm } = useGlobalContext();
    const response = useQuery({
        queryKey: ['images', searchTerm],
        queryFn: async () => {
            const result = await axios.get(`${url}&query=${searchTerm}`);
            return result.data;
        }
    });

    if (response.isLoading) {
        return <section className="gallery-container">
            <h4></h4>
            <h4>Loading...</h4>
            <h4></h4>
        </section>;
    }

    if (response.isError) {
        return <section className="gallery-container">
            <h4></h4>
            <h4>There was an error...</h4>
            <h4></h4>
        </section>;
    }

    const results = response.data.results;
    if (results.length < 1) {
        return <section className="gallery-container">
            <h4></h4>
            <h4>No results found...</h4>
            <h4></h4>
        </section>;
    }
    return (
        <section className="gallery-container">
            {results.map((item) => {
                const url = item?.urls?.regular;
                return <a href={url} target="_blank" key={item.id}  ><img src={url} alt={item.alt_description} className="img"></img> </a>;
            })}
        </section>
    );
};
export default Gallery;