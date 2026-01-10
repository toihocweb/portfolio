"use client";

import { motion } from "framer-motion";

const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "AWS", "Docker", "GraphQL",
    "Three.js", "TailwindCSS", "PostgreSQL", "Redis", "Framer Motion", "Kubernetes"
];

export function TechStack() {
    return (
        <div className="py-20 overflow-hidden bg-white/5 border-y border-white/10 relative">
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-background via-transparent to-background" />

            <div className="flex relative">
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear"
                    }}
                >
                    {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold font-display text-white/20 select-none">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
