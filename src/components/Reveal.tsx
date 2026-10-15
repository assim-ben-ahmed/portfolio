import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'
import s from './Reveal.module.css'

/**
 * True while React is taking over a pre-rendered page (see scripts/prerender.mjs and main.tsx).
 * During that first render, anything already on screen is shown as-is instead of fading in again.
 */
const boot = { prerendered: typeof document !== 'undefined' && document.documentElement.hasAttribute('data-prerendered') }
export function endPrerenderBoot() {
  boot.prerendered = false
}

/**
 * True for the first render when React adopts a pre-rendered page: render the static version (what the HTML
 * shows) so hydration matches, then switch to the animated one before the next paint.
 */
export function useStaticFirstRender() {
  const [isStatic, setStatic] = useState(boot.prerendered)
  useLayoutEffect(() => {
    if (isStatic) setStatic(false)
  }, [isStatic])
  return isStatic
}

const inViewport = (el: Element) => el.getBoundingClientRect().top < window.innerHeight

/** Fade + slide up once when scrolled into view. `index` staggers siblings. Static under reduced motion. */
export function Reveal({
  children,
  index = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  index?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  // Layout effect: decide before the first paint, so pre-rendered content never blinks out.
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce || (boot.prerendered && inViewport(el))) {
      el.classList.add(s.shown)
      return
    }
    // Hydrating keeps the pre-rendered `shown` class: drop it below the fold so it still reveals on scroll.
    el.classList.remove(s.shown)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add(s.in)
        io.disconnect()
      },
      { rootMargin: '0px 0px -60px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [reduce])

  const Tag = as
  return (
    <Tag
      ref={ref as never}
      className={`${s.reveal}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${index * 70}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

/** Counts from 0 to `value` the first time it scrolls into view. Final value under reduced motion. */
export function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()
  // Start at the final value when taking over a pre-rendered page (that's what the static HTML shows).
  const [n, setN] = useState(reduce || boot.prerendered ? value : 0)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduce || (boot.prerendered && inViewport(el))) {
      setN(value)
      return
    }
    setN(0)
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      // Small rAF tween (ease-out expo).
      const duration = value > 50 ? 1400 : 1000
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        setN(Math.round(value * (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { rootMargin: '0px 0px -40px 0px' })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, reduce])

  return <span ref={ref}>{n}</span>
}
