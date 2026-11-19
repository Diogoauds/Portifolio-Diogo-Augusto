import type { ReactNode } from 'react'

type PainelProps = {
  titulo: string
  children: ReactNode
}

export function Painel({ titulo, children }: PainelProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-md">
      <h2 className="mb-3 text-xl font-bold text-emerald-400">{titulo}</h2>
      {children}
    </section>
  )
}