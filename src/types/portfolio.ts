export type NivelHabilidade = 'Básico' | 'Intermediário' | 'Avançado'

export type Habilidade = {
  id: number
  nome: string
  categoria: string
  nivel: NivelHabilidade
}

export type Projeto = {
  id: number
  titulo: string
  descricao: string
  tecnologias: string[]
  emAndamento?: boolean
  repositorioUrl?: string
}

export type LinkSocial = {
  rotulo: string
  url: string
}