"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CTO at TechFlow",
        content: "Nhat is one of those rare engineers who sees the big picture. He didn't just build the features we asked for; he optimized our entire CI/CD pipeline, saving us 30% in build costs. A true 10x engineer.",
        rating: 5,
    },
    {
        id: 2,
        name: "David Chen",
        role: "Product Lead",
        content: "I've worked with many fullstack devs, but Nhat's attention to detail is unmatched. The 'Digital Architect' system he built for us is still the backbone of our platform 3 years later.",
        rating: 5,
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Engineering Manager",
        content: "Technically brilliant and a joy to work with. Nhat mentored our junior devs while shipping critical features for the Q4 launch. His code is clean, documented, and bulletproof.",
        rating: 5,
    }
];

export function Testimonials() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                            Trusted By <span className="text-accent">.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl font-mono">
                            I don't just write code; I build trust. Here's what past leaders have said about my impact.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <ScrollReveal key={t.id} delay={i * 0.1}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/30 transition-colors relative group"
                            >
                                <div className="absolute -top-4 -left-4 bg-black border border-white/10 p-3 rounded-2xl rotate-12 group-hover:rotate-0 transition-transform duration-300">
                                    <Quote className="w-6 h-6 text-accent" />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-8 min-h-[100px] italic">
                                    "{t.content}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-accent flex items-center justify-center font-bold text-black text-lg">
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold font-display text-lg">{t.name}</h4>
                                        <p className="text-xs text-accent font-mono">{t.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
