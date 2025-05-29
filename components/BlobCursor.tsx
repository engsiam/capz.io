'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function BlobCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 1000, damping: 100, mass: 0.1 })
  const smoothY = useSpring(mouseY, { stiffness: 1000, damping: 100, mass: 0.1 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 25) // 25 = half of width/height for centering
      mouseY.set(e.clientY - 25)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-cyan-400 mix-blend-difference pointer-events-none z-[9999]"
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    />
  )
}
