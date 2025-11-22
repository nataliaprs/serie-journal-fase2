## Serie Journal — Fase 2

**Autora: Natalia Prestes Santos Pontes**

Projeto desenvolvido para a disciplina Desenvolvimento de Sistemas Frontend (PUCRS) — Fase 2.
Nesta etapa, o objetivo é evoluir o CRUD da Fase 1, integrando API real, Material UI, Axios, React Router e testes automatizados.

## Como rodar o projeto
1. Clonar o repositório

git clone https://github.com/nataliaprs/serie-journal-fase2
cd serie-journal-fase2

2. Instalar dependências

npm install

3. Iniciar a API fornecida pelo professor

## A API oficial está neste repositório:

https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/tree/main/serieJournal-api

## Execute a API localmente:

cd DesenvolvimentoFrontend/serieJournal-api
npm install
npm start


## A API ficará disponível em:

http://localhost:5000

4. Rodar o frontend

## No diretório principal do projeto:

npm run dev

## Acesse no navegador:

http://localhost:5173

## Como rodar os testes (Vitest + RTL)

npm test

Os testes cobrem:

✔ renderização das páginas Home e Sobre

✔ renderização de lista de séries

✔ inputs obrigatórios do formulário

## Estrutura do Projeto

src/
  components/
    NavBar/
    SerieList/
  hooks/
    useSeries.js
  pages/
    Home.jsx
    Sobre.jsx
    Lista.jsx
    SerieForm.jsx
  services/
    api.js
  tests/
    Home.test.jsx
    Sobre.test.jsx
    SerieList.test.jsx
    SerieForm.test.jsx
  assets/
App.jsx
main.jsx
index.css


## Tecnologias Utilizadas

| Categoria   | Ferramenta                     |
| ----------- | ------------------------------ |
| Biblioteca  | React                          |
| UI          | Material UI                    |
| Roteamento  | React Router DOM               |
| HTTP Client | Axios                          |
| Testes      | Vitest + React Testing Library |
| Build       | Vite                           |

## Funções Implementadas

✔ CRUD completo usando API real

GET /series → listar séries

POST /series → cadastrar

PUT /series → editar

DELETE /series/:id → excluir

## ✔ UI usando Material UI

Cards, Buttons, Paper, TextField, etc.

## ✔ Rotas completas

/

/sobre

/lista

/cadastrar

/editar/:id

## ✔ Formulário com validação e feedback

Avisos de sucesso/erro estilizados.

## ✔ Hook personalizado (useSeries.js)

Centraliza toda lógica de integração com API.

## ✔ Testes unitários

Simples, objetivos e funcionais.


## Screenshots do Projeto

## Descrição dos Componentes

✔ NavBar

Barra de navegação estilizada com Material UI.

✔ SerieForm

Formulário de criação/edição com TextFields e validações.

✔ SerieList

Exibe séries em cards MUI com botões de editar e excluir.

✔ useSeries (Hook)

Gerencia toda comunicação com a API:

GET

POST

PUT

DELETE

loading

erro

✔ Páginas:

Home – mensagem de boas-vindas

Sobre – informações sobre o projeto

Lista – lista dinâmica vinda da API

Cadastrar / Editar – formulário usando mesma página