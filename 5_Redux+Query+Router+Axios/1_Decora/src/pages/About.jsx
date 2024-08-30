const About = () => {
    return (
        <>
            <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
                <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
                    We love
                </h1>
                <div className="stats bg-primary shadow">
                    <div className="stat">
                        <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                            Decora
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
                Decora is your ultimate destination for stylish and modern furniture that transforms any space into a home. We blend functionality with contemporary design to bring you pieces that are as comfortable as they are beautiful. Discover a curated selection of furniture that elevates your living experience, all in one seamless shopping journey.
            </p>
        </>
    );
};
export default About;