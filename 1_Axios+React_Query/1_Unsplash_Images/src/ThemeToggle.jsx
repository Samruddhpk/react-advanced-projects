import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";
import { useGlobalContext } from "./context";



const ThemeToggle = () => {
    const { toggleDarkTheme, isDarkTheme } = useGlobalContext();

    return (
        <header className="toggle-container">
            <button className="toggle-btn" onClick={toggleDarkTheme}>
                {isDarkTheme ? <MdOutlineWbSunny /> : <MdOutlineDarkMode />}
            </button>
        </header>
    );
};
export default ThemeToggle;