export const content = {
  home: {
    title: "Hello, I'm",
    name: "Krishna",
    description: "I build AI-driven, user-first products for fast-moving teams.",
  },
  about: {
    title: "Figuring Things Out.",
    bio: [
      "A curious builder and Product Manager with 4+ years of experience taking products from 0 → 1 across B2B and B2C. I've shipped and scaled global platforms at Nielsen, led HRTech SaaS at Altimetrik, and previously co-founded a short-video startup.",
      "I like working where ambiguity is high and the feedback loops are fast — talking to users, analysing data, and turning messy problems into simple, elegant workflows."
    ],

    current: "I'm learning LangGraph and building AI Agents to reduce operational noise, improve decisions, and unlock new product experiences.",

    skillsTitle: "What I do",
    skills: [
      "0 → 1 Product Building",
      "AI Agents & Automation",
      "Product Strategy & Roadmapping",
      "GTM & Experimentations"
    ]
  },
  work: {
    title: "Selected Work",
    projects: [
      {
        title: 'Nielsen Media - PM 2',
        description: 'Leading Digital Content Rating product and delivering 3 global solutions used by major publishers/GICs likes of Google, Disney, Audicom and platforms across the US & 5 Other Countries',
        link: '#',
        year: '2024 - Present',
      },
      {
        title: 'Altimetrik - Product Manager',
        description: 'Led the end-to-end creation of onboarding, sourcing modules and Innovation for an HRTech SaaS platform DEX, improving candidate quality and significantly cutting hiring costs.',
        link: '#',
        year: '2022-24',
      },
      {
        title: 'Astrotoppex - Cofounder',
        description: 'Launched a creator-led short-video app from scratch to 10K+ downloads, 2K DAU, and 130 creators in 12 days, alongside a services arm scaled to ₹2M+ MRR.',
        link: '#',
        year: '2020-21',
      },
    ]
  },
  contact: {
    title: "Get in Touch",
    description: [
      "I'm always up for jamming on new products, analyzing micro trends and AI workflows.",
      "If you're building/working on something interesting or want help for your product, Happy to talk."
    ],
    email: "hello@chaitanyaa.lol",
    socials: [
      { name: "Twitter / X", link: "https://x.com/chaitanyabuilds" },
      { name: "GitHub", link: "https://github.com/MrForward" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/chaitanya-athukuri" },
      { name: "Calendly", link: "https://calendly.com/chaitanyaathukuri/connect" },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PROJECTS SECTION
  // To add a new project: Copy a project object and update the fields
  // To remove a project: Delete the entire object (including the comma)
  // To reorder: Move the object up/down in the array
  // Status options: 'Live' | 'In Progress' | 'Coming Soon'
  // ═══════════════════════════════════════════════════════════════════════════
  projects: {
    title: "Selected Side Projects",
    items: [
      {
        title: 'Fumble Machine',
        description: "A viral financial regret engine that calculates the real-time opportunity cost of everyday purchases against the stock market. Generates dynamic, shareable Loss Receipts optimized for social virality.",
        image: '/projects/fumble-machine.png', // Place images in public/projects/
        url: 'https://github.com/MrForward/Fumble-Machine',
        year: '2025',
        status: 'Live',
      },
      {
        title: 'ProdReady',
        description: 'The automated quality gate for AI-generated code. Instantly transforms messy prototypes into secure, production-ready applications by detecting secret leaks and SEO gaps that LLMs miss.',
        image: '/projects/shipready.png',
        url: 'https://prod-ready-navy.vercel.app',
        year: '2025',
        status: 'Live',
      },
      {
        title: 'SkillTree',
        description: 'The GPS for self-taught people. An AI agent that turns vague goals (e.g., Learn Data Science) into a structured, step-by-step curriculum with top quality resources and auto-generated quizzes to validate mastery.',
        image: '/projects/skilltree.png',
        url: '#',
        year: '2026',
        status: 'Coming Soon',
      },
    ]
  }
};
