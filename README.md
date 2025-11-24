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

4. Rodar os testes

Testes cobrem:

✔ Página Home

✔ Página Sobre

✔ Formulário (inputs e digitação)

✔ Lista de séries

✔ Renderização sem router (fallback useNavigate)


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
    Cadastrar.jsx
    Editar.jsx
    SerieForm.jsx
  services/
    api.js
  tests/
    *.test.jsx
  assets/
App.jsx
main.jsx
index.css
vite.config.js

## Tecnologias Utilizadas

| Categoria  | Ferramenta       |
| ---------- | ---------------- |
| Biblioteca | React            |
| Build      | Vite             |
| UI         | Material UI      |
| Roteamento | React Router DOM |
| HTTP       | Axios            |
| Testes     | Vitest + RTL     |
| Ambiente   | JSDOM            |


## ✔ Funções Implementadas

CRUD completo usando API real

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


## ✔ Screenshots do Projeto

(inserir screenshot da Home)

(inserir screenshot da Lista de Séries)

(inserir screenshot do Formulário)

(inserir screenshot dos testes passando)


## Descrição dos Componentes

✔ NavBar — Navegação fixa superior
✔ SerieList — Cards de séries + editar/excluir
✔ SerieForm — Formulário de cadastro/edição
✔ useSeries — Hook que integra a API
✔ Home, Sobre, Lista, Cadastrar, Editar — Rotas da aplicação