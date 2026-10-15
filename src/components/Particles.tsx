import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Light canvas background: drifting dots with faint links between close neighbours.
 * Reduced motion → one static frame. Pauses while the tab is hidden.
 */
export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const styles = getComputedStyle(document.documentElement)
    const dotColor = styles.getPropertyValue('--primary-text').trim() || '#b79cff'
    const LINK_DIST = 120

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number }
    let points: P[] = []
    let w = 0
    let h = 0
    let raf = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, (w * h) / 16000))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
        a: Math.random() * 0.5 + 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < points.length; i++) {
        const p = points[i]
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j]
          const d = Math.hypot(p.x - q.x, p.y - q.y)
          if (d < LINK_DIST) {
            ctx.globalAlpha = (1 - d / LINK_DIST) * 0.14
            ctx.strokeStyle = dotColor
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
        ctx.globalAlpha = p.a
        ctx.fillStyle = dotColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const step = () => {
      for (const p of points) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10
      }
      draw()
      raf = requestAnimationFrame(step)
    }

    const start = () => {
      cancelAnimationFrame(raf)
      if (reduce) draw()
      else raf = requestAnimationFrame(step)
    }
    const onVisibility = () => (document.hidden ? cancelAnimationFrame(raf) : start())
    const onResize = () => {
      resize()
      start()
    }

    // Defer the first frame until after load + idle so the animation never competes with first paint.
    let deferId = 0
    const begin = () => {
      resize()
      start()
    }
    const scheduleBegin = () => {
      deferId = 'requestIdleCallback' in window ? window.requestIdleCallback(begin, { timeout: 2000 }) : (globalThis.setTimeout(begin, 600) as unknown as number)
    }
    if (document.readyState === 'complete') scheduleBegin()
    else window.addEventListener('load', scheduleBegin, { once: true })
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      cancelAnimationFrame(raf)
      if ('cancelIdleCallback' in window) window.cancelIdleCallback(deferId)
      globalThis.clearTimeout(deferId)
      window.removeEventListener('load', scheduleBegin)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reduce])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
