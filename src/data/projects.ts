
export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    color: string;
    cols: number;
    slug: string;
    content?: {
        heroImage?: string;
        challenge: string;
        strategy: string;
        results: string[];
        techStack: string[];
    }
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Neon Nexus",
        category: "System Architecture",
        description: "A high-performance microservices mesh visualization tool.",
        color: "bg-blue-500/10",
        cols: 2,
        slug: "neon-nexus",
        content: {
            challenge: "The client needed to visualize real-time traffic across 500+ microservices without causing browser lag. Existing solutions like Jaeger were too static.",
            strategy: "I implemented a WebGL-based rendering engine using Three.js to handle 10k+ dynamic nodes. I moved the graph calculation logic to a Rust-based WebAssembly module for near-native performance.",
            results: [
                "Reduced render time by 90% (from 500ms to 50ms).",
                "Supported 50 simultaneous users with real-time WebSocket updates.",
                "Featured in 'System Design Daily' newsletter."
            ],
            techStack: ["Next.js", "Three.js", "Rust (WASM)", "WebSockets"]
        }
    },
    {
        id: 2,
        title: "Void Commerce",
        category: "E-Commerce",
        description: "Headless Shopify storefront with sub-second page loads.",
        color: "bg-purple-500/10",
        cols: 1,
        slug: "void-commerce",
        content: {
            challenge: "Traditional Shopify liquid themes were failing core web vitals. Conversion rates were dropping due to 3s+ load times.",
            strategy: "Rebuilt the frontend using Next.js 14 and React Server Components. Implemented edge caching for product data and optimistic UI updates for the cart.",
            results: [
                "Perfect 100 Lighthouse Performance Score.",
                "40% increase in mobile conversion rate.",
                "0.8s time-to-interactive."
            ],
            techStack: ["Next.js", "Shopify Storefront API", "Redis", "Tailwind"]
        }
    },
    {
        id: 3,
        title: "Cyber Finance",
        category: "FinTech",
        description: "Real-time crypto trading dashboard.",
        color: "bg-emerald-500/10",
        cols: 1,
        slug: "cyber-finance",
        content: {
            challenge: "Traders needed data updates faster than the 1s polling interval of the old API. Every millisecond of latency meant lost profit.",
            strategy: "Migrated from REST to gRPC-web for smaller payload sizes. Implemented a custom lightweight charting library since TradingView was too heavy.",
            results: [
                "Data latency reduced to <50ms.",
                "Chart rendering at 120fps on high-end displays.",
                "Onboarded $10M in daily volume within first month."
            ],
            techStack: ["React", "gRPC", "Go", "Web Workers"]
        }
    },
    {
        id: 4,
        title: "AI Matrix",
        category: "AI/ML",
        description: "Generative AI interface for code documentation.",
        color: "bg-pink-500/10",
        cols: 2,
        slug: "ai-matrix",
        content: {
            challenge: "Describing complex legacy codebases took developers hours. We needed an AI agent that could 'read' the repo context.",
            strategy: "Built a RAG (Retrieval Augmented Generation) pipeline using Vector Databases. Created a streaming UI that progressively renders markdown as the AI thinks.",
            results: [
                "Docs generation time cut from 4 hours to 5 minutes.",
                "Adopted by the entire engineering department (50+ devs).",
                "Reduced onboarding time for new hires by 50%."
            ],
            techStack: ["Next.js", "OpenAI API", "Pinecone", "LangChain"]
        }
    }
];
