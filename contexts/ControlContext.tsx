'use client'

import React, {
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type ControlContext = {
  beatActive: boolean
  setBeatActive: React.Dispatch<React.SetStateAction<boolean>>
  volume: number
  setVolume: React.Dispatch<React.SetStateAction<number>>
  BPM: number
  setBPM: React.Dispatch<React.SetStateAction<number>>
}
type ControlContextProviderProps = { children: React.ReactNode }

const ControlContext = createContext<ControlContext | null>(null)

export function ControlContextProvider(props: ControlContextProviderProps) {
  const { children } = props
  const [beatActive, setBeatActive] = useState<boolean>(false)
  const [volume, setVolume] = useState<number>(0.6)
  const [BPM, setBPM] = useState<number>(85)

  return (
    <ControlContext.Provider
      value={{ beatActive, setBeatActive, volume, setVolume, BPM, setBPM }}>
      {children}
    </ControlContext.Provider>
  )
}

export function useControlContext() {
  const context = useContext(ControlContext)
  if (!context)
    throw new Error('Control context can only be use inside the provider')

  return context
}
