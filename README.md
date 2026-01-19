
cypress-fragon/
│
├── cypress/
│ ├── e2e/
│ │ └── spec.cy.js # Arquivo principal de cenários de teste
│ │
│ ├── fixtures/
│ │ └── example.json # Massa de dados mock
│ │
│ ├── pages/
│ │ ├── base/
│ │ │ └── BasePage.js # Métodos genéricos (get, click, type, waits, etc)
│ │ │
│ │ └── modules/
│ │ ├── LoginPage.js # Page Object da tela de Login
│ │ └── CadastroPage.js # Page Object da tela de Cadastro
│ │
│ ├── support/
│ │ ├── utils/
│ │ │ └── Helper.js # Geradores de dados, funções utilitárias
│ │ │
│ │ ├── commands.js # Comandos customizados do Cypress
│ │ └── e2e.js # Configurações globais dos testes
│ │
│ └── node_modules/ # Dependências do projeto
│
├── cypress.config.js # Configuração principal do Cypress
├── package.json # Dependências e scripts

