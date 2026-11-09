---
title: "VitaLight : j'ai rouvert mon pitch de l'Imagine Cup deux ans plus tard, et j'ai construit le vrai produit"
date: 2026-11-09
tags: [projects, vitalight, machine-learning, health-ai, startup]
summary: "En 2024, VitaLight, c'était un pitch, un Lean Canvas et un schéma d'architecture. En 2026, j'en ai fait un système qui fonctionne : un modèle entraîné, une application clinicien, une application parents, et un regard honnête sur ce que le modèle sait faire ou non."
seo_description: "Comment j'ai transformé VitaLight, mon concept santé-IA de la Microsoft Imagine Cup 2025, en système fonctionnel : modèle explicable, données synthétiques, métriques honnêtes."
cover: vitalight/cover-fr.jpg
cover_alt: "La page d'accueil de la démo VitaLight"
---

<!--
Version française de vitalight.md (même slug, même URL).
Règles : Imagine Cup = « participant », jamais « sélectionné ». Données synthétiques uniquement, pas un dispositif médical. Aucun nom de coéquipier.
-->

# VitaLight : j'ai rouvert mon pitch de l'Imagine Cup deux ans plus tard, et j'ai construit le vrai produit

[SIDE: dusty]

En octobre 2024, j'ai monté une équipe de quatre étudiants pour participer à la **Microsoft Imagine Cup 2025** avec une idée appelée **VitaLight** : utiliser l'IA pour estimer les risques de santé d'un nouveau-né à partir des antécédents médicaux de ses deux parents, pour que les familles et les médecins puissent se préparer *avant* la naissance, pas après.

On avait un pitch, un Lean Canvas, une marque et un plan d'architecture sur Azure. Ce qu'on n'avait pas, c'était un produit. Puis les stages et les examens sont arrivés, et VitaLight a fini dans un dossier.

Deux ans plus tard, j'ai rouvert ce dossier. Cet article raconte ce que j'y ai trouvé, ce que j'ai construit, et ce que j'ai appris en chemin.

---

## D'où vient l'idée

Le constat de départ est simple. Beaucoup de questions posées aux parents pendant la grossesse sont déjà une évaluation de risque : *Y a-t-il de l'asthme dans la famille ? Du diabète ? Un problème cardiaque ?* Mais les réponses finissent souvent en notes dans un dossier. L'idée de VitaLight était de les transformer en une image claire : quelles pathologies méritent l'attention pour ce bébé, dans quelle mesure, et pourquoi.

---

## L'Imagine Cup : un pitch n'est pas un produit

En tant que **participant à l'Imagine Cup 2025**, mon rôle dans l'équipe portait sur le récit et le business : j'ai rédigé le pitch et construit le modèle économique (un Lean Canvas), la marque et le plan d'architecture sur Azure.

Avec le recul, la compétition m'a appris quelque chose que je n'ai vraiment compris que plus tard : **un pitch décrit un produit qui n'existe pas encore.** On savait expliquer *ce que* VitaLight ferait. On ne pouvait pas montrer *comment*, et on n'avait pas affronté les vraies questions : sur quelles données le modèle apprendrait-il ? À quel point pourrait-il être bon ? Que deviennent les données médicales d'une famille une fois saisies ?

Ce sont ces questions qui ont laissé VitaLight au stade de concept. Ce sont aussi exactement celles auxquelles je voulais répondre en y revenant.

---

## Deux ans plus tard : construire le vrai produit

Le nouveau VitaLight est un système complet qui fonctionne, que j'ai construit seul, de zéro :

- **Une application clinicien :** saisir les antécédents des deux parents en 5 étapes, obtenir un rapport de risque sur 7 pathologies, suivre les familles dans le temps.
- **Une API Python** (FastAPI) qui stocke les dossiers, fait tourner le modèle entraîné et tient un journal d'audit.
- **Une application parents** qui traduit le rapport en langage simple et envoie un conseil de grossesse par semaine.

[FIG: vitalight/dashboard-fr.jpg | Tableau de bord clinicien VitaLight avec les familles suivies, les évaluations récentes et la cohorte par niveau d'attention | Le tableau de bord clinicien. Toutes les familles sont fictives.]

Tout fonctionne sur des **données synthétiques**. Il n'existe aucune donnée patient réelle pour ce projet, et je ne voulais pas faire semblant. Les chiffres de risque sont des ordres de grandeur illustratifs, pas un diagnostic, et VitaLight n'est pas un dispositif médical. L'application le dit elle-même, bien en vue.

---

## Comment un risque est calculé

La décision de conception la plus importante, c'était celle-ci : **un médecin doit pouvoir lire la réponse et la vérifier.** Chaque risque est donc construit de la même façon. On part du risque d'un bébé sans antécédents familiaux particuliers, puis on multiplie par un risque relatif pour chaque facteur présent.

[ANIM: risk-math]

Pour l'asthme, un bébé sans antécédents part d'environ **6,5 %**. Si la mère est asthmatique, le modèle multiplie par 2,2. Si le père l'est aussi, encore par 1,8. Résultat : **25,9 %**, presque trois fois la moyenne de la population (9,1 %).

[FIG: vitalight/report-fr.jpg | Rapport de risque de la famille fictive Martin, avec chaque pathologie comparée à la référence de population et les facteurs en cause | Le rapport de risque : chaque pathologie face à la référence de population, avec les facteurs qui l'ont fait bouger.]

Le modèle derrière ces chiffres est une **régression de Poisson**, une méthode classique en épidémiologie. Je l'ai choisie exprès : ses coefficients *sont* les risques relatifs. Les barres de facteurs du rapport ne sont donc pas une approximation ajoutée après coup pour expliquer une boîte noire. L'explication, **c'est** le modèle.

---

## Ne pas apprendre ce que la biologie sait déjà

[SIDE: punnett]

Toutes les pathologies ne doivent pas être apprises à partir des données. Pour la mucoviscidose et la drépanocytose, la transmission suit des règles exactes : si les deux parents sont porteurs, chaque enfant a **1 chance sur 4** d'être atteint. Pour la trisomie 21, le risque suit une table connue selon l'âge de la mère.

Entraîner un modèle là-dessus ne ferait qu'ajouter du bruit à quelque chose de déjà connu. VitaLight combine donc deux méthodes :

- **Un modèle entraîné** pour l'asthme, l'eczéma, le diabète de type 1 et les cardiopathies, où de nombreux petits facteurs s'additionnent et où leur poids doit être estimé à partir des données.
- **Des règles exactes** pour les maladies génétiques, où la réponse est déjà connue.

C'est pour moi le plus grand changement depuis 2024. À l'époque, dans le pitch, « l'IA » était la réponse à tout. Aujourd'hui, je la vois comme un outil parmi d'autres, et la compétence, c'est de savoir quand *ne pas* s'en servir.

---

## La partie honnête : est-ce que ça marche bien ?

Comme il n'y a pas de données réelles, j'ai écrit un simulateur qui génère une population synthétique de familles, avec une « vérité » cachée volontairement plus riche que tout ce que le modèle peut voir. J'ai ensuite entraîné le modèle sur 1,5 million de familles simulées et je l'ai testé sur 400 000 nouvelles.

Pour savoir à quoi ressemble un bon score, j'ai comparé trois choses : mes règles écrites à la main au départ, le modèle entraîné, et un **oracle** qui connaît le vrai risque simulé de chaque bébé. Aucun modèle ne peut battre l'oracle : c'est le plafond.

[ANIM: model-scores]

Voilà ce que j'en ai retenu :

- **Les scores sont modestes pour tout le monde, oracle compris.** Les antécédents des parents n'expliquent qu'une petite partie de qui développe ces pathologies. C'est la réalité clinique, et c'est pour ça que VitaLight affiche des *niveaux* de risque et des suggestions de suivi, jamais « votre bébé sera asthmatique ».
- **Le modèle atteint le plafond pour le diabète de type 1 et les cardiopathies**, et ses prédictions moyennes collent presque exactement à la réalité (9,1 % prédit contre 9,1 % observé pour l'asthme).
- **Le gradient boosting n'a pas fait mieux.** Il obtient le même score que le modèle simple : l'explicabilité n'a rien coûté en précision.
- **Il a des limites connues.** Il rate certaines interactions, il sous-estime un facteur rare (mère atteinte de diabète de type 1), et chaque chiffre vient d'une simulation. La validation sur une vraie cohorte est la prochaine étape, pas un détail.

[FIG: vitalight/model-card-fr.jpg | Fiche du modèle VitaLight avec les scores de test face aux règles, au gradient boosting et à l'oracle, les courbes de calibration et les risques relatifs appris | La fiche du modèle, dans l'application : scores, calibration et chaque risque relatif appris, visibles par tous.]

Écrire « AUC 0,60 » sur un portfolio impressionne moins qu'écrire « 95 % de précision ». Mais je préfère montrer un chiffre que je peux défendre devant un médecin plutôt qu'un chiffre que je devrais justifier.

---

## Traiter des données de santé comme des données de santé

Une application de santé n'est pas terminée quand le modèle fonctionne. Quelques éléments que j'ai intégrés dès le départ :

- **Pas de consentement, pas d'évaluation.** L'API refuse un dossier si la case de consentement des parents n'est pas cochée.
- **Un journal d'audit :** qui a ouvert, créé, validé ou supprimé quel dossier, et quand.
- **Le droit à l'effacement :** un seul appel supprime les données d'une famille (RGPD, article 17).
- **Un verrouillage de la connexion** après plusieurs tentatives échouées.

[SIDE: parity]

La démo publique fonctionne sans serveur : **le même modèle entraîné** tourne dans votre navigateur. Ça créait un nouveau risque : et si la version navigateur et la version Python finissaient par donner des réponses différentes ? Les 38 tests automatisés incluent donc des **tests de parité** : 11 familles de test passent dans les deux, et le build échoue si un seul risque, niveau ou facteur diffère.

---

## Le côté parents

[FIG: vitalight/parent-push-fr.jpg | L'application parents VitaLight affichant une notification hebdomadaire de grossesse | L'application parents : un conseil par semaine, calé sur la semaine de grossesse.]

Le rapport est écrit pour les médecins. Les parents reçoivent une version en langage simple, et **une notification par semaine**, calée sur la semaine de grossesse : quelque chose à manger, à éviter ou à vérifier. Les conseils de sécurité alimentaire suivent les recommandations du NHS, et les conseils nutritionnels s'appuient sur la recherche publiée. Certains messages viennent du dossier de la famille lui-même, comme un rappel sur le conseil génétique ou sur le tabac.

---

## Ce que j'en retiens

- **Un pitch n'est pas un produit.** Les vraies questions (données, précision, vie privée) n'apparaissent qu'en construisant.
- **Utiliser l'IA là où elle apporte quelque chose.** La génétique exacte n'a pas besoin d'un modèle ; les risques multifactoriels, si.
- **Explicable peut être tout aussi précis.** Ici, le modèle simple et lisible obtient le même score que le gradient boosting.
- **Montrer son plafond.** Afficher l'oracle à côté du modèle donne du sens aux scores modestes, au lieu de les cacher.
- **Les données synthétiques sont un début, pas une preuve.** Elles m'ont permis de construire et de tester tout le système, mais seules des données réelles peuvent le valider.

---

## Essayez-le

La démo est en ligne sur **[assim-ben-ahmed.github.io/vitalight](https://assim-ben-ahmed.github.io/vitalight/)**. Elle tourne entièrement dans votre navigateur, avec le modèle entraîné et 8 familles fictives : ouvrez un rapport, créez une nouvelle famille avec « Remplir avec un exemple », ou passez à la vue parents. Le code est sur [GitHub](https://github.com/assim-ben-ahmed/vitalight).

Ce qui manque encore : de vraies notifications push, des comptes pour les parents, un hébergement certifié pour les données de santé, et surtout une validation sur des données réelles avec des cliniciens. Si vous travaillez dans la donnée de santé ou en néonatalogie et que ça vous intéresse, j'aimerais sincèrement savoir ce que j'ai mal compris : [LinkedIn](https://www.linkedin.com/in/assim-ben-ahmed-6268741a8/) ou [assimben2004@gmail.com](mailto:assimben2004@gmail.com).

— Assim
