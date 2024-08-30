import { Outlet } from "react-router-dom";


const HomeLayout = () => {
    return (
        <>
            <nav>
                <span className="text-4xl text-primary">Decora</span>
            </nav>
            <Outlet />
        </>
    );
};
export default HomeLayout;