import AOS from "aos";
import "aos/dist/aos.css";

function SkillIcon({ img, title }) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <div className="h-40 flex flex-col justify-between">
                <img className="h-32" src={img} alt="" srcset="" />
                <h2>{title}</h2>
            </div>
        </div>
    );
}

export default function Skills() {
    AOS.init();
    return (
        <section className="text-center">
            <section className="flex flex-col justify-evenly my-16">
                <div
                    className="w-1/2 text-center mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                >
                    <h1 className="text-4xl py-16">Skills</h1>
                </div>

                <section className="">
                    <div className="flex flex-wrap justify-evenly items-baseline px-16">
                        <SkillIcon img={"/html.png"} title={"HTML"} />
                        <SkillIcon img={"/css.png"} title={"CSS"} />
                        <SkillIcon img={"/js.png"} title={"Js"} />
                        <SkillIcon
                            img={"/tailwind.png"}
                            title={"TailwindCSS"}
                        />
                        <SkillIcon img={"/react.png"} title={"React.js"} />
                        <SkillIcon img={"/next.png"} title={"Next.js"} />
                        <SkillIcon img={"/mongo.png"} title={"MongoDB"} />
                    </div>
                </section>
            </section>
        </section>
    );
}
