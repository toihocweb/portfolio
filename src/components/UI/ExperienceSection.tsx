"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Senior Fullstack Engineer",
        company: "Tech Solutions Inc.",
        period: "2021 - Present",
        description: "Leading a team of 5 developers building scalable cloud-native applications using Next.js, Node.js, and AWS.",
        stack: ["Next.js", "TypeScript", "AWS", "GraphQL"]
    },
    {
        id: 2,
        role: "Fullstack Developer",
        company: "Global Digital Agency",
        period: "2018 - 2021",
        description: "Developed and maintained multiple high-traffic e-commerce platforms. Optimized performance by 40%.",
        stack: ["React", "Node.js", "PostgreSQL", "Redis"]
    },
    {
        id: 3,
        role: "Backend Engineer",
        company: "StartUp Hub",
        period: "2015 - 2018",
        description: "Designed RESTful APIs and microservices architecture. Handled database design and migration strategies.",
        stack: ["Python", "Django", "Docker", "MySQL"]
    }
];

export function ExperienceSection() {
    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8 border-l border-white/10 hover:border-accent transition-colors group"
                    >
                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-gray-600 group-hover:bg-accent transition-colors" />

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-2xl font-bold font-display text-foreground">{exp.role}</h3>
                            <span className="flex items-center text-sm font-mono text-gray-500 mt-1 sm:mt-0">
                                <Calendar className="w-4 h-4 mr-2" />
                                {exp.period}
                            </span>
                        </div>

                        <div className="flex items-center text-accent mb-4 font-mono text-sm">
                            <Briefcase className="w-4 h-4 mr-2" />
                            {exp.company}
                        </div>

                        <p className="text-gray-400 mb-4 leading-relaxed">
                            {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {exp.stack.map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-gray-300 border border-white/5">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
