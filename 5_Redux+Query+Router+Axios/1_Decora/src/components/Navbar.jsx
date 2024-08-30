import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";
import NavLinks from "./NavLinks";


const themes = {
    light: "light",
    dark: "dark"
};

const getThemeFromLocalStorage = () => {
    return localStorage.getItem("theme") || themes.light;
};

const Navbar = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);


    const handleTheme = () => {
        const { dark, light } = themes;
        const newTheme = theme === light ? dark : light;
        setTheme(newTheme);
    };


    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <nav className='bg-base-200'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    {/* TITLE */}
                    <NavLink
                        to='/'
                        className='hidden lg:flex btn btn-primary text-3xl items-center'
                    >
                        D
                    </NavLink>
                    {/* DROPDOWN */}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <FaBarsStaggered className='h-6 w-6' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
                        >
                            <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal flex gap-x-4'>
                        <NavLinks />
                    </ul>
                </div>
                <div className='navbar-end'>
                    {/* THEME SETUP */}
                    <label className='swap swap-rotate'>
                        <input type='checkbox' onChange={handleTheme} />
                        {/* sun icon*/}
                        <BsSunFill className='swap-on h-4 w-4' />
                        {/* moon icon*/}
                        <BsMoonFill className='swap-off h-4 w-4' />
                    </label>
                    {/* CART LINK */}
                    <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                        <div className='indicator'>
                            <BsCart3 className='h-6 w-6' />
                            <span className='badge badge-sm badge-primary indicator-item'>
                                {numItemsInCart}
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;