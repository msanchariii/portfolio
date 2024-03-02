import { Link, NavLink } from "react-router-dom";
import { about } from "../data";

function AboutMe() {
    return (
        <>
            <section className="mx-auto my-12 p-6 md:p-12">
                <h1 className="py-16 text-4xl">About Me !</h1>

                <div className="flex flex-col lg:flex-row lg:items-stretch">
                    <div
                        className="mx-auto flex min-h-screen w-full flex-col gap-6 p-6 text-center lg:mx-6 lg:w-2/5"
                        id="col-one"
                    >
                        <div className="mx-auto w-3/5 overflow-hidden rounded-full">
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
                        <div className="btn bg-slate-900 opacity-70">
                            <Link
                                to={
                                    "https://docs.google.com/document/d/1jw6UhFr7ciXQBV_eAhkNqNzOmfE84neOCnPIN3Cxbag/edit?usp=sharing"
                                }
                            >
                                View Resume
                            </Link>
                        </div>
                        <div className="btn bg-slate-900 opacity-70">
                            <Link to={"https://github.com/msanchariii"}>
                                Visit GitHub
                            </Link>
                        </div>
                        <div className="btn bg-slate-900 opacity-70">
                            <NavLink to={"/projects"}>
                                View All Projects
                            </NavLink>
                        </div>
                    </div>
                    <div
                        className=" mx-auto my-auto flex h-screen min-h-screen w-full flex-col justify-between bg-gradient-to-br from-slate-800 to-slate-900 p-12 text-left drop-shadow lg:mx-6 lg:w-3/5"
                        id="col-two"
                    >
                        <ul className=" list-disc" id="education">
                            <h1 className="text-left font-mono text-lg font-bold italic">
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
                            <h1 className="text-left font-mono text-lg font-bold  italic">
                                # Bio:
                            </h1>
                            <section className="px-6 font-thin">
                                {about.bio}
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
                            <h1 className="text-left font-mono text-lg font-bold  italic">
                                # Connect Me On:
                            </h1>
                            <section className="flex w-full justify-between px-1 py-2 md:w-1/2 md:px-4">
                                <Link to={about.linkedin}>
                                    <img
                                        src="/linkedin.svg"
                                        className="cursor-pointer p-4 hover:bg-slate-800"
                                        alt=""
                                        srcset=""
                                    />
                                </Link>
                                <Link to={`mailto:${about.email}`}>
                                    <img
                                        src="/mail.svg"
                                        className="cursor-pointer p-4 hover:bg-slate-800"
                                        alt=""
                                        srcset=""
                                    />
                                </Link>
                                <Link to={about.twitter}>
                                    <img
                                        src="/twitter.svg"
                                        className="cursor-pointer p-4 hover:bg-slate-800"
                                        alt=""
                                        srcset=""
                                    />
                                </Link>
                                <Link to={about.github}>
                                    <img
                                        src="/github.svg"
                                        className="cursor-pointer p-4 hover:bg-slate-800"
                                        alt=""
                                        srcset=""
                                    />
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default AboutMe;
