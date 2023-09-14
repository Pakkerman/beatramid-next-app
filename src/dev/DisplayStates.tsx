import React from 'react'
import { useControlContext } from '../contexts/ControlContext'

export default function DisplayStates() {
  const { beatActive, BPM, volume } = useControlContext()

  return (
    <div className="fixed bottom-0">
      <pre>State: {beatActive ? 'Active' : 'Stopped'}</pre>
      <pre>BPM: {BPM}</pre>
      <pre>volume: {volume}</pre>
    </div>
  )
}
