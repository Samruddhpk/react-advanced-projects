import { Link, Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {

    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading";
    const value = "some value";

    return (
        <>
            <Navbar />
            <section className="page">
                {isPageLoading ? <div className="loading"></div> : <Outlet context={value} />}
            </section>
        </>
    );
};
export default HomeLayout;