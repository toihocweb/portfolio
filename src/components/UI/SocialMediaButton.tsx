"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Facebook, Share2, Mail } from "lucide-react";

export function SocialMediaButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center gap-4" onMouseLeave={() => setIsOpen(false)}>
            {/* Primary: LinkedIn */}
            <a
                href="https://www.linkedin.com/in/nhatbui1995/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-accent transition-colors duration-300 flex items-center gap-2 overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Linkedin className="w-5 h-5 relative z-10" />
                <span className="relative z-10">LinkedIn</span>
            </a>

            {/* Secondary: Connect with Holographic Menu */}
            <div
                className="relative"
                onMouseEnter={() => setIsOpen(true)}
            >
                <button
                    className={`
                        flex items-center gap-2 px-6 py-3 rounded-full font-bold border transition-all duration-300
                        ${isOpen
                            ? 'bg-white/20 border-white/40 text-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                            : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                        }
                    `}
                >
                    <Share2 className="w-5 h-5" />
                    <span>Connect</span>
                </button>

                {/* The Holographic Projection */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 flex gap-2"
                        >
                            {/* Connector Line */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-t from-transparent to-white/20" />

                            <div className="p-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl flex gap-2 shadow-2xl">
                                <SocialIcon
                                    href="https://www.facebook.com/thaynhatdepchai/"
                                    icon={Facebook}
                                    label="Facebook"
                                    color="hover:text-blue-500"
                                />
                                <div className="w-px bg-white/10 my-1" />
                                <SocialIcon
                                    href="https://github.com/toihocweb"
                                    icon={Github}
                                    label="Github"
                                    color="hover:text-white"
                                />
                                <div className="w-px bg-white/10 my-1" />
                                <SocialIcon
                                    href="mailto:buidinhnhat2009@gmail.com"
                                    icon={Mail}
                                    label="Email"
                                    color="hover:text-red-400"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function SocialIcon({ href, icon: Icon, label, color }: { href: string, icon: any, label: string, color: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl hover:bg-white/10 transition-all group flex flex-col items-center gap-1 min-w-[60px] ${color} text-gray-400`}
        >
            <Icon className="w-6 h-6" />
            <span className="text-[10px] font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6 bg-black px-2 py-1 rounded border border-white/10 whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </a>
    );
}
