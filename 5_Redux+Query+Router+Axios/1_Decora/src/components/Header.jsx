import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="py-2 bg-neutral text-neutral-content">
            <div className="flex gap-x-6 justify-center items-center">
                <Link to="/login" className="link link-hover text-xs sm:text-sm">
                    Sign in/ Guest
                </Link>
                <Link to="/register" className="link link-hover text-xs sm:text-sm">
                    Create an Account
                </Link>
            </div >
        </header >
    );
};
export default Header;