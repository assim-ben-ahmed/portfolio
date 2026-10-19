// Extra detail sections per project, from the OLD site's project pages (Documents/portfolio/project-*.html),
// word for word in EN. Shown under the approved content.md text on each detail page.
// FR = translation of that EN text — UNAPPROVED, review with Assim.
// Deliberate edits (Assim's hard rules): VitaLight drops "Selected for the prestigious Microsoft Imagine Cup";
// the Pipedrive agent is credited "with a teammate" (content.md). Block syntax: see lib/rich.tsx.
import type { Localized } from '../i18n'

export const projectDetails: Record<string, Localized<string[]>> = {
  'wellpack-manager': {
    en: [
      '### SMS campaign timing',
      'An end-to-end machine learning solution for WELLPACK to optimize SMS marketing campaign timing. The model analyzes historical campaign data to predict the optimal sending times that maximize customer engagement and response rates.',
      '- Time-series analysis of SMS campaign performance data\n- Predictive modeling for optimal sending time recommendations\n- Automated ML pipeline for data processing and model training\n- Interactive dashboard with real-time insights\n- Production-ready deployment with Docker containerization',
      '- **Machine Learning:** scikit-learn for ML algorithms · Time-series forecasting models · Feature engineering techniques\n- **Development & Deployment:** Python for backend · Docker for containerization · Data visualization with Plotly',
      '### Pipedrive AI agent',
      'With a teammate, developed an intelligent AI agent chatbot during my internship at WELLPACK to revolutionize how teams interact with Pipedrive CRM. This conversational AI assistant leverages the Pipedrive API to enable users to perform complex CRM operations through simple natural language commands.',
      'The chatbot democratizes CRM usage by allowing team members of all technical levels to quickly and easily execute actions such as creating deals, updating contacts, managing pipelines, and retrieving analytics—all through conversational interactions. This significantly improved workflow efficiency and reduced the learning curve for new Pipedrive users.',
      '- Natural language interface for CRM operations (no technical knowledge required)\n- Full Pipedrive API integration for comprehensive CRM functionality\n- Automated deal creation, updates, and pipeline management\n- Contact and organization management with intelligent search\n- Activity tracking and task automation\n- Real-time data retrieval and reporting through conversational queries\n- User-friendly interface accessible to all team members',
      '- **AI & NLP:** Large Language Models (LLM) for intent recognition · Natural Language Processing for query parsing · Conversational AI framework · Entity extraction and slot filling\n- **API Integration:** Pipedrive REST API · OAuth2 authentication · Webhook handling for real-time updates · Rate limiting and error handling\n- **Backend Development:** Python for backend logic · FastAPI for API endpoints · Async processing for better performance · Session management for context\n- **Data & Security:** Secure API key management · Data validation and sanitization · Error handling and logging · User permission management',
      '- **Deal Management:** Create, update, and track deals through conversational commands. Users can ask questions like "Create a deal for ABC Company worth €50,000" or "Show me all deals in the negotiation stage."\n- **Contact & Organization Operations:** Add new contacts, update information, and manage organizations with simple natural language requests. The agent intelligently handles data formatting and validation.\n- **Reporting & Analytics:** Retrieve sales reports, pipeline analytics, and performance metrics through conversational queries. Get instant insights without navigating through complex dashboard interfaces.\n- **Workflow Automation:** Automate repetitive tasks like follow-up scheduling, status updates, and data entry. The agent executes multi-step workflows based on single conversational commands.',
      '- **Increased Efficiency:** Reduced time spent on routine CRM tasks by 60% through natural language automation\n- **Democratized Access:** Made CRM operations accessible to all team members regardless of technical expertise\n- **Improved Accuracy:** Reduced data entry errors through intelligent validation and auto-formatting\n- **Enhanced Adoption:** Lowered learning curve for new users, increasing CRM adoption across the team',
    ],
    fr: [
      '### Moment d\'envoi des campagnes SMS',
      "Une solution de machine learning de bout en bout pour WELLPACK afin d'optimiser le moment d'envoi des campagnes SMS marketing. Le modèle analyse l'historique des campagnes pour prédire les meilleurs moments d'envoi, ceux qui maximisent l'engagement et le taux de réponse des clients.",
      "- Analyse de séries temporelles des performances des campagnes SMS\n- Modélisation prédictive pour recommander les meilleurs moments d'envoi\n- Pipeline ML automatisé pour le traitement des données et l'entraînement du modèle\n- Tableau de bord interactif avec des indicateurs en temps réel\n- Déploiement prêt pour la production, conteneurisé avec Docker",
      '- **Machine learning :** scikit-learn pour les algorithmes de ML · Modèles de prévision de séries temporelles · Feature engineering\n- **Développement & déploiement :** Python pour le backend · Docker pour la conteneurisation · Visualisation des données avec Plotly',
      '### Agent IA Pipedrive',
      "En binôme, j'ai développé un agent conversationnel IA pendant mon stage chez WELLPACK pour transformer la façon dont les équipes utilisent le CRM Pipedrive. Cet assistant s'appuie sur l'API Pipedrive pour permettre de réaliser des opérations CRM complexes avec de simples commandes en langage naturel.",
      "Le chatbot démocratise l'usage du CRM : chaque membre de l'équipe, quel que soit son niveau technique, peut rapidement créer des affaires, mettre à jour des contacts, gérer les pipelines et consulter les analyses, le tout en conversant. Résultat : des processus nettement plus efficaces et une prise en main de Pipedrive bien plus rapide pour les nouveaux utilisateurs.",
      "- Interface en langage naturel pour les opérations CRM (aucune compétence technique requise)\n- Intégration complète de l'API Pipedrive\n- Création, mise à jour des affaires et gestion des pipelines automatisées\n- Gestion des contacts et des organisations avec recherche intelligente\n- Suivi des activités et automatisation des tâches\n- Données et rapports en temps réel via des requêtes conversationnelles\n- Interface simple, accessible à toute l'équipe",
      "- **IA & NLP :** LLM pour la reconnaissance d'intention · Traitement du langage naturel pour l'analyse des requêtes · Framework d'IA conversationnelle · Extraction d'entités et remplissage de slots\n- **Intégration API :** API REST Pipedrive · Authentification OAuth2 · Webhooks pour les mises à jour en temps réel · Gestion des limites de débit et des erreurs\n- **Backend :** Python pour la logique backend · FastAPI pour les endpoints · Traitement asynchrone pour de meilleures performances · Gestion de session pour le contexte\n- **Données & sécurité :** Gestion sécurisée des clés API · Validation et nettoyage des données · Gestion des erreurs et journalisation · Gestion des droits utilisateurs",
      "- **Gestion des affaires :** créer, mettre à jour et suivre les affaires par la conversation. Par exemple : « Crée une affaire pour la société ABC d'une valeur de 50 000 € » ou « Montre-moi toutes les affaires en phase de négociation. »\n- **Contacts & organisations :** ajouter des contacts, mettre à jour leurs informations et gérer les organisations par de simples requêtes. L'agent gère intelligemment le formatage et la validation des données.\n- **Rapports & analyses :** obtenir rapports de ventes, analyses du pipeline et indicateurs de performance par la conversation, sans naviguer dans des tableaux de bord complexes.\n- **Automatisation des processus :** automatiser les tâches répétitives comme les relances, les mises à jour de statut ou la saisie. L'agent enchaîne des actions en plusieurs étapes à partir d'une seule commande.",
      "- **Efficacité accrue :** 60 % de temps en moins sur les tâches CRM courantes grâce à l'automatisation en langage naturel\n- **Accès démocratisé :** les opérations CRM deviennent accessibles à toute l'équipe, quel que soit son niveau technique\n- **Meilleure fiabilité :** moins d'erreurs de saisie grâce à la validation et au formatage automatiques\n- **Adoption renforcée :** une prise en main plus simple pour les nouveaux utilisateurs et une meilleure adoption du CRM dans l'équipe",
    ],
  },

  // From Lagalitevoyage/travel-agency-ai-platform/README.md (Oct 2026): the open rebuild on synthetic data.
  // EN and FR both new — UNAPPROVED, review with Assim. Numbers copied from the README "Results" table.
  'la-galite-voyage': {
    en: [
      '### The open rebuild',
      "To show the work without exposing client data, I rebuilt the whole suite end to end on synthetic data, for a fictional family agency in Bizerte. It runs fully offline with no API key and switches to Claude or Mistral when a key is present. French, Arabic (right-to-left) and English throughout.",
      "*Synthetic data only: the agency, clients, bookings, chats and prices are invented. Every screenshot on this page comes from the rebuild.*",
      '### The problem',
      'Staff answered every client by hand (phone, WhatsApp, walk-ins) and repeated the same answers all day: prices, visa rules, departure dates, payment. The knowledge lived in a PDF catalogue, two inconsistent price spreadsheets, scattered WhatsApp notes and a Word visa sheet. Nobody knew which destinations were in demand or which clients to target with which offer.',
      '### What I built',
      "- **Knowledge base:** parsers for the messy agency files (PDF, spreadsheets with merged cells, CSV, WhatsApp notes in French, Darija, Arabic and English, Word); cleaning that fixes typos, drops stale prices and duplicates and converts EUR to TND. The cleaned price list matches the ground truth 312/312.\n- **RAG assistant:** language detection, intent and slot extraction, hybrid retrieval (dense + BM25) with a reranker, grounded answers with sources and price estimates for the whole party, guardrails against prompt injection and off-topic questions, PII masking, and handoff to a human advisor.\n- **Channels:** FastAPI with a web chat widget, WhatsApp webhooks for Meta Cloud API and Twilio, and a simulator that posts the exact Meta payload.\n- **Customer intelligence:** 27 behavioural features, PCA + KMeans (compared with GMM and HDBSCAN) into six named segments with a marketing playbook, and a recommender whose suggestions are fed into the assistant's answers.\n- **Owner dashboard:** six Streamlit pages in plain French or English: KPIs week over week, demand, segments, conversion, knowledge gaps and a live advisor queue.",
      '### Results (measured on the synthetic data)',
      '- **Retrieval:** hit@5 from 0.83 (dense) to 0.98 (hybrid + rerank)\n- **Answers:** 98.6% correct on expected facts, 100% faithful to sources\n- **Safety:** 100% of prompt injections blocked, 0 stale prices quoted\n- **Personalisation:** the client\'s true favourite in the top 3 rises from 61% to 88%\n- **Speed:** ~55 ms median answer offline on a laptop\n- **Engineering:** 145 tests, 94% coverage, CI gates on a 167-question multilingual test set',
      '### Limits I kept in view',
      '- These numbers describe the pipeline on a world it was designed around, not real-world performance\n- Prices and visa rules are indicative: every answer carries a disclaimer and an advisor confirms each quote\n- The personalisation uplift is simulated; only a live A/B test can measure it',
    ],
    fr: [
      '### La reconstruction ouverte',
      "Pour montrer le travail sans exposer de données client, j'ai reconstruit toute la suite de bout en bout sur des données synthétiques, pour une agence familiale fictive de Bizerte. Elle tourne entièrement hors ligne, sans clé d'API, et passe sur Claude ou Mistral dès qu'une clé est fournie. Français, arabe (de droite à gauche) et anglais partout.",
      "*Données synthétiques uniquement : l'agence, les clients, les réservations, les conversations et les prix sont inventés. Toutes les captures de cette page viennent de la reconstruction.*",
      '### Le problème',
      "L'équipe répondait à chaque client à la main (téléphone, WhatsApp, agence) et répétait les mêmes réponses toute la journée : prix, visas, dates de départ, paiement. Le savoir était éparpillé entre un catalogue PDF, deux grilles tarifaires incohérentes, des notes WhatsApp et une fiche visa Word. Personne ne savait quelles destinations étaient demandées, ni quels clients cibler avec quelle offre.",
      "### Ce que j'ai construit",
      "- **Base de connaissances :** des parseurs pour les fichiers de l'agence (PDF, tableurs avec cellules fusionnées, CSV, notes WhatsApp en français, darija, arabe et anglais, Word) ; un nettoyage qui corrige les fautes, retire les anciens tarifs et les doublons et convertit les EUR en TND. La grille de prix nettoyée correspond à la référence à 312/312.\n- **Assistant RAG :** détection de la langue, extraction de l'intention et des informations clés, recherche hybride (dense + BM25) avec reranking, réponses sourcées avec estimation du prix pour tout le groupe, garde-fous contre l'injection de prompt et les questions hors sujet, masquage des données personnelles et transfert vers un conseiller.\n- **Canaux :** FastAPI avec un widget de chat web, des webhooks WhatsApp pour Meta Cloud API et Twilio, et un simulateur qui envoie le payload Meta exact.\n- **Connaissance client :** 27 variables de comportement, ACP + KMeans (comparé à GMM et HDBSCAN) pour six segments nommés avec un guide marketing, et un moteur de recommandation dont les suggestions alimentent les réponses de l'assistant.\n- **Tableau de bord du gérant :** six pages Streamlit en français ou en anglais simple : KPI d'une semaine à l'autre, demande, segments, conversion, lacunes de connaissances et file d'attente des conseillers en direct.",
      '### Résultats (mesurés sur les données synthétiques)',
      "- **Recherche :** hit@5 de 0,83 (dense) à 0,98 (hybride + reranking)\n- **Réponses :** 98,6 % correctes sur les faits attendus, 100 % fidèles aux sources\n- **Sécurité :** 100 % des injections de prompt bloquées, 0 ancien tarif cité\n- **Personnalisation :** la destination préférée du client dans le top 3 passe de 61 % à 88 %\n- **Rapidité :** ~55 ms de réponse médiane hors ligne sur un portable\n- **Ingénierie :** 145 tests, 94 % de couverture, contrôles CI sur un jeu de 167 questions multilingues",
      '### Les limites gardées en tête',
      "- Ces chiffres décrivent le pipeline sur un monde conçu pour lui, pas une performance en conditions réelles\n- Les prix et règles de visa sont indicatifs : chaque réponse porte un avertissement et un conseiller confirme chaque devis\n- Le gain de la personnalisation est simulé ; seul un vrai test A/B peut le mesurer",
    ],
  },

  aquanova: {
    en: [
      '### Project overview',
      'AquaNova is an innovative computer vision platform that analyzes swimming technique from video footage. Using advanced pose estimation and movement analysis, the system provides detailed feedback on form, stroke efficiency, and areas for improvement.',
      'The platform helps swimmers and coaches identify technical issues, track progress over time, and optimize training strategies through data-driven insights and annotated video feedback.',
      '### Key features',
      '- Real-time pose estimation using Mediapipe\n- Automated swimming technique analysis\n- Video annotation with feedback overlay\n- Progress tracking and historical comparisons\n- Detailed performance metrics and visualizations',
      '### Technologies used',
      '- **Computer Vision:** OpenCV for video processing · Mediapipe for pose estimation · Custom movement analysis algorithms\n- **Development:** Python for backend processing · NumPy for numerical computations · Data visualization libraries',
    ],
    fr: [
      '### Présentation',
      "AquaNova est une plateforme innovante de vision par ordinateur qui analyse la technique de nage à partir de vidéos. Grâce à l'estimation de posture et à l'analyse du mouvement, le système donne un retour détaillé sur la posture, l'efficacité de la nage et les points à améliorer.",
      "La plateforme aide nageurs et entraîneurs à repérer les défauts techniques, suivre leur progression dans le temps et optimiser leurs entraînements grâce à des analyses fondées sur les données et à des vidéos annotées.",
      '### Fonctionnalités clés',
      "- Estimation de posture en temps réel avec Mediapipe\n- Analyse automatisée de la technique de nage\n- Annotation vidéo avec retours en surimpression\n- Suivi de la progression et comparaison dans le temps\n- Indicateurs de performance détaillés et visualisations",
      '### Technologies utilisées',
      "- **Vision par ordinateur :** OpenCV pour le traitement vidéo · Mediapipe pour l'estimation de posture · Algorithmes d'analyse du mouvement sur mesure\n- **Développement :** Python pour le traitement backend · NumPy pour les calculs numériques · Bibliothèques de visualisation",
    ],
  },

  'gmail-ai-assistant': {
    en: [
      '### Project overview',
      'An intelligent AI assistant that integrates with Gmail to streamline email management. Built using Mistral LLM and Gmail API, this tool automates email drafting, provides intelligent summarization, and offers smart contact management.',
      'Developed as part of my internship at WELLPACK, this production-ready solution significantly improves productivity by automating routine email tasks while maintaining personalized communication.',
      '### Key features',
      '- AI-powered email drafting with context awareness\n- Intelligent email summarization for quick reading\n- Automated email analysis and categorization\n- Smart contact management and relationship tracking\n- Gmail API integration for seamless workflow',
      '### Technologies used',
      '- **AI & Integration:** Mistral LLM for language processing · Gmail API for email management · Natural Language Understanding\n- **Development:** Python for backend logic · OAuth2 authentication · RESTful API design',
    ],
    fr: [
      '### Présentation',
      "Un assistant IA intelligent intégré à Gmail pour simplifier la gestion des emails. Construit avec le LLM Mistral et l'API Gmail, il automatise la rédaction des emails, propose des résumés intelligents et une gestion avancée des contacts.",
      "Développée pendant mon stage chez WELLPACK, cette solution prête pour la production améliore nettement la productivité en automatisant les tâches email répétitives tout en gardant une communication personnalisée.",
      '### Fonctionnalités clés',
      "- Rédaction d'emails par IA, en tenant compte du contexte\n- Résumés intelligents pour une lecture rapide\n- Analyse et catégorisation automatiques des emails\n- Gestion intelligente des contacts et suivi des relations\n- Intégration à l'API Gmail pour un flux de travail fluide",
      '### Technologies utilisées',
      "- **IA & intégration :** LLM Mistral pour le traitement du langage · API Gmail pour la gestion des emails · Compréhension du langage naturel\n- **Développement :** Python pour la logique backend · Authentification OAuth2 · Conception d'API REST",
    ],
  },

  // Demo section: from Portfolio/vitalight/README.md (Oct 2026). FR is a translation — UNAPPROVED.
  vitalight: {
    en: [
      "### Clickable demo (2026)",
      "A clickable demo of VitaLight, the preventive-health concept for Microsoft Imagine Cup 2025. Clinicians enter both parents' medical history, and the app estimates newborn health risks with an explanation for each one.",
      "*Synthetic data only. Risk figures are illustrative orders of magnitude, not a diagnosis and not a medical device.*",
      "- **Landing page:** problem, how it works, technology\n- **Clinician dashboard:** KPIs, recent assessments, cohort by attention level\n- **Family files** with a level filter\n- **New assessment:** 5-step form, then the prediction runs\n- **Risk report:** 7 conditions, risk vs. population baseline, factor breakdown, follow-up\n- **Parent mobile app:** report in plain language, pregnancy guide, notification inbox, push demo\n- **Pregnancy guide:** eat well / avoid / habits, with sources, and the weekly push schedule",
      "### How the demo model works",
      "Each condition starts from a population baseline and is multiplied by a relative risk for each factor in the family file (parental diagnosis, family history, pregnancy context). Recessive conditions (cystic fibrosis, sickle cell) use carrier probabilities: 1 in 4 when both parents are carriers. Trisomy 21 follows maternal age. Every factor stays visible in the report, which keeps the result explainable.",
      "Parents get one push a week, keyed to the gestational week: something to eat, avoid or check. Food-safety content follows the NHS guidance, and nutrition content follows published research (Marshall et al. 2022, Koletzko et al. 2019, WHO 2016). Extra pushes are written from the family file, such as smoking, diabetes, genetic counselling or maternal age.",
      "- **Bilingual:** English and French, with numbers, percentages and dates in each language's conventions\n- **Stack:** React, TypeScript and Vite; the risk engine sits behind one function (family file in, results out), ready to be swapped for a trained model",
      "### Next steps",
      "- **Python API:** FastAPI service with the same contract as the demo model\n- **Real model:** gradient boosting trained on a public or synthetic cohort, with calibration and SHAP values replacing the hand-written factors\n- **Data and privacy:** FHIR-style input schema, consent flow, audit log, HDS-certified hosting (Azure France)\n- **Real push notifications** and a dedicated parent app, then a public deployment of the demo",
      '### Project overview',
      "VitaLight is an innovative AI-powered healthcare application developed for the Microsoft Imagine Cup competition. The application uses advanced machine learning algorithms to predict potential diseases in newborns based on their parents' comprehensive medical history.",
      'This project addresses a critical need in preventive healthcare by enabling early detection and intervention for newborn health conditions.',
      '### Key features',
      "- Predictive disease modeling using parents' medical history and genetic factors\n- Machine learning algorithms trained on extensive healthcare datasets\n- Risk assessment and early warning system for healthcare providers\n- User-friendly interface for medical professionals\n- Comprehensive reporting and visualization of health predictions",
      '### Technologies used',
      '- **Machine Learning:** TensorFlow for deep learning models · scikit-learn for data preprocessing · Predictive modeling algorithms\n- **Development:** Python for backend development · Data visualization libraries · Healthcare data standards',
    ],
    fr: [
      "### Démo cliquable (2026)",
      "Une démo cliquable de VitaLight, le concept de santé préventive présenté à la Microsoft Imagine Cup 2025. Les cliniciens saisissent les antécédents médicaux des deux parents, et l'application estime les risques de santé du nouveau-né, avec une explication pour chacun.",
      "*Données synthétiques uniquement. Les chiffres de risque sont des ordres de grandeur illustratifs : ni un diagnostic, ni un dispositif médical.*",
      "- **Page d'accueil :** le problème, le fonctionnement, la technologie\n- **Tableau de bord clinicien :** indicateurs clés, évaluations récentes, cohorte par niveau d'attention\n- **Dossiers familles** avec filtre par niveau\n- **Nouvelle évaluation :** formulaire en 5 étapes, puis la prédiction\n- **Rapport de risque :** 7 pathologies, risque comparé à la population générale, détail des facteurs, suivi\n- **Application mobile parents :** le rapport en langage simple, guide de grossesse, boîte de notifications, démo de push\n- **Guide de grossesse :** bien manger / à éviter / habitudes, avec les sources, et le calendrier hebdomadaire des notifications",
      "### Fonctionnement du modèle de démo",
      "Chaque pathologie part d'une référence de population, multipliée par un risque relatif pour chaque facteur du dossier familial (diagnostic d'un parent, antécédents familiaux, contexte de grossesse). Les maladies récessives (mucoviscidose, drépanocytose) utilisent les probabilités de porteurs : 1 sur 4 quand les deux parents sont porteurs. La trisomie 21 suit l'âge maternel. Chaque facteur reste visible dans le rapport, ce qui rend le résultat explicable.",
      "Les parents reçoivent une notification par semaine, selon la semaine de grossesse : un aliment à privilégier, à éviter ou un point à vérifier. La sécurité alimentaire suit les recommandations du NHS, et la nutrition s'appuie sur la recherche publiée (Marshall et al. 2022, Koletzko et al. 2019, OMS 2016). Des notifications supplémentaires sont rédigées à partir du dossier familial : tabac, diabète, conseil génétique ou âge maternel.",
      "- **Bilingue :** anglais et français, avec les nombres, pourcentages et dates au format de chaque langue\n- **Stack :** React, TypeScript et Vite ; le moteur de risque tient dans une seule fonction (dossier familial en entrée, résultats en sortie), prête à être remplacée par un modèle entraîné",
      "### Prochaines étapes",
      "- **API Python :** service FastAPI avec le même contrat que le modèle de démo\n- **Vrai modèle :** gradient boosting entraîné sur une cohorte publique ou synthétique, avec calibration et valeurs SHAP à la place des facteurs écrits à la main\n- **Données et confidentialité :** schéma d'entrée de type FHIR, recueil du consentement, journal d'audit, hébergement certifié HDS (Azure France)\n- **Vraies notifications push** et une application parents dédiée, puis une mise en ligne publique de la démo",
      '### Présentation',
      "VitaLight est une application de santé innovante fondée sur l'IA, développée pour le concours Microsoft Imagine Cup. Elle utilise des algorithmes de machine learning avancés pour prédire les maladies potentielles du nouveau-né à partir des antécédents médicaux complets de ses parents.",
      "Le projet répond à un besoin essentiel de la santé préventive : permettre la détection et l'intervention précoces pour la santé du nouveau-né.",
      '### Fonctionnalités clés',
      "- Modélisation prédictive des maladies à partir des antécédents médicaux et des facteurs génétiques des parents\n- Algorithmes de machine learning entraînés sur de larges jeux de données de santé\n- Évaluation des risques et système d'alerte précoce pour les soignants\n- Interface simple pour les professionnels de santé\n- Rapports complets et visualisation des prédictions",
      '### Technologies utilisées',
      "- **Machine learning :** TensorFlow pour les modèles de deep learning · scikit-learn pour le prétraitement des données · Algorithmes de modélisation prédictive\n- **Développement :** Python pour le backend · Bibliothèques de visualisation · Standards de données de santé",
    ],
  },

  // Replaced Oct 2026: the old-site sections are superseded by the open rebuild (Pitchboy/interview-voice-analyzer,
  // docs/PORTFOLIO.md). Figures checked against its reports/metrics.json and reports/fairness.json. UNAPPROVED.
  pitchboy: {
    en: [
      "*The screenshots and figures come from my open rebuild of the mission: trained on the public RAVDESS dataset, demoed with a synthetic voice, with no client code or data. Everything runs locally.*",
      '### The problem',
      "Pitchboy wanted to know whether a candidate's voice in a recorded interview could reveal confidence, stress and overall sentiment, automatically. Two questions came with it: can it be done reliably, and should it be?",
      '### What I built',
      `- An analysis pipeline that decodes any audio or video, extracts 41 acoustic features per 3-second window (pitch, loudness, pauses, speaking rate, jitter, shimmer, MFCCs) and scores four delivery states: confident, stressed, calm, enthusiastic
- Pitch and loudness measured relative to each speaker's own baseline, so the model never scores how high or low a voice is (largely a matter of sex and age), only how it moves
- Whisper transcription and multilingual RoBERTa sentiment per segment (English and French), plus fillers and hedges (“um”, “I think”, “euh”, “du coup”)
- Late fusion: the words can nudge the voice-based scores, and the report shows voice-only and voice + words side by side
- Real-time feedback from the microphone over a WebSocket, updated every second
- A React interface: emotion timeline synced with the recording, pitch and loudness curves, a clickable transcript, plain-language observations, and a model & fairness dashboard`,
      '### Results',
      `- Gradient boosting selected from four models with speaker-independent cross-validation
- **73.2% accuracy, macro-F1 0.72** on six actors never seen in training (rule-based baseline: 0.41)
- Bias audit: 3.9-point accuracy gap between female and male speakers, but 10–14-point gaps in recall on three labels, flagged in the interface rather than averaged away
- An idea that did not work: filtering pitch-tracking errors inside the features lowered macro-F1 from 0.72 to 0.67, so it is only used for display`,
      '### Ethics',
      "Emotion recognition on candidates by an employer is prohibited under the EU AI Act (art. 5(1)(f)), and voice features carry sex, age, accent and disability bias. I wrote a risk register and recommended positioning the tool as self-coaching for candidates. The product enforces it: consent required by the API, recordings deleted after 24 hours, no ranking or comparison of people, and wording that describes how a voice sounds, never what someone feels.",
      '### Stack',
      `- **Audio & ML:** Librosa · NumPy/SciPy · scikit-learn (gradient boosting, logistic regression, SVM, random forest)
- **Speech & NLP:** OpenAI Whisper · Hugging Face Transformers (XLM-RoBERTa) · spaCy
- **App:** FastAPI · WebSockets · React · TypeScript · Recharts · Docker`,
    ],
    fr: [
      "*Les captures et les chiffres viennent de ma reconstruction ouverte de la mission : entraînée sur le jeu de données public RAVDESS, démontrée avec une voix de synthèse, sans code ni données du client. Tout tourne en local.*",
      '### Le problème',
      "Pitchboy voulait savoir si la voix d'un candidat, dans un entretien enregistré, pouvait révéler automatiquement sa confiance, son stress et son sentiment général. Deux questions en découlaient : est-ce fiable, et est-ce souhaitable ?",
      "### Ce que j'ai construit",
      `- Un pipeline qui décode n'importe quel fichier audio ou vidéo, extrait 41 caractéristiques acoustiques par fenêtre de 3 secondes (hauteur, intensité, pauses, débit, jitter, shimmer, MFCC) et évalue quatre états : confiant, stressé, calme, enthousiaste
- La hauteur et l'intensité sont mesurées par rapport à la voix de référence de chaque locuteur : le modèle n'évalue jamais si une voix est grave ou aiguë (surtout liée au sexe et à l'âge), seulement ses variations
- Transcription Whisper et sentiment RoBERTa multilingue par segment (anglais et français), avec détection des mots de remplissage et d'hésitation (« euh », « du coup », « je pense »)
- Fusion tardive : les mots peuvent ajuster les scores issus de la voix, et le rapport affiche côte à côte la voix seule et voix + texte
- Un retour en temps réel depuis le micro via WebSocket, mis à jour chaque seconde
- Une interface React : frise des émotions synchronisée avec l'enregistrement, courbes de hauteur et d'intensité, transcription cliquable, observations en langage clair et tableau de bord modèle & équité`,
      '### Résultats',
      `- Gradient boosting retenu parmi quatre modèles, par validation croisée sans recouvrement de locuteurs
- **73,2 % de précision, macro-F1 de 0,72** sur six acteurs jamais vus à l'entraînement (règles de base : 0,41)
- Audit des biais : 3,9 points d'écart de précision entre voix féminines et masculines, mais 10 à 14 points d'écart de rappel sur trois émotions, signalés dans l'interface plutôt que noyés dans une moyenne
- Une idée testée qui n'a pas marché : filtrer les erreurs de suivi de hauteur dans les caractéristiques faisait baisser le macro-F1 de 0,72 à 0,67 ; le filtre ne sert donc qu'à l'affichage`,
      '### Éthique',
      "La reconnaissance des émotions des candidats par un employeur est interdite par l'AI Act européen (art. 5(1)(f)), et les caractéristiques vocales portent des biais liés au sexe, à l'âge, à l'accent et au handicap. J'ai rédigé un registre des risques et recommandé de positionner l'outil comme un coach pour les candidats eux-mêmes. Le produit l'applique : consentement exigé par l'API, enregistrements supprimés après 24 heures, aucun classement ni comparaison de personnes, et une formulation qui décrit comment une voix sonne, jamais ce que la personne ressent.",
      '### Stack',
      `- **Audio & ML :** Librosa · NumPy/SciPy · scikit-learn (gradient boosting, régression logistique, SVM, forêt aléatoire)
- **Parole & NLP :** OpenAI Whisper · Hugging Face Transformers (XLM-RoBERTa) · spaCy
- **Application :** FastAPI · WebSockets · React · TypeScript · Recharts · Docker`,
    ],
  },

  // From the project code (Portfolio/Video rag Faculties: backend/*.py and the built interface, Apr 2026).
  // EN and FR both new — UNAPPROVED, review with Assim. No benchmark numbers: none were found outside a scripted demo.
  'faculties-video-rag': {
    en: [
      '### The problem',
      "A text-only RAG reads the transcript and misses everything that is only shown: a slide, an object, a person on screen. Video also adds time: each answer has to point to the moment it comes from. Different questions need different strategies, so instead of betting on one we built five and made them comparable.",
      '### Five architectures, one interface',
      "- **Simple RAG:** Whisper transcribes the audio, the transcript is indexed in ChromaDB, and Mistral answers with timestamps. Fast and cheap, best for \"who said what, and when?\"\n- **Agentic RAG:** a ReAct agent (up to 5 steps) searches the transcript first and only calls vision tools (OCR, frame captioning) when the speech is not enough, keeping cost down\n- **Graph RAG:** keyframes picked by pixel change, YOLOv8 object detection, and a NetworkX knowledge graph linking each object to the timestamps where it appears, for questions like \"show every time the red car appears\"\n- **Speculative RAG:** CLIP indexes the visual scenes and Whisper the dialogue in two ChromaDB collections; retrieval blends them (60% visual, 40% dialogue) while Mistral predicts the next scenes needed and pre-fetches them\n- **HyDE:** Mistral first imagines what the scene being asked about would look like, then searches with that description, which bridges vague questions and visual content; frames are deduplicated with CLIP and their on-screen text read with EasyOCR\n- **All RAGs:** one question goes to four models at once, each answering in its own panel",
      '### How a video is processed',
      '- Audio extracted and transcribed locally with Whisper\n- Frames sampled, near-duplicates removed with CLIP cosine similarity\n- Objects detected with YOLOv8 and on-screen text read with EasyOCR, depending on the architecture\n- Everything indexed in ChromaDB with MiniLM embeddings, with timestamps kept as metadata\n- The interface shows each step live, then a summary with key moments, the keyframes and a chat panel with suggested questions',
      '### Stack',
      '- **AI:** Whisper · CLIP ViT-B/32 · YOLOv8 · EasyOCR · MiniLM sentence embeddings · Mistral\n- **Retrieval:** ChromaDB · NetworkX knowledge graph · HyDE · speculative pre-fetch buffer\n- **App:** FastAPI backend · React interface with live processing steps',
      "*AI Clinic mission, 2025–26 (second semester), for Faculties.ai.*",
    ],
    fr: [
      '### Le problème',
      "Un RAG textuel lit la transcription et rate tout ce qui n'est que montré : une diapositive, un objet, une personne à l'écran. La vidéo ajoute aussi le temps : chaque réponse doit pointer vers le moment d'où elle vient. Chaque type de question demande une stratégie différente : plutôt que de parier sur une seule, nous en avons construit cinq, comparables entre elles.",
      '### Cinq architectures, une interface',
      "- **RAG simple :** Whisper transcrit l'audio, la transcription est indexée dans ChromaDB et Mistral répond avec les horodatages. Rapide et économique, idéal pour « qui a dit quoi, et quand ? »\n- **RAG agentique :** un agent ReAct (jusqu'à 5 étapes) cherche d'abord dans la transcription et n'appelle les outils de vision (OCR, description d'images) que si la parole ne suffit pas, pour limiter le coût\n- **RAG graphe :** des images clés choisies selon le changement de pixels, la détection d'objets YOLOv8 et un graphe de connaissances NetworkX qui relie chaque objet aux moments où il apparaît, pour des questions comme « montre chaque apparition de la voiture rouge »\n- **RAG spéculatif :** CLIP indexe les scènes visuelles et Whisper le dialogue dans deux collections ChromaDB ; la recherche combine les deux (60 % visuel, 40 % dialogue) pendant que Mistral prédit les prochaines scènes utiles et les précharge\n- **HyDE :** Mistral imagine d'abord à quoi ressemblerait la scène demandée, puis cherche avec cette description, ce qui relie les questions vagues au contenu visuel ; les images sont dédoublonnées avec CLIP et leur texte lu avec EasyOCR\n- **Tous les RAG :** une question part vers quatre modèles à la fois, chacun répond dans son panneau",
      "### Le traitement d'une vidéo",
      "- Audio extrait et transcrit en local avec Whisper\n- Images échantillonnées, quasi-doublons retirés par similarité cosinus CLIP\n- Objets détectés avec YOLOv8 et texte à l'écran lu avec EasyOCR, selon l'architecture\n- Tout est indexé dans ChromaDB avec des embeddings MiniLM, en gardant les horodatages en métadonnées\n- L'interface affiche chaque étape en direct, puis un résumé avec les moments clés, les images clés et un chat avec des questions suggérées",
      '### Stack',
      "- **IA :** Whisper · CLIP ViT-B/32 · YOLOv8 · EasyOCR · embeddings MiniLM · Mistral\n- **Recherche :** ChromaDB · graphe de connaissances NetworkX · HyDE · tampon de préchargement spéculatif\n- **Application :** backend FastAPI · interface React avec les étapes de traitement en direct",
      "*Mission AI Clinic, 2025–26 (second semestre), pour Faculties.ai.*",
    ],
  },

  // From the mission code (PGE3/Semester 1/AI Clinic) and the rebuild's README and reports/evaluation.json
  // (Portfolio/Biometric Health Monitoring, Oct 2026). Replaces nothing: the old text lived in projects.ts. UNAPPROVED.
  'biometric-health-monitoring': {
    en: [
      "*Public Fitbit dataset: 33 people, one month (spring 2016), daily activity, sleep and a heart rate every 5-15 s. No client data. Wellness indicators, not a medical device.*",
      '### The six scores (mission)',
      "- **Sleep (100):** duration 30 (7-9 h), efficiency 30 (≥ 95% of time in bed asleep), fragmentation 20 (one sleep session), consistency 20 (within 30 min of your usual night)\n- **Heart (100):** resting heart rate 40 (10th percentile of the day, 65-75 bpm), variability 40, stability 20\n- **Activity (100):** steps 40 (10,000 a day), active minutes 40 (30+), sedentary time 20 (under 10 h)\n- **Steps, recovery and overall:** steps / 10,000; recovery = 60% sleep + resting heart rate; overall = mean of the scores available that day\n- Thresholds were tightened after a first version gave an average sleep score of 83, so that the categories (Excellent, Good, Fair, Poor) actually separate people",
      '### What I added in the rebuild',
      "- **A clean pipeline:** raw CSVs to daily features to scores, with non-wear days removed and a minimum of 4 hours of heart-rate data per day\n- **Early warning:** each day compared with the same person's previous 7 days (robust z-score): resting heart rate up, variability down, short sleep, much less movement. One signal = watch, two or more = alert\n- **A second opinion:** an Isolation Forest on each person's deviations from their own normal\n- **A dashboard:** cohort overview, one person's scores and warning days, early-warning results, method and limits\n- **Fixes found while rebuilding:** the variability thresholds assumed a cohort mean of ~14 when the data gives 2.2, so I kept the curve and rescaled it; recovery now uses resting heart rate, as documented",
      '### Results',
      "- 870 person-days scored: 12 people average Excellent, 9 Good, 1 Fair, 4 Poor (7 have activity data only)\n- **Synthetic incidents** (no medical events exist in the data): on 149 eligible days, resting heart rate +10 bpm, variability ×0.6, sleep −2 h and steps ×0.4 are caught with **F1 0.66** by the Isolation Forest (recall 0.92) and **F1 0.63** by the two-signal rule (precision 0.61); mean of 20 seeds\n- Half-size changes are much harder (F1 about 0.3 to 0.37): one month per person is short to learn what is normal\n- On real, untouched days, 4.7% raise an alert\n- 20 tests, linting and CI on every push",
      '### Limits',
      "- Small, old, self-selected sample with no age, sex or health information, so no bias audit is possible\n- Fitbit exports a heart rate every few seconds, not beat-to-beat intervals: variability is a proxy\n- Health data is a special category under GDPR (art. 9): a real deployment needs explicit consent and medical supervision of every alert",
      '### Stack',
      "- **Data & ML:** Python · pandas · NumPy · scikit-learn (Isolation Forest)\n- **App:** Streamlit · Plotly\n- **Quality:** pytest · ruff · GitHub Actions",
    ],
    fr: [
      "*Jeu de données public Fitbit : 33 personnes, un mois (printemps 2016), activité quotidienne, sommeil et fréquence cardiaque toutes les 5 à 15 s. Aucune donnée client. Des indicateurs de bien-être, pas un dispositif médical.*",
      '### Les six scores (mission)',
      "- **Sommeil (100) :** durée 30 (7 à 9 h), efficacité 30 (≥ 95 % du temps au lit endormi), fragmentation 20 (une seule période de sommeil), régularité 20 (à 30 min près de la nuit habituelle)\n- **Cœur (100) :** fréquence cardiaque au repos 40 (10e percentile de la journée, 65-75 bpm), variabilité 40, stabilité 20\n- **Activité (100) :** pas 40 (10 000 par jour), minutes actives 40 (30 et plus), temps sédentaire 20 (moins de 10 h)\n- **Pas, récupération et global :** pas / 10 000 ; récupération = 60 % sommeil + fréquence cardiaque au repos ; global = moyenne des scores disponibles ce jour-là\n- Des seuils resserrés après une première version où le score de sommeil moyen était de 83, pour que les catégories (Excellent, Bon, Moyen, Faible) séparent vraiment les personnes",
      "### Ce que j'ai ajouté en reconstruisant",
      "- **Un pipeline propre :** des CSV bruts aux indicateurs quotidiens puis aux scores, sans les jours où le bracelet n'était pas porté et avec au moins 4 heures de fréquence cardiaque par jour\n- **Alerte précoce :** chaque jour comparé aux 7 jours précédents de la même personne (z-score robuste) : fréquence au repos en hausse, variabilité en baisse, nuit courte, beaucoup moins de mouvement. Un signal = vigilance, deux ou plus = alerte\n- **Un second avis :** une Isolation Forest sur les écarts de chaque personne par rapport à sa propre normale\n- **Un tableau de bord :** vue de la cohorte, scores et jours d'alerte d'une personne, résultats de l'alerte précoce, méthode et limites\n- **Des corrections trouvées en reconstruisant :** les seuils de variabilité supposaient une moyenne de ~14 alors que les données donnent 2,2 : j'ai gardé la courbe en la recalant ; la récupération utilise désormais la fréquence au repos, comme documenté",
      '### Résultats',
      "- 870 jours-personnes notés : 12 personnes en moyenne Excellent, 9 Bon, 1 Moyen, 4 Faible (7 n'ont que des données d'activité)\n- **Incidents synthétiques** (aucun événement médical dans les données) : sur 149 jours éligibles, une fréquence au repos +10 bpm, une variabilité ×0,6, 2 h de sommeil en moins et des pas ×0,4 sont détectés avec un **F1 de 0,66** par l'Isolation Forest (rappel 0,92) et de **0,63** par la règle à deux signaux (précision 0,61) ; moyenne sur 20 tirages\n- Des changements deux fois plus faibles sont bien plus difficiles (F1 entre 0,3 et 0,37) : un mois par personne, c'est court pour apprendre ce qui est normal\n- Sur les vrais jours non modifiés, 4,7 % déclenchent une alerte\n- 20 tests, lint et intégration continue à chaque push",
      '### Limites',
      "- Échantillon petit, ancien et auto-sélectionné, sans âge, sexe ni données de santé : aucun audit des biais possible\n- Fitbit exporte une fréquence cardiaque toutes les quelques secondes, pas les intervalles entre battements : la variabilité est une approximation\n- Les données de santé sont une catégorie particulière au sens du RGPD (art. 9) : un vrai déploiement exige un consentement explicite et une supervision médicale de chaque alerte",
      '### Stack',
      "- **Data & ML :** Python · pandas · NumPy · scikit-learn (Isolation Forest)\n- **Application :** Streamlit · Plotly\n- **Qualité :** pytest · ruff · GitHub Actions",
    ],
  },

  // From Portfolio/Study Buddy README (Oct 2026). EN and FR both new — UNAPPROVED.
  'ai-study-buddy': {
    en: [
      '### What it does',
      "- **💡 Explain:** a definition, how it works step by step, an example, a common mistake, then a question to check understanding\n- **✍️ Homework coach:** it finds the method and solves the first step with the student, then asks them to try the next one; it never writes graded work for them\n- **📄 Summarize** a topic or pasted notes, and **🎯 plan** revision with spaced repetition and active recall\n- **📝 Quizzes** of 3 to 10 questions, easy to hard, with a score and an explanation for every answer\n- **🃏 Flashcards** to flip and revise\n- **Any language, three levels:** answers in the student's language, pitched at middle school, high school or university",
      '### How I built it',
      "- **Secure by design:** the API key stays on the server, never in the page; every AI answer is escaped before formatting so it cannot inject HTML; requests are limited per visitor to protect the quota\n- **Streaming:** answers appear word by word (server-sent events)\n- **Reliable JSON:** quizzes and flashcards are validated against a schema and regenerated once if malformed; rate limits trigger a retry, then a fallback model\n- **Runs anywhere:** a demo mode without a key, 12 tests with a fake model, a Docker image and a one-click Render blueprint",
      '### Stack',
      '- **Backend:** Python · FastAPI · httpx · Pydantic · Mistral API (mistral-small)\n- **Front end:** HTML · CSS · vanilla JavaScript, no build step\n- **Quality & deploy:** pytest · ruff · Docker · Render · GitHub Actions',
    ],
    fr: [
      '### Ce que fait l’application',
      "- **💡 Explique :** une définition, le fonctionnement étape par étape, un exemple, une erreur fréquente, puis une question pour vérifier la compréhension\n- **✍️ Coach de devoirs :** il identifie la méthode et résout la première étape avec l'élève, puis lui demande d'essayer la suivante ; il n'écrit jamais un devoir noté à sa place\n- **📄 Résume** un sujet ou des notes collées, et **🎯 planifie** les révisions avec la répétition espacée et le rappel actif\n- **📝 Quiz** de 3 à 10 questions, du facile au difficile, avec le score et une explication pour chaque réponse\n- **🃏 Fiches** à retourner pour réviser\n- **Toutes les langues, trois niveaux :** réponses dans la langue de l'élève, adaptées au collège, au lycée ou à l'université",
      "### Comment je l'ai construite",
      "- **Sécurisée dès la conception :** la clé d'API reste sur le serveur, jamais dans la page ; chaque réponse de l'IA est échappée avant la mise en forme et ne peut pas injecter de HTML ; les requêtes sont limitées par visiteur pour protéger le quota\n- **Réponses en direct :** le texte s'affiche mot à mot (server-sent events)\n- **JSON fiable :** quiz et fiches sont validés par un schéma et régénérés une fois s'ils sont mal formés ; une limite de débit déclenche une nouvelle tentative, puis un modèle de secours\n- **Fonctionne partout :** un mode démo sans clé, 12 tests avec un faux modèle, une image Docker et un déploiement Render en un clic",
      '### Stack',
      '- **Backend :** Python · FastAPI · httpx · Pydantic · API Mistral (mistral-small)\n- **Front :** HTML · CSS · JavaScript, sans étape de build\n- **Qualité & déploiement :** pytest · ruff · Docker · Render · GitHub Actions',
    ],
  },

  // From Portfolio/hand motion media player README (Oct 2026). EN and FR both new — UNAPPROVED.
  'gesture-player': {
    en: [
      '### Gestures',
      "- **🖐 Open palm:** play / pause\n- **👉 / 👈 Point:** next / previous track\n- **👌 Pinch, then move up or down:** volume, continuously\n- **✊ Fist:** mute / unmute\n- **✌️ Victory, held 1.5 s:** quit\n- A ring around the wrist fills while a gesture is held, and a message confirms each action",
      '### What makes it pleasant to use',
      "- **Fires once:** a gesture triggers after a short hold, then waits until the hand changes pose, so holding an open palm never toggles play / pause in a loop\n- **Near or far, at any angle:** every threshold is measured in hand lengths, and fingers are judged by their distance to the wrist, so a sideways pointing finger is read correctly\n- **No confusion between gestures:** poses are checked in priority order, and a pinch requires the index to stay out, which is what separates it from a fist\n- **Tolerant tracking:** losing the hand for a few frames does not cancel a gesture; quitting needs a deliberate hold",
      '### Engineering',
      "- MediaPipe Hand Landmarker (21 points per frame, about 30 frames per second on a laptop CPU), OpenCV capture in a background thread, a PySide6 interface with Qt Multimedia playback, so no external player to install\n- 142 tests on the gesture logic (every pose at several sizes, angles and camera formats, fire-once and re-arm, pinch volume) that run without a camera\n- A simulated-hand mode and royalty-free generated demo music, so the app can be tried and demoed without a webcam\n- Camera frames are processed locally and never saved",
    ],
    fr: [
      '### Les gestes',
      "- **🖐 Paume ouverte :** lecture / pause\n- **👉 / 👈 Pointer :** morceau suivant / précédent\n- **👌 Pincer puis monter ou descendre :** volume, en continu\n- **✊ Poing :** couper / rétablir le son\n- **✌️ Victoire, maintenue 1,5 s :** quitter\n- Un anneau autour du poignet se remplit pendant qu'un geste est maintenu, et un message confirme chaque action",
      '### Ce qui le rend agréable à utiliser',
      "- **Un geste, une action :** le geste se déclenche après un court maintien, puis attend que la main change de position ; garder la paume ouverte ne fait donc jamais alterner lecture et pause en boucle\n- **De près comme de loin, sous tous les angles :** chaque seuil est mesuré en longueurs de main et les doigts sont jugés par leur distance au poignet, si bien qu'un doigt pointé sur le côté est bien reconnu\n- **Aucune confusion entre gestes :** les positions sont testées dans un ordre de priorité, et le pincement exige que l'index reste tendu, ce qui le distingue du poing\n- **Suivi tolérant :** perdre la main quelques images n'annule pas un geste ; quitter demande un maintien volontaire",
      '### Ingénierie',
      "- MediaPipe Hand Landmarker (21 points par image, environ 30 images par seconde sur le processeur d'un portable), capture OpenCV dans un thread dédié, interface PySide6 avec lecture Qt Multimedia, sans lecteur externe à installer\n- 142 tests sur la logique des gestes (chaque position à plusieurs tailles, angles et formats de caméra, déclenchement unique et réarmement, volume au pincement), exécutés sans caméra\n- Un mode main simulée et une musique de démonstration générée, libre de droits, pour essayer et présenter l'application sans webcam\n- Les images de la caméra sont traitées localement et jamais enregistrées",
    ],
  },

  'shift-technology': {
    en: [
      // Open rebuild section (Portfolio/Shift Technology README, Oct 2026) — UNAPPROVED. The sections after it are the old site's.
      '### Open rebuild (2026): CRM selection benchmark',
      "*The original code was not kept, so I rebuilt the method from scratch on today's public data: the vendors' pricing pages, scraped on 19 October 2026. The requirements are editable assumptions, not the client's. It does not say which CRM Shift Technology chose.*",
      "- **Polite scraping:** each pricing page is rendered once with a headless browser after checking robots.txt. Salesforce, Pipedrive and Insightly answered with bot-protection pages: they are logged as not scrapable, never bypassed\n- **Parsing:** a small spec per vendor reads every plan's price, billing and features (20 plans from 6 vendors, in French or English); HubSpot's comparison table is read plan by plan; US-dollar prices are converted at the ECB rate of the day\n- **Evidence, not guesses:** ten capabilities (forecasting, custom objects, sandbox, permissions, audit logs, SSO, workflows, AI…) are detected with the exact snippet that proves them\n- **Weighted grid:** for each vendor, the cheapest plan showing every must-have is compared; pipeline, customisation, governance, automation and the 3-year cost for 50 seats are weighted; a dashboard recomputes the ranking live as weights change",
      "- **Result on the snapshot:** Freshsales Enterprise leads (80/100, 59 € per user per month) and stays first in 99% of 5,000 random weightings. But a missing feature on a pricing page is unproven, not absent: the output is a shortlist for demos, not a verdict\n- **Stack:** Python, Playwright, BeautifulSoup, pandas, NumPy, Streamlit, Plotly, 7 tests and CI",
      '### Project overview',
      'As part of the AI Clinic program at aivancity, conducted comprehensive data scraping and analysis to identify the optimal CRM solution for Shift Technology, a leading insurtech company.',
      "The project involved collecting data from multiple sources, analyzing CRM features and pricing, and delivering data-backed recommendations that aligned with Shift Technology's specific business requirements and technical infrastructure.",
      '### Key features',
      '- Automated web scraping to collect CRM platform data\n- Comparative analysis of features, pricing, and integration capabilities\n- Data cleaning and normalization using Pandas\n- Visualization of key metrics and comparison charts\n- Comprehensive report with data-driven recommendations',
      '### Technologies used',
      '- **Data Collection:** Python web scraping libraries · BeautifulSoup for HTML parsing · API integration for data gathering\n- **Analysis:** Pandas for data manipulation · Data visualization tools · Statistical analysis methods',
    ],
    fr: [
      '### Reconstruction ouverte (2026) : benchmark de sélection CRM',
      "*Le code d'origine n'a pas été conservé : j'ai donc reconstruit la méthode de zéro sur des données publiques actuelles, les pages tarifs des éditeurs, scrapées le 19 octobre 2026. Les besoins sont des hypothèses modifiables, pas ceux du client. Il ne dit pas quel CRM Shift Technology a choisi.*",
      "- **Un scraping respectueux :** chaque page tarifs est affichée une seule fois par un navigateur sans interface, après vérification du robots.txt. Salesforce, Pipedrive et Insightly ont répondu par une page anti-robots : ils sont notés comme non scrapables, jamais contournés\n- **Lecture des pages :** une petite configuration par éditeur extrait le prix, la facturation et les fonctionnalités de chaque offre (20 offres de 6 éditeurs, en français ou en anglais) ; le tableau comparatif de HubSpot est lu offre par offre ; les prix en dollars sont convertis au taux BCE du jour\n- **Des preuves, pas des suppositions :** dix fonctionnalités (prévisions, objets personnalisés, sandbox, droits, journaux d'audit, SSO, workflows, IA…) sont détectées avec l'extrait exact qui les prouve\n- **Une grille pondérée :** pour chaque éditeur, l'offre la moins chère qui affiche tous les indispensables est comparée ; pipeline, personnalisation, gouvernance, automatisation et coût sur 3 ans pour 50 utilisateurs sont pondérés ; un tableau de bord recalcule le classement en direct",
      "- **Résultat sur l'instantané :** Freshsales Enterprise arrive en tête (80/100, 59 € par utilisateur et par mois) et reste premier dans 99 % de 5 000 pondérations aléatoires. Mais une fonctionnalité absente d'une page tarifs n'est pas prouvée, pas forcément absente : le résultat est une liste courte pour des démos, pas un verdict\n- **Stack :** Python, Playwright, BeautifulSoup, pandas, NumPy, Streamlit, Plotly, 7 tests et intégration continue",
      '### Présentation',
      "Dans le cadre de l'AI Clinic d'aivancity, collecte de données par scraping et analyse approfondie pour identifier la meilleure solution CRM pour Shift Technology, acteur majeur de l'insurtech.",
      "Le projet a consisté à collecter des données de plusieurs sources, analyser les fonctionnalités et les tarifs des CRM, puis livrer des recommandations fondées sur les données et alignées sur les besoins métier et l'infrastructure technique de Shift Technology.",
      '### Fonctionnalités clés',
      "- Scraping automatisé pour collecter les données des plateformes CRM\n- Analyse comparative des fonctionnalités, des tarifs et des capacités d'intégration\n- Nettoyage et normalisation des données avec Pandas\n- Visualisation des indicateurs clés et graphiques comparatifs\n- Rapport complet avec recommandations fondées sur les données",
      '### Technologies utilisées',
      "- **Collecte de données :** bibliothèques Python de scraping · BeautifulSoup pour l'analyse HTML · Intégration d'API pour la collecte\n- **Analyse :** Pandas pour la manipulation des données · Outils de visualisation · Méthodes d'analyse statistique",
    ],
  },

  beparentalis: {
    en: [
      // Open rebuild section (Portfolio/Beparentalis README, Oct 2026) — UNAPPROVED. The sections after it are the old site's.
      '### Open rebuild (2026): PediaBot',
      "*The original code was not kept, so I rebuilt the core of the mission from scratch: a French chatbot for first-time parents with a safety triage and an admin console for the medical team. Advice comes from public French health guidance; every conversation shown is fictional. No client code or data.*",
      "- **Safety triage first:** explicit rules decide one of four levels before any answer is written: call 15 / 112, see a doctor today, see a doctor within 24-48 h, or home advice. Red flags always win, and the child's age changes the threshold (any fever before 3 months means a doctor the same day)\n- **Grounded answers:** 11 advice sheets (fever, bronchiolitis, gastro and dehydration, rashes, crying, sleep, falls, swallowed objects…), each with its sources. Replies are built from the sheets' own sentences, never free text, and no medicine dose is ever given\n- **Honest limits:** a question outside the sheets gets \"no validated sheet\" and is logged for the team; a follow-up after \"see a doctor today\" keeps the reminder instead of sounding reassuring\n- **Admin console:** activity by day and urgency, every conversation with the triage rule that fired, a review queue for emergencies and negative feedback, knowledge gaps, and the triage evaluation",
      "- **Evaluation:** 60 development messages and 30 held-out messages with the expected urgency. On its first run, the held-out set scored **97% exact triage, 8/8 emergencies caught and 1 under-triage** (\"ses selles sont noires\"), which I then fixed. Both sets are mine, not clinicians': they are safety regression tests\n- **Stack:** Python, FastAPI, scikit-learn (TF-IDF), SQLite, vanilla JavaScript, 30 tests and CI",
      '### Project overview',
      'As part of the AI Clinic program at aivancity, optimized a French-language pediatric chatbot for Beparentalis through comprehensive benchmarking and fine-tuning of medical Large Language Models. The chatbot serves as a trusted healthcare companion for first-time parents, providing evidence-based pediatric advice.',
      'The system intelligently assesses symptom severity, offers safe medical guidance for non-urgent cases, and ensures appropriate redirection to healthcare professionals when necessary. This project required careful consideration of medical accuracy, safety protocols, and the specific needs of French-speaking parents navigating early childhood healthcare.',
      '### Key features',
      '- Benchmarking of multiple medical LLMs for French pediatric healthcare\n- Fine-tuning on pediatric medical datasets with domain-specific knowledge\n- Intelligent severity assessment system with triage capabilities\n- Safe medical advice generation for non-urgent pediatric conditions\n- Automated redirection to medical professionals for urgent cases\n- Context-aware conversations with memory of parent concerns\n- Compliance with medical advice standards and ethical guidelines',
      '### Technologies used',
      '- **Medical LLMs:** Large Language Model fine-tuning · Medical domain adaptation techniques · French NLP models (CamemBERT, FlauBERT) · Hugging Face Transformers library\n- **Model Optimization:** LoRA (Low-Rank Adaptation) for efficient fine-tuning · PEFT (Parameter-Efficient Fine-Tuning) · Model quantization for deployment · Hyperparameter optimization\n- **Healthcare AI:** Medical knowledge graphs · Symptom-severity mapping algorithms · Safety guardrails and validation · Clinical decision support systems\n- **Development & Evaluation:** Python for backend development · PyTorch/TensorFlow for model training · Medical accuracy evaluation metrics · A/B testing and user feedback analysis',
      '### Technical approach',
      '- **LLM Benchmarking:** Conducted comprehensive evaluation of multiple medical LLMs for French pediatric healthcare. Assessed models on accuracy, response quality, medical safety, and cultural appropriateness for French-speaking families. Created custom evaluation datasets based on real pediatric scenarios.\n- **Fine-Tuning Process:** Applied domain-specific fine-tuning using curated pediatric medical datasets in French. Implemented LoRA and PEFT techniques for efficient adaptation while maintaining general language capabilities. Optimized for both medical accuracy and conversational quality.\n- **Safety & Triage System:** Developed intelligent severity assessment logic to classify symptoms and determine appropriate actions. Implemented robust safety mechanisms to detect emergency situations and provide immediate guidance to seek professional medical help. Ensured compliance with medical advice standards.\n- **User-Centric Design:** Designed conversational flows specifically for first-time parents dealing with pediatric concerns. Balanced empathy and medical accuracy while maintaining clear communication. Incorporated feedback loops for continuous improvement based on parent interactions.',
      '### Use cases',
      '- **Symptom Assessment:** Evaluate common pediatric symptoms like fever, cough, or rashes, providing parents with clear guidance on next steps\n- **Emergency Detection:** Identify urgent situations requiring immediate medical attention and direct parents to appropriate emergency services\n- **General Pediatric Advice:** Provide evidence-based recommendations for common childhood health concerns, nutrition, and development milestones\n- **Doctor Referral:** Smart triage system to determine when professional medical consultation is necessary and facilitate appropriate referrals',
    ],
    fr: [
      '### Reconstruction ouverte (2026) : PediaBot',
      "*Le code d'origine n'a pas été conservé : j'ai donc reconstruit le cœur de la mission de zéro, un chatbot français pour les jeunes parents avec un triage de sécurité et un espace d'administration pour l'équipe médicale. Les conseils viennent des recommandations publiques françaises ; toutes les conversations montrées sont fictives. Aucun code ni donnée du client.*",
      "- **Le triage d'abord :** des règles explicites fixent l'un des quatre niveaux avant toute réponse : appeler le 15 / 112, consulter aujourd'hui, consulter sous 24 à 48 h, ou conseils à la maison. Les signes d'alerte l'emportent toujours, et l'âge change le seuil (toute fièvre avant 3 mois impose un médecin le jour même)\n- **Des réponses sourcées :** 11 fiches (fièvre, bronchiolite, gastro et déshydratation, boutons, pleurs, sommeil, chutes, objet avalé…), chacune avec ses sources. Les réponses reprennent les phrases des fiches, jamais de texte libre, et aucune dose de médicament n'est donnée\n- **Des limites assumées :** une question hors fiches reçoit « pas de fiche validée » et remonte à l'équipe ; une question de suivi après « consultez aujourd'hui » garde le rappel au lieu de rassurer\n- **Espace d'administration :** activité par jour et par gravité, chaque conversation avec la règle de triage déclenchée, une file de revue pour les urgences et les avis négatifs, les questions sans fiche et l'évaluation du triage",
      "- **Évaluation :** 60 messages de mise au point et 30 messages mis de côté, avec la gravité attendue. Au premier passage, le jeu mis de côté obtient **97 % de triage exact, 8 urgences sur 8 détectées et 1 sous-triage** (« ses selles sont noires »), corrigé ensuite. Les deux jeux sont écrits par moi, pas par des cliniciens : ce sont des tests de non-régression\n- **Stack :** Python, FastAPI, scikit-learn (TF-IDF), SQLite, JavaScript, 30 tests et intégration continue",
      '### Présentation',
      "Dans le cadre de l'AI Clinic d'aivancity, optimisation d'un chatbot pédiatrique francophone pour Beparentalis grâce au benchmark et au fine-tuning de LLM médicaux. Le chatbot accompagne les jeunes parents comme un compagnon de santé de confiance, avec des conseils pédiatriques fondés sur des données probantes.",
      "Le système évalue intelligemment la gravité des symptômes, donne des conseils sûrs pour les cas non urgents et oriente vers des professionnels de santé quand c'est nécessaire. Le projet a demandé une attention particulière à la fiabilité médicale, aux protocoles de sécurité et aux besoins spécifiques des parents francophones face à la santé de leur jeune enfant.",
      '### Fonctionnalités clés',
      "- Benchmark de plusieurs LLM médicaux pour la pédiatrie en français\n- Fine-tuning sur des jeux de données médicaux pédiatriques spécialisés\n- Évaluation intelligente de la gravité, avec capacité de triage\n- Conseils médicaux sûrs pour les situations pédiatriques non urgentes\n- Orientation automatique vers des professionnels de santé en cas d'urgence\n- Conversations contextuelles qui gardent en mémoire les inquiétudes des parents\n- Respect des standards du conseil médical et des règles éthiques",
      '### Technologies utilisées',
      "- **LLM médicaux :** fine-tuning de LLM · Techniques d'adaptation au domaine médical · Modèles de NLP français (CamemBERT, FlauBERT) · Bibliothèque Hugging Face Transformers\n- **Optimisation des modèles :** LoRA (Low-Rank Adaptation) pour un fine-tuning efficace · PEFT (Parameter-Efficient Fine-Tuning) · Quantification des modèles pour le déploiement · Optimisation des hyperparamètres\n- **IA en santé :** Graphes de connaissances médicales · Algorithmes de correspondance symptôme-gravité · Garde-fous et validation de sécurité · Systèmes d'aide à la décision clinique\n- **Développement & évaluation :** Python pour le backend · PyTorch/TensorFlow pour l'entraînement · Métriques de fiabilité médicale · Tests A/B et analyse des retours utilisateurs",
      '### Approche technique',
      "- **Benchmark des LLM :** évaluation complète de plusieurs LLM médicaux pour la pédiatrie en français, sur la précision, la qualité des réponses, la sécurité médicale et l'adéquation culturelle aux familles francophones. Création de jeux d'évaluation sur mesure à partir de situations pédiatriques réelles.\n- **Fine-tuning :** fine-tuning spécialisé sur des jeux de données médicaux pédiatriques en français, sélectionnés avec soin. Mise en œuvre de LoRA et PEFT pour une adaptation efficace tout en préservant les capacités linguistiques générales. Optimisation à la fois de la fiabilité médicale et de la qualité conversationnelle.\n- **Sécurité & triage :** logique d'évaluation de la gravité pour classer les symptômes et déterminer l'action adaptée. Mécanismes de sécurité robustes pour détecter les urgences et inciter immédiatement à consulter un professionnel. Respect des standards du conseil médical.\n- **Conception centrée utilisateur :** parcours conversationnels pensés pour les jeunes parents face aux soucis de santé de leur enfant. Équilibre entre empathie et fiabilité médicale, avec une communication claire. Boucles de retour pour une amélioration continue à partir des échanges avec les parents.",
      "### Cas d'usage",
      "- **Évaluation des symptômes :** analyser les symptômes pédiatriques courants (fièvre, toux, éruptions) et indiquer clairement aux parents la marche à suivre\n- **Détection des urgences :** repérer les situations qui demandent une prise en charge immédiate et orienter vers les services d'urgence adaptés\n- **Conseils pédiatriques généraux :** recommandations fondées sur des données probantes pour les soucis de santé courants, l'alimentation et les étapes du développement\n- **Orientation vers un médecin :** triage intelligent pour déterminer quand une consultation est nécessaire et faciliter l'orientation",
    ],
  },
}
