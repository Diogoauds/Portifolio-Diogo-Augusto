import type { LinkSocial } from '../types/portfolio'

type CabecalhoProps = {
  nome: string
  curso: string
  avatarUrl?: string
  links: LinkSocial[]
}

export function Cabecalho({ nome, curso, avatarUrl, links }: CabecalhoProps) {
  return (
    <header className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-md sm:flex-row">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
        <img
          src={avatarUrl ?? 'https://placehold.co/128'}
          alt={`Foto de perfil de ${nome}`}
          className="size-20 rounded-full border-2 border-emerald-500 object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">{nome}</h1>
          <p className="mt-1 text-sm text-slate-300">{curso}</p>
        </div>
      </div>

      <nav aria-label="Links principais" className="flex flex-wrap justify-center gap-2">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 bg-slate-800 px-3.5 py-2 text-sm font-medium text-slate-100 transition hover:border-emerald-500 hover:bg-slate-700"
          >
            {link.rotulo}
          </a>
        ))}
      </nav>
    </header>
  )
}