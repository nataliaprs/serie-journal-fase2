import axios from "axios";

// Instância do axios para toda a aplicação
const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Exporta como default (OBRIGATÓRIO!)
export default api;
