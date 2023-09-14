'use client'

import React from 'react'
import { useControlContext } from '@/contexts/ControlContext'

export default function StartButton() {
  const { setBeatActive } = useControlContext()
  return <button onClick={() => setBeatActive((prev) => !prev)}>start</button>
}
