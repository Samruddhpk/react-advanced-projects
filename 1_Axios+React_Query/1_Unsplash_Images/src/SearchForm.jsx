import { useGlobalContext } from "./context";



const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();


    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        if (!searchValue) return;
        setSearchTerm(searchValue);
    };

    return (
        <div className="form-container">
            <h2>Pixplore</h2>
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" className="form-input" placeholder="people" name="search" />
                    <button className="submit-btn" type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};
export default SearchForm;