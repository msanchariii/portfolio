import { Link, NavLink } from "react-router-dom";
import Projects from "./Projects";
Projects;
function AboutMe() {
    return (
        <>
            <section className="p-6 my-12 md:p-12 mx-auto">
                <h1 className="text-4xl py-16">About Me !</h1>

                <div className="flex flex-col lg:flex-row lg:items-stretch">
                    <div
                        className="w-full lg:w-2/5 p-6 flex flex-col text-center gap-6 mx-auto lg:mx-6 min-h-screen"
                        id="col-one"
                    >
                        <div className="rounded-full mx-auto overflow-hidden w-3/5">
                            <img
                                src="/fsf.jpg"
                                alt=""
                                className="object-cover"
                            />
                        </div>
                        <div className="mx-auto">
                            <ul className="">
                                <li>Hello there, I'm Sanchari</li>
                                <li className="text-sm">
                                    building fullstack websites...
                                </li>
                            </ul>
                        </div>
                        <div className="btn opacity-70 bg-slate-900">
                            View Resume
                        </div>
                        <div className="btn opacity-70 bg-slate-900">
                            <Link to={"https://github.com/msanchariii"}>
                                Visit GitHub
                            </Link>
                        </div>
                        <div className="btn opacity-70 bg-slate-900">
                            <NavLink to={"/projects"}>
                                View All Projects
                            </NavLink>
                        </div>
                    </div>
                    <div
                        className=" bg-gradient-to-br from-slate-800 to-slate-900 drop-shadow h-screen w-full lg:w-3/5 p-12 flex flex-col justify-between mx-auto my-auto lg:mx-6 min-h-screen text-left"
                        id="col-two"
                    >
                        <ul className=" list-disc" id="education">
                            <h1 className="text-lg font-bold font-mono italic text-left">
                                # Education:
                            </h1>
                            <section className="px-6 font-thin">
                                <li className="py-4">
                                    IT Undergrad from Govt. College of Engg. &
                                    Ceramic Technology
                                </li>
                            </section>
                        </ul>
                        <ul className=" list-disc" id="education">
                            <h1 className="text-lg font-bold font-mono italic  text-left">
                                # Bio:
                            </h1>
                            <section className="px-6 font-thin">
                                I am currently a student at Government College
                                of Engineering and Ceramic Technology, where I
                                am pursuing a B. Tech degree in Information
                                Technology. My fascination for technology has
                                led me to explore various fields. I am
                                constantly learning and expanding my skillset,
                                and this website represents one of my projects
                                where I was able to apply my knowledge and
                                creativity. I am excited to continue growing and
                                developing my skills, and am eager to take on
                                new challenges.
                            </section>
                        </ul>
                        {/* <ul className=" list-disc" id="experience">
                            <h1 className="text-lg font-medium font-mono italic">
                                # Experience:
                            </h1>
                            <section className="px-6 py-4">
                                <li>Lorem, ipsum dolor.</li>
                                <li>sit amet consectetur adipisicing elit.</li>
                                <li> Eius saepe rem. </li>
                                <li> nam dignissimos vitae?</li>
                                <li>Lorem ipsum dolor </li>
                            </section>
                        </ul> */}
                        <div className="" id="contact">
                            <h1 className="text-lg font-bold font-mono italic  text-left">
                                # Connect Me On:
                            </h1>
                            <section className="flex w-full md:w-1/2 py-2 px-1 md:px-4 justify-between">
                                <img
                                    src="/linkedin.svg"
                                    className="hover:bg-slate-800 p-4 cursor-pointer"
                                    alt=""
                                    srcset=""
                                />
                                <img
                                    src="/mail.svg"
                                    className="hover:bg-slate-800 p-4 cursor-pointer"
                                    alt=""
                                    srcset=""
                                />
                                <img
                                    src="/twitter.svg"
                                    className="hover:bg-slate-800 p-4 cursor-pointer"
                                    alt=""
                                    srcset=""
                                />
                                <img
                                    src="/github.svg"
                                    className="hover:bg-slate-800 p-4 cursor-pointer"
                                    alt=""
                                    srcset=""
                                />
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AboutMe;
