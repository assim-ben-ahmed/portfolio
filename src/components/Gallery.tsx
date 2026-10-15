import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useI18n, useL } from '../i18n'
import type { GalleryItem } from '../data/leadership'
import { Pic } from './Pic'
import { Reveal } from './Reveal'
import s from './Gallery.module.css'

/**
 * Photo grid; each photo opens a lightbox (native <dialog>: focus trap, Esc to close).
 * Consecutive photos sharing a caption (e.g. the 3 FIFA shots) show it once, under the first one.
 */
/** `eagerCount`: how many leading photos load immediately (only when the gallery starts near the top). */
export function Gallery({ items, eagerCount = 0 }: { items: GalleryItem[]; eagerCount?: number }) {
  const { t } = useI18n()
  const l = useL()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <ul className={s.grid}>
        {items.map((it, i) => {
          const caption = l(it.caption)
          const showCaption = i === 0 || l(items[i - 1].caption) !== caption
          return (
            <Reveal as="li" key={i} index={i % 3} className={s.item}>
              <figure className={s.figure}>
                {it.video ? (
                  <LoopVideo item={it} />
                ) : (
                  <button type="button" className={s.thumb} onClick={() => setOpen(i)} aria-label={`${t.a11y.openPhoto}: ${l(it.alt)}`}>
                    <Pic
                      pic={it.pic}
                      alt={l(it.alt)}
                      eager={i < eagerCount}
                      sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    />
                  </button>
                )}
                {showCaption && <figcaption>{caption}</figcaption>}
              </figure>
            </Reveal>
          )
        })}
      </ul>
      {open !== null && <Lightbox items={items} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}
    </>
  )
}

function LoopVideo({ item }: { item: GalleryItem }) {
  const l = useL()
  const reduce = useReducedMotion()
  return (
    <video
      className={s.video}
      src={item.video}
      poster={item.pic.img.src}
      width={item.pic.img.w}
      height={item.pic.img.h}
      muted
      loop
      playsInline
      autoPlay={!reduce}
      controls={!!reduce}
      preload="metadata"
      aria-label={l(item.alt)}
    />
  )
}

function Lightbox({
  items,
  index,
  onIndex,
  onClose,
}: {
  items: GalleryItem[]
  index: number
  onIndex: (i: number) => void
  onClose: () => void
}) {
  const { t } = useI18n()
  const l = useL()
  const ref = useRef<HTMLDialogElement>(null)
  const photos = items.map((it, i) => ({ it, i })).filter(({ it }) => !it.video)
  const pos = photos.findIndex((p) => p.i === index)
  const go = useCallback(
    (delta: number) => onIndex(photos[(pos + delta + photos.length) % photos.length].i),
    [onIndex, photos, pos],
  )

  useEffect(() => {
    const d = ref.current
    if (!d) return
    d.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const it = items[index]
  return (
    <dialog
      ref={ref}
      className={s.dialog}
      aria-label={l(it.caption)}
      onClose={onClose}
      // Click on the backdrop (the dialog element itself) closes it.
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
    >
      <figure className={s.lbFigure}>
        <Pic pic={it.pic} alt={l(it.alt)} eager sizes="90vw" className={s.lbImg} />
        <figcaption>
          <span>{l(it.caption)}</span>
          <span className={s.counter}>
            {pos + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>
      <button type="button" className={`${s.lbBtn} ${s.close}`} onClick={() => ref.current?.close()} aria-label={t.a11y.close}>
        <X size={22} aria-hidden="true" />
      </button>
      {photos.length > 1 && (
        <>
          <button type="button" className={`${s.lbBtn} ${s.prev}`} onClick={() => go(-1)} aria-label={t.a11y.prevPhoto}>
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
          <button type="button" className={`${s.lbBtn} ${s.next}`} onClick={() => go(1)} aria-label={t.a11y.nextPhoto}>
            <ChevronRight size={26} aria-hidden="true" />
          </button>
        </>
      )}
    </dialog>
  )
}
