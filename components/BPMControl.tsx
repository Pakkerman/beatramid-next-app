import React from 'react'
import { useControlContext } from '../contexts/ControlContext'

export default function BPMControl() {
  const { BPM, setBPM } = useControlContext()

  return (
    <div className="flex justify-between w-full">
      <label>BPM</label>
      <input
        className=""
        type="range"
        value={BPM}
        min={30}
        max={200}
        onChange={(event) => setBPM(+event.target.value)}
      />
    </div>
  )
}
