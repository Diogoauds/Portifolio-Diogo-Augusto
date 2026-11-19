import type { Projeto } from '../types/portfolio'

type CardProjetoProps = {
  projeto: Projeto
}

export function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-md transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl">
      <div>
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-white">{projeto.titulo}</h3>
          {projeto.emAndamento && (
            <span className="shrink-0 rounded-full border border-amber-600/50 bg-amber-950/80 px-2.5 py-0.5 text-xs font-semibold text-amber-300">
              Em andamento
            </span>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed text-slate-300">{projeto.descricao}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {projeto.tecnologias.map((tec) => (
            <span
              key={tec}
              className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200"
            >
              {tec}
            </span>
          ))}
        </div>
      </div>

      {projeto.repositorioUrl && (
        <div className="mt-5 border-t border-slate-800/80 pt-3">
          <a
            href={projeto.repositorioUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-emerald-400 transition hover:text-emerald-300 hover:underline"
          >
            Ver repositório →
          </a>
        </div>
      )}
    </article>
  )
}