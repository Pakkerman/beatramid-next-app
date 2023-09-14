'use client'

import React, { useEffect, useState } from 'react'

let testing = false

export default function Dot() {
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    if (!testing) return
    const id = setInterval(() => {
      setActive((prev) => !prev)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className={`w-4 h-4 rounded-full bg-slate-400 border transition-all ${
        active ? 'bg-opacity-100' : 'bg-opacity-0'
      }`}
    />
  )
}

export function DotRow({ count }: { count: number }) {
  const array = new Array(count).fill(null)
  return (
    <ul className="flex flex-nowrap  gap-3">
      {array.map((_, idx) => (
        <li key={idx}>
          <Dot />
        </li>
      ))}
    </ul>
  )
}
