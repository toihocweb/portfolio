"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Terminal, Cpu, Globe, Layers, Box, Settings, PenTool, Database } from "lucide-react";

interface ToolCategory {
    title: string;
    icon: any;
    items: string[];
}

const tools: ToolCategory[] = [
    {
        title: "Languages",
        icon: Terminal,
        items: ["TypeScript", "Python", "Rust", "Go", "SQL", "GraphQL"]
    },
    {
        title: "Frameworks",
        icon: Layers,
        items: ["Next.js", "React", "Node.js", "Tailwind CSS", "Three.js", "Framer Motion"]
    },
    {
        title: "Infrastructure",
        icon: Box,
        items: ["Docker", "Kubernetes", "AWS", "Vercel", "PostgreSQL", "Redis"]
    },
    {
        title: "The Workshop",
        icon: Settings,
        items: ["VS Code", "Figma", "Git", "Linear", "Warp", "Postman"]
    }
];

export function Toolbox() {
    return (
        <section className="py-32 relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            My Toolbox <span className="text-accent">.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl font-mono">
                            The weapons developed and mastered over 8 years of combat.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tools.map((category, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <motion.div
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-lg bg-accent/10">
                                        <category.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <h3 className="font-bold font-display text-xl">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded text-sm font-mono bg-black/40 text-gray-400 border border-white/5 hover:text-white hover:border-white/20 transition-all cursor-crosshair"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
