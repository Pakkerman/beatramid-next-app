import React from 'react'
import { BiSpaceBar, BiCommand } from 'react-icons/bi'
import type { IconType } from 'react-icons'

const shortcutMap: Record<string, IconType> = {
  space: BiSpaceBar,
  command: BiCommand,
}

type ShortcutIconWrapperProps = { type: keyof typeof shortcutMap }

export function ShortcutIconWrapper(props: ShortcutIconWrapperProps) {
  const { type } = props
  const Icon = shortcutMap[type]

  return (
    <div className="border border-slate-500 w-6 h-6 items-center justify-center flex rounded-lg opacity-70">
      <Icon size={20} />
    </div>
  )
}
