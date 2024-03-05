import { Link, NavLink } from "react-router-dom";
import { about } from "../data";

function ConnectMeIcon({ icon, link }) {
    return (
        <Link to={link}>
            <img
                src={icon}
                className="cursor-pointer rounded-xl p-4 hover:bg-slate-800 hover:shadow-sm hover:shadow-slate-400"
                alt=""
                srcset=""
            />
        </Link>
    );
}

function AboutMe() {
    return (
        <>
            <section className=" mx-auto my-12 bg-gradient-to-tr from-[#2a9d8f] to-[#264653] p-6 md:p-12">
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
                        <Link to={about.resume}>
                            <div className="btn w-80 bg-slate-900 opacity-90 shadow shadow-white">
                                View Resume
                            </div>
                        </Link>
                        <Link to={"https://github.com/msanchariii"}>
                            <div className="btn w-80 bg-slate-900 opacity-90 shadow shadow-white">
                                Visit GitHub
                            </div>
                        </Link>
                        <NavLink to={"/projects"}>
                            <div className="btn w-80 bg-slate-900 opacity-90 shadow shadow-white">
                                View All Projects
                            </div>
                        </NavLink>
                    </div>
                    <div
                        className="sha\ mx-auto my-auto flex h-screen min-h-screen w-full flex-col justify-between rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-12 text-left shadow shadow-white  drop-shadow lg:mx-6 lg:w-3/5"
                        id="col-two"
                    >
                        <ul className=" list-disc" id="education">
                            <h1 className="text-left font-mono text-lg font-bold italic ">
                                # <span className="underline">Education</span>:
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
                                # <span className="underline">Bio</span>:
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
                                #{" "}
                                <span className="underline">Connect Me On</span>
                                :{" "}
                            </h1>
                            <section className="flex w-full justify-between px-1 py-2 md:w-1/2 md:px-4">
                                <ConnectMeIcon
                                    icon="/linkedin.svg"
                                    link={about.linkedin}
                                />

                                <ConnectMeIcon
                                    icon="/mail.svg"
                                    link={`mailto:${about.email}`}
                                />

                                <ConnectMeIcon
                                    icon="/github.svg"
                                    link={about.github}
                                />

                                <ConnectMeIcon
                                    icon="/twitter.svg"
                                    link={about.twitter}
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
