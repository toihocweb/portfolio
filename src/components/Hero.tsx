"use client";

import { ScrollReveal } from "./UI/ScrollReveal";

export function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center pointer-events-none">

            <div className="z-10 text-center px-4 pointer-events-auto">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-mono tracking-widest text-gray-400">AVAILABLE FOR WORK</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <h1 className="text-6xl md:text-9xl font-bold font-display tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 uppercase">
                        NHAT BUI
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto font-mono">
                        Senior Fullstack Engineer with 8+ years of experience. <br />
                        Crafting immersive web experiences with code, motion, and 3D.
                    </p>
                </ScrollReveal>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
}
