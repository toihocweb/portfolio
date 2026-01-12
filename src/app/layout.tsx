import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { ParticleWave } from "@/components/Canvas/ParticleWave";
import { GoogleAnalytics } from "@next/third-parties/google";
import { CursorEffect } from "@/components/UI/CursorEffect";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["300", "400", "500", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nhatbui.site"),
  title: {
    default: "Nhat Bui | Senior Fullstack Engineer",
    template: "%s | Nhat Bui"
  },
  description: "Portfolio of Nhat Bui, a Senior Fullstack Engineer with 8+ years of experience specializing in scalable architecture, Next.js, and modern web technologies.",
  openGraph: {
    title: "Nhat Bui | Senior Fullstack Engineer",
    description: "Building scalable, high-performance web applications with modern tech stacks.",
    url: "https://nhatbui.site",
    siteName: "Nhat Bui Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Nhat Bui - Senior Fullstack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nhat Bui | Senior Fullstack Engineer",
    description: "Building scalable, high-performance web applications with modern tech stacks.",
    creator: "@nhatbui",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-background text-foreground font-body selection:bg-accent selection:text-black cursor-none">
        <CursorEffect />
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
                "https://www.linkedin.com/in/nhatbui1995/",
                "https://www.facebook.com/thaynhatdepchai/"
              ],
              "knowsAbout": ["Fullstack Development", "React", "Node.js", "System Architecture", "AWS"]
            })
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-Q4Z3ESW6MZ" />
    </html>
  );
}
