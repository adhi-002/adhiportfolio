"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex].text

    const timeout = setTimeout(() => {
      // If deleting, remove a character
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50) // Faster when deleting
      } else {
        // If typing, add a character
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(150) // Normal typing speed
      }

      // If completed typing the word
      if (!isDeleting && currentText === word) {
        // Pause at the end of the word
        setTypingSpeed(2000) // Pause before deleting
        setIsDeleting(true)
      }
      // If finished deleting
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setTypingSpeed(500) // Pause before next word
        setCurrentWordIndex((currentWordIndex + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, typingSpeed, words])

  return (
    <div className={cn("flex items-center space-x-1 font-bold", className)}>
      {words.map((word, idx) => {
        const isCurrentWord = idx === currentWordIndex
        return (
          <div key={idx} className="relative inline-flex">
            {isCurrentWord ? (
              <span className={word.className}>{currentText}</span>
            ) : (
              <span className={cn("opacity-0", word.className)}>{word.text}</span>
            )}
            {isCurrentWord && (
              <span
                className={cn("absolute right-[-4px] top-0 h-full w-[4px] animate-blink bg-primary", cursorClassName)}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

