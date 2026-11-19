type ContatoProps = {
  email: string
  localizacao?: string
}

export function Contato({ email, localizacao = 'Uberaba, MG' }: ContatoProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <p className="text-sm text-slate-300">
          Entre em contato por e-mail para projetos, estágios ou troca de ideias:
        </p>
        <p className="mt-1 text-xs text-slate-400">Localização: {localizacao}</p>
      </div>

      <a
        href={`mailto:${email}`}
        className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500 active:scale-95"
      >
        {email}
      </a>
    </div>
  )
}