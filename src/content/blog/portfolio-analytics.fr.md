---
title: "J'ai mis un tracker sur mon propre portfolio. Voilà ce que la première semaine m'a appris."
date: 2026-10-27
tags: [notes, portfolio, google-analytics, web-analytics, data]
summary: "19 visiteurs, 37 visites, 291 pages vues : ce qu'une semaine de Google Analytics m'a appris sur mon propre portfolio, y compris le fait que mon plus gros visiteur, c'était moi."
seo_description: "Ce que Google Analytics m'a appris sur mon portfolio : d'où viennent les visiteurs, ce qu'ils ouvrent, et les bugs que les données ont révélés."
cover: portfolio-analytics/cover-fr.jpg
cover_alt: "La page d'accueil du nouveau portfolio"
---

<!--
Version française de portfolio-analytics.md (même slug, même URL : le choix English / Français bascule entre les deux).
Données : GA4, du 21 au 26 octobre 2026 (début du suivi → dernier jour traité)
-->

# J'ai mis un tracker sur mon propre portfolio. Voilà ce que la première semaine m'a appris.

[SIDE: bottle]

La plupart des portfolios ressemblent un peu à une bouteille à la mer. On le construit, on le lance sur internet, et on espère que quelqu'un le trouve. Peut-être qu'un recruteur le lit. Peut-être que personne ne le lit. On ne le saura jamais.

J'étudie l'IA et la Data Science. Tout mon domaine consiste à *ne pas deviner*. Alors c'était un peu gênant de n'avoir aucune idée de ce qui arrivait à mon propre site une fois mis en ligne.

J'ai donc reconstruit mon portfolio, et cette fois, je lui ai donné des yeux.

---

## Pourquoi je l'ai reconstruit

Mon ancien portfolio faisait le travail, mais il ne rendait pas justice à ce que j'avais vraiment fait. Les projets étaient noyés, les coordonnées n'étaient plus à jour, et il ressemblait à tous les autres templates étudiants sur GitHub Pages.

Le nouveau a une structure plus claire : qui je suis, ce que j'ai construit, et comment me joindre. Il est entièrement bilingue, français et anglais, et chaque projet, de **VitaLight** à **WellPack Manager**, a sa propre page au lieu d'une ligne dans une liste.

Il est construit avec React, TypeScript et Vite. Chaque page est pré-rendue en HTML au moment du build, donc elle se charge vite et les moteurs de recherche peuvent la lire, et le site se déploie tout seul sur GitHub Pages à chaque push.

Mais ce dont je veux parler, ce n'est pas le design. C'est ce qui se passe *après* l'arrivée de quelqu'un sur la page.

---

## Donner des yeux au site : Google Analytics

[ANIM: data-flow]

Voici la version simple de son fonctionnement :

1. Chaque page charge un petit script de Google (le snippet **gtag**).
2. Quand quelque chose se passe (une page vue, un clic, un scroll), le script envoie un petit « événement » à Google Analytics.
3. Google agrège ces événements dans des rapports : combien de personnes sont venues, d'où, sur quel appareil, et ce qu'elles ont fait.

Les pages vues, les scrolls et les téléchargements de fichiers sont mesurés automatiquement. La partie intéressante, ce sont les **événements personnalisés**, les choses que *j'ai* décidé de mesurer :

- `project_open` : quelqu'un ouvre un projet
- `cv_download` : ce qui se rapproche le plus d'une « conversion » pour moi
- `github_click` et `email_click` : quelqu'un veut voir mon code ou me parler

[ANIM: realtime]

La première fois que j'ai ouvert mon site sur mon téléphone et vu « 1 utilisateur actif » apparaître dans la vue Temps réel, j'étais beaucoup trop content. Cet utilisateur, c'était moi. Ça compte quand même.

### Un mot rapide sur la vie privée

[SIDE: consent]

Je suis en France, et suivre les gens sans leur demander, ça ne se fait pas ici (ni ailleurs, d'ailleurs). Le site affiche donc un petit bandeau cookies où « Accepter » et « Refuser » sont aussi faciles à cliquer l'un que l'autre, et Google Analytics n'est même pas chargé tant que vous n'avez pas accepté. Votre choix est gardé six mois, et vous pouvez le changer à tout moment via « Paramètres des cookies » en bas de chaque page. Pas de noms, pas de données personnelles, seulement des chiffres agrégés.

---

## Alors… qu'ont dit les données ?

Le suivi a démarré le **21 octobre**. Voici une semaine de données : **19 visiteurs, 37 visites, 291 pages vues.** Ce n'est pas du big data. C'est à peine de la data. Mais ce sont *mes* données, et elles m'ont déjà appris quelques vérités.

**1. C'est LinkedIn qui amène du monde.**
62 % des visites apparaissent en « direct », c'est-à-dire que quelqu'un a tapé ou collé le lien. Une bonne partie, c'est moi (j'y reviens plus bas). Le vrai moteur, c'est **LinkedIn, avec 30 % des visites**, surtout la semaine où j'ai partagé le site : 33 des 37 visites ont eu lieu les quatre premiers jours. Ensuite, ça tombe à deux par jour. Le pic du lancement, puis le retour au réel.

[ANIM: traffic-sources]

**2. Les visiteurs venus de GitHub sont les vrais fans.**
Seulement 2 visites venaient de GitHub, mais ces personnes sont restées près de **4 minutes** chacune. Celles venues de LinkedIn sont restées environ une minute. Logique : si on arrive depuis mon code, c'est qu'on veut vraiment voir les projets.

**3. 84 % des visiteurs étaient sur leur téléphone.**
16 sur 19. Et beaucoup n'étaient même pas dans un vrai navigateur : ils ont ouvert le site *à l'intérieur* de l'application LinkedIn ou Instagram. La version de mon portfolio que la plupart des gens ont vraiment vue, c'est donc la petite, pas la belle mise en page ordinateur sur laquelle j'ai passé des heures.

[SIDE: phones]

**4. La page Projets fait le gros du travail.**
Elle a reçu **37 % de toutes les pages vues** (FR et EN cumulés), bien plus que la page d'accueil. Un projet a été ouvert 27 fois. En pages vues, le projet le plus consulté est **WellPack Manager** (17 vues), puis **VitaLight** (13). En bas du classement : **AI Study Buddy** et le projet **Dubai Al Safa 2 Park**, avec 3 vues chacun. Désolé, le parc. 🌳

[ANIM: project-race]

**5. 5 personnes ont téléchargé mon CV.**
Sur 19 visiteurs, ça fait environ 1 sur 4. Mais avant de crier victoire…

---

## Rebondissement : mon plus gros visiteur, c'était moi

[SIDE: it-was-me]

En regardant de plus près, un visiteur sortait du lot : un seul ordinateur, toujours dans la même ville, toujours sur Edge. Ce visiteur cumulait 13 sessions, environ **5 minutes par visite**, et presque **la moitié de tous les événements** du site.

C'est moi. En train de tester, de montrer le site à des gens, de cliquer sur chaque bouton pour vérifier que tout marche.

C'est l'erreur la plus classique en analytics : oublier d'exclure son propre trafic. Ça gonfle les visites « directes », les chiffres sur ordinateur et le temps passé sur le site. La vraie histoire est donc plus petite et plus mobile que ce que disent les totaux. Bonne leçon pour n'importe quel projet data : **avant de faire confiance à un chiffre, demandez-vous qui se cache derrière.**

---

## Ce que les données ont aussi repéré

L'analytics ne sert pas qu'à compter les visiteurs. C'est aussi un assez bon détecteur de bugs :

- **Une page 404 a été visitée pendant que je regardais le Temps réel.** Il y a un lien cassé quelque part.
- **11 pages vues sans aucun titre**, et 0 seconde sur la page. Quelque chose ne se charge pas correctement.
- **La même page comptée deux fois**, une fois en `/vitalight` et une fois en `/vitalight/`, ce qui coupe les statistiques en deux.
- **Le téléchargement de mon CV est compté deux fois**, par mon événement personnalisé et par celui que Google ajoute automatiquement.
- **Je vois *que* les gens ouvrent des projets, mais pas *lesquels*.** L'événement envoie bien le nom du projet, mais je n'ai jamais demandé à Google Analytics de l'afficher. C'est pour ça que j'ai utilisé les pages vues plus haut.
- **Pas un seul clic sur LinkedIn.** Le bouton est suivi, mais en une semaine entière personne n'a cliqué dessus, alors que LinkedIn a amené 30 % des visites. Les gens viennent *de* LinkedIn, mais ils n'y retournent pas.

[ANIM: bug-hunt]

---

## Ce que je change

Les données ne servent que si elles font changer quelque chose. Voici donc la liste de choses à faire qu'elles m'ont donnée :

- **Exclure mes propres visites**, pour que les chiffres parlent des vrais visiteurs
- **Rendre mon LinkedIn plus facile à trouver**, et afficher *quel* projet les gens ouvrent
- **Corriger la 404, les titres manquants et les URL en double**
- **Soigner d'abord l'expérience mobile**, parce que c'est ce que 84 % des gens voient vraiment
- **Mettre en avant les projets ignorés**, ou repenser la façon dont je les présente

[ANIM: before-after]

C'est une toute petite version de ce que je veux faire professionnellement : mesurer, comprendre, changer, mesurer à nouveau. Je partagerai les chiffres de l'« après » dans un prochain article.

---

## La suite

[SIDE: wave]

C'est le premier article de ce blog, et l'idée est de rester simple et honnête : ce que je construis, ce qui a cassé, ce que j'ai appris. Prochain épisode : **VitaLight**, mon projet de startup en IA santé. D'où vient l'idée, ce que j'ai construit, et ce que j'ai appris en le présentant à la Microsoft Imagine Cup.

Si vous avez cliqué sur « Accepter » dans le bandeau, vous venez d'être compté (salut 👋). Faites un tour, ouvrez un projet ou deux (celui du parc a besoin d'amour), et si vous voulez parler IA, data, ou d'une opportunité d'alternance, je suis sur [LinkedIn](https://www.linkedin.com/in/assim-ben-ahmed-6268741a8/) et à [assimben2004@gmail.com](mailto:assimben2004@gmail.com).

— Assim
