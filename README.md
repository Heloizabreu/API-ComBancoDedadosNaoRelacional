# API de Loja de Produtos

## Sobre o projeto

Este projeto consiste em uma API desenvolvida em Node.js utilizando Express e MongoDB, com o objetivo de realizar o gerenciamento de produtos de uma loja.

A API permite cadastrar, listar, buscar, atualizar e excluir produtos através dos métodos HTTP.

## Tecnologias utilizadas

- Node.js
- JavaScript
- Express
- MongoDB

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar o MongoDB

A API utiliza uma variável de ambiente chamada `MONGO_URI` para realizar a conexão com o banco de dados.

Configure essa variável com a URL de conexão do seu MongoDB.

O banco de dados utilizado se chama `loja` e a coleção se chama `produtos`.

### 4. Executar a API

No terminal, execute:

```bash
node index.js
```

A API ficará disponível na porta 3000.

## Métodos HTTP

| Método | Rota | Descrição |
|---|---|---|
| POST | `/produtos` | Cadastra um produto |
| GET | `/produtos` | Lista todos os
