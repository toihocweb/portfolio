import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { ParticleWave } from "@/components/Canvas/ParticleWave";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["300", "400", "500", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Bui Dinh Nhat | Senior Fullstack Engineer",
  description: "Portfolio of Bui Dinh Nhat, a Senior Fullstack Engineer with 8+ years of experience specializing in scalable architecture and modern web technologies.",
  openGraph: {
    title: "Bui Dinh Nhat | Senior Fullstack Engineer",
    description: "8+ Years of Experience in Fullstack Development.",
    type: "profile",
    images: ["/og.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-background text-foreground font-body selection:bg-accent selection:text-black">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <ParticleWave />
        </div>
        <div className="relative z-10">
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Bui Dinh Nhat",
              "jobTitle": "Senior Fullstack Engineer",
              "url": "https://nhatbui.site",
              "sameAs": [
                "https://github.com/toihocweb",
                "https://www.linkedin.com/",
                "https://www.facebook.com/thaynhatdepchai/"
              ],
              "knowsAbout": ["Fullstack Development", "React", "Node.js", "System Architecture", "AWS"]
            })
          }}
        />
      </body>
    </html>
  );
}
