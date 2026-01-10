"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
    return (
        <section className="py-32 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                <ScrollReveal>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl -z-10" />
                        <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                            <span className="text-9xl opacity-20">👨‍💻</span>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="space-y-8">
                    <ScrollReveal delay={0.2}>
                        <h2 className="text-4xl md:text-5xl font-bold font-display">About Me <span className="text-accent">.</span></h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-mono">
                            <p>
                                <strong className="text-white">Xin chào! I'm Bui Dinh Nhat.</strong>
                            </p>
                            <p>
                                With over 8 years in the game, I've evolved from hacking together HTML snippets to architecting large-scale distributed systems.
                                I breathe code and live for that "Aha!" moment when a complex problem unravels into a simple, elegant solution.
                            </p>
                            <p>
                                My philosophy is simple: <span className="text-accent">Build it right, build it fast, and make it look awesome.</span> Whether it's optimization,
                                infrastructure, or pixel-perfect UI, I bring the same level of obsession to every layer of the stack.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex gap-8 border-t border-white/10 pt-8 mt-8">
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">8+</span>
                                <span className="text-sm text-gray-500 font-mono">YEARS EXP</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">50+</span>
                                <span className="text-sm text-gray-500 font-mono">PROJECTS</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-white mb-1">100%</span>
                                <span className="text-sm text-gray-500 font-mono">PASSION</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}
