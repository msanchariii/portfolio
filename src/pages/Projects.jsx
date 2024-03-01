import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section className="min-h-screen w-full flex justify-center items-stretch">
            <div className="w-full flex flex-wrap gap-8 justify-start">
                <ProjectCard
                    title="Hello World"
                    imgSrc={
                        "https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                />

                <ProjectCard
                    imgSrc={
                        "https://images.pexels.com/photos/17852406/pexels-photo-17852406/free-photo-of-people-walking-on-wooden-footpath-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                />

                <ProjectCard
                    imgSrc={
                        "https://images.pexels.com/photos/16961112/pexels-photo-16961112/free-photo-of-surrounded-by-circles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                />
                <ProjectCard
                    imgSrc={
                        "https://images.pexels.com/photos/16965790/pexels-photo-16965790/free-photo-of-ships-anchored-in-harbor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                />
            </div>
        </section>
    );
}
