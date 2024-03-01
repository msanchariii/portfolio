import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <section className="bg-gradient-to-tr from-cyan-900 via-teal-800 to-emarald-950 font-mono">
            <NavBar />
            <Outlet />
            <Footer />
        </section>
    );
}
// from-slate-950 via-slate-700 to-slate-950
