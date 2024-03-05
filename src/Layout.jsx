import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        // <section className="to-emarald-950 bg-gradient-to-tr from-cyan-900 via-teal-800 font-mono">
        //     <NavBar />
        //     <Outlet />
        //     <Footer />
        // </section>
        <section className=" font-mono">
            <NavBar />
            <Outlet />
            <Footer />
        </section>
    );
}
// from-slate-950 via-slate-700 to-slate-950
