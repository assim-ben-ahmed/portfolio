// One object per project — adding a project = adding one object.
// Text is word for word from _brief/content.md; alt text from _brief/assets.md.
// `**bold**` in `detail` is rendered as <strong>. Lines tagged UNAPPROVED need Assim's OK.
import type { Localized } from '../i18n'

import wpLogin from '../../assets/images/projects/wellpack/01-manager-login.jpg?pic'
import wpDashboard from '../../assets/images/projects/wellpack/02-manager-dashboard.jpg?pic'
import wpTool from '../../assets/images/projects/wellpack/03-manager-tool-details.jpg?pic'
import wpPipedrive from '../../assets/images/projects/wellpack/04-pipedrive-assistant.jpg?pic'
import wpDemo from '../../assets/images/projects/wellpack/05-manager-demo.mp4?url'
import hubPitch from '../../assets/images/achievements/google-build-with-ai/01-pitching-the-portal.jpg?pic'
import hubDemo from '../../assets/images/achievements/google-build-with-ai/02-live-demo-audience.jpg?pic'
import aquaScreens from '../../assets/images/projects/aquanova/01-app-screens.jpg?pic'
import aquaHome from '../../assets/images/projects/aquanova/02-dashboard.jpg?pic'
import aquaAnalysis from '../../assets/images/projects/aquanova/03-ai-analysis.jpg?pic'
import aquaDrills from '../../assets/images/projects/aquanova/04-recommended-drills.jpg?pic'
import aquaLibrary from '../../assets/images/projects/aquanova/05-technique-library.jpg?pic'
import gmailUi from '../../assets/images/projects/gmail-ai-assistant/01-interface.jpg?pic'
import safaEvening from '../../assets/images/projects/dubai-al-safa-park/01-central-commons-evening.jpg?pic'
import safaOverview from '../../assets/images/projects/dubai-al-safa-park/02-site-overview.jpg?pic'
import safaPromenade from '../../assets/images/projects/dubai-al-safa-park/03-shaded-promenade.jpg?pic'
import safaPlayground from '../../assets/images/projects/dubai-al-safa-park/04-playground.jpg?pic'
import safaEntrance from '../../assets/images/projects/dubai-al-safa-park/05-arrival-entrance.jpg?pic'
import safaMasterplan from '../../assets/images/projects/dubai-al-safa-park/06-masterplan.jpg?pic'
import vitaLogo from '../../assets/images/projects/vitalight/01-logo.jpg?pic'
import vitaCanvas from '../../assets/images/projects/vitalight/02-lean-canvas.png?pic'
import vitaCanvasPdf from '../../assets/images/projects/vitalight/03-lean-canvas.pdf?url'

export type Filter = 'experience' | 'hackathons' | 'clinic' | 'startup'

export type ImageMedia = { kind: 'image'; pic: Picture; alt: Localized }
export type VideoMedia = { kind: 'video'; src: string; poster: Picture; alt: Localized }
export type Media = ImageMedia | VideoMedia

export type ProjectLink =
  | { kind: 'demo' | 'photos'; href: `#${string}` } // in-page anchor on the detail page
  | { kind: 'github' | 'leanCanvas'; href: string }
  | { kind: 'githubComing' }

export type Project = {
  slug: string
  filter: Filter
  featured?: boolean
  title: Localized
  oneLiner: Localized
  detail: Localized<string[]>
  stack: string[]
  cover?: ImageMedia
  media: Media[]
  links: ProjectLink[]
}

const clinic20: Localized = {
  en: '*Defended in front of the client: 20/20.*',
  fr: '*Soutenue devant le client : 20/20.*',
}

const wpDashboardMedia: ImageMedia = {
  kind: 'image',
  pic: wpDashboard,
  alt: {
    en: 'WellPack Manager dashboard listing the internal AI tools',
    fr: 'Tableau de bord de WellPack Manager listant les outils IA internes',
  },
}
const hubPitchMedia: ImageMedia = {
  kind: 'image',
  pic: hubPitch,
  alt: {
    en: "Assim's team pitching Aivancity Hub at Google Build with AI",
    fr: "L'équipe d'Assim présente Aivancity Hub au Google Build with AI",
  },
}
const vitaLogoMedia: ImageMedia = {
  kind: 'image',
  pic: vitaLogo,
  alt: { en: 'VitaLight logo', fr: 'Logo de VitaLight' },
}

export const projects: Project[] = [
  {
    slug: 'wellpack-manager',
    filter: 'experience',
    featured: true,
    title: { en: 'WellPack Manager', fr: 'WellPack Manager' },
    oneLiner: {
      en: 'Internal AI platform: SMS ML, CRM automation and Mistral agents, approved by executives',
      fr: 'Plateforme IA interne : ML pour SMS, automatisation CRM et agents Mistral, validée par la direction',
    },
    detail: {
      en: [
        "**Problem:** WellPack wanted AI to optimise its SMS campaigns and automate CRM and email work for its team.",
        "**What I built** (team of 4 interns, Apr–Jul 2025): an SMS campaign platform with sector-based persuasion scoring (TF-IDF), an orientation classifier, send-time prediction returning the top-3 slots, and Mistral-generated French SMS (6 options under 149 characters); solo, an automation pulling Pipedrive deals, organisations and activities into Google Sheets (Apps Script, paginated API, dynamic field mapping); with a teammate, custom Python agents for Pipedrive and Gmail after evaluating Claude MCP and n8n; the platform's login experience and the containerisation and Azure deployment. Solo side mission: a cost-reconciliation pipeline with automated invoice-discrepancy reporting.",
        "**Result:** the SMS platform was presented to company executives and officially approved; the Pipedrive automation was validated by management; all tools run in one secured internal platform.",
      ],
      fr: [
        "**Problème :** WellPack voulait utiliser l'IA pour optimiser ses campagnes SMS et automatiser le travail CRM et email de son équipe.",
        "**Ce que j'ai construit** (équipe de 4 stagiaires, avr.–juil. 2025) : une plateforme de campagnes SMS avec un score d'incitation par secteur (TF-IDF), un classifieur d'orientation, une prédiction du moment d'envoi (3 meilleurs créneaux) et des SMS français générés par Mistral (6 propositions de moins de 149 caractères) ; seul, une automatisation qui extrait les affaires, organisations et activités Pipedrive vers Google Sheets (Apps Script, API paginée, mapping dynamique) ; en binôme, des agents Python pour Pipedrive et Gmail après avoir évalué Claude MCP et n8n ; l'expérience de connexion de la plateforme, sa conteneurisation et son déploiement sur Azure. Mission solo : un pipeline de rapprochement des coûts avec rapport automatique d'écarts de facturation.",
        "**Résultat :** la plateforme SMS a été présentée à la direction et officiellement validée ; l'automatisation Pipedrive a été validée par le management ; tous les outils tournent dans une plateforme interne sécurisée.",
      ],
    },
    stack: ['Python', 'scikit-learn', 'XGBoost', 'FastAPI', 'Flask', 'Mistral', 'Docker', 'Azure', 'PostgreSQL', 'Apps Script'],
    cover: wpDashboardMedia,
    media: [
      {
        kind: 'video',
        src: wpDemo,
        poster: wpDashboard,
        alt: { en: '51-second demo of WellPack Manager', fr: 'Démo de 51 secondes de WellPack Manager' },
      },
      {
        kind: 'image',
        pic: wpLogin,
        alt: { en: 'WellPack Manager login screen', fr: 'Écran de connexion de WellPack Manager' },
      },
      wpDashboardMedia,
      {
        kind: 'image',
        pic: wpTool,
        alt: { en: 'Detail view of a WellPack Manager tool', fr: "Vue détaillée d'un outil de WellPack Manager" },
      },
      {
        kind: 'image',
        pic: wpPipedrive,
        alt: {
          en: 'Pipedrive AI assistant answering a CRM question',
          fr: 'Assistant IA Pipedrive répondant à une question CRM',
        },
      },
    ],
    links: [{ kind: 'demo', href: '#media' }],
  },
  {
    slug: 'aivancity-hub',
    filter: 'hackathons',
    featured: true,
    title: {
      en: 'Aivancity Hub — 3rd, Google Build with AI',
      fr: 'Aivancity Hub — 3e, Google Build with AI', // UNAPPROVED (FR title)
    },
    oneLiner: {
      en: 'A full student portal with Mistral chatbots, built in 8 hours',
      fr: 'Un portail étudiant complet avec chatbots Mistral, construit en 8 heures',
    },
    detail: {
      en: [
        'On April 4, 2026, in a team of 3, we built Aivancity Hub from scratch in 8 hours: a student portal with Mistral chatbots (wellness, career, study, interview coaching and more), room booking with email confirmations, grades, schedule, internships, library and campus map, on a Node.js backend and a vanilla JS single-page app. The audience voted us into the Top 8 and we finished 3rd.',
      ],
      fr: [
        "Le 4 avril 2026, en équipe de 3, nous avons construit Aivancity Hub en 8 heures : un portail étudiant avec des chatbots Mistral (bien-être, carrière, révisions, coaching d'entretien…), la réservation de salles avec confirmation par email, les notes, l'emploi du temps, les stages, la bibliothèque et le plan du campus, sur un backend Node.js et une SPA en JavaScript. Le public nous a votés dans le Top 8 et nous avons fini 3e.",
      ],
    },
    stack: ['Mistral', 'Node.js', 'JavaScript'],
    cover: hubPitchMedia,
    media: [
      hubPitchMedia,
      {
        kind: 'image',
        pic: hubDemo,
        alt: {
          en: 'Live demo of Aivancity Hub in front of the audience',
          fr: "Démo en direct d'Aivancity Hub devant le public",
        },
      },
    ],
    links: [{ kind: 'photos', href: '#media' }],
  },
  {
    slug: 'aquanova',
    filter: 'hackathons',
    featured: true,
    title: {
      en: 'AquaNova — 3rd, back-to-school hackathon',
      fr: 'AquaNova — 3e, hackathon de rentrée', // UNAPPROVED (FR title)
    },
    oneLiner: {
      en: 'AI swim coach: pose scoring and annotated video feedback',
      fr: 'Coach de natation IA : scores de posture et vidéo annotée',
    },
    detail: {
      en: [
        "At aivancity's September 2025 back-to-school seminar hackathon, a team of 5 mixing students from several PGE years built AquaNova, an AI swim coach. Upload a swim video: MediaPipe tracks the swimmer's pose frame by frame, the app scores body alignment, stroke efficiency and kick from 0 to 100, and returns an annotated video with colour-coded overlays plus personalised drills. We finished 3rd.",
      ],
      fr: [
        "Lors du hackathon du séminaire de rentrée d'aivancity en septembre 2025, une équipe de 5 étudiants de plusieurs promotions du PGE a créé AquaNova, un coach de natation IA. On importe une vidéo : MediaPipe suit la posture du nageur image par image, l'application note l'alignement du corps, l'efficacité de la nage et le battement de jambes sur 100, puis renvoie une vidéo annotée avec code couleur et des exercices personnalisés. Nous avons fini 3e.",
      ],
    },
    stack: ['Python', 'Flask', 'OpenCV', 'MediaPipe', 'NumPy', 'Tailwind'],
    // Screenshots of the hackathon app (swim_analysis.html), demo data. Alt text UNAPPROVED (not in assets.md yet).
    cover: {
      kind: 'image',
      pic: aquaScreens,
      alt: {
        en: 'AquaNova app screens: home, AI analysis and recommended drills',
        fr: "Écrans de l'application AquaNova : accueil, analyse IA et exercices recommandés",
      },
    },
    media: [
      {
        kind: 'image',
        pic: aquaHome,
        alt: {
          en: 'AquaNova home screen (hackathon prototype, demo data)',
          fr: "Écran d'accueil d'AquaNova (prototype du hackathon, données de démonstration)",
        },
      },
      {
        kind: 'image',
        pic: aquaAnalysis,
        alt: {
          en: 'AquaNova AI analysis screen (hackathon prototype, demo data)',
          fr: "Écran d'analyse IA d'AquaNova (prototype du hackathon, données de démonstration)",
        },
      },
      {
        kind: 'image',
        pic: aquaDrills,
        alt: {
          en: 'AquaNova recommended drills (hackathon prototype, demo data)',
          fr: "Exercices recommandés par AquaNova (prototype du hackathon, données de démonstration)",
        },
      },
      {
        kind: 'image',
        pic: aquaLibrary,
        alt: {
          en: 'AquaNova technique library (hackathon prototype, demo data)',
          fr: "Bibliothèque de techniques d'AquaNova (prototype du hackathon, données de démonstration)",
        },
      },
    ],
    links: [{ kind: 'github', href: 'https://github.com/assim-ben-ahmed/AquaNova' }],
  },
  {
    slug: 'la-galite-voyage',
    filter: 'experience',
    title: {
      en: 'La Galite Voyage AI suite',
      fr: 'Suite IA La Galite Voyage', // UNAPPROVED (FR title)
    },
    oneLiner: {
      en: 'RAG assistant, customer segmentation and BI dashboard for a travel agency',
      fr: 'Assistant RAG, segmentation client et dashboard BI pour une agence de voyage',
    },
    detail: {
      en: [
        'The agency wanted to bring AI into its daily work but ran without consolidated indicators, with customer and booking data scattered across sources. I gathered needs with management and operations, then delivered an operational BI dashboard with shared KPIs, a customer segmentation model used for sales targeting, and a RAG assistant answering customers on WhatsApp and the web.',
      ],
      fr: [
        "L'agence voulait intégrer l'IA à son quotidien mais fonctionnait sans indicateurs consolidés, avec des données clients et réservations dispersées. J'ai recueilli les besoins auprès de la direction et des équipes, puis livré un tableau de bord BI opérationnel avec des KPI partagés, un modèle de segmentation client utilisé pour le ciblage commercial, et un assistant RAG qui répond aux clients sur WhatsApp et le web.",
      ],
    },
    stack: ['Python', 'Power BI', 'RAG', 'WhatsApp'],
    media: [],
    links: [],
  },
  {
    slug: 'gmail-ai-assistant',
    filter: 'experience',
    title: { en: 'Gmail AI Assistant', fr: 'Gmail AI Assistant' },
    oneLiner: {
      en: 'Open-source Mistral email agent: draft, send, search, summarise',
      fr: 'Agent email Mistral open source : rédiger, envoyer, chercher, résumer',
    },
    detail: {
      en: [
        'The Gmail agent from WellPack, open-sourced: a Flask app where you draft, send, search, analyse and summarise emails in plain language, powered by Mistral and the Gmail API with OAuth2.',
      ],
      fr: [
        "L'agent Gmail de WellPack, publié en open source : une application Flask pour rédiger, envoyer, chercher, analyser et résumer ses emails en langage naturel, avec Mistral et l'API Gmail (OAuth2).",
      ],
    },
    stack: ['Python', 'Flask', 'Mistral', 'Gmail API', 'OAuth2'],
    // Screenshot of the app's web interface (index_gmail.html); alt text UNAPPROVED (not in assets.md yet).
    cover: {
      kind: 'image',
      pic: gmailUi,
      alt: {
        en: 'Gmail AI Assistant chat interface with quick actions for meeting requests, follow-ups and thank-you notes',
        fr: "Interface de chat de Gmail AI Assistant avec actions rapides : demande de réunion, email de suivi, note de remerciement",
      },
    },
    media: [],
    links: [{ kind: 'github', href: 'https://github.com/assim-ben-ahmed/Gmail_Chatbot' }],
  },
  {
    slug: 'dubai-al-safa-2-park',
    filter: 'hackathons',
    title: { en: 'Dubai Al Safa 2 Park', fr: 'Dubai Al Safa 2 Park' },
    oneLiner: {
      en: "Solo entry to the world's first AI-powered park design challenge",
      fr: 'Participation solo au premier concours mondial de conception de parc par IA',
    },
    detail: {
      en: [
        "Solo entry to Dubai Municipality's AI-Powered Park Design Challenge (2026), the world's first, reimagining Al Safa 2 Park (AED 200,000 prize pool). I built a site-analysis dashboard and an AI-assisted design workflow across Claude, Gemini and GPT, documented in a methodology log. Submitted before the August 15 deadline; results pending.",
      ],
      fr: [
        "Participation solo au AI-Powered Park Design Challenge de la Municipalité de Dubaï (2026), le premier au monde, pour réinventer le parc Al Safa 2 (200 000 AED de prix). J'ai construit un tableau de bord d'analyse du site et un processus de conception assisté par IA (Claude, Gemini, GPT), documenté dans un journal de méthodologie. Dossier déposé avant le 15 août ; résultats en attente.",
      ],
    },
    stack: ['Claude', 'Gemini', 'GPT'],
    // From the submission PDFs (Deliverable 6 "3D & Spatial Visualizations" renders, made in Gemini/Nano Banana —
    // "illustrative, not construction-ready" — and the Deliverable 4 masterplan). Alt text UNAPPROVED.
    cover: {
      kind: 'image',
      pic: safaEvening,
      alt: {
        en: 'Central Green Commons in the evening, under lit shade sails (AI render, Gemini)',
        fr: "Central Green Commons en soirée, sous les voiles d'ombrage éclairées (rendu IA, Gemini)",
      },
    },
    media: [
      {
        kind: 'image',
        pic: safaOverview,
        alt: {
          en: 'Full-site overview of Al Safa 2 Park with numbered zones (AI render, Gemini)',
          fr: "Vue d'ensemble du parc Al Safa 2 avec zones numérotées (rendu IA, Gemini)",
        },
      },
      {
        kind: 'image',
        pic: safaPromenade,
        alt: {
          en: 'Shaded Promenade (NE): shade canopies along the jogging and walking path (AI render, Gemini)',
          fr: "Promenade ombragée (NE) : voiles d'ombrage le long du parcours de jogging et de marche (rendu IA, Gemini)",
        },
      },
      {
        kind: 'image',
        pic: safaPlayground,
        alt: {
          en: 'Playground in the Central Green Commons, under the shade canopy (AI render, Gemini)',
          fr: "Aire de jeux du Central Green Commons, sous les voiles d'ombrage (rendu IA, Gemini)",
        },
      },
      {
        kind: 'image',
        pic: safaEntrance,
        alt: {
          en: 'Arrival Commons (SE): sheltered, accessible main entrance (AI render, Gemini)',
          fr: 'Arrival Commons (SE) : entrée principale abritée et accessible (rendu IA, Gemini)',
        },
      },
      {
        kind: 'image',
        pic: safaMasterplan,
        alt: {
          en: 'Preliminary design masterplan: 20 numbered elements on the confirmed site boundary',
          fr: 'Masterplan de conception préliminaire : 20 éléments numérotés sur le périmètre confirmé du site',
        },
      },
    ],
    links: [{ kind: 'githubComing' }],
  },
  {
    slug: 'vitalight',
    filter: 'startup',
    title: { en: 'VitaLight', fr: 'VitaLight' },
    oneLiner: {
      en: 'Health-AI startup concept, Microsoft Imagine Cup 2025 participant',
      fr: 'Concept de startup santé-IA, participant à la Microsoft Imagine Cup 2025',
    },
    detail: {
      en: [
        'In October 2024 I founded a 4-person student team to enter Microsoft Imagine Cup 2025 with VitaLight, a preventive-health concept using AI to predict newborn health risks from parental medical history. I wrote the pitch and built the business model (Lean Canvas), brand and Azure-based architecture plan. The project stayed at concept stage while we focused on internships and studies.',
      ],
      fr: [
        "En octobre 2024, j'ai fondé une équipe de 4 étudiants pour participer à la Microsoft Imagine Cup 2025 avec VitaLight, un concept de santé préventive utilisant l'IA pour prédire les risques de santé du nouveau-né à partir des antécédents des parents. J'ai rédigé le pitch et construit le modèle économique (Lean Canvas), la marque et le plan d'architecture sur Azure. Le projet est resté au stade de concept, le temps de nous consacrer à nos stages et à nos études.",
      ],
    },
    stack: ['Python', 'TensorFlow', 'scikit-learn', 'Azure'],
    cover: vitaLogoMedia,
    media: [
      {
        kind: 'image',
        pic: vitaCanvas,
        alt: { en: 'VitaLight Lean Canvas', fr: 'Lean Canvas de VitaLight' },
      },
    ],
    links: [{ kind: 'leanCanvas', href: vitaCanvasPdf }],
  },
  {
    slug: 'pitchboy',
    filter: 'clinic',
    title: { en: 'Pitchboy', fr: 'Pitchboy' },
    oneLiner: {
      en: 'Speech and emotion analysis of interview recordings',
      fr: "Analyse vocale et émotionnelle d'entretiens enregistrés",
    },
    detail: {
      en: [
        '**Pitchboy (2025–26):** speech recognition and emotion analysis on interview recordings, combining audio prosody and RoBERTa text sentiment.',
        clinic20.en,
      ],
      fr: [
        '**Pitchboy (2025–26) :** reconnaissance vocale et analyse des émotions sur des entretiens enregistrés, combinant prosodie audio et sentiment textuel avec RoBERTa.',
        clinic20.fr,
      ],
    },
    stack: ['Python', 'RoBERTa', 'Librosa', 'scikit-learn', 'Hugging Face', 'NLTK', 'spaCy'],
    media: [],
    links: [],
  },
  {
    slug: 'shift-technology',
    filter: 'clinic',
    title: { en: 'Shift Technology', fr: 'Shift Technology' },
    oneLiner: {
      en: 'Data-driven CRM selection for Shift Technology',
      fr: 'Choix de CRM fondé sur les données pour Shift Technology',
    },
    detail: {
      en: [
        '**Shift Technology (2024–25):** helped the client choose a CRM in a crowded market: requirements, a selection-criteria grid, a Python-scraped benchmark and a data-driven recommendation.',
        clinic20.en,
      ],
      fr: [
        "**Shift Technology (2024–25) :** accompagnement du client dans le choix d'un CRM sur un marché saturé : besoins, grille de critères, benchmark par scraping Python et recommandation fondée sur les données.",
        clinic20.fr,
      ],
    },
    stack: ['Python', 'BeautifulSoup', 'Pandas'],
    media: [],
    links: [],
  },
  {
    slug: 'beparentalis',
    filter: 'clinic',
    title: { en: 'Beparentalis', fr: 'Beparentalis' },
    oneLiner: {
      en: 'Fine-tuned French pediatric chatbot for first-time parents',
      fr: 'Chatbot pédiatrique français fine-tuné pour jeunes parents',
    },
    detail: {
      en: [
        '**Beparentalis (2023–24):** benchmarked and fine-tuned LLMs (Hugging Face) to improve a French pediatric chatbot giving first-time parents safe guidance.',
        clinic20.en,
      ],
      fr: [
        '**Beparentalis (2023–24) :** benchmark et fine-tuning de LLM (Hugging Face) pour améliorer un chatbot pédiatrique français qui guide les jeunes parents en toute sécurité.',
        clinic20.fr,
      ],
    },
    stack: ['Python', 'Hugging Face', 'LoRA', 'PEFT', 'CamemBERT', 'FlauBERT', 'PyTorch'],
    media: [],
    links: [],
  },
  {
    // From the OLD site (Documents/portfolio/project-medical-chatbot.html), word for word — not in content.md yet.
    // Assim: AI Clinic mission, first semester of 2025–26 (no client named).
    slug: 'biometric-health-monitoring',
    filter: 'clinic',
    title: { en: 'Biometric Health Monitoring', fr: 'Biometric Health Monitoring' },
    oneLiner: {
      en: 'Advanced algorithmic health monitoring system using synthetic benchmarking and ML to create comprehensive Sleep, Heart, Activity, and Stress scores.',
      // UNAPPROVED (FR translation of the old-site text)
      fr: "Système avancé de suivi de santé algorithmique, fondé sur un benchmark synthétique et le ML, qui produit des scores complets de sommeil, de cœur, d'activité et de stress.",
    },
    detail: {
      en: [
        "Developed a comprehensive biometric health monitoring system that transforms raw physiological data into actionable health insights. The project implements a novel Synthetic Anchor Strategy to benchmark unlabeled health data against engineered \"ideal\" and \"at-risk\" user profiles, enabling accurate health assessments without traditional labeling.",
        "The system creates four comprehensive scoring algorithms (Sleep, Heart, Activity, and Stress) designed to provide 24/7 health monitoring and early intervention capabilities. The ultimate goal is to prevent hospitalizations through continuous algorithmic surveillance combined with professional medical oversight.",
        "### Synthetic Benchmarking Innovation",
        "To solve the labeling challenge in unlabeled health data, we implemented a groundbreaking **Synthetic Anchor Strategy**:",
        "- **The \"Good\" User:** Synthetic profile simulating ideal health metrics: 8 hours sleep, high HRV, active movement, optimal cardiovascular function\n- **The \"Bad\" User:** Synthetic profile simulating poor health: fragmented sleep, elevated resting HR, sedentary behavior, low HRV",
        "These synthetic profiles were injected into the dataset to create a frame of reference, enabling pattern validation through spectral clustering and feature importance analysis rather than relying on proximity-based classification.",
        "### 1. Enhanced Sleep Scoring System",
        "Multi-dimensional sleep assessment with personalized chronotype adaptation",
        "- **Duration (30%):** Optimized for 7-9 hours with sharp penalties outside this range\n- **Efficiency (30%):** Rewards >95% efficiency; harsh penalties <85%\n- **Fragmentation (20%):** Single session = 20 pts; 4+ sessions ≈ 0 pts\n- **Consistency (20%):** Rewards ±30min regular sleep/wake times",
        "7-day rolling average with personalized sleep window adaptation",
        "### 2. Heart Health System",
        "3-zone cardiac analysis distinguishing trained vs. stressed cardiovascular states",
        "- **Zone 1 (Active Day):** Working heart rate analysis\n- **Zone 2 (Transition):** 2-hour pre-bed cooling period\n- **Zone 3 (Deep Sleep):** Recovery heart rate assessment",
        "- **40% - Resting HR:** Cardiovascular efficiency\n- **40% - HRV:** Nervous system flexibility\n- **20% - Stability:** Cardiac pattern consistency",
        "### 3. Activity Score System",
        "Comprehensive physical activity quantification using VAE anomaly detection",
        "- **Fitness Score (50 pts):** Percentile ranking of steps, calories, METs, HR\n- **Consistency Score (50 pts):** Inverse variability coefficient - rewards stability\n- **Anomaly Penalty (-20 pts):** VAE reconstruction error for irregular patterns",
        "Formula: (Fitness + Consistency) - Anomaly Penalty",
        "### 4. Stress Score System",
        "Distinguishes training strain from maladaptive stress (illness/anxiety)",
        "- **HRV-Based Stress (40%):** Deviation from 7-day 95th percentile baseline\n- **Heart Rate Stress (35%):** Distance from personal 5th percentile calm state\n- **Intensity Load (25%):** Population-normalized daily intensity totals",
        "0-30: Low Stress · 31-60: Moderate · 61-100: High Stress",
        "### Technologies & Methods",
        "- **Machine Learning:** Variational Autoencoder (VAE) for anomaly detection · Spectral Clustering for pattern validation · K-Means clustering with synthetic anchors · Time-series analysis and forecasting\n- **Statistical Methods:** Percentile-based normalization · Coefficient of Variation analysis · Rolling window statistics (7-day) · RMSSD (HRV calculation)\n- **Data Processing:** Python with pandas for data manipulation · Scikit-learn for ML algorithms · NumPy for numerical computations · Real-time biometric data pipelines\n- **Healthcare Analytics:** Clinical ground truth integration · Personalized baseline adaptation · Autonomic nervous system analysis · Cardiovascular fitness assessment",
        "### Key Results & Impact",
        "- **Sleep Performance Gap:** Identified 50.5-point difference between best (92.5) and worst (42.0) performers, enabling targeted interventions\n- **Synthetic Validation:** Successfully benchmarked real users against synthetic extremes, revealing distinct healthy vs. at-risk patterns\n- **Operational Systems:** 4 fully functional scoring algorithms providing continuous health monitoring and trend analysis\n- **Future Mission:** 24/7 predictive AI with medical supervisor filtering to prevent hospitalizations through early detection",
        "### Development Roadmap",
        "- **Phase 1: Completed** — Sleep, Heart, Activity, and Stress scoring systems operational\n- **Phase 2: In Development** — Recovery Score (Sleep + Resting HR) and Overall Health Score calibration\n- **Phase 3: Planned** — Predictive AI layer with professional medical supervision integration",
        "*AI Clinic mission, 2025–26 (first semester).*",
      ],
      // UNAPPROVED (FR translation of the old-site text)
      fr: [
        "Développement d'un système complet de suivi biométrique de la santé qui transforme des données physiologiques brutes en indicateurs de santé exploitables. Le projet met en œuvre une stratégie inédite d'« ancres synthétiques » (Synthetic Anchor Strategy) pour comparer des données de santé non étiquetées à des profils construits d'utilisateur « idéal » et « à risque », ce qui permet des évaluations fiables sans étiquetage classique.",
        "Le système crée quatre algorithmes de score complets (sommeil, cœur, activité et stress), conçus pour un suivi de santé 24 h/24 et une intervention précoce. L'objectif final : éviter des hospitalisations grâce à une surveillance algorithmique continue, associée à un suivi médical professionnel.",
        "### Benchmark synthétique",
        "Pour résoudre le problème des données de santé non étiquetées, nous avons mis en place une **stratégie d'ancres synthétiques** :",
        "- **L'utilisateur « idéal » :** profil synthétique simulant des indicateurs de santé optimaux : 8 heures de sommeil, VFC élevée, activité régulière, fonction cardiovasculaire optimale\n- **L'utilisateur « à risque » :** profil synthétique simulant une mauvaise santé : sommeil fragmenté, fréquence cardiaque au repos élevée, sédentarité, VFC faible",
        "Ces profils synthétiques ont été injectés dans le jeu de données pour créer un cadre de référence, ce qui permet de valider les tendances par clustering spectral et analyse de l'importance des variables plutôt que par une classification fondée sur la proximité.",
        "### 1. Score de sommeil avancé",
        "Évaluation multidimensionnelle du sommeil, adaptée au chronotype de chacun",
        "- **Durée (30 %) :** optimisée pour 7 à 9 heures, avec de fortes pénalités en dehors de cette plage\n- **Efficacité (30 %) :** récompense une efficacité >95 % ; fortes pénalités <85 %\n- **Fragmentation (20 %) :** une seule session = 20 pts ; 4 sessions ou plus ≈ 0 pt\n- **Régularité (20 %) :** récompense des heures de coucher et de lever régulières (±30 min)",
        "Moyenne glissante sur 7 jours, avec une fenêtre de sommeil personnalisée",
        "### 2. Santé cardiaque",
        "Analyse cardiaque en 3 zones, qui distingue un système cardiovasculaire entraîné d'un système stressé",
        "- **Zone 1 (journée active) :** analyse de la fréquence cardiaque en activité\n- **Zone 2 (transition) :** phase de récupération de 2 heures avant le coucher\n- **Zone 3 (sommeil profond) :** évaluation de la fréquence cardiaque de récupération",
        "- **40 % – FC au repos :** efficacité cardiovasculaire\n- **40 % – VFC :** flexibilité du système nerveux\n- **20 % – Stabilité :** régularité du rythme cardiaque",
        "### 3. Score d'activité",
        "Quantification complète de l'activité physique, avec détection d'anomalies par VAE",
        "- **Score de forme (50 pts) :** classement en percentiles des pas, calories, METs et fréquence cardiaque\n- **Score de régularité (50 pts) :** inverse du coefficient de variation, qui récompense la stabilité\n- **Pénalité d'anomalie (-20 pts) :** erreur de reconstruction du VAE pour les comportements irréguliers",
        "Formule : (forme + régularité) - pénalité d'anomalie",
        "### 4. Score de stress",
        "Distingue la fatigue liée à l'entraînement du stress inadapté (maladie, anxiété)",
        "- **Stress lié à la VFC (40 %) :** écart par rapport à une référence au 95e percentile sur 7 jours\n- **Stress lié à la fréquence cardiaque (35 %) :** distance par rapport à l'état de calme personnel (5e percentile)\n- **Charge d'intensité (25 %) :** total d'intensité quotidien, normalisé sur la population",
        "0-30 : stress faible · 31-60 : modéré · 61-100 : stress élevé",
        "### Technologies & méthodes",
        "- **Machine learning :** autoencodeur variationnel (VAE) pour la détection d'anomalies · Clustering spectral pour valider les tendances · K-Means avec ancres synthétiques · Analyse et prévision de séries temporelles\n- **Méthodes statistiques :** normalisation par percentiles · Analyse du coefficient de variation · Statistiques sur fenêtre glissante (7 jours) · RMSSD (calcul de la VFC)\n- **Traitement des données :** Python et pandas pour la manipulation des données · scikit-learn pour les algorithmes de ML · NumPy pour les calculs numériques · Pipelines de données biométriques en temps réel\n- **Analyse de santé :** intégration d'une vérité terrain clinique · Références personnalisées · Analyse du système nerveux autonome · Évaluation de la forme cardiovasculaire",
        "### Résultats clés & impact",
        "- **Écart de performance du sommeil :** écart de 50,5 points identifié entre le meilleur (92,5) et le moins bon (42,0) profil, pour des interventions ciblées\n- **Validation synthétique :** comparaison réussie des utilisateurs réels aux extrêmes synthétiques, révélant des profils sains et à risque bien distincts\n- **Systèmes opérationnels :** 4 algorithmes de score pleinement fonctionnels pour un suivi de santé continu et l'analyse des tendances\n- **Mission future :** une IA prédictive 24 h/24, filtrée par un superviseur médical, pour éviter des hospitalisations grâce à la détection précoce",
        "### Feuille de route",
        "- **Phase 1 : terminée** — scores de sommeil, de cœur, d'activité et de stress opérationnels\n- **Phase 2 : en développement** — score de récupération (sommeil + FC au repos) et calibrage d'un score de santé global\n- **Phase 3 : prévue** — couche d'IA prédictive intégrant une supervision médicale professionnelle",
        "*Mission AI Clinic, 2025–26 (premier semestre).*", // UNAPPROVED (FR)
      ],
    },
    stack: ['Python', 'pandas', 'scikit-learn', 'NumPy', 'VAE', 'Spectral clustering', 'K-Means'],
    media: [],
    links: [],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
