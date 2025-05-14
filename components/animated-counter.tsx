"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  to: number
  duration?: number
}

export default function AnimatedCounter({ to, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(countRef, { once: true, margin: "-100px" })
  const startTimeRef = useRef<number | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const progressPercent = Math.min(progress / duration, 1)

      // Using easeOutExpo for a nice easing effect
      const easedProgress = 1 - Math.pow(1 - progressPercent, 3)

      setCount(Math.floor(easedProgress * to))

      if (progressPercent < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [isInView, to, duration])

  return <span ref={countRef}>{count}</span>
}
