// All English strings, word for word from _brief/content.md.
// Lines tagged `UNAPPROVED` are UI labels that content.md does not cover yet — review with Assim.

export const en = {
  lang: 'en',
  meta: {
    siteName: 'Assim Ben Ahmed',
    homeTitle: 'Assim Ben Ahmed — AI Engineer · Data Scientist',
    homeDescription: 'I build AI that ships, and lead the teams that ship it.',
  },
  a11y: {
    skip: 'Skip to content', // UNAPPROVED
    menuOpen: 'Open menu', // UNAPPROVED
    menuClose: 'Close menu', // UNAPPROVED
    switchLang: 'Passer le site en français', // UNAPPROVED
    mainNav: 'Main', // UNAPPROVED
    highlights: 'Highlights',
    opensNewTab: '(opens in a new tab)', // UNAPPROVED
    openPhoto: 'Enlarge photo', // UNAPPROVED
    close: 'Close', // UNAPPROVED
    prevPhoto: 'Previous photo', // UNAPPROVED
    nextPhoto: 'Next photo', // UNAPPROVED
  },
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    leadership: 'Leadership',
    achievements: 'Achievements',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    name: 'Assim Ben Ahmed',
    titles: ['AI Engineer', 'Data Scientist', 'Former BDE President', 'Hackathon podium x2'],
    pitch: 'I build AI that ships, and lead the teams that ship it.',
    status: 'Available now · 24-month alternance · Paris',
    subline:
      'AI & Data Science student at aivancity, 2nd of my cohort. 3 weeks in the company, 1 week at school.',
    cv: 'Download CV',
    projects: 'See my projects',
    contact: 'Contact me',
    portraitAlt: 'Portrait of Assim Ben Ahmed',
  },
  // value = the number that counts up; prefix/suffix are static around it.
  highlights: [
    { value: 2, suffix: 'nd', label: 'of my cohort at aivancity' },
    { value: 3, suffix: '× 20/20', label: 'first-ever perfect grades on a consulting defence' },
    {
      value: 2,
      suffix: '× 3rd',
      label: 'hackathon podiums (Google Build with AI, back-to-school hackathon)',
    },
    { value: 500, suffix: '+', label: 'students represented as BDE President' },
    { value: 5, suffix: '', label: 'AI tools shipped at WellPack' },
    { value: 4, suffix: '', label: 'languages spoken' },
  ],
  projects: {
    intro:
      "Things I've built, shipped and pitched, from production platforms to 8-hour hackathon sprints.",
    filters: {
      experience: 'Experience',
      hackathons: 'Hackathons & awards',
      clinic: 'AI Clinic',
      startup: 'Startup',
      side: 'Side projects', // UNAPPROVED
    },
    links: {
      demo: 'Demo video',
      photos: 'Photos',
      screenshots: 'Screenshots', // UNAPPROVED
      github: 'GitHub',
      githubComing: 'GitHub (coming)',
      leanCanvas: 'Lean Canvas',
    },
  },
  projectsPage: {
    all: 'All',
    filterLabel: 'Filter projects', // UNAPPROVED (screen-reader label)
    back: 'Projects',
    stack: 'Stack',
    media: 'Media', // UNAPPROVED
    notFound: 'No project at this address.', // UNAPPROVED
  },
  leadershipPage: {
    title: 'Leadership & Community',
    metaDescription:
      "I won the student elections and led BDE Echo for a full year, representing aivancity's 500+ students.",
    bdeHeading: 'BDE Echo — President · Nov 2024–Feb 2026',
    bdeText:
      "I won the student elections and led BDE Echo for a full year, representing aivancity's 500+ students. I built a team that started with 10 members and kept growing, and we turned ideas into a year of events: FIFA tournaments, karaoke nights, international food tastings, movie nights, Halloween, a debate club and an Octobre Rose awareness day. In December 2025, aivancity awarded me a medal and trophy for my presidency at the ceremony celebrating the school's new Master's grade.",
    eventsHeading: 'Events', // UNAPPROVED
    volunteeringHeading: 'Volunteering — Ô Cœur de la Rue, Paris · Oct 2024–present',
    volunteeringText:
      '30+ hours and counting with a Paris charity supporting people in need: preparing meals in the kitchen and distributing them on the street.',
  },
  leadershipTeaser: {
    role: 'BDE Echo — President · Nov 2024–Feb 2026',
    text: "I won the student elections and led BDE Echo for a full year, representing aivancity's 500+ students. I built a team that started with 10 members and kept growing, and we turned ideas into a year of events: FIFA tournaments, karaoke nights, international food tastings, movie nights, Halloween, a debate club and an Octobre Rose awareness day.",
    imageAlt: "Assim holding his BDE presidency trophy at aivancity's Grade Master ceremony",
    caption: "Honoured for my BDE presidency at aivancity's Grade Master ceremony, Dec 2025",
    cta: 'Read the full story', // UNAPPROVED
  },
  testimonials: {
    heading: 'What people say', // UNAPPROVED
    translatedNote: '',
    items: [
      {
        name: 'Meddy',
        role: 'Data Scientist, WellPack',
        quote:
          'Working with Assim was a pleasure. His ML models were production-ready and his code quality was exceptional. Highly recommend!',
      },
      {
        name: 'Dr. Burak Çivitcioğlu',
        role: 'Program Manager & AI Professor, aivancity',
        quote:
          "Assim demonstrates exceptional aptitude in artificial intelligence and programming. As both a program manager and professor, I've observed his remarkable ability to bridge theoretical concepts with practical applications. His dedication and innovative approach make him a valuable asset to any AI-focused team.",
      },
    ],
  },
  about: {
    metaDescription:
      "I'm Assim, an AI & Data Science student at aivancity (Programme Grande École, Master's-grade programme), ranked 2nd in my cohort.",
    story: [
      "I'm Assim, an AI & Data Science student at aivancity (Programme Grande École, Master's-grade programme), ranked 2nd in my cohort. I like building AI that people actually use: from an ML platform approved by WellPack's executives to a RAG assistant answering customers for a travel agency in Tunisia.",
      "What drives me is turning messy problems into tools that work, and doing it with a team. As President of BDE Echo, I led a team that grew from 10 members and represented 500+ students; I've learned that I naturally push a group in the right direction, and I'm still hungry for mentors who'll challenge me.",
      "I speak Arabic, English, French and German, and I'm curious about everything: new cultures, new tools, new ideas.",
    ],
    facts: [
      { label: 'Languages', value: 'Arabic (native) · English (C2) · French (C1) · German (B1)' },
      {
        label: 'Off the clock',
        value:
          'Football (and sport in general) · Formula 1, especially the engineering and data behind every race · Guitar · Travelling and meeting new cultures',
      },
      { label: 'Next on my list', value: 'Learning sign language and Spanish' },
      {
        label: 'Looking for',
        value: 'A 24-month alternance as AI Engineer / Data Scientist, available now',
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        org: 'La Galite Voyage',
        slug: 'la-galite-voyage',
        role: 'Data & AI Intern',
        period: 'May–Aug 2026',
        place: 'Bizerte, Tunisia',
        text: 'The agency wanted to bring AI into its daily work but ran without consolidated indicators, with customer and booking data scattered across sources. I gathered needs with management and operations, then delivered an operational BI dashboard with shared KPIs, a customer segmentation model used for sales targeting, and a RAG assistant answering customers on WhatsApp and the web.',
        bullets: [] as { name: string; slug: string; text: string }[],
        stack: 'Python · Power BI · RAG · WhatsApp',
      },
      {
        org: 'WellPack',
        slug: 'wellpack-manager',
        role: 'Data & AI Intern',
        period: 'Apr–Jul 2025',
        place: 'Paris',
        text: 'Part of a 4-intern team, I designed and shipped WellPack Manager, an internal AI platform deployed on Azure as Docker microservices: an ML pipeline for SMS campaigns approved by company executives, a Pipedrive CRM KPI automation I led solo, and Mistral-powered agents for Pipedrive and Gmail.',
        bullets: [],
        stack: 'Python · scikit-learn · XGBoost · FastAPI · Flask · Mistral · Docker · Azure · PostgreSQL · Apps Script',
      },
      {
        org: 'AI Clinic, aivancity',
        slug: '',
        role: 'AI Consultant',
        period: '2023–2026',
        place: 'Paris',
        text: "aivancity's consulting programme, where students deliver real AI missions for partner companies. Three missions, three 20/20 defences.",
        bullets: [
          {
            name: 'Shift Technology (2024–25):',
            slug: 'shift-technology',
            text: 'helped the client choose a CRM in a crowded market: requirements, a selection-criteria grid, a Python-scraped benchmark and a data-driven recommendation.',
          },
          {
            name: 'Beparentalis (2023–24):',
            slug: 'beparentalis',
            text: 'benchmarked and fine-tuned LLMs (Hugging Face) to improve a French pediatric chatbot giving first-time parents safe guidance.',
          },
          {
            name: 'Pitchboy (2023–24):',
            slug: 'pitchboy',
            text: "speech recognition and emotion analysis on interview recordings, combining audio prosody and RoBERTa text sentiment. My first mission with a real company, in the first semester of PGE1.",
          },
        ],
        stack: '',
      },
      {
        org: 'Naimrod',
        slug: '',
        role: 'Content & Data Intern',
        period: 'May–Jul 2024',
        place: 'Paris',
        text: 'Created and integrated 1,427 grammar MCQs into an educational platform for teachers, with quality control and consistency checks through CMS tools.',
        bullets: [],
        stack: '',
      },
    ],
    educationHeading: 'Education',
    education: [
      "aivancity, Programme Grande École (Master's grade), AI & Data Science · 2023–2028 · 3rd year completed, 2nd of cohort.",
      'International Baccalaureate (Mathematics) · 2022–2023.',
    ],
  },
  skills: {
    heading: 'Skills',
    usedIn: 'Used in', // UNAPPROVED
    groups: [
      {
        name: 'LLMs, RAG & agents',
        tools: 'Mistral, RAG, Hugging Face fine-tuning, RoBERTa, prompt engineering, tool-calling agents',
        usedIn: ['WellPack', 'La Galite', 'Beparentalis', 'Pitchboy', 'Aivancity Hub'],
      },
      {
        name: 'Machine learning & data science',
        tools: 'Python, pandas, NumPy, scikit-learn, XGBoost, TF-IDF, classification, segmentation',
        usedIn: ['WellPack', 'La Galite'],
      },
      { name: 'Computer vision', tools: 'OpenCV, MediaPipe', usedIn: ['AquaNova'] },
      {
        name: 'Data & BI',
        tools: 'Power BI, web scraping (BeautifulSoup), Google Sheets & Apps Script, SQL',
        usedIn: ['La Galite', 'Shift Technology', 'WellPack'],
      },
      {
        name: 'Engineering & MLOps',
        tools: 'Docker, Azure, FastAPI, Flask, PostgreSQL, REST APIs (Gmail, Pipedrive), OAuth2, Git',
        usedIn: ['WellPack', 'Gmail AI Assistant'],
      },
      {
        name: 'Web',
        tools: 'Node.js, JavaScript, HTML/CSS, Tailwind',
        usedIn: ['Aivancity Hub', 'AquaNova'],
      },
    ],
    training:
      'Training (not certified): Microsoft Power BI (PL-300), AWS Machine Learning. Certificates: Python for Time Series Forecasting, Cybersecurity Foundations, HR Foundations (LinkedIn Learning, 2024).',
  },
  blog: {
    title: 'Writing',
    intro: "Notes, papers and lessons from building AI — what worked, what didn't, and what I'm thinking about next.",
    empty: 'First articles coming soon.',
    filters: { all: 'All', papers: 'Papers', projects: 'Projects', notes: 'Notes' },
    minRead: 'min read', // UNAPPROVED
    noMatch: 'No articles in this category yet.', // UNAPPROVED
    notFound: 'No article at this address.', // UNAPPROVED
  },
  contact: {
    title: "Let's build something together",
    text: "I'm available now for a 24-month alternance as an AI Engineer or Data Scientist in Paris (3 weeks in the company, 1 week at school). The fastest way to reach me is email.",
    mainButton: 'Email me — assimben2004@gmail.com',
    secondary: 'School email: assim.ahmed@aivancity.education',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Download CV',
    location: 'Paris, France',
  },
  footer: {
    copyright: '© 2026 Assim Ben Ahmed',
  },
  notFound: {
    title: 'Page not found', // UNAPPROVED
    back: 'Back to home', // UNAPPROVED
  },
}

export type Dict = typeof en
