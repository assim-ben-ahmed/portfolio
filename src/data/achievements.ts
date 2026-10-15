// Achievements (content.md → "Achievements", in its order) + the Morocco Learning Trip page.
// Card text is word for word; FR titles tagged UNAPPROVED are translations of the EN card names.
import type { Localized } from '../i18n'
import type { GalleryItem } from './leadership'

import hubPitch from '../../assets/images/achievements/google-build-with-ai/01-pitching-the-portal.jpg?pic'
import medal from '../../assets/images/leadership/bde-echo/02-medal-with-dr-burak.jpg?pic'
import m01 from '../../assets/images/trips/morocco-2026/01-cohort-group-lunch.jpg?pic'
import m02 from '../../assets/images/trips/morocco-2026/02-isga-rabat-welcome.jpg?pic'
import m03 from '../../assets/images/trips/morocco-2026/03-orange-digital-center-rabat.jpg?pic'
import m04 from '../../assets/images/trips/morocco-2026/04-hassan-ii-mosque-casablanca.jpg?pic'
import m05 from '../../assets/images/trips/morocco-2026/05-ai-agriculture-conference-marrakech.jpg?pic'
import m06 from '../../assets/images/trips/morocco-2026/06-agafay-desert.jpg?pic'
import m07 from '../../assets/images/trips/morocco-2026/07-cite-innovation-marrakech.jpg?pic'
import m08 from '../../assets/images/trips/morocco-2026/08-stargate-um6p-ben-guerir.jpg?pic'
import m09 from '../../assets/images/trips/morocco-2026/09-1337-coding-lab.jpg?pic'
import m10 from '../../assets/images/trips/morocco-2026/10-1337-honor-wall.jpg?pic'
import m11 from '../../assets/images/trips/morocco-2026/11-outdoor-day-zipline.jpg?pic'

export type AchievementIcon = 'perfect' | 'podium' | 'medal' | 'rank' | 'trip' | 'startup' | 'event'

export type Achievement = {
  id: string
  icon: AchievementIcon
  title: Localized
  text: Localized
  /** Internal route the card opens, if any. */
  to?: string
  cover?: { pic: Picture; alt: Localized }
}

export const achievements: Achievement[] = [
  {
    id: 'perfect-grades',
    icon: 'perfect',
    title: { en: '3× 20/20', fr: '3× 20/20' },
    text: {
      en: "aivancity's first-ever perfect grades on a consulting defence: top marks (individual and team) on three client-facing soutenances for Shift Technology, Beparentalis and WellPack. The WellPack pitch won my team a 3+-month internship (summer 2025).",
      fr: "Les premiers 20/20 de l'histoire d'aivancity en soutenance de conseil : note maximale (individuelle et en équipe) sur trois soutenances client, pour Shift Technology, Beparentalis et WellPack. La soutenance WellPack a décroché à mon équipe un stage de plus de 3 mois (été 2025).",
    },
  },
  {
    id: 'google-build-with-ai',
    icon: 'podium',
    title: {
      en: '3rd — Google Build with AI 2026',
      fr: '3e — Google Build with AI 2026', // UNAPPROVED (FR title)
    },
    text: {
      en: 'April 2026: Aivancity Hub, built in 8 hours, voted into the Top 8 by the audience, 3rd place.',
      fr: 'Avril 2026 : Aivancity Hub, construit en 8 heures, voté dans le Top 8 par le public, 3e place.',
    },
    to: '/projects/aivancity-hub',
    cover: {
      pic: hubPitch,
      alt: {
        en: "Assim's team pitching Aivancity Hub at Google Build with AI",
        fr: "L'équipe d'Assim présente Aivancity Hub au Google Build with AI",
      },
    },
  },
  {
    id: 'back-to-school-hackathon',
    icon: 'podium',
    title: {
      en: '3rd — back-to-school hackathon',
      fr: '3e — hackathon de rentrée', // UNAPPROVED (FR title)
    },
    text: {
      en: 'September 2025: AquaNova, an AI swim coach, built with a team of 5 from several PGE years.',
      fr: 'Septembre 2025 : AquaNova, un coach de natation IA, construit avec une équipe de 5 étudiants de plusieurs promotions.',
    },
    to: '/projects/aquanova',
  },
  {
    id: 'bde-medal',
    icon: 'medal',
    title: {
      en: 'BDE presidency medal & trophy',
      fr: 'Médaille et trophée de la présidence du BDE', // UNAPPROVED (FR title)
    },
    text: {
      en: "December 2025, at aivancity's ceremony celebrating its new Master's grade.",
      fr: "Décembre 2025, lors de la cérémonie célébrant l'obtention du grade de Master par aivancity.",
    },
    to: '/leadership',
    cover: {
      pic: medal,
      alt: {
        en: 'Assim receiving his medal alongside Dr. Burak Çivitcioğlu',
        fr: 'Assim recevant sa médaille aux côtés de Dr. Burak Çivitcioğlu',
      },
    },
  },
  {
    id: 'second-of-cohort',
    icon: 'rank',
    title: { en: '2nd of cohort', fr: '2e de promotion' }, // FR from content.md ("2e de promotion")
    text: {
      en: 'Ranked 2nd at the end of 3rd year, Programme Grande École.',
      fr: "Classé 2e à l'issue de la 3e année du Programme Grande École.",
    },
  },
  {
    id: 'morocco-learning-trip',
    icon: 'trip',
    title: {
      en: 'Morocco Learning Trip',
      fr: 'Learning Trip au Maroc', // UNAPPROVED (FR title)
    },
    // content.md ends with ": see below" / ": voir ci-dessous" — dropped because the card opens its own page.
    text: {
      en: 'May 4–14, 2026 (aivancity × ISGA Morocco).',
      fr: '4–14 mai 2026 (aivancity × ISGA Maroc).',
    },
    to: '/achievements/morocco-2026',
    cover: {
      pic: m08,
      alt: { en: 'StarGate, UM6P, Ben Guerir', fr: 'StarGate, UM6P, Ben Guerir' },
    },
  },
  {
    id: 'imagine-cup',
    icon: 'startup',
    title: { en: 'Microsoft Imagine Cup 2025', fr: 'Microsoft Imagine Cup 2025' },
    text: {
      en: 'Participant with VitaLight, the startup team I founded.',
      fr: "Participant avec VitaLight, la startup que j'ai fondée.",
    },
    to: '/projects/vitalight',
  },
  {
    id: 'gitex',
    icon: 'event',
    title: { en: 'GITEX Global & Expand North Star', fr: 'GITEX Global & Expand North Star' },
    text: {
      en: 'Participant, Dubai, 2024 and 2025.',
      fr: 'Participant, Dubaï, 2024 et 2025.',
    },
  },
]

// ---------- Morocco Learning Trip ----------

export const morocco = {
  title: achievements.find((a) => a.id === 'morocco-learning-trip')!.title,
  dates: { en: 'May 4–14, 2026 (aivancity × ISGA Morocco)', fr: '4–14 mai 2026 (aivancity × ISGA Maroc)' },
  text: {
    en: 'Ten days across Rabat, Casablanca, Marrakech and Ben Guerir exploring Morocco\'s AI ecosystem, with ISGA Morocco. We visited Orange Digital Center, CNRST\'s data centres, UM6P StarGate and the 1337 coding school, attended conferences on AI in agriculture (an olive-leaf disease-detection system), finance, marketing and entrepreneurship, and a seminar on AI pipelines and ethics. What stayed with me: AI is only as good as the question it is asked, privacy is about control rather than secrets, and the entry-level tech job market is changing fast.',
    fr: "Dix jours entre Rabat, Casablanca, Marrakech et Ben Guerir pour découvrir l'écosystème IA marocain, avec ISGA Maroc. Nous avons visité l'Orange Digital Center, les data centers du CNRST, StarGate (UM6P) et l'école 1337, et assisté à des conférences sur l'IA dans l'agriculture (un système de détection de maladie des feuilles d'olivier), la finance, le marketing et l'entrepreneuriat, ainsi qu'à un séminaire sur les pipelines IA et l'éthique. Ce que j'en retiens : une IA ne vaut que par la question qu'on lui pose, la vie privée est une question de contrôle et non de secrets, et le marché des postes juniors en tech change très vite.",
  } as Localized,
}

// assets.md: alt text = caption.
const trip = (pic: Picture, en: string, fr: string): GalleryItem => ({
  pic,
  alt: { en, fr },
  caption: { en, fr },
})

export const moroccoGallery: GalleryItem[] = [
  trip(m01, 'The cohort at lunch', 'La promotion au déjeuner'),
  trip(m02, 'Welcome at ISGA, Rabat', "Accueil à l'ISGA, Rabat"),
  trip(m03, 'Orange Digital Center, Rabat', 'Orange Digital Center, Rabat'),
  trip(m04, 'Hassan II Mosque, Casablanca', 'Mosquée Hassan II, Casablanca'),
  trip(m05, 'Conference on AI in agriculture, Marrakech', "Conférence sur l'IA dans l'agriculture, Marrakech"),
  trip(m06, 'Agafay desert', "Désert d'Agafay"),
  trip(m07, "Cité de l'Innovation, Marrakech", "Cité de l'Innovation, Marrakech"),
  trip(m08, 'StarGate, UM6P, Ben Guerir', 'StarGate, UM6P, Ben Guerir'),
  trip(m09, 'The 1337 coding lab', 'Le lab de code de 1337'),
  trip(m10, 'The 1337 honour wall', "Le mur d'honneur de 1337"),
  trip(m11, 'Outdoor day: zipline', 'Journée en plein air : tyrolienne'),
]
