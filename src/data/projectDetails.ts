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

  vitalight: {
    en: [
      '### Project overview',
      "VitaLight is an innovative AI-powered healthcare application developed for the Microsoft Imagine Cup competition. The application uses advanced machine learning algorithms to predict potential diseases in newborns based on their parents' comprehensive medical history.",
      'This project addresses a critical need in preventive healthcare by enabling early detection and intervention for newborn health conditions.',
      '### Key features',
      "- Predictive disease modeling using parents' medical history and genetic factors\n- Machine learning algorithms trained on extensive healthcare datasets\n- Risk assessment and early warning system for healthcare providers\n- User-friendly interface for medical professionals\n- Comprehensive reporting and visualization of health predictions",
      '### Technologies used',
      '- **Machine Learning:** TensorFlow for deep learning models · scikit-learn for data preprocessing · Predictive modeling algorithms\n- **Development:** Python for backend development · Data visualization libraries · Healthcare data standards',
    ],
    fr: [
      '### Présentation',
      "VitaLight est une application de santé innovante fondée sur l'IA, développée pour le concours Microsoft Imagine Cup. Elle utilise des algorithmes de machine learning avancés pour prédire les maladies potentielles du nouveau-né à partir des antécédents médicaux complets de ses parents.",
      "Le projet répond à un besoin essentiel de la santé préventive : permettre la détection et l'intervention précoces pour la santé du nouveau-né.",
      '### Fonctionnalités clés',
      "- Modélisation prédictive des maladies à partir des antécédents médicaux et des facteurs génétiques des parents\n- Algorithmes de machine learning entraînés sur de larges jeux de données de santé\n- Évaluation des risques et système d'alerte précoce pour les soignants\n- Interface simple pour les professionnels de santé\n- Rapports complets et visualisation des prédictions",
      '### Technologies utilisées',
      "- **Machine learning :** TensorFlow pour les modèles de deep learning · scikit-learn pour le prétraitement des données · Algorithmes de modélisation prédictive\n- **Développement :** Python pour le backend · Bibliothèques de visualisation · Standards de données de santé",
    ],
  },

  pitchboy: {
    en: [
      '### Project overview',
      "As part of the AI Clinic program at aivancity, developed an advanced AI system for Pitchboy to analyze voice-based sentiment and emotions from interview audio and video data. The system extracts acoustic features and applies state-of-the-art NLP models to assess candidates' emotional states during interviews.",
      'This project addresses the challenge of automated interview analysis by combining audio signal processing with deep learning to evaluate confidence, stress levels, and overall sentiment from speech patterns. The work also included critical reflection on ethical considerations and potential biases in AI-driven recruitment tools.',
      '### Key features',
      '- Audio feature extraction (prosody, tone, pitch, intensity) using Librosa and signal processing techniques\n- Speech-to-text transcription with sentiment analysis using RoBERTa transformer models\n- Machine learning models for multi-class emotion classification (confidence, stress, calm, enthusiasm)\n- Real-time emotion detection from audio streams with temporal analysis\n- Comprehensive evaluation metrics and model performance analysis\n- Ethical risk assessment and bias detection framework for recruitment AI',
      '### Technologies used',
      '- **AI & Machine Learning:** RoBERTa for sentiment analysis · scikit-learn for ML model training · TensorFlow/PyTorch for deep learning · Hugging Face Transformers\n- **Audio Processing:** Librosa for audio feature extraction · pyAudioAnalysis for prosody analysis · Speech recognition APIs · NumPy for signal processing\n- **NLP & Text Analysis:** NLTK for text preprocessing · spaCy for linguistic features · Transformer-based embeddings · Sentiment lexicons\n- **Development & Visualization:** Python for backend development · Pandas for data manipulation · Matplotlib/Seaborn for visualization · Jupyter Notebooks for analysis',
      '### Technical approach',
      '- **Audio Feature Extraction:** Extracted acoustic features including MFCCs (Mel-Frequency Cepstral Coefficients), pitch contours, energy levels, speaking rate, and voice quality metrics. Applied spectral analysis and prosody extraction to capture emotional indicators in speech patterns.\n- **Sentiment & Emotion Analysis:** Implemented RoBERTa-based sentiment analysis on transcribed text combined with acoustic features to create a multimodal emotion recognition system. Trained custom classifiers to detect confidence levels, stress indicators, and overall emotional states.\n- **Ethical Considerations:** Conducted thorough analysis of ethical risks including demographic bias, privacy concerns, and fairness in automated decision-making. Developed recommendations for responsible AI deployment in recruitment contexts and bias mitigation strategies.',
    ],
    fr: [
      '### Présentation',
      "Dans le cadre de l'AI Clinic d'aivancity, développement pour Pitchboy d'un système d'IA avancé qui analyse le sentiment et les émotions dans la voix, à partir d'enregistrements audio et vidéo d'entretiens. Le système extrait des caractéristiques acoustiques et applique des modèles de NLP de pointe pour évaluer l'état émotionnel des candidats pendant l'entretien.",
      "Le projet répond au défi de l'analyse automatisée des entretiens en combinant traitement du signal audio et deep learning pour évaluer la confiance, le niveau de stress et le sentiment général à partir de la parole. Il comprenait aussi une réflexion critique sur les enjeux éthiques et les biais possibles des outils de recrutement fondés sur l'IA.",
      '### Fonctionnalités clés',
      "- Extraction de caractéristiques audio (prosodie, ton, hauteur, intensité) avec Librosa et des techniques de traitement du signal\n- Transcription de la parole et analyse de sentiment avec des modèles transformers RoBERTa\n- Modèles de machine learning pour la classification multi-classe des émotions (confiance, stress, calme, enthousiasme)\n- Détection des émotions en temps réel sur des flux audio, avec analyse temporelle\n- Métriques d'évaluation complètes et analyse des performances des modèles\n- Évaluation des risques éthiques et cadre de détection des biais pour l'IA de recrutement",
      '### Technologies utilisées',
      "- **IA & machine learning :** RoBERTa pour l'analyse de sentiment · scikit-learn pour l'entraînement des modèles · TensorFlow/PyTorch pour le deep learning · Hugging Face Transformers\n- **Traitement audio :** Librosa pour l'extraction de caractéristiques · pyAudioAnalysis pour l'analyse de la prosodie · API de reconnaissance vocale · NumPy pour le traitement du signal\n- **NLP & analyse de texte :** NLTK pour le prétraitement · spaCy pour les caractéristiques linguistiques · Embeddings issus de transformers · Lexiques de sentiment\n- **Développement & visualisation :** Python pour le backend · Pandas pour la manipulation des données · Matplotlib/Seaborn pour la visualisation · Notebooks Jupyter pour l'analyse",
      '### Approche technique',
      "- **Extraction des caractéristiques audio :** extraction de MFCC (coefficients cepstraux sur l'échelle de Mel), courbes de hauteur, niveaux d'énergie, débit de parole et indicateurs de qualité vocale. Analyse spectrale et extraction de la prosodie pour capter les indices émotionnels dans la parole.\n- **Analyse du sentiment et des émotions :** analyse de sentiment RoBERTa sur le texte transcrit, combinée aux caractéristiques acoustiques, pour un système multimodal de reconnaissance des émotions. Entraînement de classifieurs sur mesure pour détecter le niveau de confiance, les signes de stress et l'état émotionnel général.\n- **Enjeux éthiques :** analyse approfondie des risques éthiques (biais démographiques, vie privée, équité des décisions automatisées). Recommandations pour un déploiement responsable de l'IA dans le recrutement et stratégies de réduction des biais.",
    ],
  },

  'shift-technology': {
    en: [
      '### Project overview',
      'As part of the AI Clinic program at aivancity, conducted comprehensive data scraping and analysis to identify the optimal CRM solution for Shift Technology, a leading insurtech company.',
      "The project involved collecting data from multiple sources, analyzing CRM features and pricing, and delivering data-backed recommendations that aligned with Shift Technology's specific business requirements and technical infrastructure.",
      '### Key features',
      '- Automated web scraping to collect CRM platform data\n- Comparative analysis of features, pricing, and integration capabilities\n- Data cleaning and normalization using Pandas\n- Visualization of key metrics and comparison charts\n- Comprehensive report with data-driven recommendations',
      '### Technologies used',
      '- **Data Collection:** Python web scraping libraries · BeautifulSoup for HTML parsing · API integration for data gathering\n- **Analysis:** Pandas for data manipulation · Data visualization tools · Statistical analysis methods',
    ],
    fr: [
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
