import axios from "axios";

/**
* api.js — Instância global do Axios usada por toda a aplicação.
* - Centraliza a URL base e evita repetição em cada requisição.
* - Facilita manutenção e testes.
*/
const api = axios.create({
baseURL: "http://localhost:5000", // API fornecida pelo professor
});


export default api;