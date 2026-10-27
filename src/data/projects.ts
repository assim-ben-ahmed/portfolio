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
import hubAppHome from '../../assets/images/achievements/google-build-with-ai/03-app-login-home-schedule.jpg?pic'
import hubAppAi from '../../assets/images/achievements/google-build-with-ai/04-app-ai-assistants-tools-map.jpg?pic'
import hubAppBooking from '../../assets/images/achievements/google-build-with-ai/05-app-booking-grades-attendance.jpg?pic'
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
import vitaLandingEn from '../../assets/images/projects/vitalight/demo/en/01-landing.jpg?pic'
import vitaLandingFr from '../../assets/images/projects/vitalight/demo/fr/01-landing.jpg?pic'
import vitaDashboardEn from '../../assets/images/projects/vitalight/demo/en/02-dashboard.jpg?pic'
import vitaDashboardFr from '../../assets/images/projects/vitalight/demo/fr/02-dashboard.jpg?pic'
import vitaReportEn from '../../assets/images/projects/vitalight/demo/en/04-report-martin.jpg?pic'
import vitaReportFr from '../../assets/images/projects/vitalight/demo/fr/04-report-martin.jpg?pic'
import vitaNewAssessmentEn from '../../assets/images/projects/vitalight/demo/en/07-new-assessment.jpg?pic'
import vitaNewAssessmentFr from '../../assets/images/projects/vitalight/demo/fr/07-new-assessment.jpg?pic'
import vitaParentAppEn from '../../assets/images/projects/vitalight/demo/en/06-parent-app.jpg?pic'
import vitaParentAppFr from '../../assets/images/projects/vitalight/demo/fr/06-parent-app.jpg?pic'
import vitaGuideEn from '../../assets/images/projects/vitalight/demo/en/09-pregnancy-guide.jpg?pic'
import vitaGuideFr from '../../assets/images/projects/vitalight/demo/fr/09-pregnancy-guide.jpg?pic'
import vitaNotificationsEn from '../../assets/images/projects/vitalight/demo/en/12-notifications.jpg?pic'
import vitaNotificationsFr from '../../assets/images/projects/vitalight/demo/fr/12-notifications.jpg?pic'
import vitaCanvas from '../../assets/images/projects/vitalight/02-lean-canvas.png?pic'
import vitaCanvasPdf from '../../assets/images/projects/vitalight/03-lean-canvas.pdf?url'
import pbReport from '../../assets/images/projects/ai-clinic-pitchboy/01-report-overview.jpg?pic'
import pbTranscript from '../../assets/images/projects/ai-clinic-pitchboy/02-report-prosody-transcript.jpg?pic'
import pbModel from '../../assets/images/projects/ai-clinic-pitchboy/03-model-scores.jpg?pic'
import pbBias from '../../assets/images/projects/ai-clinic-pitchboy/04-bias-audit.jpg?pic'
import pbAnalyze from '../../assets/images/projects/ai-clinic-pitchboy/05-analyze-upload.jpg?pic'
import pbEthics from '../../assets/images/projects/ai-clinic-pitchboy/06-responsible-use.jpg?pic'
import gpPalm from '../../assets/images/projects/gesture-player/01-open-palm.jpg?pic'
import gpNext from '../../assets/images/projects/gesture-player/02-next-track.jpg?pic'
import gpVolume from '../../assets/images/projects/gesture-player/03-volume-pinch.jpg?pic'
import gpMute from '../../assets/images/projects/gesture-player/04-mute.jpg?pic'
import sbHomework from '../../assets/images/projects/study-buddy/01-homework-coach.jpg?pic'
import sbExplain from '../../assets/images/projects/study-buddy/02-explain.jpg?pic'
import sbQuiz from '../../assets/images/projects/study-buddy/03-quiz.jpg?pic'
import sbCards from '../../assets/images/projects/study-buddy/04-flashcards.jpg?pic'
import sbMobile from '../../assets/images/projects/study-buddy/05-mobile.jpg?pic'
import shiftReco from '../../assets/images/projects/ai-clinic-shift/01-recommendation.jpg?pic'
import shiftBenchmark from '../../assets/images/projects/ai-clinic-shift/02-scraped-benchmark.jpg?pic'
import shiftEvidence from '../../assets/images/projects/ai-clinic-shift/03-evidence-matrix.jpg?pic'
import shiftWeights from '../../assets/images/projects/ai-clinic-shift/04-live-weights.jpg?pic'
import shiftSensitivity from '../../assets/images/projects/ai-clinic-shift/05-sensitivity.jpg?pic'
import bepChat from '../../assets/images/projects/ai-clinic-beparentalis/01-chat-triage.jpg?pic'
import bepMobile from '../../assets/images/projects/ai-clinic-beparentalis/02-chat-mobile.jpg?pic'
import bepOverview from '../../assets/images/projects/ai-clinic-beparentalis/03-admin-overview.jpg?pic'
import bepConversation from '../../assets/images/projects/ai-clinic-beparentalis/04-admin-conversation.jpg?pic'
import bepReview from '../../assets/images/projects/ai-clinic-beparentalis/05-admin-review-queue.jpg?pic'
import bepKnowledge from '../../assets/images/projects/ai-clinic-beparentalis/06-admin-knowledge.jpg?pic'
import bepEvaluation from '../../assets/images/projects/ai-clinic-beparentalis/07-admin-evaluation.jpg?pic'
import bioPerson from '../../assets/images/projects/ai-clinic-biometric-health/01-person-scores.jpg?pic'
import bioBaselines from '../../assets/images/projects/ai-clinic-biometric-health/02-person-baselines.jpg?pic'
import bioCohort from '../../assets/images/projects/ai-clinic-biometric-health/03-cohort-overview.jpg?pic'
import bioWarning from '../../assets/images/projects/ai-clinic-biometric-health/04-early-warning.jpg?pic'
import bioMethod from '../../assets/images/projects/ai-clinic-biometric-health/05-method-limits.jpg?pic'
import vragLanding from '../../assets/images/projects/ai-clinic-faculties-video-rag/01-landing.jpg?pic'
import vragPicker from '../../assets/images/projects/ai-clinic-faculties-video-rag/02-model-picker.jpg?pic'
import vragPipeline from '../../assets/images/projects/ai-clinic-faculties-video-rag/03-processing-pipeline.jpg?pic'
import vragGraph from '../../assets/images/projects/ai-clinic-faculties-video-rag/04-graph-rag-analysis.jpg?pic'
import vragCompare from '../../assets/images/projects/ai-clinic-faculties-video-rag/05-all-rags-compare.jpg?pic'
import lgvChatFr from '../../assets/images/projects/la-galite-voyage/01-web-chat-fr.jpg?pic'
import lgvPersonalisation from '../../assets/images/projects/la-galite-voyage/02-personalisation-compare.jpg?pic'
import lgvWhatsapp from '../../assets/images/projects/la-galite-voyage/03-whatsapp-simulator.jpg?pic'
import lgvChatAr from '../../assets/images/projects/la-galite-voyage/04-web-chat-arabic.jpg?pic'
import lgvOverview from '../../assets/images/projects/la-galite-voyage/05-dashboard-overview.jpg?pic'
import lgvSegments from '../../assets/images/projects/la-galite-voyage/06-dashboard-segments.jpg?pic'
import lgvGaps from '../../assets/images/projects/la-galite-voyage/07-dashboard-knowledge-gaps.jpg?pic'
import lgvPca from '../../assets/images/projects/la-galite-voyage/08-segmentation-pca.jpg?pic'

export type Filter = 'experience' | 'hackathons' | 'clinic' | 'startup' | 'side'

/** `picFr`: optional French version of the image (e.g. a screenshot of the app's French interface). */
export type ImageMedia = { kind: 'image'; pic: Picture; picFr?: Picture; alt: Localized }
/** The image to show for the current language. */
export const picFor = (m: ImageMedia, lang: 'en' | 'fr') => (lang === 'fr' && m.picFr) || m.pic
export type VideoMedia = { kind: 'video'; src: string; poster: Picture; alt: Localized }
export type Media = ImageMedia | VideoMedia

export type ProjectLink =
  | { kind: 'demo' | 'photos' | 'screenshots'; href: `#${string}` } // in-page anchor on the detail page
  | { kind: 'github' | 'leanCanvas' | 'live' | 'site'; href: string } // 'live': a running app, 'site': a project website (new tab)
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
      // App screenshots taken Oct 2026 from the hackathon code in mock-data mode (fictional student "Alex",
      // invented courses and grades). Alt text UNAPPROVED (see assets.md).
      {
        kind: 'image',
        pic: hubAppHome,
        alt: {
          en: 'Aivancity Hub app: bilingual sign-in, home with today’s classes, and the weekly schedule (demo data)',
          fr: "Application Aivancity Hub : connexion bilingue, accueil avec les cours du jour et emploi du temps de la semaine (données de démonstration)",
        },
      },
      {
        kind: 'image',
        pic: hubAppAi,
        alt: {
          en: 'Aivancity Hub app: the Mistral AI assistants, the tools and services grid, and the campus map with named rooms (demo data)',
          fr: "Application Aivancity Hub : les assistants IA Mistral, la grille d'outils et services, et le plan du campus avec les salles nommées (données de démonstration)",
        },
      },
      {
        kind: 'image',
        pic: hubAppBooking,
        alt: {
          en: 'Aivancity Hub app: room booking form, grades and attendance (demo data)',
          fr: "Application Aivancity Hub : formulaire de réservation de salle, notes et assiduité (données de démonstration)",
        },
      },
    ],
    links: [{ kind: 'photos', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/aivancity-hub' }],
  },
  {
    slug: 'vitalight',
    filter: 'startup',
    featured: true,
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
    stack: ['Python', 'TensorFlow', 'scikit-learn', 'Azure', 'React', 'TypeScript', 'Vite'],
    // Screenshots of the clickable demo (Portfolio/vitalight, synthetic data); FR site shows the FR interface.
    // Alt text UNAPPROVED.
    cover: {
      kind: 'image',
      pic: vitaLandingEn,
      picFr: vitaLandingFr,
      alt: {
        en: 'VitaLight demo: landing page (synthetic data)',
        fr: "Démo VitaLight : page d'accueil (données synthétiques)",
      },
    },
    media: [
      {
        kind: 'image',
        pic: vitaDashboardEn,
        picFr: vitaDashboardFr,
        alt: {
          en: 'Clinician dashboard: families followed, recent assessments and cohort by attention level (synthetic data)',
          fr: "Tableau de bord clinicien : familles suivies, évaluations récentes et cohorte par niveau d'attention (données synthétiques)",
        },
      },
      {
        kind: 'image',
        pic: vitaReportEn,
        picFr: vitaReportFr,
        alt: {
          en: 'Risk report for a fictional family: each condition against the population baseline, with the factors behind it',
          fr: "Rapport de risque d'une famille fictive : chaque pathologie comparée à la référence de population, avec les facteurs en cause",
        },
      },
      {
        kind: 'image',
        pic: vitaNewAssessmentEn,
        picFr: vitaNewAssessmentFr,
        alt: {
          en: "New assessment: both parents' medical history entered in five steps",
          fr: 'Nouvelle évaluation : les antécédents médicaux des deux parents saisis en cinq étapes',
        },
      },
      {
        kind: 'image',
        pic: vitaParentAppEn,
        picFr: vitaParentAppFr,
        alt: {
          en: 'Parent mobile app: the report in plain language and weekly pregnancy guidance',
          fr: 'Application mobile parents : le rapport en langage simple et des conseils de grossesse chaque semaine',
        },
      },
      {
        kind: 'image',
        pic: vitaGuideEn,
        picFr: vitaGuideFr,
        alt: {
          en: 'Pregnancy guide with its sources, and the weekly push-notification schedule',
          fr: 'Guide de grossesse avec ses sources, et le calendrier hebdomadaire des notifications push',
        },
      },
      {
        kind: 'image',
        pic: vitaNotificationsEn,
        picFr: vitaNotificationsFr,
        alt: {
          en: 'Clinician notification centre: alerts when a prediction is ready or a report is shared',
          fr: "Centre de notifications du clinicien : alertes quand une prédiction est prête ou qu'un rapport est partagé",
        },
      },
      {
        kind: 'image',
        pic: vitaCanvas,
        alt: { en: 'VitaLight Lean Canvas', fr: 'Lean Canvas de VitaLight' },
      },
    ],
    links: [{ kind: 'live', href: 'https://assim-ben-ahmed.github.io/vitalight/' }, { kind: 'leanCanvas', href: vitaCanvasPdf }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/vitalight' }],
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
    // FastAPI → Docker added from the open rebuild (travel-agency-ai-platform README) — UNAPPROVED.
    stack: ['Python', 'Power BI', 'RAG', 'WhatsApp', 'FastAPI', 'ChromaDB', 'scikit-learn', 'Streamlit', 'Mistral', 'Claude', 'Docker'],
    // Screenshots from the open rebuild on synthetic data (fictional agency "Carthage Horizons Voyages"),
    // not the client's system — no client data. Alt text UNAPPROVED (see assets.md).
    cover: {
      kind: 'image',
      pic: lgvChatFr,
      alt: {
        en: 'Travel assistant web chat in French: price estimate, payment terms and segment-based suggestions (synthetic data)',
        fr: "Chat web de l'assistant voyage en français : estimation de prix, modalités de paiement et suggestions selon le segment (données fictives)",
      },
    },
    media: [
      {
        kind: 'image',
        pic: lgvPersonalisation,
        alt: {
          en: 'Same question, two clients from different segments: the assistant suggests pilgrimage trips to one and budget adventures to the other (synthetic data)',
          fr: "Même question, deux clients de segments différents : l'assistant propose des pèlerinages à l'un et des voyages d'aventure à petit budget à l'autre (données fictives)",
        },
      },
      {
        kind: 'image',
        pic: lgvWhatsapp,
        alt: {
          en: 'WhatsApp simulator posting the exact Meta Cloud API webhook payload, with the visa answer shown in the phone (synthetic data)',
          fr: "Simulateur WhatsApp qui envoie le payload exact du webhook Meta Cloud API, avec la réponse visa affichée dans le téléphone (données fictives)",
        },
      },
      {
        kind: 'image',
        pic: lgvChatAr,
        alt: {
          en: 'The same web chat in Arabic, right-to-left, answering a Tunisian-dialect price question (synthetic data)',
          fr: "Le même chat web en arabe, de droite à gauche, répondant à une question de prix en dialecte tunisien (données fictives)",
        },
      },
      {
        kind: 'image',
        pic: lgvOverview,
        alt: {
          en: "Owner dashboard overview: conversations, share resolved by the assistant, handoffs to an advisor and satisfaction, week over week (synthetic data)",
          fr: "Vue d'ensemble du tableau de bord : conversations, part résolue par l'assistant, transferts à un conseiller et satisfaction, d'une semaine à l'autre (données fictives)",
        },
      },
      {
        kind: 'image',
        pic: lgvSegments,
        alt: {
          en: 'Dashboard customer segments: six named segments with their share of revenue, how to talk to them and which offers to propose (synthetic data)',
          fr: 'Segments clients dans le tableau de bord : six segments nommés avec leur part du CA, comment leur parler et quelles offres proposer (données fictives)',
        },
      },
      {
        kind: 'image',
        pic: lgvGaps,
        alt: {
          en: 'Dashboard knowledge gaps: topics customers ask about that the catalogue does not cover, with suggested FAQ additions (synthetic data)',
          fr: 'Lacunes de connaissances dans le tableau de bord : sujets demandés absents du catalogue, avec des ajouts de FAQ suggérés (données fictives)',
        },
      },
      {
        kind: 'image',
        pic: lgvPca,
        alt: {
          en: 'PCA projection of 1,500 synthetic customers coloured by their six KMeans segments',
          fr: 'Projection ACP de 1 500 clients fictifs, colorés selon leurs six segments KMeans',
        },
      },
    ],
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/travel-agency-ai-platform' }],
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
    links: [{ kind: 'site', href: 'https://assim-ben-ahmed.github.io/al-safa-2-park/' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/al-safa-2-park' }],
  },
  {
    slug: 'aquanova',
    filter: 'hackathons',
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
    slug: 'pitchboy',
    filter: 'clinic',
    title: { en: 'Pitchboy', fr: 'Pitchboy' },
    oneLiner: {
      en: 'Speech and emotion analysis of interview recordings',
      fr: "Analyse vocale et émotionnelle d'entretiens enregistrés",
    },
    detail: {
      en: [
        '**Pitchboy (2023–24):** speech recognition and emotion analysis on interview recordings, combining audio prosody and RoBERTa text sentiment. My first mission with a real company, in the first semester of PGE1.',
        clinic20.en,
      ],
      fr: [
        "**Pitchboy (2023–24) :** reconnaissance vocale et analyse des émotions sur des entretiens enregistrés, combinant prosodie audio et sentiment textuel avec RoBERTa. Ma première mission pour une vraie entreprise, au premier semestre de PGE1.",
        clinic20.fr,
      ],
    },
    // Stack, screenshots and alt text from the open rebuild (Pitchboy/interview-voice-analyzer, docs/PORTFOLIO.md) — UNAPPROVED.
    // Synthetic demo voice and the public RAVDESS dataset: no client code or data.
    stack: ['Python', 'Librosa', 'scikit-learn', 'Whisper', 'RoBERTa', 'Hugging Face', 'FastAPI', 'WebSockets', 'React', 'TypeScript'],
    cover: {
      kind: 'image',
      pic: pbReport,
      alt: {
        en: 'Interview report: four delivery scores, emotion timeline and plain-language observations (synthetic voice)',
        fr: "Rapport d'entretien : quatre scores, frise des émotions et observations en langage clair (voix de synthèse)",
      },
    },
    media: [
      {
        kind: 'image',
        pic: pbTranscript,
        alt: {
          en: "Pitch and loudness relative to the speaker's own baseline, delivery metrics, and a transcript with fillers and hedges highlighted (synthetic voice)",
          fr: "Hauteur et intensité par rapport à la voix de référence du locuteur, indicateurs de débit, et transcription avec hésitations surlignées (voix de synthèse)",
        },
      },
      {
        kind: 'image',
        pic: pbModel,
        alt: {
          en: 'Model dashboard: held-out scores, confusion matrix, per-class scores and model selection',
          fr: 'Tableau de bord du modèle : scores sur locuteurs inédits, matrice de confusion, scores par classe et sélection du modèle',
        },
      },
      {
        kind: 'image',
        pic: pbBias,
        alt: {
          en: 'Bias audit by speaker sex: accuracy gap, per-label recall gaps and the three gaps above 10% flagged',
          fr: 'Audit des biais par sexe du locuteur : écart de précision, écarts de rappel par émotion et les trois écarts de plus de 10 % signalés',
        },
      },
      {
        kind: 'image',
        pic: pbAnalyze,
        alt: {
          en: 'Upload screen with consent checkbox, microphone recording and the meaning of the four states',
          fr: "Écran d'import avec case de consentement, enregistrement au micro et la signification des quatre états",
        },
      },
      {
        kind: 'image',
        pic: pbEthics,
        alt: {
          en: 'Responsible-use page: intended use, out-of-scope uses and risk register',
          fr: "Page d'usage responsable : usages prévus, usages exclus et registre des risques",
        },
      },
    ],
    // GitHub link to add once Assim publishes the repo.
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/interview-voice-analyzer' }],
  },
  {
    // From the project code (Portfolio/Video rag Faculties, Apr 2026) — not in content.md yet. All text UNAPPROVED.
    // Assim: AI Clinic mission, second semester of 2025–26, client Faculties.ai, team "Nexus Horizon".
    slug: 'faculties-video-rag',
    filter: 'clinic',
    title: { en: 'Faculties.ai — Video RAG', fr: 'Faculties.ai — RAG vidéo' },
    oneLiner: {
      en: 'Ask questions about any video: five multimodal RAG architectures benchmarked side by side',
      fr: "Poser des questions sur n'importe quelle vidéo : cinq architectures RAG multimodales comparées côte à côte",
    },
    detail: {
      en: [
        "**Faculties.ai (2025–26, second semester):** Faculties.ai wanted to know which retrieval strategy works best for answering questions about video, where meaning sits in both the speech and the images. Our team, Nexus Horizon, built Video Analyzer: upload a video, pick an architecture, then chat with it. Five RAG architectures run behind one FastAPI backend and a React interface, so they can be compared on the same video.",
      ],
      fr: [
        "**Faculties.ai (2025–26, second semestre) :** Faculties.ai voulait savoir quelle stratégie de recherche répond le mieux aux questions sur une vidéo, où le sens se trouve à la fois dans la parole et dans l'image. Notre équipe, Nexus Horizon, a construit Video Analyzer : on importe une vidéo, on choisit une architecture, puis on discute avec elle. Cinq architectures RAG tournent derrière un même backend FastAPI et une interface React, pour être comparées sur la même vidéo.",
      ],
    },
    stack: ['Python', 'FastAPI', 'React', 'Whisper', 'CLIP', 'YOLOv8', 'EasyOCR', 'ChromaDB', 'NetworkX', 'Mistral'],
    cover: {
      kind: 'image',
      pic: vragLanding,
      alt: {
        en: 'Video Analyzer home screen: upload a video, or launch the demo that runs every RAG model',
        fr: "Écran d'accueil de Video Analyzer : importer une vidéo ou lancer la démo qui fait tourner tous les modèles RAG",
      },
    },
    media: [
      {
        kind: 'image',
        pic: vragPicker,
        alt: {
          en: 'Choosing a RAG architecture: Simple, Agentic, Graph, Speculative, HyDE, or all of them side by side',
          fr: 'Choix de l’architecture RAG : simple, agentique, graphe, spéculative, HyDE, ou toutes côte à côte',
        },
      },
      {
        kind: 'image',
        pic: vragPipeline,
        alt: {
          en: 'Graph RAG processing steps: keyframes, YOLO object detection, knowledge graph, ChromaDB indexing',
          fr: 'Étapes de traitement du RAG graphe : images clés, détection d’objets YOLO, graphe de connaissances, indexation ChromaDB',
        },
      },
      {
        kind: 'image',
        pic: vragGraph,
        alt: {
          en: 'Graph RAG result: the knowledge graph, objects detected across 60 keyframes, and the chat panel',
          fr: 'Résultat du RAG graphe : le graphe de connaissances, les objets détectés sur 60 images clés et le panneau de chat',
        },
      },
      {
        kind: 'image',
        pic: vragCompare,
        alt: {
          en: 'Unified view: one question sent to four RAG models at once, each answering in its own panel',
          fr: 'Vue unifiée : une question envoyée à quatre modèles RAG à la fois, chacun répondant dans son panneau',
        },
      },
    ],
    // GitHub link to add once Assim publishes the repo.
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'live', href: 'https://assim-ben-ahmed.github.io/video-rag/' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/video-rag' }],
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
    // Mission tools + the open rebuild's (Portfolio/Shift Technology, Oct 2026) — rebuild part UNAPPROVED.
    stack: ['Python', 'BeautifulSoup', 'Pandas', 'Playwright', 'NumPy', 'Streamlit', 'Plotly'],
    // Screenshots of the open rebuild: vendors' public pricing pages scraped on 2026-10-19, assumed requirements,
    // no client data. Alt text UNAPPROVED (see assets.md).
    cover: {
      kind: 'image',
      pic: shiftReco,
      alt: {
        en: 'CRM selection dashboard: best match, weighted score by vendor and the plan compared for each vendor (public pricing pages, October 2026)',
        fr: 'Tableau de bord de sélection CRM : meilleur choix, score pondéré par éditeur et offre comparée pour chacun (pages tarifs publiques, octobre 2026)',
      },
    },
    media: [
      {
        kind: 'image',
        pic: shiftBenchmark,
        alt: {
          en: 'Scraped benchmark: 20 plans from 6 vendors with price, billing, source and date, and the 3 vendors whose pages block scraping',
          fr: 'Benchmark scrapé : 20 offres de 6 éditeurs avec prix, facturation, source et date, et les 3 éditeurs dont les pages bloquent le scraping',
        },
      },
      {
        kind: 'image',
        pic: shiftEvidence,
        alt: {
          en: 'Evidence matrix: which capabilities each compared plan shows on its pricing page',
          fr: "Matrice de preuves : les fonctionnalités que chaque offre comparée affiche sur sa page tarifs",
        },
      },
      {
        kind: 'image',
        pic: shiftWeights,
        alt: {
          en: 'Requirements and weights: sliders and team size recompute the ranking live',
          fr: "Besoins et pondérations : les curseurs et la taille d'équipe recalculent le classement en direct",
        },
      },
      {
        kind: 'image',
        pic: shiftSensitivity,
        alt: {
          en: 'Sensitivity: share of 5,000 random weightings won by each vendor, and scores as the cost weight changes',
          fr: 'Sensibilité : part de 5 000 pondérations aléatoires gagnée par chaque éditeur, et scores selon le poids du coût',
        },
      },
    ],
    // GitHub link to add once Assim publishes the repo.
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/crmbench' }],
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
    // Mission tools, then the open rebuild's (Portfolio/Beparentalis, Oct 2026) — rebuild part UNAPPROVED.
    stack: ['Python', 'Hugging Face', 'LoRA', 'PEFT', 'CamemBERT', 'FlauBERT', 'PyTorch', 'FastAPI', 'scikit-learn', 'SQLite'],
    // Screenshots from the open rebuild ("PediaBot"): public French health guidance, fictional conversations,
    // no client code or data. Alt text UNAPPROVED (see assets.md).
    cover: {
      kind: 'image',
      pic: bepChat,
      alt: {
        en: 'Parent chat: fever in a 2-month-old is flagged "see a doctor today", a dose question is declined, and breathing difficulty triggers "call 15"',
        fr: "Chat parent : une fièvre à 2 mois déclenche « consulter aujourd'hui », la question de dose est refusée et la gêne respiratoire déclenche « appelez le 15 »",
      },
    },
    media: [
      {
        kind: 'image',
        pic: bepMobile,
        alt: {
          en: 'The parent chat on a phone, with the emergency numbers always visible',
          fr: "Le chat parent sur téléphone, avec les numéros d'urgence toujours visibles",
        },
      },
      {
        kind: 'image',
        pic: bepOverview,
        alt: {
          en: 'Admin overview: conversations by day and urgency, share referred to a doctor, review queue, satisfaction and most asked topics (fictional data)',
          fr: "Vue d'ensemble admin : conversations par jour et par gravité, part orientée vers un médecin, file de revue, satisfaction et sujets les plus demandés (données fictives)",
        },
      },
      {
        kind: 'image',
        pic: bepConversation,
        alt: {
          en: 'Admin conversation view: the reply with its urgency level, the triage rule that fired and the advice sheet used, ready for medical review',
          fr: 'Vue conversation admin : la réponse avec son niveau de gravité, la règle de triage déclenchée et la fiche utilisée, prête pour la revue médicale',
        },
      },
      {
        kind: 'image',
        pic: bepReview,
        alt: {
          en: 'Review queue: emergencies and answers rated "not useful" wait until a team member signs them off',
          fr: "File de revue : les urgences et les réponses jugées « pas utiles » attendent la validation d'un membre de l'équipe",
        },
      },
      {
        kind: 'image',
        pic: bepKnowledge,
        alt: {
          en: 'Knowledge base: 11 sourced advice sheets with their use count, and the questions the bot could not answer',
          fr: "Base de connaissances : 11 fiches sourcées avec leur nombre d'utilisations, et les questions restées sans réponse",
        },
      },
      {
        kind: 'image',
        pic: bepEvaluation,
        alt: {
          en: 'Triage evaluation: accuracy, under-triage, emergencies caught and the confusion matrix on 60 parent messages',
          fr: 'Évaluation du triage : exactitude, sous-triage, urgences détectées et matrice de confusion sur 60 messages de parents',
        },
      },
    ],
    // GitHub link to add once Assim publishes the repo.
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/pediabot' }],
  },
  {
    // Rewritten Oct 2026 from the mission's code (PGE3/Semester 1/AI Clinic) and the clean rebuild in
    // Portfolio/Biometric Health Monitoring. Replaces the old-site text, whose VAE, spectral clustering,
    // "synthetic anchors" and stress score are not in the mission code. All text UNAPPROVED.
    // Assim: AI Clinic mission, first semester of 2025–26 (no client named).
    slug: 'biometric-health-monitoring',
    filter: 'clinic',
    title: { en: 'Biometric Health Monitoring', fr: 'Biometric Health Monitoring' },
    oneLiner: {
      en: 'Six daily wellness scores and early-warning signals from Fitbit wearable data',
      fr: "Six scores de bien-être quotidiens et des signaux d'alerte précoce à partir de données Fitbit",
    },
    detail: {
      en: [
        "**AI Clinic (2025–26, first semester):** how can raw wearable data (steps, sleep, a heart rate every few seconds) become indicators a person or a carer can act on? With my team, I designed six daily scores (sleep, heart, activity, steps, recovery and overall health) on the public Fitbit dataset. I then rebuilt the project from scratch as a clean, tested pipeline with an early-warning layer and a dashboard.",
      ],
      fr: [
        "**AI Clinic (2025–26, premier semestre) :** comment transformer des données brutes de montre connectée (pas, sommeil, fréquence cardiaque toutes les quelques secondes) en indicateurs utiles à une personne ou à un soignant ? Avec mon équipe, j'ai conçu six scores quotidiens (sommeil, cœur, activité, pas, récupération et santé globale) sur le jeu de données public Fitbit. J'ai ensuite reconstruit le projet de zéro : un pipeline propre et testé, avec une couche d'alerte précoce et un tableau de bord.",
      ],
    },
    stack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Isolation Forest', 'Streamlit', 'Plotly', 'pytest'],
    // Dashboard screenshots from the rebuild, public Fitbit data (anonymous IDs). Alt text UNAPPROVED.
    cover: {
      kind: 'image',
      pic: bioPerson,
      alt: {
        en: "One person's dashboard: six score cards and daily scores over a month, with early-warning days shaded (public Fitbit data)",
        fr: "Tableau de bord d'une personne : six scores et leur évolution sur un mois, avec les jours d'alerte surlignés (données Fitbit publiques)",
      },
    },
    media: [
      {
        kind: 'image',
        pic: bioBaselines,
        alt: {
          en: "Resting heart rate and sleep compared with the person's own 7-day baseline, and the list of warning days",
          fr: 'Fréquence cardiaque au repos et sommeil comparés à la référence personnelle sur 7 jours, et la liste des jours d’alerte',
        },
      },
      {
        kind: 'image',
        pic: bioCohort,
        alt: {
          en: 'Cohort overview: 33 people, score distributions, people by overall health and a ranked table',
          fr: "Vue d'ensemble de la cohorte : 33 personnes, distribution des scores, répartition par santé globale et classement",
        },
      },
      {
        kind: 'image',
        pic: bioWarning,
        alt: {
          en: 'Early-warning evaluation on synthetic incidents: precision, recall and F1 of the rules and the Isolation Forest',
          fr: "Évaluation de l'alerte précoce sur des incidents synthétiques : précision, rappel et F1 des règles et de l'Isolation Forest",
        },
      },
      {
        kind: 'image',
        pic: bioMethod,
        alt: {
          en: 'Method & limits page: how each score is built and the limits of the data',
          fr: 'Page méthode & limites : construction de chaque score et limites des données',
        },
      },
    ],
    // GitHub link to add once Assim publishes the repo.
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/biometric-health-monitoring' }],
  },
  {
    // Side project (Portfolio/Study Buddy, Oct 2026), rebuilt from Assim's HTML prototype. All text UNAPPROVED.
    slug: 'ai-study-buddy',
    filter: 'side',
    title: { en: 'AI Study Buddy', fr: 'AI Study Buddy' },
    oneLiner: {
      en: 'A Mistral-powered tutor that explains, coaches homework and turns any topic into a quiz or flashcards',
      fr: "Un tuteur propulsé par Mistral qui explique, accompagne les devoirs et transforme n'importe quel sujet en quiz ou en fiches",
    },
    detail: {
      en: [
        "**Side project, built to help students study more easily.** It started as a single HTML page with pre-written answers; I turned it into a real app: a FastAPI backend that keeps the Mistral API key secret and streams the answers, and a light, mobile-friendly interface.",
      ],
      fr: [
        "**Projet personnel, pour aider les étudiants à réviser plus facilement.** Au départ, une simple page HTML aux réponses écrites à l'avance ; j'en ai fait une vraie application : un backend FastAPI qui garde la clé de l'API Mistral secrète et diffuse les réponses en direct, et une interface légère, adaptée au mobile.",
      ],
    },
    stack: ['Python', 'FastAPI', 'Mistral', 'JavaScript', 'Docker', 'pytest'],
    // Screenshots of the running app with real Mistral answers (Oct 2026). Alt text UNAPPROVED (see assets.md).
    cover: {
      kind: 'image',
      pic: sbHomework,
      alt: {
        en: 'Homework coach: the student proposes a step, the tutor confirms it and asks for the next one instead of giving the answer',
        fr: "Coach de devoirs : l'élève propose une étape, le tuteur la valide et lui demande la suivante au lieu de donner la réponse",
      },
    },
    media: [
      {
        kind: 'image',
        pic: sbExplain,
        alt: {
          en: 'Explain mode: photosynthesis explained step by step at high-school level',
          fr: 'Mode Explique : la photosynthèse expliquée étape par étape, niveau lycée',
        },
      },
      {
        kind: 'image',
        pic: sbQuiz,
        alt: {
          en: 'Generated quiz on the water cycle, with the score and an explanation after each answer',
          fr: "Quiz généré sur le cycle de l'eau, avec le score et une explication après chaque réponse",
        },
      },
      {
        kind: 'image',
        pic: sbCards,
        alt: {
          en: "Flashcards on Newton's laws, flipped to show the answers",
          fr: 'Fiches de révision sur les lois de Newton, retournées pour montrer les réponses',
        },
      },
      {
        kind: 'image',
        pic: sbMobile,
        alt: {
          en: 'The app on a phone, answering in French about the Pythagorean theorem',
          fr: "L'application sur téléphone, qui répond en français sur le théorème de Pythagore",
        },
      },
    ],
    // GitHub link to add once Assim publishes the repo; a live link once it is deployed.
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/study-buddy' }],
  },
  {
    // Side project (Portfolio/hand motion media player, Oct 2026). All text UNAPPROVED.
    slug: 'gesture-player',
    filter: 'side',
    title: { en: 'Gesture Player', fr: 'Gesture Player' },
    oneLiner: {
      en: 'A desktop music player you control with hand gestures in front of a webcam',
      fr: 'Un lecteur de musique de bureau que l’on contrôle par gestes de la main devant une webcam',
    },
    detail: {
      en: [
        "**Side project in computer vision.** Open your palm to play or pause, point to change track, pinch and move your hand up or down to set the volume, make a fist to mute. MediaPipe tracks 21 points of the hand in real time, and a small gesture engine turns them into commands for a Qt media player.",
      ],
      fr: [
        "**Projet personnel de vision par ordinateur.** Paume ouverte pour lecture ou pause, pointer pour changer de morceau, pincer et monter ou descendre la main pour régler le volume, poing fermé pour couper le son. MediaPipe suit 21 points de la main en temps réel, et un petit moteur de gestes les transforme en commandes pour un lecteur multimédia Qt.",
      ],
    },
    stack: ['Python', 'MediaPipe', 'OpenCV', 'PySide6', 'NumPy', 'pytest'],
    // Screenshots of the app with its built-in simulated hand and royalty-free demo tracks. Alt text UNAPPROVED.
    cover: {
      kind: 'image',
      pic: gpPalm,
      alt: {
        en: 'Gesture Player: an open palm being held, with the ring and the legend bar filling before play / pause fires',
        fr: 'Gesture Player : une paume ouverte maintenue, l’anneau et la barre de la légende se remplissent avant lecture / pause',
      },
    },
    media: [
      {
        kind: 'image',
        pic: gpNext,
        alt: {
          en: 'Pointing right skips to the next track, confirmed by a message on the video',
          fr: 'Pointer à droite passe au morceau suivant, confirmé par un message sur la vidéo',
        },
      },
      {
        kind: 'image',
        pic: gpVolume,
        alt: {
          en: 'Volume mode: pinching and moving the hand up raises the volume',
          fr: 'Mode volume : pincer et monter la main augmente le volume',
        },
      },
      {
        kind: 'image',
        pic: gpMute,
        alt: {
          en: 'A fist held for a moment mutes the sound',
          fr: 'Un poing maintenu un instant coupe le son',
        },
      },
    ],
    // GitHub link to add once Assim publishes the repo.
    links: [{ kind: 'screenshots', href: '#media' }, { kind: 'github', href: 'https://github.com/assim-ben-ahmed/gesture-player' }],
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
