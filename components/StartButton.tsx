'use client'

import React, { useEffect } from 'react'
import { useControlContext } from '@/contexts/ControlContext'
import { ShortcutIconWrapper } from './ShortcutIconWrapper'

export default function StartButton() {
  const { beatActive, setBeatActive } = useControlContext()

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  })

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key !== ' ') return
    setBeatActive((prev) => !prev)
  }
  return (
    <button
      className="w-28 py-3 border border-slate-400 rounded-xl flex justify-center items-center gap-3 outline-none "
      onClick={() => setBeatActive((prev) => !prev)}>
      {beatActive ? 'Pause' : 'Start'}
      <ShortcutIconWrapper type="space" />
    </button>
  )
}
