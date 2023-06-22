# API WeFit

## Descrição

API para efetuar o cadastro de pessoa fisíca ou jurídica

## Detalhes de como montar o ambiente

* Instalar o Node JS caso não tenha, [Node JS link](https://nodejs.org/en/download/package-manager/)
* Versão do Node JS utilizada: 18.13.0
* Pode ser usado o NPM ou YARN para gerenciar o node_modules
* Instalar o Docker [Docker link](https://docs.docker.com/desktop/install/windows-install/)
* Instalar o Docker composer [Docker Compose Link](https://docs.docker.com/compose/install/)
* Efetue a instalação do **node_modules** usando **npm install** ou **yarn**
* Execute o commando **npx run test** ou **yarn test** para verificar se está tudo funcionando## Como executar
* Execute o comando **npm run build** ou **yarn build** para criar o a pasta **dist**, será a pasta de produção
* Executar o comando **docker-compose up -d** para criar o container com o Docker
* É necessário ao menos ter o container do banco de dados

## Detalhes sobre a API

* A Api possui uma rota para acessar a documentação do swagger http://servidor:porta/api-docs
* Respostas de Sucesso
  * true
  * Status Code 201 sucesso
* Respostas de Erro
  * messagem(String)
  * Status Code 404 (conteúdo não encontrado)
  * Status Code 400 (parâmetros faltando)
  * Status Code 500 para erro interno

## Estrura base do projeto

* A **main** dentro da **src** inicia o servidor
* A pasta **infra** contém as aplicações de terceiros
* A pasta **core** contém as regras de negócio
* A pasta **app** contém as regras da aplicação, como o gerenciamento de quais classes vão ser chamadas e formatação de dados
* A pasta **shared** contém os arquivos que são acessado por várias pastas

## Exemplo de Request
~~~json
{
  "personType": "natural",
  "cpf": "11111111111",
  "cnpj":"",
  "name": "Test",
  "cellPhone": "111111111",
  "phone": "11111111",
  "email": "test@test.com",
  "confirmeEmail": "test@test.com",
  "address": {
    "zipcode": "00113700",
    "addressLine1": "Ave Sao caetano",
    "addressNumber": 309,
    "addressLine2": "asdasd",
    "city":  "Sao Paulo",
    "state":"SP",
    "neighborhood":"Luz"
  },
  "contractRead": true
}
~~~

## Informações sobre o projeto
* Arquitetura base - [Port and Adapter](https://alistair.cockburn.us/hexagonal-architecture/)
* Tratativas de erros - [Either Error](https://blog.logrocket.com/javascript-either-monad-error-handling/)
* PM2 para executar o projeto no container - [PM2](https://pm2.keymetrics.io/)