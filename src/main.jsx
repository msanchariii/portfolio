import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
// import layout
import Layout from "./Layout.jsx";
// import pages & components
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "aboutme",
                element: <AboutMe />,
            },
            {
                path: "projects",
                element: <Projects />,
            },
            {
                path: "skills",
                element: <Skills />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
