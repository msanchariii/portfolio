import { Link } from "react-router-dom";

export default function ProjectCard({
    link = `www.example.com`,
    title = `Project Title`,
    tech = `HTML, CSS, Js, React`,
    imgSrc,
    githubLink,
    desc,
}) {
    return (
        <div className="m-4 mx-auto w-[480px]   px-1  py-2">
            <div className="mockup-browser mx-0 w-full  border-2 border-white  bg-slate-900 shadow-sm shadow-slate-50 shadow-slate-50">
                <div className="mockup-browser-toolbar ">
                    <div className="input cursor-pointer border border-white">
                        <span className="hover:underline-black hover:bg-yellow-200 hover:text-black">
                            {link}
                        </span>
                    </div>
                </div>
                <div className="aspect-2/1 flex w-full flex-col justify-center border-t-2 border-white bg-base-200 p-0">
                    <img
                        className="aspect-video object-cover"
                        src={imgSrc}
                        alt=""
                        srcset=""
                    />
                    <div className="absolute bottom-2 right-2 mx-4 flex w-1/3 justify-around">
                        <div className="btn border-0 bg-gray-800 shadow shadow-white">
                            <Link to={githubLink}>Github</Link>
                        </div>
                        <div className="btn border-0 bg-gray-800 shadow shadow-white">
                            Visit
                        </div>
                    </div>
                    {/* <button className="">GitHub</button> */}
                </div>
            </div>
            <div className="my-4 h-44  px-2 py-1 text-white">
                <p className="">
                    # <strong className="underline">Title</strong> :{title}
                </p>
                <p className="mt-2 ">
                    # <strong className="underline">Tech</strong> : {tech}
                </p>
                <p className="mt-2 ">
                    # <strong className="underline">Description</strong> :{" "}
                    {desc}
                </p>
            </div>
        </div>
    );
}
