# Cypress

Projeto de testes E2E com Cypress para a loja de demostracao em https://automationpratice.com.br.

## Pre-requisitos
- Node.js 18+
- npm ou yarn

## Instalacao
```bash
npm install
```

## Como rodar
- Rodar em modo headless:
```bash
npx cypress run --spec cypress/e2e/login.cy.js --config video=false
```
- Abrir o Test Runner interativo:
```bash
npx cypress open
```

## Estrutura
- `cypress.config.js`: baseUrl configurado para o ambiente publico.
- `cypress/e2e/login.cy.js`: cenarios de login (sucesso, validacoes, lembrar-me/link de cadastro) usando seletores da pagina.

## Notas
- Artefatos de execucao (videos, screenshots) nao estao versionados; adicione um `.gitignore` se for subir ao GitHub.
