function SkillIcon({ img, title }) {
    return (
        <div className="h-32 flex flex-col justify-between">
            <img className="h-28" src={img} alt="" srcset="" />
            <h2>{title}</h2>
        </div>
    );
}

export default function Skills() {
    return (
        <section className="text-center">
            <section className="flex flex-col justify-evenly">
                <h1 className="text-4xl py-16">Front End</h1>
                <section className="">
                    <div className="flex flex-wrap justify-evenly items-baseline">
                        <SkillIcon img={"/html.png"} title={"HTML"} />
                        <SkillIcon img={"/css.png"} title={"CSS"} />
                        <SkillIcon img={"/js.png"} title={"Js"} />
                        <SkillIcon
                            img={"/tailwind.png"}
                            title={"TailwindCSS"}
                        />
                        <SkillIcon img={"/react.png"} title={"React.js"} />
                        <SkillIcon img={"/next.png"} title={"Next.js"} />
                    </div>
                </section>
            </section>
        </section>
    );
}
