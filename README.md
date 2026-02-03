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
npx cypress run --spec cypress/e2e/desafio-page-objects-2.cy.js --config video=false
npx cypress run --spec cypress/e2e/get_elements.cy.js --config video=false
```
- Abrir o Test Runner interativo:
```bash
npx cypress open
```

## Estrutura
- `cypress.config.js`: baseUrl configurado para o ambiente publico.
- `cypress/e2e/get_elements.cy.js`: cenarios de login e validacoes com seletores da pagina.
- `cypress/e2e/asserts.cy.js`: exemplos de assercoes e validacoes de elementos/URL.
- `cypress/e2e/get_texts.cy.js`: exemplo de captura de texto com `then`.
- `cypress/e2e/interacoes.cy.js`: exemplos de interacoes (click, dblclick, rightclick, enter, select, checkbox).
- `cypress/e2e/desafio.cy.js`: cenarios de cadastro com validacoes diretas.
- `cypress/e2e/desafio-fixtures.cy.js`: cenarios de cadastro usando fixtures.
- `cypress/e2e/desafio-beforeeach.cy.js`: cenarios de cadastro com `beforeEach`.
- `cypress/e2e/desafio-page-objects.cy.js`: cenarios de cadastro com Page Object Model.
- `cypress/e2e/desafio-page-objects-2.cy.js`: variacoes do desafio com POM e comandos customizados.
- `cypress/e2e/desafio-opt-2.cy.js`: variacoes do desafio com pequenas otimizacoes.
- `cypress/support/pages/CadastroPage.js`: Page Object do cadastro.
- `cypress/support/home_page_commands.js`: comandos customizados para navegacao.
- `cypress/support/register_pages_commands.js`: comandos customizados para cadastro.
- `cypress/support/e2e.js`: registra os comandos customizados usados nos testes.
- `cypress/fixtures/desafio_valid_data.json`: dados validos para cadastro.
- `cypress/fixtures/desafio_invalid_data.json`: dados invalidos para validacoes.
- `cypress/fixtures/user_create.json`: dados adicionais para criacao de usuario.

## Notas
- Artefatos de execucao (videos, screenshots) nao estao versionados; adicione um `.gitignore` se for subir ao GitHub.
