import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carousalImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
                <h1 className="max-w-2xl text-4xl font-bold tracking-tighter sm:text-6xl">
                    We're changing <br /> the way people <br />
                    shop.
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8">
                    Experience the joy of finding the perfect <br /> pieces  to enhance your space, all with just a few clicks.
                </p>

                <div className="mt-10">
                    <Link to="products" className="btn btn-primary">Our Products</Link>
                </div>
            </div>

            <div className="xs:hidden sm:hidden lg:h-[25rem] lg:flex lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
                {carousalImages.map((image, index) => {
                    return <div key={index} className="carousel-item">
                        <img src={image} className="rounded-box h-full w-80 object-cover" alt="img" />
                    </div>;
                })}
            </div>
        </div>
    );
};
export default Hero;