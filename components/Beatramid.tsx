'use client'

import React, { useEffect } from 'react'

import StartButton from '@/components/StartButton'
import { useControlContext } from '@/contexts/ControlContext'
import { DotRow } from './Dot'
import BPMControl from './BPMControl'
import DisplayStates from '@/components/dev/DisplayStates'
import VolumeControl from './VolumeControl'

const ROWS = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Beatramid() {
  const { beatActive } = useControlContext()

  useEffect(() => {
    const ctx = new AudioContext()
    const output = ctx.createMediaStreamDestination()
    const oscillator = ctx.createOscillator()
    oscillator.connect(output)
    oscillator.start()

    console.log(ctx)
  }, [])

  return (
    <section className="flex flex-col justify-center items-center h-[400px]">
      <h1 className="text-xl text-white p-4">Beatramid</h1>
      <ul className="flex flex-col gap-3 justify-center items-center ">
        {ROWS.map((item) => {
          return (
            <li key={item} className="flex gap-2 flex-nowrap">
              <DotRow count={item} />
            </li>
          )
        })}
      </ul>
      <div className="py-4" />
      <div className=" flex-col flex justify-center items-center w-[200px]">
        <BPMControl />
        <VolumeControl />
      </div>
      <StartButton />
      <DisplayStates />
    </section>
  )
}
