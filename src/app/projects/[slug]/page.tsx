import { projects } from "@/data/projects";
import { ArrowLeft, CheckCircle2, Cpu, LineChart, Target } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage(props: PageProps) {
    const params = await props.params;
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    // Default content if not specified (for placeholders)
    const content = project.content || {
        challenge: "Information coming soon.",
        strategy: "Implementation details pending.",
        results: ["Project completed successfully."],
        techStack: ["React", "Next.js"]
    };

    return (
        <main className="min-h-screen text-white selection:bg-accent selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm">BACK TO BASE</span>
                </Link>
                <div className="font-mono text-sm text-accent">{project.category} // PROTOCOL_V1</div>
            </nav>

            {/* Hero */}
            <section className="pt-40 pb-20 px-6 container mx-auto">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        {project.title}
                    </h1>
                    <p className="text-2xl text-gray-400 leading-relaxed font-light mb-12 max-w-2xl">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {content.techStack.map(tech => (
                            <span key={tech} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-accent">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive Content */}
            <section className="py-20 bg-white/5 border-t border-white/10">
                <div className="container mx-auto px-6 max-w-4xl space-y-24">

                    {/* Level 1: The Challenge */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div className="text-accent font-mono text-sm tracking-widest uppercase flex items-center gap-2 h-fit sticky top-32">
                            <Target className="w-4 h-4" />
                            01. The Mission
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">The Challenge</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                {content.challenge}
                            </p>
                        </div>
                    </div>

                    {/* Level 2: The Strategy */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div className="text-blue-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2 h-fit sticky top-32">
                            <Cpu className="w-4 h-4" />
                            02. The Hardware
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-6">The Strategy</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                {content.strategy}
                            </p>
                            <div className="p-6 rounded-2xl bg-black border border-white/10 font-mono text-xs text-gray-400 overflow-x-auto">
                                <span className="text-green-500">$</span> initializing_protocol<br />
                                <span className="text-green-500">$</span> executing_architecture_v2<br />
                                <span className="text-blue-400">INFO</span> optimizing_render_cycle...<br />
                                <span className="text-blue-400">INFO</span> edge_caching_enabled<br />
                                <span className="text-green-500">$</span> deploy_success
                            </div>
                        </div>
                    </div>

                    {/* Level 3: The Results */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-12">
                        <div className="text-green-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2 h-fit sticky top-32">
                            <LineChart className="w-4 h-4" />
                            03. The Loot
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-8">Key Outcomes</h2>
                            <div className="grid gap-6">
                                {content.results.map((result, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                                        <p className="text-lg text-gray-200">{result}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer Navigation */}
            <div className="border-t border-white/10 py-12 text-center">
                <Link href="/" className="inline-flex items-center gap-3 text-2xl font-display font-bold hover:text-accent transition-colors">
                    <ArrowLeft /> Return to Headquarters
                </Link>
            </div>
        </main>
    );
}
