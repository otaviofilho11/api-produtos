# API REST de Gerenciamento de Produtos

API REST desenvolvida com **Node.js**, **Express** e **MySQL** para gerenciar produtos por meio de requisições HTTP. O projeto foi desenvolvido com foco no aprendizado de desenvolvimento Back-end, integração com banco de dados relacional e operações assíncronas.

## Funcionalidades

- Listar todos os produtos cadastrados.
- Buscar um produto pelo ID.
- Cadastrar novos produtos.
- Atualizar o preço de um produto.
- Excluir produtos pelo ID.
- Consultar a soma dos preços cadastrados.
- Consultar a média dos preços cadastrados.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript.
- **Express** — criação e gerenciamento das rotas HTTP.
- **MySQL** — banco de dados relacional.
- **mysql2** — conexão e execução de consultas SQL com suporte a Promises.
- **dotenv** — gerenciamento de variáveis de ambiente.

## Pré-requisitos

Antes de executar a aplicação, tenha instalado:

- Node.js 18 ou superior.
- npm.
- MySQL Server.

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Acesse a pasta do projeto

```bash
cd projeto_api
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados

No MySQL, crie o banco e a tabela utilizados pela aplicação:

```sql
CREATE DATABASE produtos_api;

USE produtos_api;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);
```

> A estrutura da tabela deve utilizar os campos `id`, `nome`, `quantidade` e `preco`, conforme as consultas implementadas na API.

### 5. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=produtos_api
DB_PORT=3306
```

Substitua os valores de usuário e senha pelas credenciais do seu MySQL.

**Importante:** não compartilhe nem envie o arquivo `.env` ao GitHub. Ele contém credenciais de acesso ao banco de dados. Mantenha-o no `.gitignore`.

### 6. Inicie o servidor

Na raiz do projeto, execute:

```bash
node src/main.js
```

Por padrão, o servidor será iniciado na porta `3000`:

```text
http://localhost:3000
```

## Endpoints

Abaixo estão as rotas implementadas no projeto.

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/` | Retorna todos os produtos. |
| GET | `/selectProduct/:id` | Busca um produto pelo ID. |
| POST | `/insertProduct` | Cadastra um novo produto. |
| PUT | `/updateProductPrice/:id` | Atualiza o preço de um produto. |
| DELETE | `/deleteProduct/:id` | Exclui um produto pelo ID. |
| GET | `/totalPrice/` | Retorna a soma dos preços dos produtos. |
| GET | `/avgPrice` | Retorna a média dos preços dos produtos. |

### Exemplos de requisições

Os exemplos podem ser testados no Postman, Insomnia ou em outra ferramenta de requisições HTTP.

#### Listar todos os produtos

```http
GET http://localhost:3000/
```

#### Buscar produto pelo ID

```http
GET http://localhost:3000/selectProduct/1
```

#### Cadastrar produto

```http
POST http://localhost:3000/insertProduct
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "nome": "Teclado",
  "quantidade": 10,
  "preco": 149.90
}
```

#### Atualizar preço de um produto

```http
PUT http://localhost:3000/updateProductPrice/1
Content-Type: application/json
```

Corpo da requisição:

```json
{
  "preco": 129.90
}
```

#### Excluir produto

```http
DELETE http://localhost:3000/deleteProduct/1
```

#### Consultar soma dos preços

```http
GET http://localhost:3000/totalPrice/
```

#### Consultar média dos preços

```http
GET http://localhost:3000/avgPrice
```

## Estrutura do projeto

```text
projeto_api/
├── src/
│   ├── config/
│   │   └── database.js
│   └── main.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

O arquivo `database.js` configura o pool de conexões com o MySQL. O arquivo `main.js` inicializa o Express e concentra as rotas e operações da API.

## Conceitos praticados

- Desenvolvimento de API REST.
- Criação e organização de rotas HTTP.
- Operações CRUD (Create, Read, Update e Delete).
- Integração entre Node.js e MySQL.
- Execução de consultas SQL.
- Uso de parâmetros nas consultas ao banco de dados.
- Programação assíncrona com `async/await`.
- Tratamento de erros com `try/catch`.
- Configuração de variáveis de ambiente.

## Próximas melhorias

- Implementar validações mais completas dos dados recebidos.
- Padronizar respostas e códigos de status HTTP.
- Separar rotas, controladores e regras de negócio em módulos.
- Adicionar testes automatizados e documentação interativa dos endpoints.

---

Projeto desenvolvido para fins de estudo e prática de desenvolvimento Back-end.
