# Cypress Iniciante

Projeto de testes E2E com Cypress para a loja de demonstração em https://automationpratice.com.br.

## Pré-requisitos
- Node.js 18+
- npm ou yarn

## Instalação
`ash
npm install
`

## Como rodar
- Rodar em modo headless:
`ash
npx cypress run --spec cypress/e2e/login.cy.js --config video=false
`
- Abrir o Test Runner interativo:
`ash
npx cypress open
`

## Estrutura
- cypress.config.js: baseUrl configurado para o ambiente público.
- cypress/e2e/login.cy.js: cenários de login (sucesso, validações, lembrar-me/link de cadastro) usando seletores da página.

## Notas
- Artefatos de execução (vídeos, screenshots) não estão versionados; adicione um .gitignore se for subir ao GitHub.
