import type { Habilidade, LinkSocial, Projeto } from '../types/portfolio'

export const PERFIL_DADOS = {
  nome: 'Diogo Augusto Da Silva',
  curso: 'Análise e Desenvolvimento de Sistemas (ADS) · IFTM Uberaba',
  avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D35AQGMLREBNrTelA/profile-framedphoto-shrink_200_200/B4DZ5K_tUUJoAY-/0/1779374675496?e=1795734000&v=beta&t=Hg4Ce6ouMufUzU7gXa3_oMjtWNuURUXIoY7gI10TlBA',
  sobre:
    'Profissional de Tecnologia da Informação com experiência em suporte técnico, manutenção preventiva e corretiva, atendimento remoto a usuários e suporte a ambientes corporativos. Atuo na instalação, configuração e manutenção de softwares, sistemas operacionais, impressoras, computadores e notebooks, além da resolução de incidentes e suporte ao cliente, contribuindo para a melhoria da utilização dos recursos tecnológicos e para a continuidade dos serviços de TI. Possuo formação técnica em Informática pela UFTM, onde desenvolvi conhecimentos em infraestrutura de TI, redes de computadores, banco de dados, desenvolvimento web, sistemas operacionais, manutenção de computadores, suporte técnico e gerenciamento de projetos. Durante a formação, tive contato com tecnologias como HTML, CSS, PHP, SQL, servidores, Help Desk e conceitos de administração de redes e segurança da informação. Atualmente curso Análise e Desenvolvimento de Sistemas, ampliando meus conhecimentos em desenvolvimento de software, engenharia de sistemas e tecnologias voltadas para a transformação digital. Meu objetivo profissional é concluir a graduação, ingressar definitivamente na área de desenvolvimento de sistemas e construir uma carreira sólida em tecnologia, com foco futuro em especialização em Cybersegurança, unindo conhecimentos de infraestrutura, desenvolvimento e segurança da informação.',
  email: 'diogo.augusto@iftm.edu.br',
  links: [
    { rotulo: 'Linkedin', url: 'https://www.linkedin.com/in/diogo-augusto98318829a/' },
    { rotulo: 'Instagram (@diogo_agsilva)', url: 'https://instagram.com/diogo_agsilva' },
  ] satisfies LinkSocial[],
}

export const HABILIDADES: Habilidade[] = [
  { id: 1, nome: 'TypeScript & React', categoria: 'Frontend', nivel: 'Básico' },
  { id: 2, nome: 'Angular & Bootstrap', categoria: 'Frontend', nivel: 'Intermediário' },
  { id: 3, nome: 'HTML & CSS / Tailwind', categoria: 'Frontend', nivel: 'Intermediário' },
  { id: 4, nome: 'C e Java (Estruturas e Grafos)', categoria: 'Algoritmos', nivel: 'Intermediário' },
  { id: 5, nome: 'MySQL & Modelagem Relacional', categoria: 'Banco de Dados', nivel: 'Intermediário' },
  { id: 6, nome: 'Windows Server, AD & Linux', categoria: 'Infraestrutura', nivel: 'Avançado' },
]

export const PROJETOS: Projeto[] = [
  {
    id: 1,
    titulo: 'Calculadora de IMC em Angular',
    descricao:
      'Aplicação web desenvolvida com formulários reativos, sintaxe de controle @if e @for e estilização com Bootstrap.',
    tecnologias: ['Angular', 'TypeScript', 'Bootstrap'],
    emAndamento: false,
  },
  {
    id: 2,
    titulo: 'Uhub',
    descricao:
      'Fórum com o objetivo de unir as universidades brasileira, facilitando a comunição entre universitários que buscam desenvolver pesquisas e realizar projetos com a comunidadae',
    tecnologias: ['HTML', 'CSS', 'SQL', 'Bootstrap', 'Javascript'],
    emAndamento: true,
  },
  {
    id: 3,
    titulo: 'Catálogo de Veículos Web',
    descricao:
      'Página de listagem de veículos com navegação suave e layout responsivo publicada em hospedagem web gratuita.',
    tecnologias: ['HTML', 'CSS', 'JavaScript'],
    emAndamento: false,
  },
]