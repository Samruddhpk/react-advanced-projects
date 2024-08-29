import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
    return (
        <section className="bg-white py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <article>
                    <SectionTitle text="code and coffee" />
                    <p className="text-slate-600 mt-8 leading-loose">I’m a self-driven individual with a strong passion for web development. I’ve dedicated myself to mastering front-end technologies, including React, JavaScript, and Node.js. I’ve built various projects, from simple sites to complex e-commerce applications, showcasing my skills and determination to succeed. With a focus on continuous improvement, I’m committed to overcoming obstacles and securing a fulfilling role in the tech industry.</p>
                </article>
                <img src={aboutImg} className="w-full h-64" alt="aboutImg" />
            </div>
        </section>
    );
};
export default About;