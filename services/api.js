// services/api.js - Archivo encargado de todas las llamadas a la API
const BASE_URL = 'https://api-items-icel-production.up.railway.app';

export async function getItems() {
  const response = await fetch(`${BASE_URL}/items`);
  
  if (!response.ok) {
    throw new Error('No se pudieron cargar los elementos');
  }
  
  const data = await response.json();
  return data;
}