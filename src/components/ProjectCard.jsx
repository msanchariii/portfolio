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
        <div className="m-4 mx-auto">
            <div className="mockup-browser w-full border bg-slate-800 ">
                <div className="mockup-browser-toolbar">
                    <div className="input cursor-pointer hover:underline">
                        {link}
                    </div>
                </div>
                <div className="flex aspect-video w-full flex-col justify-center bg-base-200">
                    <img
                        className="aspect-video max-w-lg  object-cover"
                        src={imgSrc}
                        alt=""
                        srcset=""
                    />
                    <div className="absolute bottom-2 right-2 mx-4 flex w-1/3 justify-around">
                        <div className="btn border-0 bg-gray-800/75">
                            <Link to={githubLink}>Github</Link>
                        </div>
                        <div className="btn border-0 bg-gray-800/75">Visit</div>
                    </div>
                    {/* <button className="">GitHub</button> */}
                </div>
            </div>
            <div className="my-4">
                <p>
                    #<strong>Title: </strong>
                    {title}
                </p>
                <p>
                    <strong>#Tech: </strong> {tech}
                </p>
            </div>
        </div>
    );
}
