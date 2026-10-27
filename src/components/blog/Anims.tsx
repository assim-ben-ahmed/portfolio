import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { useI18n } from '../../i18n'
import s from './Anims.module.css'

/** Every word shown inside the animations, in both site languages. */
const TEXT = {
  en: {
    flowLabel: 'Animation: a visitor clicks a page, an event travels from the browser to Google Analytics, and a dashboard updates.',
    flowCaption: 'A click on the page becomes an event, the event travels to Google Analytics, and the reports update.',
    click: 'click',
    event: 'event',
    reports: 'reports',
    sourcesLabel: 'Chart: traffic sources (Direct 62%, LinkedIn 30%, GitHub 5%, Instagram 3%) and visits per day from October 21 to 26: 9, 8, 9, 7, then 2 and 2.',
    sourcesCaption: 'Where the 37 visits came from, and when: a launch spike, then reality.',
    direct: 'Direct',
    days: ['Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26'],
    spike: 'launch spike → reality',
    raceLabel: 'Race chart of page views per project: WellPack Manager 17, VitaLight 13, La Galite Voyage 12, Aivancity Hub 10, Faculties Video RAG 6, Gesture Player 6, Dubai Al Safa 2 Park 3, AI Study Buddy 3.',
    raceCaption: 'Page views per project in week one. A tumbleweed for the last two.',
    huntLabel: 'Animation: a magnifying glass sweeps over a map of the site and marks a 404 page, a duplicated URL and a page without a title.',
    huntCaption: 'What the data flagged: a 404, the same page under two URLs, and page views without a title.',
    noTitle: 'no page title',
    duplicate: 'duplicate URL',
    baLabel: 'Before and after: on the phone layout, an overlooked project card moves up and a LinkedIn button is added and highlighted.',
    baCaption: 'The mobile page, before and after: an ignored project moves up, and LinkedIn gets its own button.',
    baGroup: 'Before or after',
    before: 'Before',
    after: 'After',
    rtLabel: 'Illustration of the Google Analytics Realtime report: active users goes from 0 to 1 when the site is opened on a phone.',
    rtCaption: 'The Realtime report the first time it worked: one active user. Me, on my phone.',
    realtime: 'Realtime',
    activeUsers: 'Active users in the last 30 minutes',
    device: 'Device',
    page: 'Page',
    bottle: 'A portfolio with no analytics: a message in a bottle.',
    allow: 'Allow audience measurement?',
    refuse: 'Refuse',
    accept: 'Accept',
    loadsNow: 'Analytics loads only now',
    consentCap: 'Nothing is measured before you say yes.',
    onPhone: 'visitors were on a phone.',
    topVisitor: 'Top visitor',
    edge: '13 sessions, always on Edge…',
    itsMe: 'oh. It’s me.',
    visitors: 'visitors',
    counted: 'Hi. You’ve been counted (only if you said yes).',
  },
  fr: {
    flowLabel: 'Animation : un visiteur clique sur une page, un événement part du navigateur vers Google Analytics, et un tableau de bord se met à jour.',
    flowCaption: 'Un clic sur la page devient un événement, l’événement part vers Google Analytics, et les rapports se mettent à jour.',
    click: 'clic',
    event: 'événement',
    reports: 'rapports',
    sourcesLabel: 'Graphique : sources de trafic (Direct 62 %, LinkedIn 30 %, GitHub 5 %, Instagram 3 %) et visites par jour du 21 au 26 octobre : 9, 8, 9, 7, puis 2 et 2.',
    sourcesCaption: 'D’où venaient les 37 visites, et quand : un pic au lancement, puis le retour au réel.',
    direct: 'Direct',
    days: ['21 oct.', '22 oct.', '23 oct.', '24 oct.', '25 oct.', '26 oct.'],
    spike: 'pic du lancement → réalité',
    raceLabel: 'Course des pages vues par projet : WellPack Manager 17, VitaLight 13, La Galite Voyage 12, Aivancity Hub 10, Faculties Video RAG 6, Gesture Player 6, Dubai Al Safa 2 Park 3, AI Study Buddy 3.',
    raceCaption: 'Pages vues par projet la première semaine. Une boule de paille pour les deux derniers.',
    huntLabel: 'Animation : une loupe passe sur la carte du site et signale une page 404, une URL en double et une page sans titre.',
    huntCaption: 'Ce que les données ont signalé : une 404, la même page sous deux URL, et des pages vues sans titre.',
    noTitle: 'page sans titre',
    duplicate: 'URL en double',
    baLabel: 'Avant et après : sur la version mobile, un projet délaissé remonte et un bouton LinkedIn apparaît, mis en avant.',
    baCaption: 'La page mobile, avant et après : un projet ignoré remonte, et LinkedIn a enfin son propre bouton.',
    baGroup: 'Avant ou après',
    before: 'Avant',
    after: 'Après',
    rtLabel: 'Illustration du rapport Temps réel de Google Analytics : les utilisateurs actifs passent de 0 à 1 quand le site est ouvert sur un téléphone.',
    rtCaption: 'Le rapport Temps réel la première fois que ça a marché : un utilisateur actif. Moi, sur mon téléphone.',
    realtime: 'Temps réel',
    activeUsers: 'Utilisateurs actifs ces 30 dernières minutes',
    device: 'Appareil',
    page: 'Page',
    bottle: 'Un portfolio sans mesure d’audience : une bouteille à la mer.',
    allow: 'Autoriser la mesure d’audience ?',
    refuse: 'Refuser',
    accept: 'Accepter',
    loadsNow: 'Analytics ne se charge qu’à ce moment-là',
    consentCap: 'Rien n’est mesuré avant votre accord.',
    onPhone: 'visiteurs étaient sur téléphone.',
    topVisitor: 'Visiteur n°1',
    edge: '13 sessions, toujours sur Edge…',
    itsMe: 'ah. C’est moi.',
    visitors: 'visiteurs',
    counted: 'Salut. Vous venez d’être compté (seulement si vous avez dit oui).',
  },
}

const useT = () => TEXT[useI18n().lang]

/**
 * Animated explainers for blog posts, placed with `[ANIM: <id>]` in the Markdown.
 * They start when scrolled into view (a `data-play` attribute set from an effect, so the pre-rendered HTML and the
 * first client render match) and show their final state when the reader prefers reduced motion.
 */

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.play = '1'
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.play = '1'
          io.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

function Frame({ caption, children, label }: { caption: string; children: ReactNode; label: string }) {
  const ref = useInView<HTMLElement>()
  return (
    <figure ref={ref} className={s.frame} aria-label={label}>
      {children}
      <figcaption className={s.caption}>{caption}</figcaption>
    </figure>
  )
}

// ── 1. How an event travels ──────────────────────────────────────────────────

function DataFlow() {
  const t = useT()
  return (
    <Frame
      label={t.flowLabel}
      caption={t.flowCaption}
    >
      <svg viewBox="0 0 640 220" className={`${s.svg} ${s.flow}`} role="img" aria-hidden="true">
        {/* phone */}
        <rect x="40" y="40" width="88" height="150" rx="14" className={s.device} />
        <rect x="52" y="60" width="64" height="10" rx="4" className={s.line} />
        <rect x="52" y="78" width="46" height="8" rx="4" className={s.lineSoft} />
        <rect x="52" y="98" width="64" height="40" rx="6" className={s.card} />
        <rect x="52" y="146" width="64" height="26" rx="6" className={s.card} />
        <circle cx="84" cy="118" r="7" className={s.tap} />
        <circle cx="84" cy="118" r="7" className={s.tapRing} />
        <text x="84" y="210" className={s.label}>{t.click}</text>

        {/* path + event packet */}
        <path d="M 140 118 C 230 30, 330 30, 400 96" className={s.track} />
        <g className={s.packet}>
          <rect x={t.event.length > 6 ? -42 : -26} y="-12" width={t.event.length > 6 ? 84 : 52} height="24" rx="12" className={s.packetBox} />
          <text x="0" y="4" className={s.packetText}>{t.event}</text>
        </g>

        {/* Google Analytics cloud */}
        <g className={s.cloud}>
          <path d="M 392 120 a 22 22 0 0 1 8 -42 a 30 30 0 0 1 56 -8 a 24 24 0 0 1 36 22 a 18 18 0 0 1 -6 28 z" />
        </g>
        <text x="444" y="146" className={s.label}>Google Analytics</text>

        {/* mini dashboard */}
        <rect x="520" y="54" width="100" height="120" rx="12" className={s.device} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={536 + i * 20} y="80" width="12" height="80" rx="3" className={s.dashBar} style={{ '--i': i } as CSSProperties} />
        ))}
        <text x="570" y="210" className={s.label}>{t.reports}</text>
      </svg>
    </Frame>
  )
}

// ── 2. Where visits came from, and when ─────────────────────────────────────

const SOURCES = [
  { name: 'direct', pct: 62 },
  { name: 'LinkedIn', pct: 30 },
  { name: 'GitHub', pct: 5 },
  { name: 'Instagram', pct: 3 },
]
const DAYS = [9, 8, 9, 7, 2, 2].map((v, i) => ({ i, v }))

function TrafficSources() {
  const t = useT()
  const x = (i: number) => 40 + i * 104
  const y = (v: number) => 150 - v * 12
  const spike = DAYS.slice(0, 4).map((d, i) => `${i ? 'L' : 'M'} ${x(i)} ${y(d.v)}`).join(' ')
  const drop = `M ${x(3)} ${y(DAYS[3].v)} L ${x(4)} ${y(DAYS[4].v)} L ${x(5)} ${y(DAYS[5].v)}`
  return (
    <Frame
      label={t.sourcesLabel}
      caption={t.sourcesCaption}
    >
      <div className={s.bars}>
        {SOURCES.map((src, i) => (
          <div key={src.name} className={s.barRow}>
            <span className={s.barName}>{src.name === 'direct' ? t.direct : src.name}</span>
            <span className={s.barTrack}>
              <span className={s.barFill} style={{ '--w': `${src.pct}%`, '--i': i } as CSSProperties} />
            </span>
            <span className={s.barValue} style={{ '--i': i } as CSSProperties}>{src.pct}%</span>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 600 190" className={`${s.svg} ${s.days}`} role="img" aria-hidden="true">
        <line x1="20" y1="150" x2="580" y2="150" className={s.axis} />
        <path d={spike} className={s.lineSpike} pathLength={1} />
        <path d={drop} className={s.lineDrop} pathLength={1} />
        {DAYS.map((d, i) => (
          <g key={d.i} className={s.point} style={{ '--i': i } as CSSProperties}>
            <circle cx={x(i)} cy={y(d.v)} r="5" className={i >= 4 ? s.dotDrop : s.dot} />
            <text x={x(i)} y={y(d.v) - 12} className={s.value}>{d.v}</text>
            <text x={x(i)} y="172" className={s.label}>{t.days[i]}</text>
          </g>
        ))}
        <text x={x(4) + 52} y={y(2) - 34} className={s.note}>{t.spike}</text>
      </svg>
    </Frame>
  )
}

// ── 3. The project race ──────────────────────────────────────────────────────

const RACE = [
  { name: 'WellPack Manager', v: 17 },
  { name: 'VitaLight', v: 13 },
  { name: 'La Galite Voyage', v: 12 },
  { name: 'Aivancity Hub', v: 10 },
  { name: 'Faculties Video RAG', v: 6 },
  { name: 'Gesture Player', v: 6 },
  { name: 'Dubai Al Safa 2 Park', v: 3 },
  { name: 'AI Study Buddy', v: 3 },
]

function ProjectRace() {
  const t = useT()
  return (
    <Frame
      label={t.raceLabel}
      caption={t.raceCaption}
    >
      <div className={`${s.bars} ${s.race}`}>
        {RACE.map((p, i) => (
          <div key={p.name} className={s.barRow}>
            <span className={s.barName}>{p.name}</span>
            <span className={s.barTrack}>
              <span
                className={`${s.barFill} ${s.raceFill}`}
                style={{ '--w': `${(p.v / 17) * 100}%`, '--d': `${0.9 + (1 - p.v / 17) * 1.6}s` } as CSSProperties}
              />
            </span>
            <span className={`${s.barValue} ${s.raceValue}`} style={{ '--d': `${0.9 + (1 - p.v / 17) * 1.6}s` } as CSSProperties}>{p.v}</span>
            {i === RACE.length - 2 && (
              <svg viewBox="0 0 40 40" className={s.tumbleweed} aria-hidden="true">
                <circle cx="20" cy="20" r="16" />
                <path d="M6 18c8-6 20-6 28 2M8 26c10 2 18-2 24-10M14 8c-2 10 2 20 10 26M24 6c2 10-2 22-8 28M10 12c8 4 14 12 16 22" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </Frame>
  )
}

// ── 4. Bugs found by the data ────────────────────────────────────────────────

const NODES = [
  { id: 'home', x: 320, y: 36, label: '/' },
  { id: 'about', x: 110, y: 110, label: '/about' },
  { id: 'projects', x: 320, y: 110, label: '/projects' },
  { id: 'blog', x: 530, y: 110, label: '/blog' },
  { id: 'vita', x: 230, y: 186, label: '/vitalight' },
  { id: 'vita2', x: 410, y: 186, label: '/vitalight/' },
]
const EDGES = [
  ['home', 'about'], ['home', 'projects'], ['home', 'blog'], ['projects', 'vita'], ['projects', 'vita2'],
]
const BUGS = [
  { x: 110, y: 110, key: 'noTitle', at: 0 },
  { x: 410, y: 186, key: 'duplicate', at: 1 },
  { x: 610, y: 186, key: '404', at: 2 },
] as const

function BugHunt() {
  const t = useT()
  const pos = Object.fromEntries(NODES.map((n) => [n.id, n]))
  return (
    <Frame
      label={t.huntLabel}
      caption={t.huntCaption}
    >
      <svg viewBox="0 0 680 230" className={`${s.svg} ${s.hunt}`} role="img" aria-hidden="true">
        {EDGES.map(([a, b]) => (
          <line key={a + b} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y} className={s.edge} />
        ))}
        <line x1={pos.vita2.x} y1={pos.vita2.y} x2="610" y2="186" className={`${s.edge} ${s.edgeBroken}`} />
        {NODES.map((n) => (
          <g key={n.id}>
            <rect x={n.x - 52} y={n.y - 15} width="104" height="30" rx="8" className={s.node} />
            <text x={n.x} y={n.y + 5} className={s.nodeText}>{n.label}</text>
          </g>
        ))}
        <rect x="570" y="171" width="80" height="30" rx="8" className={`${s.node} ${s.nodeMissing}`} />
        <text x="610" y="191" className={s.nodeText}>???</text>
        {BUGS.map((b) => (
          <g key={b.key} className={s.bug} style={{ '--i': b.at } as CSSProperties}>
            <circle cx={b.x + 44} cy={b.y - 16} r="7" />
            <text x={b.x + 44} y={b.y - 30} className={s.bugText}>{b.key === '404' ? '404' : t[b.key]}</text>
          </g>
        ))}
        <g className={s.glass}>
          <circle cx="0" cy="0" r="22" />
          <line x1="16" y1="16" x2="34" y2="34" />
        </g>
      </svg>
    </Frame>
  )
}

// ── 5. Before / after ────────────────────────────────────────────────────────

function BeforeAfter() {
  const t = useT()
  const [after, setAfter] = useState(false)
  const [touched, setTouched] = useState(false)
  useEffect(() => {
    if (touched || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setAfter((a) => !a), 2800)
    return () => window.clearInterval(id)
  }, [touched])
  const pick = (v: boolean) => {
    setTouched(true)
    setAfter(v)
  }
  const cards = ['WellPack Manager', 'VitaLight', 'Dubai Al Safa 2 Park']
  const order = after ? [2, 0, 1] : [0, 1, 2]
  return (
    <Frame
      label={t.baLabel}
      caption={t.baCaption}
    >
      <div className={s.ba}>
        <div className={s.toggle} role="group" aria-label={t.baGroup}>
          <button type="button" aria-pressed={!after} onClick={() => pick(false)}>{t.before}</button>
          <button type="button" aria-pressed={after} onClick={() => pick(true)}>{t.after}</button>
        </div>
        <div className={s.phone} data-after={after || undefined}>
          <div className={s.phoneTop} />
          <div className={s.phoneHero} />
          <div className={s.phoneCta}>
            <span>Email</span>
            <span className={s.linkedin}>LinkedIn</span>
          </div>
          <div className={s.phoneCards}>
            {cards.map((c, i) => (
              <div key={c} className={s.phoneCard} data-moved={(after && i === 2) || undefined} style={{ '--slot': order.indexOf(i) } as CSSProperties}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  )
}

// ── 6. Realtime: the first active user ──────────────────────────────────────

function Realtime() {
  const t = useT()
  return (
    <Frame
      label={t.rtLabel}
      caption={t.rtCaption}
    >
      <div className={s.rt}>
        <svg viewBox="0 0 120 200" className={s.rtPhone} aria-hidden="true">
          <rect x="14" y="6" width="92" height="188" rx="16" className={s.device} />
          <rect x="28" y="30" width="64" height="10" rx="4" className={s.line} />
          <rect x="28" y="50" width="44" height="8" rx="4" className={s.lineSoft} />
          <rect x="28" y="70" width="64" height="44" rx="8" className={s.card} />
          <rect x="28" y="122" width="64" height="44" rx="8" className={s.card} />
          <circle cx="60" cy="92" r="6" className={s.rtPing} />
        </svg>
        <div className={s.rtCard}>
          <p className={s.rtHead}>
            <span className={s.rtLive} /> {t.realtime}
          </p>
          <p className={s.rtLabel}>{t.activeUsers}</p>
          <p className={s.rtNumber}>
            <span className={s.rtZero}>0</span>
            <span className={s.rtOne}>1</span>
          </p>
          <div className={s.rtBars}>
            {Array.from({ length: 15 }, (_, i) => (
              <span key={i} className={i === 14 ? s.rtBarOn : undefined} />
            ))}
          </div>
          <p className={s.rtRow}>
            <span>{t.device}</span>
            <b>mobile · 100%</b>
          </p>
          <p className={s.rtRow}>
            <span>{t.page}</span>
            <b>/portfolio/</b>
          </p>
        </div>
      </div>
    </Frame>
  )
}

// ── Side visuals (small, decorative, next to the text): [SIDE: id] ─────────

function useSide() {
  return useInView<HTMLDivElement>()
}

function Bottle() {
  const t = useT()
  const ref = useSide()
  return (
    <div ref={ref} className={s.side} aria-hidden="true">
      <svg viewBox="0 0 200 150" className={s.svg}>
        <g className={s.bottle}>
          <rect x="66" y="52" width="76" height="34" rx="16" className={s.glassBody} />
          <rect x="138" y="62" width="22" height="14" rx="4" className={s.glassBody} />
          <rect x="158" y="63" width="8" height="12" rx="2" className={s.cork} />
          <rect x="82" y="62" width="40" height="14" rx="3" className={s.scroll} />
          <line x1="88" y1="67" x2="114" y2="67" className={s.scrollInk} />
          <line x1="88" y1="71" x2="108" y2="71" className={s.scrollInk} />
        </g>
        <path className={`${s.wave} ${s.waveBack}`} d="M -40 92 q 20 -10 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 v 60 h -280 z" />
        <path className={s.wave} d="M -40 100 q 20 -10 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 t 40 0 v 60 h -280 z" />
      </svg>
      <p className={s.sideCap}>{t.bottle}</p>
    </div>
  )
}

function Consent() {
  const t = useT()
  const ref = useSide()
  return (
    <div ref={ref} className={s.side} aria-hidden="true">
      <div className={s.consent}>
        <p className={s.consentText}>{t.allow}</p>
        <div className={s.consentBtns}>
          <span>{t.refuse}</span>
          <span className={s.consentAccept}>{t.accept}</span>
        </div>
        <svg viewBox="0 0 24 24" className={s.cursor}>
          <path d="M5 3l14 8-6 2-3 6z" />
        </svg>
      </div>
      <p className={s.consentAfter}>
        <span className={s.consentDot} /> {t.loadsNow}
      </p>
      <p className={s.sideCap}>{t.consentCap}</p>
    </div>
  )
}

function Phones() {
  const t = useT()
  const ref = useSide()
  return (
    <div ref={ref} className={s.side} aria-hidden="true">
      <div className={s.people}>
        {Array.from({ length: 19 }, (_, i) => (
          <svg key={i} viewBox="0 0 20 30" className={i < 16 ? s.onPhone : s.onDesk} style={{ '--i': i } as CSSProperties}>
            {i < 16 ? <rect x="3" y="1" width="14" height="28" rx="3" /> : <path d="M1 8h18v12H1zM7 20h6v4H7z" />}
          </svg>
        ))}
      </div>
      <p className={s.sideBig}>16 / 19</p>
      <p className={s.sideCap}>{t.onPhone}</p>
    </div>
  )
}

function ItWasMe() {
  const t = useT()
  const ref = useSide()
  const rows = [
    { sessions: 13, me: true },
    { sessions: 3 },
    { sessions: 2 },
    { sessions: 1 },
  ]
  return (
    <div ref={ref} className={s.side} aria-hidden="true">
      <div className={s.top}>
        <p className={s.topHead}>{t.topVisitor}</p>
        {rows.map((r, i) => (
          <div key={i} className={`${s.topRow} ${r.me ? s.topMe : ''}`}>
            <span className={s.avatar}>
              <span className={s.anon}>?</span>
              {r.me && <span className={s.ab}>AB</span>}
            </span>
            <span className={s.topBar} style={{ '--w': `${(r.sessions / 13) * 100}%` } as CSSProperties} />
            <b>{r.sessions}</b>
          </div>
        ))}
      </div>
      <p className={s.sideCap}>
        {t.edge} <span className={s.oops}>{t.itsMe}</span>
      </p>
    </div>
  )
}

function Wave() {
  const t = useT()
  const ref = useSide()
  return (
    <div ref={ref} className={s.side} aria-hidden="true">
      <div className={s.counter}>
        <span className={s.hand}>👋</span>
        <p className={s.count}>
          <span className={s.countOld}>19</span>
          <span className={s.countNew}>20</span>
        </p>
        <p className={s.countLabel}>{t.visitors}</p>
      </div>
      <p className={s.sideCap}>{t.counted}</p>
    </div>
  )
}

const SIDES: Record<string, () => ReactNode> = {
  bottle: Bottle,
  consent: Consent,
  phones: Phones,
  'it-was-me': ItWasMe,
  wave: Wave,
}

export function SideAnim({ id }: { id: string }) {
  const Side = SIDES[id]
  return Side ? <Side /> : <p className={s.missing}>Unknown side visual “{id}”</p>
}

const ANIMS: Record<string, () => ReactNode> = {
  realtime: Realtime,
  'data-flow': DataFlow,
  'traffic-sources': TrafficSources,
  'project-race': ProjectRace,
  'bug-hunt': BugHunt,
  'before-after': BeforeAfter,
}

export function BlogAnim({ id }: { id: string }) {
  const Anim = ANIMS[id]
  if (!Anim) return <p className={s.missing}>Unknown animation “{id}”</p>
  return <Anim />
}
