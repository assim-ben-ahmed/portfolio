import { useEffect, useState } from 'react'

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1600

/** Cycles through `words`, typing and deleting. Returns the visible text. Disabled → first word, static. */
export function useTypewriter(words: string[], enabled: boolean) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  // Restart when the word list changes (language switch).
  useEffect(() => {
    setIndex(0)
    setText('')
    setDeleting(false)
  }, [words])

  useEffect(() => {
    if (!enabled) return
    const word = words[index % words.length]
    let delay = deleting ? DELETE_MS : TYPE_MS
    if (!deleting && text === word) delay = HOLD_MS

    const id = window.setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => window.clearTimeout(id)
  }, [text, deleting, index, words, enabled])

  return enabled ? text : words[0]
}
