import axios from "axios";

/**
 * api.js
 * Instância global do Axios.
 * - Facilita a troca de baseURL e a reutilização em toda a aplicação.
 */

const api = axios.create({
baseURL: "http://localhost:5000", // API fornecida pelo professor
});


export default api;