import { Cabecalho } from './components/Cabecalho'
import { Contato } from './components/Contato'
import { GradeProjetos } from './components/GradeProjetos'
import { ListaHabilidades } from './components/ListaHabilidades'
import { Painel } from './components/Painel'
import { Rodape } from './components/Rodape'
import { HABILIDADES, PERFIL_DADOS, PROJETOS } from './data/portifolioData'

export function App() {
  const anoAtual = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 lg:py-10">
        <Cabecalho
          nome={PERFIL_DADOS.nome}
          curso={PERFIL_DADOS.curso}
          avatarUrl={PERFIL_DADOS.avatarUrl}
          links={PERFIL_DADOS.links}
        />

        <Painel titulo="Sobre mim">
          <p className="leading-relaxed text-slate-300">{PERFIL_DADOS.sobre}</p>
        </Painel>

        <Painel titulo="Habilidades">
          <ListaHabilidades habilidades={HABILIDADES} />
        </Painel>

        <Painel titulo="Projetos">
          <GradeProjetos projetos={PROJETOS} />
        </Painel>

        <Painel titulo="Contato">
          <Contato email={PERFIL_DADOS.email} />
        </Painel>

        <Rodape ano={anoAtual} autor={PERFIL_DADOS.nome} />
      </div>
    </div>
  )
}

export default App