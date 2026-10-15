// BDE Echo gallery + volunteering photos. Alt text from _brief/assets.md, captions from content.md
// ("Gallery captions"). Slot 07 (movie night) and the 08/09 videos are still missing — add them here when
// they arrive (a video goes in `video`, its photo stays as the poster); missing slots are simply not listed.
import type { Localized } from '../i18n'

import trophy from '../../assets/images/leadership/bde-echo/01-trophy-grade-master-ceremony.jpg?pic'
import medal from '../../assets/images/leadership/bde-echo/02-medal-with-dr-burak.jpg?pic'
import mic from '../../assets/images/leadership/bde-echo/03-president-hosting-on-the-mic.jpg?pic'
import fifaWinners from '../../assets/images/leadership/bde-echo/04a-fifa-tournament-winners.jpg?pic'
import fifaGroup from '../../assets/images/leadership/bde-echo/04b-fifa-tournament-group.jpg?pic'
import fifaPlaying from '../../assets/images/leadership/bde-echo/04c-fifa-tournament-playing.jpg?pic'
import karaoke from '../../assets/images/leadership/bde-echo/05-karaoke-night.jpg?pic'
import food from '../../assets/images/leadership/bde-echo/06a-international-food-tasting.jpg?pic'
import foodGroup from '../../assets/images/leadership/bde-echo/06b-international-food-tasting-group.jpg?pic'
import halloween from '../../assets/images/leadership/bde-echo/08-halloween.jpg?pic'
import debateClub from '../../assets/images/leadership/bde-echo/09-debate-club.jpg?pic'
import octobreRose from '../../assets/images/leadership/bde-echo/10-octobre-rose.jpg?pic'
import meals from '../../assets/images/community/volunteering/01-preparing-meals.jpg?pic'
import distribution from '../../assets/images/community/volunteering/02-food-distribution.jpg?pic'

export type GalleryItem = {
  pic: Picture
  alt: Localized
  caption: Localized
  /** Optional muted loop (e.g. Halloween / debate club clips); `pic` is the poster. */
  video?: string
}

const fifaCaption = {
  en: 'FIFA tournament: the games and the winners',
  fr: 'Tournoi FIFA : les matchs et les vainqueurs',
}
const foodCaption = {
  en: 'International food tasting: cuisines from around the world',
  fr: 'Dégustation internationale : des cuisines du monde entier',
}

export const bdeHero: GalleryItem = {
  pic: trophy,
  alt: {
    en: "Assim holding his BDE presidency trophy at aivancity's Grade Master ceremony",
    fr: "Assim tenant son trophée de président du BDE lors de la cérémonie du grade de Master d'aivancity",
  },
  caption: {
    en: "Honoured for my BDE presidency at aivancity's Grade Master ceremony, Dec 2025",
    fr: 'Distingué pour ma présidence du BDE lors de la cérémonie du grade de Master, déc. 2025',
  },
}

// Gallery order: 02 → 10 (01 is the page hero).
export const bdeGallery: GalleryItem[] = [
  {
    pic: medal,
    alt: {
      en: 'Assim receiving his medal alongside Dr. Burak Çivitcioğlu',
      fr: 'Assim recevant sa médaille aux côtés de Dr. Burak Çivitcioğlu',
    },
    caption: {
      en: 'With Dr. Burak Çivitcioğlu at the ceremony',
      fr: 'Avec Dr. Burak Çivitcioğlu lors de la cérémonie',
    },
  },
  {
    pic: mic,
    alt: { en: 'Assim hosting a BDE event on the microphone', fr: 'Assim anime un événement du BDE au micro' },
    caption: { en: 'Hosting a BDE event', fr: "Animation d'un événement du BDE" },
  },
  {
    pic: fifaWinners,
    alt: { en: 'Winners of the BDE FIFA tournament', fr: 'Vainqueurs du tournoi FIFA du BDE' },
    caption: fifaCaption,
  },
  {
    pic: fifaGroup,
    alt: { en: 'Students gathered for the BDE FIFA tournament', fr: 'Étudiants réunis pour le tournoi FIFA du BDE' },
    caption: fifaCaption,
  },
  {
    pic: fifaPlaying,
    alt: { en: 'Students playing during the FIFA tournament', fr: 'Étudiants en plein match lors du tournoi FIFA' },
    caption: fifaCaption,
  },
  {
    pic: karaoke,
    alt: { en: 'Students at the BDE karaoke night', fr: 'Étudiants lors de la soirée karaoké du BDE' },
    caption: { en: 'Karaoke night', fr: 'Soirée karaoké' },
  },
  {
    pic: food,
    alt: {
      en: 'Dishes from around the world at the international food tasting',
      fr: 'Plats du monde entier lors de la dégustation internationale',
    },
    caption: foodCaption,
  },
  {
    pic: foodGroup,
    alt: {
      en: 'Students at the international food tasting',
      fr: 'Étudiants lors de la dégustation internationale',
    },
    caption: foodCaption,
  },
  {
    pic: halloween,
    alt: { en: 'Halloween event at aivancity, Oct 2025', fr: 'Soirée Halloween à aivancity, oct. 2025' },
    // content.md: "Halloween, Oct 2025 (video)" — "(video)" dropped until the clip arrives.
    caption: { en: 'Halloween, Oct 2025', fr: 'Halloween, oct. 2025' },
  },
  {
    pic: debateClub,
    alt: { en: 'BDE debate club session', fr: 'Séance du club de débat du BDE' },
    // content.md: "Debate club (video)" — "(video)" dropped until the clip arrives.
    caption: { en: 'Debate club', fr: 'Club de débat' },
  },
  {
    pic: octobreRose,
    alt: {
      en: 'Students and teachers dressed in pink for Octobre Rose',
      fr: 'Étudiants et professeurs habillés en rose pour Octobre Rose',
    },
    caption: {
      en: 'Octobre Rose, Oct 2025: students and teachers in pink, wish bracelets handed out, and a donation to the cause',
      fr: 'Octobre Rose, oct. 2025 : étudiants et professeurs en rose, bracelets à vœux distribués et un don à la cause',
    },
  },
]

// No captions in content.md for these two — the alt text doubles as the caption.
export const volunteeringPhotos: GalleryItem[] = [
  {
    pic: meals,
    alt: {
      en: 'Volunteers preparing meals in the kitchen at Ô Cœur de la Rue',
      fr: 'Bénévoles préparant les repas en cuisine à Ô Cœur de la Rue',
    },
    caption: {
      en: 'Volunteers preparing meals in the kitchen at Ô Cœur de la Rue',
      fr: 'Bénévoles préparant les repas en cuisine à Ô Cœur de la Rue',
    },
  },
  {
    pic: distribution,
    alt: {
      en: 'Volunteers distributing meals on the street in Paris',
      fr: 'Bénévoles distribuant des repas dans la rue à Paris',
    },
    caption: {
      en: 'Volunteers distributing meals on the street in Paris',
      fr: 'Bénévoles distribuant des repas dans la rue à Paris',
    },
  },
]
