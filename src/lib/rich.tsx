import { Fragment, type ReactNode } from 'react'

/** Renders the two inline marks used in content: **bold** and *italic*. Everything else is plain text. */
export function rich(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    return <Fragment key={i}>{part}</Fragment>
  })
}

/**
 * One block of project detail text:
 * `### Heading` → <h2>, lines all starting with `- ` → <ul>, anything else → <p>. Inline marks via `rich`.
 */
export function richBlock(block: string, key: number, headingClass?: string): ReactNode {
  if (block.startsWith('### ')) {
    // Rendered as <h2>: these are top-level sections under the page's <h1>.
    return (
      <h2 key={key} className={headingClass}>
        {rich(block.slice(4))}
      </h2>
    )
  }
  const lines = block.split('\n')
  if (lines.every((line) => line.startsWith('- '))) {
    return (
      <ul key={key}>
        {lines.map((line, i) => (
          <li key={i}>{rich(line.slice(2))}</li>
        ))}
      </ul>
    )
  }
  return <p key={key}>{rich(block)}</p>
}
