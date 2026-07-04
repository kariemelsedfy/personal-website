import type { ReactNode } from 'react'

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-raised px-2 py-1 font-mono text-xs text-body">
      {children}
    </span>
  )
}
