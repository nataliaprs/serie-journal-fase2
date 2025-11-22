import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export function getSeries() { return api.get("/series"); }
export function getSerieById(id) { return api.get(`/series/${id}`); }
export function createSerie(data) { return api.post("/series", data); }
export function updateSerie(id, data) { return api.put(`/series/${id}`, data); }
export function deleteSerie(id) { return api.delete(`/series/${id}`); }
