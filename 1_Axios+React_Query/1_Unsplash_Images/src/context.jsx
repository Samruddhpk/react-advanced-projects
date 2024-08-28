import { useContext, createContext, useState, useEffect } from "react";


const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;

    const storedDarkMode = localStorage.getItem("darkTheme") === true;

    return prefersDarkMode || storedDarkMode;
};

const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState("people");

    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem("darkTheme", newDarkTheme);
    };

    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme);
    }, [isDarkTheme]);

    return <AppContext.Provider value={{
        isDarkTheme, searchTerm, setSearchTerm, toggleDarkTheme
    }}>
        {children}
    </AppContext.Provider>;
};



export const useGlobalContext = () => {
    return useContext(AppContext);
};


export { AppContext, AppProvider };
