import { Link } from "react-router-dom";

export default function ProjectCard({
    link = `www.example.com`,
    title = `Project Title`,
    tech = `HTML, CSS, Js, React`,
    imgSrc,
    githubLink,
}) {
    return (
        <div className="mx-auto m-4">
            <div className="mockup-browser border w-full bg-slate-800 ">
                <div className="mockup-browser-toolbar">
                    <div className="input hover:underline cursor-pointer">
                        {link}
                    </div>
                </div>
                <div className="flex justify-center flex-col bg-base-200 w-full aspect-video">
                    <img
                        className="object-cover max-w-lg  aspect-video"
                        src={imgSrc}
                        alt=""
                        srcset=""
                    />
                    <div className="w-1/3 absolute bottom-2 right-2 flex justify-around mx-4">
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
