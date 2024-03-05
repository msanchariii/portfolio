import ProjectCard from "../components/ProjectCard";
import { projects } from "../data.js";

export default function Projects() {
    return (
        <div>
            <h1 className="py-16 text-center text-4xl" id="projects">
                Projects !
            </h1>

            <section className="mb-20 flex min-h-screen w-full items-stretch justify-center">
                <div className="flex w-full flex-wrap justify-start gap-8">
                    {projects.map((item) => {
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
            </section>
        </div>
    );
}
