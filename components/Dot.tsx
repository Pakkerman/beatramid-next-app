'use client'

import { useControlContext } from '@/contexts/ControlContext'
import React, { useEffect, useState } from 'react'

let testing = false

export default function Dot({ tick }: { tick: boolean }) {
  const { BPM } = useControlContext()
  const [active, setActive] = useState<boolean>(false)
  let lastTick = performance.now() - (60 * 1000) / BPM

  useEffect(() => {
    if (!tick) return

    console.log(performance.now() - lastTick - (60 * 1000) / BPM)
    setActive(true)
    const id = setTimeout(() => setActive(false), 50)

    // return () => clearTimeout(id)
  }, [tick])

  return (
    <div
      className={`w-4 h-4 rounded-full bg-slate-400 border ${
        active ? 'bg-opacity-100' : 'bg-opacity-0'
      }`}
    />
  )
}

export function DotRow({ count }: { count: number }) {
  const { tick } = useControlContext()
  const array = new Array(count).fill(null)
  return (
    <ul className="flex flex-nowrap gap-3">
      {array.map((_, idx) => (
        <li key={idx}>
          <Dot tick={tick} />
        </li>
      ))}
    </ul>
  )
}
