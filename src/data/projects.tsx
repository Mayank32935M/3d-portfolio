import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor),
// so full-color marks like Mistral flatten to match the rest of the set.
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Repository &amp; Overview
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && repo !== live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos,
// rendered via MaskIcon so each one inherits the dock's currentColor.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  next: brand("Next.js", "nextdotjs-mono.svg"),
  chakra: brand("Chakra UI", "chakra-ui-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  prisma: brand("Prisma", "prisma-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mongo: brand("MongoDB", "mongodb-mono.svg"),
  express: brand("Express", "express-mono.svg"),
  reactQuery: brand("React Query", "react-query-mono.svg"),
  shadcn: brand("shadcn/ui", "shadcn-ui-mono.svg"),
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  docker: brand("Docker", "docker-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  socketio: brand("Socket.io", "socketdotio-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  vue: brand("Vue.js", "vuedotjs-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  motion: brand("Motion", "motion.svg"),
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">FastAPI</span>,
  },
  gemini: {
    title: "Gemini API",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Gemini</span>,
  },
  rust: {
    title: "Rust",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Rust</span>,
  },
  tauri: {
    title: "Tauri",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Tauri</span>,
  },
  leaflet: {
    title: "Leaflet GIS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">GIS</span>,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SQLite</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "forensic-x",
    category: "AI & Cyber Forensics",
    title: "FORENSIC-X",
    src: "/assets/projects/forensic_x_dashboard.png",
    screenshots: [
      "/assets/projects/forensic_x_dashboard.png",
      "/assets/projects/forensic_x_overview.png",
      "/assets/projects/forensic_x_timeline.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/Mayank32935M/FORENSIC-X",
    github: "https://github.com/Mayank32935M/FORENSIC-X",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🏆 National Finalist at SUTRAM 2026 (NFSU) · Creator &amp; Lead Developer
          </TypographyP>
          <TypographyP className="font-mono">
            FORENSIC-X is an end-to-end verifiable digital forensics and incident
            reconstruction framework engineered to bridge raw digital artifacts and
            court-admissible forensic reconstructions. Built on strict epistemic
            truth separation, an immutable on-disk evidence store, and a
            cryptographic chain-of-custody ledger.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Cryptographic Chain-of-Custody &amp; Evidence Ledger</TypographyH3>
          <p className="font-mono mb-2">
            Implements cryptographically signed SHA-256 evidence ledgers ensuring
            verifiable chain-of-custody integrity. An interactive Evidence Matrix
            catalogs digital artifacts with granular observations linked to source
            file offsets and exact line numbers.
          </p>
          <SlideShow
            images={[
              "/assets/projects/forensic_x_dashboard.png",
              "/assets/projects/forensic_x_overview.png",
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Incident Timeline Reconstruction &amp; Knowledge Graph</TypographyH3>
          <p className="font-mono mb-2">
            The temporal event reconstruction engine harmonizes multi-source incident
            chronologies through T0 deltas, UTC normalization, and drift adjustments.
            Coupled with a multi-entity knowledge graph mapping actors, network endpoints,
            USB registries, and lateral file transfers. Tested and verified with 19 passing
            automated test suites on an asynchronous FastAPI backend.
          </p>
          <SlideShow
            images={[
              "/assets/projects/forensic_x_timeline.png",
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "suraksha-sense",
    category: "AI & Fintech / Hackathons",
    title: "Suraksha Sense",
    src: "/assets/projects/suraksha_architecture.png",
    screenshots: [
      "/assets/projects/suraksha_architecture.png",
      "/assets/projects/suraksha_workflow.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.gemini,
      ],
    },
    live: "https://github.com/Mayank32935M/Suraksha-Sense",
    github: "https://github.com/Mayank32935M/Suraksha-Sense",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🛡️ Built for Paytm Build for India AI Hackathon (Track 2) · Creator &amp; Developer
          </TypographyP>
          <TypographyP className="font-mono">
            Suraksha Sense detects emerging insurance coverage blind spots when major life
            milestones happen (marriage, childbirth, property or vehicle purchases),
            evaluating policy trustworthiness and hidden caveats before purchasing decisions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Trust Proof Scoring &amp; Caveat Audits</TypographyH3>
          <p className="font-mono mb-2">
            Features an explainable 0–100 Trust Proof Score analyzing sample policy
            wording to flag hidden exclusions and fine-print caveats. Delivers
            multi-lingual conversational guidance leveraging Gemini API and Sarvam AI voice synthesis.
          </p>
          <SlideShow
            images={[
              "/assets/projects/suraksha_architecture.png",
              "/assets/projects/suraksha_workflow.png",
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Decoupled Privacy-First Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Engineered with a clean, decoupled architecture: React (Vite) frontend with
            Tailwind CSS and an Express proxy backend. Upholds strict privacy-first data
            minimization principles with zero user PII collected or stored.
          </p>
        </div>
      );
    },
  },
  {
    id: "null-game",
    category: "Game Systems & Simulation",
    title: "NULL Game",
    src: "/assets/projects/forensic_x_timeline.png",
    screenshots: [
      "/assets/projects/forensic_x_timeline.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.gemini,
      ],
    },
    live: "https://github.com/Mayank32935M/null-game",
    github: "https://github.com/Mayank32935M/null-game",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🎲 Original Game Engine &amp; World Simulation · Creator &amp; Systems Developer
          </TypographyP>
          <TypographyP className="font-mono">
            NULL is a browser-based psychological intelligence thriller game exploring
            player moral agency, power vacuums, and stateful consequence simulation
            without heavy game engine runtimes.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Deterministic Engine &amp; Core Turn Loop</TypographyH3>
          <p className="font-mono mb-2">
            Engineered with a deterministic PRNG simulation loop powered by seeded
            Mulberry32 algorithms, ensuring reproducible game states. Drives an 8-stage
            turn lifecycle: Observe → Investigate → Hypothesize → Decide → Resolve →
            Advance → Report → Reassess.
          </p>

          <TypographyH3 className="my-4 mt-8">The Ledger Mechanics &amp; UI Surfaces</TypographyH3>
          <p className="font-mono mb-2">
            Implements five interactive UI surfaces: Dashboard, The Ledger, Agency Intel,
            The Companion, and The Void. Backed by 20/20 passing unit test suites
            verifying game logic, state machines, and narrative branch consistency.
          </p>
        </div>
      );
    },
  },
  {
    id: "stivium",
    category: "Developer Tools / Systems",
    title: "Stivium IDE",
    src: "/assets/projects/stivium_logo.svg",
    screenshots: [
      "/assets/projects/stivium_logo.svg",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.rust,
        PROJECT_SKILLS.tauri,
      ],
    },
    live: "https://github.com/adityabhatnagar1/stivium",
    github: "https://github.com/adityabhatnagar1/stivium",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            ⚙️ Systems Engineering Project · Co-Creator &amp; Frontend Architect
          </TypographyP>
          <TypographyP className="font-mono">
            Built in collaboration with Aditya Bhatnagar. Stivium is an experimental,
            memory-efficient desktop code editor engineered with a native Rust core and a
            modern Webview frontend via Tauri.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Ultra-Low Memory Footprint &amp; Native Performance</TypographyH3>
          <p className="font-mono mb-2">
            Designed to challenge bloated 400MB+ Electron shells, achieving sub-60MB startup
            RAM usage with compiled Rust file I/O operations and tokenization pipelines.
          </p>

          <TypographyH3 className="my-4 mt-8">Modular UI Surface &amp; Window Chrome</TypographyH3>
          <p className="font-mono mb-2">
            Engineered with TypeScript, React, and customized window chrome for workspace
            pane management, rapid file navigation, and low-latency keystroke handling.
          </p>
        </div>
      );
    },
  },
  {
    id: "redzone",
    category: "Geospatial AI & Disaster Systems",
    title: "REDZONE",
    src: "/assets/projects/redzone_seismic.png",
    screenshots: [
      "/assets/projects/redzone_seismic.png",
      "/assets/projects/redzone_erosion.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.leaflet,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://github.com/neptn-ui/Redzone",
    github: "https://github.com/neptn-ui/Redzone",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🌍 Smart India Hackathon (SIH 2026) · Team Project (neptn-ui)
          </TypographyP>
          <TypographyP className="font-mono">
            REDZONE is a decision-support platform designed for disaster management
            authorities (ASDMA &amp; NDRF), delivering a Risk-Aware Relocation Engine for
            flood- and erosion-vulnerable districts of Assam (Majuli, Dhemaji, Cachar).
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Relocation Intelligence: Risk → Reason → Destination → Route → Action</TypographyH3>
          <p className="font-mono mb-2">
            Transforms static flood mapping into actionable relocation manifests. Features a
            live Command Center with Priority Queues (P0–P2) powered by Explainable AI factor
            breakdowns, safe zone suitability scoring, and alternate evacuation route evaluation.
          </p>
          <SlideShow
            images={[
              "/assets/projects/redzone_seismic.png",
              "/assets/projects/redzone_erosion.png",
            ]}
          />

          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <p className="font-mono mb-2">
            Led frontend design, impact strategy, user journey mapping, and the live pitch to
            hackathon evaluating judges.
          </p>
        </div>
      );
    },
  },
  {
    id: "eventtwin",
    category: "Simulation & Urban Optimization",
    title: "EventTwin",
    src: "/assets/projects/eventtwin_zonemap.png",
    screenshots: [
      "/assets/projects/eventtwin_zonemap.png",
    ],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.sqlite,
      ],
    },
    live: "https://github.com/neptn-ui/Eventtwin",
    github: "https://github.com/neptn-ui/Eventtwin",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            🏟️ SIH 2026 Internal Round · Team Project (neptn-ui)
          </TypographyP>
          <TypographyP className="font-mono">
            EventTwin simulates dynamic crowd density, pedestrian choke points, and emergency
            egress routing for high-capacity public gatherings and campus cultural summits.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Campus Festival Digital Twin Simulation</TypographyH3>
          <p className="font-mono mb-2">
            Validated on the Anugoonj campus cultural festival dataset. Models dynamic
            pedestrian flow bottlenecks, zone-map density heatmaps, and facility resource strain
            in real time.
          </p>
          <SlideShow
            images={[
              "/assets/projects/eventtwin_zonemap.png",
            ]}
          />

          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <p className="font-mono mb-2">
            Responsible for UI selection, visual architecture, stakeholder impact strategy,
            and presentation synthesis.
          </p>
        </div>
      );
    },
  },
];

export default projects;
