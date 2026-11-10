# API de Gerenciamento de Produtos

API REST desenvolvida com **Node.js**, **Express** e **MySQL** para praticar desenvolvimento Back-End. Atualmente, a aplicação permite consultar todos os produtos cadastrados e buscar um produto pelo seu ID.

## Tecnologias

- [Node.js](https://nodejs.org/) — ambiente de execução JavaScript.
- [Express 5](https://expressjs.com/) — criação das rotas HTTP.
- [MySQL](https://www.mysql.com/) — banco de dados relacional.
- [mysql2](https://sidorares.github.io/node-mysql2/) — comunicação entre Node.js e MySQL.
- [dotenv](https://github.com/motdotla/dotenv) — leitura de variáveis de ambiente.

## Pré-requisitos

Antes de executar o projeto, instale:

- Node.js (versão 18 ou superior).
- npm (instalado junto com o Node.js).
- MySQL Server em execução.

## Instalação

1. Clone o repositório:

   ```bash
   git clone URL_DO_REPOSITORIO
   ```

2. Entre na pasta do projeto:

   ```bash
   cd projeto_api
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração do banco de dados

Abra o MySQL Workbench ou outro cliente MySQL e execute:

```sql
CREATE DATABASE produtos_api;

USE produtos_api;

CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    quantidade INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);
```

A aplicação espera encontrar uma tabela chamada `produtos`, com as colunas `id`, `nome`, `quantidade` e `valor`.

### Variáveis de ambiente

Na raiz do projeto, crie um arquivo chamado `.env`:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=produtos_api
DB_PORT=3306
```

Substitua `seu_usuario` e `sua_senha` pelas credenciais do seu MySQL.

**Importante:** não envie o arquivo `.env` para o GitHub. Ele contém credenciais privadas. O `.gitignore` do projeto já deve conter:

```gitignore
node_modules/
.env
```

## Executando a API

Na raiz do projeto, execute:

```bash
node src/main.js
```

O servidor ficará disponível em:

```text
http://localhost:3000
```

## Rotas disponíveis

| Método | Rota | Descrição |
|---|---|---|
| GET | `/allProducts` | Retorna todos os produtos cadastrados. |
| GET | `/selectProduct/:id` | Busca o produto correspondente ao ID informado. |

### Exemplos de requisição

**Listar todos os produtos**

```http
GET http://localhost:3000/allProducts
```

**Buscar um produto pelo ID**

```http
GET http://localhost:3000/selectProduct/1
```

As rotas podem ser testadas com Postman, Insomnia ou outra ferramenta de requisições HTTP.

## Estrutura do projeto

```text
projeto_api/
├── src/
│   ├── config/
│   │   └── database.js
│   └── main.js
├── .env                 # Criado localmente; não enviar ao Git
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Tratamento de respostas

A API utiliza códigos HTTP para indicar o resultado das consultas, por exemplo:

- `200 OK` — consulta realizada com sucesso.
- `400 Bad Request` — ID informado é inválido.
- `404 Not Found` — produto não encontrado.
- `500 Internal Server Error` — erro interno ou falha na consulta ao banco.

## Próximos passos

O projeto está em desenvolvimento e pode evoluir com a implementação das operações de criação, atualização e exclusão de produtos (CRUD completo), além de validações e melhorias no tratamento de erros.

---

Projeto desenvolvido para fins de estudo e prática de desenvolvimento Back-End.
