import { Link } from "react-router-dom";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import ProjectCard from "../components/ProjectCard";
function Home() {
    return (
        <div className="w-full min-h-screen grid place-content-center font-bold text-neutral-300 text-center">
            <div className="text-5xl font-Fuggles h-screen flex items-center justify-center ">
                <div className="blur h-4/6 w-96 opacity-30 absolute bg-slate-950 rounded-full"></div>
                <Link to={"/aboutme"}>Sanchari Mandal</Link>
            </div>
            <AboutMe></AboutMe>
            <Skills></Skills>
            {/* Best Projects */}
            <h1 className="text-4xl py-16 my-8">Projects</h1>

            <div className="flex text-left mb-20">
                <ProjectCard
                    title="Hello World"
                    imgSrc={
                        "https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                />
                <ProjectCard
                    title="Hello World"
                    imgSrc={
                        "https://images.pexels.com/photos/18280489/pexels-photo-18280489/free-photo-of-light-black-and-white-city-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                />
            </div>
            <div className="btn opacity-70 bg-slate-900 w-1/2 mx-auto mt-0 mb-8">
                <Link to={"/projects"}>View All</Link>
            </div>
        </div>
    );
}
export default Home;
