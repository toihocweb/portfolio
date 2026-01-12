import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/UI/AboutSection";
import { BentoGrid } from "@/components/UI/BentoGrid";
import { ExperienceSection } from "@/components/UI/ExperienceSection";
import { TechStack } from "@/components/UI/TechStack";
import { Toolbox } from "@/components/UI/Toolbox";
import { Testimonials } from "@/components/UI/Testimonials";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative z-10">
        <Hero />

        {/* Use a gradient mask instead of a solid background to let the particles show through */}
        <div className="bg-gradient-to-b from-transparent via-background/80 to-background/90 backdrop-blur-sm border-t border-white/5">
          <AboutSection />
          <TechStack />
          <Toolbox />
          <ExperienceSection />

          <div className="container mx-auto px-6 py-32">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-16">
              Featured Work <span className="text-accent">.</span>
            </h2>
            <BentoGrid />
          </div>

          <Testimonials />

          {/* Footer / Terminal */}
          <footer className="py-20 border-t border-white/10 bg-black/80">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <Terminal className="w-12 h-12 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-display font-bold mb-4">Let's build something impossible.</h3>

              <div className="flex justify-center gap-6 mb-8">
                <a href="https://www.facebook.com/thaynhatdepchai/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  Facebook
                </a>
                <a href="https://www.linkedin.com/in/nhatbui1995/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/toihocweb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                  GitHub
                </a>
              </div>

              <a href="mailto:buidinhnhat2009@gmail.com" className="text-gray-400 hover:text-accent transition-colors font-mono block mb-8">
                buidinhnhat2009@gmail.com
              </a>
              <p className="text-sm text-gray-600 font-mono">© {new Date().getFullYear()} Bui Dinh Nhat. System Online.</p>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
