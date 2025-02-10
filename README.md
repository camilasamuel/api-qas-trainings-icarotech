# WORKSHOP DE AUTOMAÇÃO ICARO TECH

### Pré requisito
- Computador com no mínimo 2 cores e 8GB de RAM
- [Nodejs](https://nodejs.org/) ou [Yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- IDE de desenvolvimento [(sugiro o VSCode)](https://code.visualstudio.com/)

### Instalação do Cypress
- Instalar as dependências do projeto `$ npm install` ou `$ npm install --save-dev cypress`
- Rodar os testes via interface `$ npx cypress open`

## Execuções dos Testes
### Ambiente de Desenvolvimento
- Executar os testes via headless `$ npx cypress run`
- Executar os testes via interface `$ npx cypress open`

### Sobre API que será testada

Descrição: Esta API permite gerenciar usuários, produtos e aprovações.

URL: https://api-qas-trainings.glitch.me/
  
Endpoints:    
     
     [
       {
            "method": "POST",
            "path": "/users",
            "description": "Criar novo usuário"
        },
        {
            "method": "GET",
            "path": "/users",
            "description": "Listar todos os usuários"
        },
        {
            "method": "POST",
            "path": "/products",
            "description": "Criar um novo produto"
        },
        {
            "method": "GET",
            "path": "/products",
            "description": "Listar todos os produtos"
        }
    ]

