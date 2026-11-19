import type { Habilidade, NivelHabilidade } from '../types/portfolio'

type ListaHabilidadesProps = {
  habilidades: Habilidade[]
}

const ESTILO_NIVEL: Record<NivelHabilidade, string> = {
  Básico: 'bg-sky-950 text-sky-300 border-sky-700',
  Intermediário: 'bg-emerald-950 text-emerald-300 border-emerald-700',
  Avançado: 'bg-amber-950 text-amber-300 border-amber-700',
}

export function ListaHabilidades({ habilidades }: ListaHabilidadesProps) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {habilidades.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:-translate-y-0.5 hover:border-slate-700"
        >
          <div>
            <h3 className="font-semibold text-slate-100">{item.nome}</h3>
            <p className="text-xs text-slate-400">{item.categoria}</p>
          </div>
          <span
            className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${ESTILO_NIVEL[item.nivel]}`}
          >
            {item.nivel}
          </span>
        </li>
      ))}
    </ul>
  )
}