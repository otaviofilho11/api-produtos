# API de Gerenciamento de Produtos

API REST desenvolvida para praticar conceitos de desenvolvimento Back-End, permitindo operações básicas de gerenciamento de produtos.

## 🚀 Tecnologias utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-green?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-black?logo=express)
![NPM](https://img.shields.io/badge/NPM-Package_Manager-red?logo=npm)

## ⚙️ Como executar

```bash
git clone URL_DO_REPOSITORIO
cd projeto_api
npm install
node src/main.js
```

O servidor será iniciado na porta **3000**.

## 📌 Rotas disponíveis

| Método | Rota | Descrição |
|---|---|---|
| GET | `/` | Lista produtos |
| GET | `/produto/:id` | Busca produto por ID |
| POST | `/` | Cadastra produto |
| PUT | `/atualizarProduto/:id` | Atualiza produto |

## 📝 Observação

Os dados são armazenados em memória, utilizando um array JavaScript.

---

Desenvolvido para fins de estudo e prática de desenvolvimento Back-End.
