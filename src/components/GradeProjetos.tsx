import type { Projeto } from '../types/portfolio'
import { CardProjeto } from './CardProjeto'

type GradeProjetosProps = {
  projetos: Projeto[]
}

export function GradeProjetos({ projetos }: GradeProjetosProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projetos.map((projeto) => (
        <CardProjeto key={projeto.id} projeto={projeto} />
      ))}
    </div>
  )
}