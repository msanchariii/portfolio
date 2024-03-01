function SkillIcon({ img, title }) {
    return (
        <div className="h-36 gap-4 flex flex-col justify-between">
            <img className="h-32" src={img} alt="" srcset="" />
            <h2>{title}</h2>
        </div>
    );
}
export default function SkillsToBe() {
    return (
        <>
            <div className="min-h-screen text-center flex flex-col justify-between">
                <section className="my-16">
                    <h1 className="text-4xl my-16">Front End</h1>
                    <section className="w-screen">
                        <div className="flex flex-wrap justify-evenly items-baseline">
                            <SkillIcon img={"/html.png"} title={"HTML"} />
                            <SkillIcon img={"/css.png"} title={"CSS"} />
                            <SkillIcon img={"/js.png"} title={"Js"} />
                            <SkillIcon
                                img={"/tailwind.png"}
                                title={"TailwindCSS"}
                            />
                            <SkillIcon img={"/react.png"} title={"React.js"} />
                        </div>
                    </section>
                </section>
                <section className="my-16">
                    <h1 className="text-4xl my-16">Back End</h1>
                    <section className="w-screen">
                        <div className="flex flex-wrap justify-evenly items-baseline">
                            <SkillIcon img={"/nodejs.png"} title={"Node.js"} />
                            <SkillIcon img={"/go.png"} title={"Go Lang"} />
                            <SkillIcon
                                img={"/appwrite.svg"}
                                title={"Appwrite"}
                            />
                        </div>
                    </section>
                </section>
                <section className="my-16">
                    <h1 className="text-4xl my-16">Database</h1>
                    <section className="w-screen my-16">
                        <div className="flex flex-wrap justify-evenly items-baseline">
                            <SkillIcon img={"/psql.png"} title={"PostgreSQL"} />
                            <SkillIcon img={"/mongodb.png"} title={"MongoDB"} />
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}
