type RodapeProps = {
  ano: number
  autor: string
}

export function Rodape({ ano, autor }: RodapeProps) {
  return (
    <footer className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-4 text-center text-xs text-slate-400">
      <p>
        © {ano} {autor} · Desenvolvido com React, TypeScript e Tailwind CSS v4 (TIAW / IFTM).
      </p>
    </footer>
  )
}