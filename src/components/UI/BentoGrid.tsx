"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function BentoGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
            {projects.map((project, i) => (
                <Link href={`/projects/${project.slug}`} key={project.id} className={project.cols === 2 ? 'md:col-span-2' : 'md:col-span-1'}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`
                            relative h-full group overflow-hidden rounded-3xl border border-white/10 p-8
                            ${project.color} backdrop-blur-sm
                            hover:border-accent/50 transition-all cursor-pointer hover:shadow-2xl hover:shadow-accent/10
                        `}
                    >
                        <div className="flex justify-between items-start mb-8 relative z-20">
                            <div className="p-3 bg-white/5 rounded-full backdrop-blur-md border border-white/10">
                                <Code className="text-accent h-6 w-6" />
                            </div>
                            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-accent group-hover:text-black transition-colors">
                                <ArrowUpRight className="text-white group-hover:text-black transition-all" />
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-8 right-8 z-20">
                            <span className="text-xs font-mono text-accent mb-2 block tracking-wider uppercase">{project.category}</span>
                            <h3 className="text-3xl font-bold font-display text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 line-clamp-2">{project.description}</p>
                        </div>

                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none z-10" />

                        {/* Background Hover Effect */}
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
