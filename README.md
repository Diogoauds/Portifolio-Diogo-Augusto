# Portifolio-Diogo-Augusto

Projeto desenvolvido para a **Atividade 1 (Meu Portfólio em React)** da disciplina de **Tecnologias para Interfaces de Aplicações Web (TIAW)**, do curso de **Análise e Desenvolvimento de Sistemas (ADS)** no **IFTM — Campus Uberaba Parque Tecnológico**.

A aplicação foi construída com **React**, **TypeScript**, **Vite** e **Tailwind CSS v4**, aplicando componentização modular, tipagem estática de props e dados, renderização condicional, listas dinâmicas e layout responsivo.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

<img width="1897" height="902" alt="image" src="https://github.com/user-attachments/assets/8f4dcca5-2d7c-451b-935a-bbcbe48ba238" />

<img width="1901" height="606" alt="image" src="https://github.com/user-attachments/assets/381a2ec5-2f8d-4f70-a9a8-c03debb641e6" />

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Tutorial para abrir o projeto**

1. Baixe o projeto para o seu computador
2. Extraia o arquivo baixado
3. Após extraido abra o cmd e através do comando cd chegue ao diretório do projeto
4. Rode o comando npm install dentro da pasta do projeto
5. rode o comando npm run dev
6. Após o comando run dev será criado o link para acesso ao site.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Arquitetura dos componentes**

Cabeçalho: Renderiza o topo da página com foto de perfil, nome completo, curso/instituição e links sociais;
Painel: Componente estrutural reutilizável que recebe titulo e children para padronizar o visual das seções (Sobre mim, Habilidades, Projetos e Contato);
ListaHabilidades: Componente estrutural reutilizável que recebe titulo e children para padronizar o visual das seções (Sobre mim, Habilidades, Projetos e Contato);
GradeProjetos: Organiza os cartões de projetos em uma grade responsiva que se adapta de 1 coluna em telas menores até 3 colunas em telas maiores;
CardProjeto: Apresenta cada projeto individualmente (Calculadora de IMC em Angular, Uhub e Catálogo de Veículos Web), exibindo título, descrição, badges de tecnologias e o selo condicional Em andamento quando aplicável;
Contato: Exibe a chamada para contato, localização e botão de e-mail direto;
Rodape: Mostra os créditos de autoria, o ano atual e as tecnologias utilizadas no desenvolvimento.

