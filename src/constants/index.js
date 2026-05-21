import { shopify, starbucks, sideline, UF, vocalsphere, daybeats, minesweeper, vc, poke, p2p } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cpp,
    java,
    Python,
    SQL,
    r,
    aws,
    jira,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: Python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: SQL,
        name: "SQL",
        type: "Backend",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Backend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Other",
    },
    {   
        imageUrl: github,
        name: "GitHub",
        type: "Other",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Other"
    }
];

export const experiences = [
        {
            title: "Master of Science in Computer Science",
            company_name: "University of Florida",
            icon: UF,
            iconBg: "#ffffff",
            date: "August 2026 - December 2027",
            points: [

            ],
        },
       {
        title: "Bachelor's of Science in Computer Science",
        company_name: "University of Florida",
        icon: UF,
        iconBg: "#ffffff",
        date: "August 2022 - May 2026",
        points: [
            "Minor in Statistics",
            "Relevant Coursework: Data Structures & Algorithms, Database Systems, Computer Architecture, Enterprise Software Engineering, Embedded Systems",
            "3.70 Major GPA",
            "3.43 Cumulative GPA",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dominicghizzoni',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dominicghizzoni/',
    }
];

export const projects = [

  // 🥇 TIER 1 — ELITE CS SIGNAL
  {
    iconUrl: p2p,
    theme: 'btn-back-blue',
    name: 'P2P File Sharing System',
    role: 'Systems Developer',

    problem:
      'Centralized file sharing systems create bottlenecks and single points of failure.',

    system:
      'Designed a peer-to-peer architecture using Python TCP sockets for direct device-to-device file transfer.',

    features:
      'Custom TCP protocol, multi-peer connections, file chunking and reconstruction.',

    tradeoffs:
      'Prioritized reliability and networking principles over encryption and production hardening.',

    outcome:
      'Implemented a distributed file-sharing system demonstrating core networking concepts.',

    tech: 'Python • TCP Sockets • Networking'
  },

  {
    iconUrl: vc,
    theme: 'btn-back-orange',
    name: 'Vertex Cover (NP-Complete Solver)',
    role: 'Algorithm Engineer',

    problem:
      'Vertex Cover is an NP-complete problem requiring exploration of exponential graph subsets.',

    system:
      'Implemented brute-force solver and polynomial-time certifier to validate solutions and analyze complexity.',

    features:
      'Graph parsing, subset evaluation, solution verification, runtime/memory analysis.',

    tradeoffs:
      'Separated solver and certifier to balance correctness with computational analysis.',

    outcome:
      'Performed experimental evaluation of NP-complete solving performance on varying graph sizes.',

    tech: 'C++ • Graph Theory • Algorithms • Complexity Analysis'
  },

  {
    iconUrl: sideline,
    theme: 'btn-back-green',
    name: 'Sideline',
    role: 'Scrum Master • Full-Stack Engineer',

    problem:
      'Sports teams lacked a centralized platform for scheduling, media sharing, and coordination.',

    system:
      'Built MERN stack system with JWT authentication and AWS S3 media storage.',

    features:
      'Role-based access control, team management, scheduling system, media uploads.',

    tradeoffs:
      'Decoupled media storage from backend API for scalability using AWS S3.',

    outcome:
      'Delivered production-style platform across 3 Agile sprints.',

    tech: 'React • Node.js • Express • MongoDB • AWS S3 • JWT • Jira',

    link: 'https://github.com/blakemontiegel/cis4914-senior-design',
    deploy: 'https://jettnguyen.github.io/Sideline/'
  },

  // 🥈 TIER 2 — APPLICATION SYSTEMS
  {
    iconUrl: vocalsphere,
    theme: 'btn-back-purple',
    name: 'VocalSphere',
    role: 'Full-Stack Engineer',

    problem:
      'No lightweight platform for sharing and discovering social audio content.',

    system:
      'Designed React + Node.js + MongoDB architecture with structured media and user schemas.',

    features:
      'Audio uploads, content feed system, user profiles, REST API design.',

    tradeoffs:
      'Optimized for simplicity and rapid iteration over large-scale media processing.',

    outcome:
      'Built scalable MVP social audio platform with persistent media storage.',

    tech: 'React • Node.js • MongoDB • Python • Express',

    link: null
  },

  {
    iconUrl: daybeats,
    theme: 'btn-back-black',
    name: 'DayBeats',
    role: 'Full-Stack Engineer',

    problem:
      'Users lack real-time music discovery tailored to mood and listening behavior.',

    system:
      'Integrated Spotify Web API into a full-stack React + Node.js application.',

    features:
      'OAuth authentication, playlist generation, animated UI with Framer Motion.',

    tradeoffs:
      'Relied on external APIs to prioritize frontend experience over backend storage.',

    outcome:
      'Delivered real-time personalized music recommendation platform.',

    tech: 'React • Node.js • Spotify API • Tailwind CSS • Framer Motion',

    link: 'https://github.com/dominicghizzoni/DayBeats',
  },

  // 🥉 TIER 3 — SUPPORTING PROJECTS
  {
    iconUrl: poke,
    theme: 'btn-back-yellow',
    name: 'PokeTeamer',
    role: 'Full-Stack Engineer',

    problem:
      'No system exists to map personality traits to structured Pokémon team generation.',

    system:
      'Built LLM-powered recommendation engine using OpenAI API and structured Pokémon dataset matching.',

    features:
      'Natural language input parsing, token-based prompting, dynamic team generation.',

    tradeoffs:
      'Balanced prompt complexity with API latency constraints.',

    outcome:
      'Generated AI-driven personalized Pokémon teams from user descriptions.',

    tech: 'React • OpenAI API • Node.js'
  },

  {
    iconUrl: minesweeper,
    theme: 'btn-back-purple',
    name: 'Minesweeper Clone',
    role: 'C++ Developer',

    problem:
      'Recreated Minesweeper to strengthen understanding of recursion and grid-based logic.',

    system:
      'Built game engine in C++ with recursive flood-fill reveal mechanics.',

    features:
      'Grid system, mine generation, recursive reveal, win/loss detection.',

    tradeoffs:
      'Focused on logic correctness over graphical enhancements.',

    outcome:
      'Fully functional Minesweeper clone demonstrating strong C++ fundamentals.',

    tech: 'C++ • Data Structures • Algorithms'
  }
];