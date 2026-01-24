# Cypress

Projeto de testes E2E com Cypress para a loja de demonstracao em https://automationpratice.com.br.

## Pre-requisitos
- Node.js 18+
- npm ou yarn

## Instalacao
```bash
npm install
```

## Como rodar
- Rodar em modo headless (exemplos):
```bash
npx cypress run --spec cypress/e2e/desafio.cy.js --config video=false
npx cypress run --spec cypress/e2e/desafio-fixtures.cy.js --config video=false
npx cypress run --spec cypress/e2e/desafio-beforeeach.cy.js --config video=false
npx cypress run --spec cypress/e2e/desafio-page-objects.cy.js --config video=false
npx cypress run --spec cypress/e2e/login.cy.js --config video=false
```
- Abrir o Test Runner interativo:
```bash
npx cypress open
```

## Estrutura
- `cypress.config.js`: baseUrl configurado para o ambiente publico.
- `cypress/e2e/login.cy.js`: cenarios de login (sucesso, validacoes, lembrar-me/link de cadastro) usando seletores da pagina.
- `cypress/e2e/desafio.cy.js`: cenarios de cadastro com validacoes diretas.
- `cypress/e2e/desafio-fixtures.cy.js`: cenarios de cadastro usando fixtures.
- `cypress/e2e/desafio-beforeeach.cy.js`: cenarios de cadastro com `beforeEach`.
- `cypress/e2e/desafio-page-objects.cy.js`: cenarios de cadastro com Page Object Model.
- `cypress/support/pages/CadastroPage.js`: Page Object do cadastro.
- `cypress/fixtures/desafio_valid_data.json`: dados validos para cadastro.
- `cypress/fixtures/desafio_invalid_data.json`: dados invalidos para validacoes.
- `cypress/fixtures/user_create.json`: dados adicionais para criacao de usuario.

## Notas
- Artefatos de execucao (videos, screenshots) nao estao versionados; adicione um `.gitignore` se for subir ao GitHub.
