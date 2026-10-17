export const siteConfig = {
  name: "Tom Leonard Abella",
  title: "Software Developer",
  tagline: "Building responsive web & mobile applications",
  description:
    "Software Developer with 3+ years of experience shipping production web and mobile applications. I specialize in React, Next.js, and Tailwind CSS — from responsive interfaces to full-stack features, CI/CD pipelines, and store deployments.",
  email: "tomleonardabella@gmail.com",
  social: {
    github: "https://github.com/tom-abella",
    linkedin: "https://www.linkedin.com/in/tom-leonard-abella",
    facebook: "https://www.facebook.com/tomleonard.abella/",
    instagram: "https://www.instagram.com/abella_tl/",
  },
};

export const skills = {
  frontend: [
    "React / Next.js",
    "TanStack Query",
    "Zustand",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "HTML5 / CSS3",
    "Responsive Design",
    "REST APIs",
  ],
  mobile: [
    "React Native",
    "Expo",
  ],
  backend: [
    "Node.js",
    "AWS / Serverless",
    "Supabase / Firebase",
    "SQL / .NET",
  ],
  tools: [
    "Git & GitHub",
    "Vercel",
    "Codemagic",
    "Jira",
    "Figma",
    "VS Code",
    "npm / pnpm",
  ],
};

export const projects = [
  {
    title: "Xure",
    description:
      "A suite of applications for the collectibles ecosystem, including Xure and Xtore. Built with React Native, Next.js, TanStack Query, and Zustand. Managed end-to-end development, deployment, and maintenance across mobile and web platforms. Features include live events, live bidding, box breaks, and order processing.",
    metrics: "5K+ downloads · 3 platforms",
    tech: ["React Native", "Next.js", "TanStack Query", "Zustand"],
    image: "/projects/xure-icon.png",
    deliverables: [
      {
        name: "Xure App",
        description: "Cross-platform mobile app for collectors",
        links: [
          { name: "Google Play", url: "https://play.google.com/store/apps/details?id=com.xdeal&pli=1" },
          { name: "App Store", url: "https://apps.apple.com/ph/app/xure/id6463198157" },
        ],
      },
      {
        name: "Xtore Dashboard",
        description: "Web admin panel for merchants to manage live events, bidding, and orders",
        links: [
          { name: "Live", url: "https://dashboard.xure.app/" },
        ],
      },
      {
        name: "Xtore App",
        description: "Mobile app for merchants and users to participate in live events and bidding",
        links: [
          { name: "App Store", url: "https://apps.apple.com/ph/app/xtore/id6757517602" },
          { name: "Google Play", url: "https://play.google.com/store/search?q=xtore&c=apps" },
        ],
      },
    ],
  },
  {
    title: "Y1 Portal",
    description:
      "A youth organization portal for Youth for One. Built with Next.js and Supabase, featuring event management, member registration, and content publishing. Includes a custom landing page editor for non-technical content management.",
    metrics: "Custom CMS · Serverless architecture",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    github: "https://github.com/tom-abella/y1-portal",
    live: "https://youthforone.vercel.app/",
    image: "/projects/y1-portal-banner.png",
    features: [
      {
        name: "Landing Page Editor",
        description:
          "Custom CMS that powers the Y1 Portal frontend. Allows non-technical users to update content, manage sections, and publish changes to the live portal without touching code.",
        link: "https://youthforone.vercel.app/landing-editor",
      },
    ],
  },
  {
    title: "Snap Share",
    description:
      "A real-time photo sharing platform built with React and Supabase. Features include instant uploads, gallery views, and responsive design optimized for mobile and desktop.",
    metrics: "Real-time uploads · Mobile-first",
    tech: ["React", "Supabase", "Tailwind CSS"],
    github: "https://github.com/tom-abella/snap-share",
    live: "https://snap-share-beta.vercel.app",
    image: "/projects/snap-share.png",
  },
];

export const experience = [
  {
    title: "Lead Software Developer",
    company: "XUREDEAL PTE. LTD.",
    period: "May 2025 – Present",
    points: [
      "Led a cross-functional team of junior developers and interns, establishing code review and PR processes",
      "Spearheaded adoption of Zustand and TanStack Query, optimizing data-fetching and app performance",
      "Managed end-to-end deployment for mobile apps on App Store and Google Play",
      "Oversaw web application deployment on company servers, ensuring uptime and security",
      "Partnered with product managers on architectural roadmaps and technical support",
    ],
  },
  {
    title: "Independent Full-Stack Developer (Project-Based)",
    company: "Self-Employed",
    period: "2024 – Present",
    points: [
      "Architect and deliver specialized web applications for corporate clients",
      "Built a responsive web platform for a local community organization",
    ],
  },
  {
    title: "Software Developer",
    company: "XUREDEAL PTE. LTD.",
    period: "Aug 2023 – May 2025",
    points: [
      "Migrated backend from AWS Amplify to Serverless (Lambda APIs)",
      "Built email notification system automating auth and purchase events",
      "Developed API integration between frontend and core database",
      "Adapted full-stack skills (SQL, .NET) before specializing in frontend",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "XUREDEAL PTE. LTD.",
    period: "Apr 2023 – Jul 2023",
    points: [
      "Built a CRUD app with React Native in the first two weeks",
      "Integrated mobile app with AWS Amplify for real-time backend",
    ],
  },
];

export const education = [
  {
    degree: "BET - Computer Engineering Technology",
    school: "Technological University of the Philippines – Manila",
    period: "2023",
  },
  {
    degree: "ICT - Mobile App and Web Development",
    school: "STI Academic Center",
    period: "2019",
    detail: "TVL-ICT Computer Programming NC III - Java & .NET Technology",
  },
];

export const certifications = [
  {
    name: "Advanced React",
    issuer: "Meta / Coursera",
    image: "/certificates/advanceReact-688f27c4.png",
  },

  {
    name: "FreeCodeCamp - Responsive Web Design",
    issuer: "FreeCodeCamp",
    image: "/certificates/freecodecamp-cd77cc70.png",
  },
  {
    name: "FreeCodeCamp - JavaScript Algorithms",
    issuer: "FreeCodeCamp",
    image: "/certificates/freecodecamp2-1d3c1855.png",
  },
  {
    name: "ICT Computer Programming NC III",
    issuer: "STI Academic Center",
    image: "/certificates/STI-5bdd1f49.png",
  },

];

export const hobbies = [
  { emoji: "🏃", label: "Training for my next fun run" },
  { emoji: "🏔️", label: "Trails and hiking on weekends" },
  { emoji: "✈️", label: "Exploring new places and traveling" },
];

export const currentYear = "2025";
