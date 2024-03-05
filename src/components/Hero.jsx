import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MyComponent = () => (
    <motion.div
        animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 270, 0],
            borderRadius: ["90%", "86%", "90%"],
            // repeatCount: "infinity",
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
        }}
        className="absolute h-4/6 w-96 rounded-full bg-slate-950 opacity-30  blur"
    />
);

function Hero() {
    return (
        <div className="flex h-screen items-center justify-center font-Fuggles text-5xl font-semibold text-white">
            {/* <div className="absolute h-4/6 w-96 rounded-full bg-slate-950 opacity-30 blur"></div> */}
            <MyComponent />
            <h1 className="">Sanchari Mandal</h1>
        </div>
    );
}

export default Hero;
