import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar sticky top-0 z-50 w-full bg-slate-900/80 px-4 shadow-md md:px-12">
            <div className="navbar-start">
                {/* Dropdown for mobile phone */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-64 bg-base-100 p-2 shadow"
                    >
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        {/* <li>
                            <Link to={"/skills"}>Skills</Link>
                        </li> */}
                    </ul>
                </div>

                {/* Logo */}
                <Link
                    to="/"
                    className="btn btn-ghost font-Fuggles text-4xl normal-case"
                >
                    msanchariii
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal gap-8 px-1">
                    <li>
                        <NavLink to="/">Home !</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/skills">Skills</NavLink>
                    </li> */}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="btn mx-1 rounded-xl bg-transparent hover:btn-neutral hover:shadow-sm hover:shadow-slate-400">
                    <Link to={"https://github.com/msanchariii"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8f9498"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-github"
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </Link>
                </div>
                <div className="btn mx-1 rounded-xl bg-transparent hover:btn-neutral hover:shadow-sm hover:shadow-slate-400">
                    <Link to={"https://www.linkedin.com/in/msanchari/"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#8f9498"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-linkedin"
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default NavBar;
