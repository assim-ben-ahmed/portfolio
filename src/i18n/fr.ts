// Toutes les chaînes françaises, mot pour mot depuis _brief/content.md.
// Les lignes `UNAPPROVED` ne sont pas (encore) dans content.md — à valider avec Assim.
import type { Dict } from './en'

export const fr: Dict = {
  lang: 'fr',
  meta: {
    siteName: 'Assim Ben Ahmed',
    homeTitle: 'Assim Ben Ahmed — Ingénieur IA · Data Scientist',
    homeDescription:
      'Je conçois une IA qui passe en production, et je fédère les équipes qui la livrent.',
  },
  a11y: {
    skip: 'Aller au contenu', // UNAPPROVED
    menuOpen: 'Ouvrir le menu', // UNAPPROVED
    menuClose: 'Fermer le menu', // UNAPPROVED
    switchLang: 'Switch the site to English', // UNAPPROVED
    mainNav: 'Principale', // UNAPPROVED
    highlights: 'Points clés', // UNAPPROVED
    opensNewTab: "(s'ouvre dans un nouvel onglet)", // UNAPPROVED
    openPhoto: 'Agrandir la photo', // UNAPPROVED
    close: 'Fermer', // UNAPPROVED
    prevPhoto: 'Photo précédente', // UNAPPROVED
    nextPhoto: 'Photo suivante', // UNAPPROVED
  },
  nav: {
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    leadership: 'Leadership',
    achievements: 'Distinctions',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Assim Ben Ahmed',
    titles: ['Ingénieur IA', 'Data Scientist', 'Ancien Président du BDE', '2 podiums en hackathon'],
    pitch: 'Je conçois une IA qui passe en production, et je fédère les équipes qui la livrent.',
    status: 'Disponible immédiatement · Alternance 12 ou 24 mois · Paris',
    subline:
      "Étudiant en IA & Data Science à aivancity, 2e de ma promotion. Rythme : 3 semaines en entreprise, 1 semaine à l'école.",
    cv: 'Télécharger mon CV',
    projects: 'Voir mes projets',
    contact: 'Me contacter',
    portraitAlt: "Portrait d'Assim Ben Ahmed",
  },
  highlights: [
    { value: 2, suffix: 'e', label: 'de ma promotion à aivancity' }, // "2e" — FR form of "2nd"
    { value: 3, suffix: '× 20/20', label: "premiers 20/20 de l'école en soutenance client" },
    {
      value: 2,
      suffix: '× 3e', // FR form of "2× 3rd"
      label: 'podiums en hackathon (Google Build with AI, hackathon de rentrée)',
    },
    { value: 500, suffix: '+', label: 'étudiants représentés en tant que Président du BDE' },
    { value: 5, suffix: '', label: 'outils IA livrés chez WellPack' },
    { value: 4, suffix: '', label: 'langues parlées' },
  ],
  projects: {
    intro:
      "Ce que j'ai conçu, livré et pitché, des plateformes en production aux sprints de hackathon de 8 heures.",
    filters: {
      experience: 'Expérience', // UNAPPROVED
      hackathons: 'Hackathons & prix', // UNAPPROVED
      clinic: 'AI Clinic',
      startup: 'Startup',
      side: 'Projets perso', // UNAPPROVED
    },
    links: {
      demo: 'Vidéo de démo', // UNAPPROVED
      photos: 'Photos',
      screenshots: "Captures d'écran", // UNAPPROVED
      github: 'GitHub',
      githubComing: 'GitHub (bientôt)', // UNAPPROVED
      leanCanvas: 'Lean Canvas',
      live: 'Démo interactive', // UNAPPROVED
      site: 'Site du projet', // UNAPPROVED
    },
  },
  projectsPage: {
    all: 'Tout',
    filterLabel: 'Filtrer les projets', // UNAPPROVED (screen-reader label)
    back: 'Projets',
    stack: 'Stack',
    media: 'Médias', // UNAPPROVED
    notFound: 'Aucun projet à cette adresse.', // UNAPPROVED
  },
  leadershipPage: {
    title: 'Leadership & engagement', // UNAPPROVED (FR page title)
    metaDescription:
      "J'ai remporté les élections étudiantes et présidé le BDE Echo pendant un an, en représentant les plus de 500 étudiants d'aivancity.",
    bdeHeading: 'BDE Echo — Président · nov. 2024–févr. 2026', // UNAPPROVED (translation of the EN heading)
    bdeText:
      "J'ai remporté les élections étudiantes et présidé le BDE Echo pendant un an, en représentant les plus de 500 étudiants d'aivancity. J'ai constitué une équipe partie de 10 membres qui n'a cessé de grandir, et nous avons transformé nos idées en une année d'événements : tournois FIFA, soirées karaoké, dégustations internationales, soirées cinéma, Halloween, un club de débat et une journée Octobre Rose. En décembre 2025, aivancity m'a remis une médaille et un trophée pour ma présidence, lors de la cérémonie célébrant l'obtention du grade de Master par l'école.",
    eventsHeading: 'Événements', // UNAPPROVED
    volunteeringHeading: "Bénévolat — Ô Cœur de la Rue, Paris · oct. 2024–aujourd'hui", // UNAPPROVED (translation of the EN heading)
    volunteeringText:
      "Plus de 30 heures de bénévolat (et ce n'est pas fini) avec une association parisienne qui vient en aide aux personnes dans le besoin : préparation des repas en cuisine et distribution dans la rue.",
  },
  leadershipTeaser: {
    role: 'BDE Echo — Président · nov. 2024–févr. 2026', // UNAPPROVED (translation of the EN heading)
    text: "J'ai remporté les élections étudiantes et présidé le BDE Echo pendant un an, en représentant les plus de 500 étudiants d'aivancity. J'ai constitué une équipe partie de 10 membres qui n'a cessé de grandir, et nous avons transformé nos idées en une année d'événements : tournois FIFA, soirées karaoké, dégustations internationales, soirées cinéma, Halloween, un club de débat et une journée Octobre Rose.",
    imageAlt:
      "Assim tenant son trophée de président du BDE lors de la cérémonie du grade de Master d'aivancity",
    caption:
      'Distingué pour ma présidence du BDE lors de la cérémonie du grade de Master, déc. 2025',
    cta: "Lire toute l'histoire", // UNAPPROVED
  },
  testimonials: {
    heading: 'Ils en parlent', // UNAPPROVED
    translatedNote: '(traduit)',
    items: [
      {
        name: 'Meddy',
        role: 'Data Scientist, WellPack',
        quote:
          'Travailler avec Assim a été un plaisir. Ses modèles de ML étaient prêts pour la production et la qualité de son code exceptionnelle. Je le recommande vivement !',
      },
      {
        name: 'Dr. Burak Çivitcioğlu',
        role: 'Responsable de programme & professeur en IA, aivancity', // UNAPPROVED
        quote:
          "Assim fait preuve d'une aptitude exceptionnelle en intelligence artificielle et en programmation. En tant que responsable de programme et professeur, j'ai observé sa remarquable capacité à relier les concepts théoriques à leurs applications concrètes. Son engagement et son approche innovante en font un atout précieux pour toute équipe tournée vers l'IA.",
      },
    ],
  },
  about: {
    metaDescription:
      "Je suis Assim, étudiant en IA & Data Science à aivancity (Programme Grande École, diplôme conférant le grade de Master), 2e de ma promotion.",
    story: [
      "Je suis Assim, étudiant en IA & Data Science à aivancity (Programme Grande École, diplôme conférant le grade de Master), 2e de ma promotion. J'aime construire une IA que les gens utilisent vraiment : d'une plateforme de ML validée par la direction de WellPack à un assistant RAG qui répond aux clients d'une agence de voyage en Tunisie.",
      "Ce qui me motive, c'est de transformer des problèmes complexes en outils qui fonctionnent, et de le faire en équipe. En tant que Président du BDE Echo, j'ai mené une équipe partie de 10 membres et représenté plus de 500 étudiants ; j'ai appris que je sais naturellement orienter un groupe dans la bonne direction, et je reste en quête de mentors qui me challengent.",
      'Je parle arabe, anglais, français et allemand, et je suis curieux de tout : nouvelles cultures, nouveaux outils, nouvelles idées.',
    ],
    facts: [
      {
        label: 'Langues', // UNAPPROVED (label)
        value: 'Arabe (langue maternelle) · Anglais (C2) · Français (C1) · Allemand (B1)',
      },
      {
        label: 'En dehors du travail', // UNAPPROVED (label)
        value:
          "Football (et le sport en général) · Formule 1, surtout l'ingénierie et la data derrière chaque course · Guitare · Voyager et découvrir de nouvelles cultures",
      },
      { label: 'Prochaines étapes', value: "Apprendre la langue des signes et l'espagnol" }, // UNAPPROVED (label)
      {
        label: 'Je recherche', // UNAPPROVED (label)
        value:
          "Une alternance de 12 ou 24 mois en tant qu'Ingénieur IA / Data Scientist, disponible immédiatement",
      },
    ],
  },
  experience: {
    heading: 'Expérience', // UNAPPROVED
    items: [
      {
        org: 'La Galite Voyage',
        slug: 'la-galite-voyage',
        role: 'Stagiaire Data & IA', // UNAPPROVED (FR role)
        period: 'mai–août 2026',
        place: 'Bizerte, Tunisie',
        text: "L'agence voulait intégrer l'IA à son quotidien mais fonctionnait sans indicateurs consolidés, avec des données clients et réservations dispersées. J'ai recueilli les besoins auprès de la direction et des équipes, puis livré un tableau de bord BI opérationnel avec des KPI partagés, un modèle de segmentation client utilisé pour le ciblage commercial, et un assistant RAG qui répond aux clients sur WhatsApp et le web.",
        bullets: [],
        stack: 'Python · Power BI · RAG · WhatsApp',
      },
      {
        org: 'WellPack',
        slug: 'wellpack-manager',
        role: 'Chef de projet Automatisation & IA (stage)',
        period: 'avr.–juil. 2025',
        place: 'Paris',
        text: "Au sein d'une équipe de 4 stagiaires, j'ai conçu et livré WellPack Manager, une plateforme IA interne déployée sur Azure en microservices Docker : un pipeline ML pour les campagnes SMS validé par la direction, une automatisation des KPI du CRM Pipedrive que j'ai menée seul, et des agents Mistral pour Pipedrive et Gmail.",
        bullets: [],
        stack: 'Python · scikit-learn · XGBoost · FastAPI · Flask · Mistral · Docker · Azure · PostgreSQL · Apps Script',
      },
      {
        org: 'AI Clinic, aivancity',
        slug: '',
        role: 'Consultant IA', // UNAPPROVED (FR role)
        period: '2023–2026',
        place: 'Paris',
        text: "Le programme de conseil d'aivancity, où les étudiants mènent de vraies missions IA pour des entreprises partenaires. Trois missions, trois soutenances à 20/20.",
        bullets: [
          {
            name: 'Shift Technology (2024–25) :',
            slug: 'shift-technology',
            text: "accompagnement du client dans le choix d'un CRM sur un marché saturé : besoins, grille de critères, benchmark par scraping Python et recommandation fondée sur les données.",
          },
          {
            name: 'Beparentalis (2023–24) :',
            slug: 'beparentalis',
            text: 'benchmark et fine-tuning de LLM (Hugging Face) pour améliorer un chatbot pédiatrique français qui guide les jeunes parents en toute sécurité.',
          },
          {
            name: 'Pitchboy (2023–24) :',
            slug: 'pitchboy',
            text: "reconnaissance vocale et analyse des émotions sur des entretiens enregistrés, combinant prosodie audio et sentiment textuel avec RoBERTa. Ma première mission pour une vraie entreprise, au premier semestre de PGE1.",
          },
        ],
        stack: '',
      },
      {
        org: 'Naimrod',
        slug: '',
        role: 'Stagiaire Contenu & Data', // UNAPPROVED (FR role)
        period: 'mai–juil. 2024',
        place: 'Paris',
        text: 'Création et intégration de 1 427 QCM de grammaire dans une plateforme éducative pour enseignants, avec contrôle qualité et cohérence via des outils CMS.',
        bullets: [],
        stack: '',
      },
    ],
    educationHeading: 'Formation', // UNAPPROVED
    education: [
      'aivancity, Programme Grande École (grade de Master), IA & Data Science · 2023–2028 · 3e année validée, 2e de promotion.',
      'Baccalauréat International (Mathématiques) · 2022–2023.',
    ],
  },
  skills: {
    heading: 'Compétences', // UNAPPROVED (section title)
    usedIn: 'Utilisé dans', // UNAPPROVED
    groups: [
      {
        name: 'LLM, RAG & agents',
        tools: 'Mistral, RAG, Hugging Face fine-tuning, RoBERTa, prompt engineering, tool-calling agents',
        usedIn: ['WellPack', 'La Galite', 'Beparentalis', 'Pitchboy', 'Aivancity Hub'],
      },
      {
        name: 'Machine learning & data science',
        tools: 'Python, pandas, NumPy, scikit-learn, XGBoost, TF-IDF, classification, segmentation',
        usedIn: ['WellPack', 'La Galite'],
      },
      { name: 'Vision par ordinateur', tools: 'OpenCV, MediaPipe', usedIn: ['AquaNova'] },
      {
        name: 'Data & BI',
        tools: 'Power BI, web scraping (BeautifulSoup), Google Sheets & Apps Script, SQL',
        usedIn: ['La Galite', 'Shift Technology', 'WellPack'],
      },
      {
        name: 'Ingénierie & MLOps',
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
      'En cours : Microsoft Power BI (PL-300), AWS Machine Learning. Certificats : Python for Time Series Forecasting, Cybersecurity Foundations, HR Foundations (LinkedIn Learning, 2024).',
  },
  blog: {
    title: 'Écrits',
    intro: "Notes, articles et leçons tirées de mes projets IA : ce qui a marché, ce qui n'a pas marché, et ce qui m'occupe l'esprit.",
    empty: 'Premiers articles très bientôt.',
    filters: { all: 'Tout', papers: 'Articles', projects: 'Projets', notes: 'Notes' },
    minRead: 'min de lecture', // UNAPPROVED
    noMatch: "Pas encore d'article dans cette catégorie.", // UNAPPROVED
    notFound: 'Aucun article à cette adresse.', // UNAPPROVED
    readIn: 'Lire en', // UNAPPROVED
    untranslated: "Cet article n'existe qu'en anglais pour le moment.", // UNAPPROVED
  },
  contact: {
    title: 'Construisons quelque chose ensemble',
    text: "Je suis disponible immédiatement pour une alternance de 12 ou 24 mois en tant qu'Ingénieur IA ou Data Scientist à Paris (3 semaines en entreprise, 1 semaine à l'école). Le plus rapide pour me joindre : l'email.",
    mainButton: "M'écrire — assimben2004@gmail.com",
    secondary: 'Email école : assim.ahmed@aivancity.education',
    linkedin: 'LinkedIn',
    github: 'GitHub',
    cv: 'Télécharger mon CV',
    location: 'Paris, France',
  },
  footer: {
    copyright: '© 2026 Assim Ben Ahmed',
    analytics: 'Ce site utilise une mesure d’audience (Google Analytics) uniquement avec votre consentement.', // UNAPPROVED
    cookieSettings: 'Paramètres des cookies', // UNAPPROVED
  },
  cookies: {
    title: 'Cookies et mesure d’audience', // UNAPPROVED
    body: 'Avec votre accord, Google Analytics mesure les visites pour améliorer ce portfolio (aucune publicité). Vous pouvez modifier votre choix à tout moment via « Paramètres des cookies » en bas de page.', // UNAPPROVED
    accept: 'Accepter', // UNAPPROVED
    refuse: 'Refuser', // UNAPPROVED
  },
  notFound: {
    title: 'Page introuvable', // UNAPPROVED
    back: "Retour à l'accueil", // UNAPPROVED
  },
}
