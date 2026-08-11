import { useEffect, useState } from 'react'

/**
 * TypeWriter — cycles through a list of words with a type/delete animation
 * and a blinking caret. Uses content passed in from data.js.
 */
export default function TypeWriter({ words, className = '' }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1)
          setText(next)
          if (next === current) setDeleting(true)
        } else {
          const next = current.slice(0, text.length - 1)
          setText(next)
          if (next === '') {
            setDeleting(false)
            setIndex((i) => i + 1)
          }
        }
      },
      deleting ? 45 : 110,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span aria-hidden="true" className="animate-bounce-slow inline-block text-accent">
        |
      </span>
    </span>
  )
}
