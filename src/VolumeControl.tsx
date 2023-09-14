import React from 'react'
import { useControlContext } from './contexts/ControlContext'

export default function VolumeControl() {
  const { volume, setVolume } = useControlContext()
  return (
    <div className="flex justify-between w-full">
      <label>Volume</label>
      <input
        type="range"
        value={volume}
        min={0}
        max={1}
        step={0.05}
        onChange={(event) => setVolume(+event.target.value)}
      />
    </div>
  )
}
