import { Link, NavLink } from "react-router-dom";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import ProjectCard from "../components/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { topProjects } from "../data";
import Hero from "../components/Hero";

function Home() {
    AOS.init();
    return (
        <div className="grid min-h-screen place-content-center text-center font-bold text-neutral-300">
            <Hero />
            <span
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <AboutMe></AboutMe>
            </span>
            <Skills></Skills>
            <span
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                {/* Best Projects */}
                <h1 className="my-8 py-16 text-4xl">Projects</h1>

                <div className="mb-10 flex scale-90 text-left">
                    {topProjects.map((item) => {
                        return (
                            <ProjectCard
                                key={item.id}
                                title={item.title}
                                imgSrc={item.imgSrc}
                                link={item.link}
                                githubLink={item.githubLink}
                                tech={item.tech}
                                desc={item.description}
                            />
                        );
                    })}
                </div>
                <NavLink to={"/projects"}>
                    <div className="btn mx-auto mb-20 mt-0 w-1/3 bg-slate-900 opacity-70">
                        View All
                    </div>
                </NavLink>
            </span>
        </div>
    );
}
export default Home;
