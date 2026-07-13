// services/api.js - Todas las funciones para el CRUD
const BASE_URL = 'https://api-items-icel-production.up.railway.app';

export async function getItems() {
  const response = await fetch(`${BASE_URL}/items`);
  if (!response.ok) throw new Error('Error al obtener los items');
  return await response.json();
}

export async function getItemById(id) {
  const response = await fetch(`${BASE_URL}/items/${id}`);
  if (!response.ok) throw new Error('Error al obtener el item');
  return await response.json();
}

export async function createItem(item) {
  const response = await fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  if (!response.ok) throw new Error('Error al crear el item');
  return await response.json();
}

export async function updateItem(id, item) {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  });
  if (!response.ok) throw new Error('Error al actualizar el item');
  return await response.json();
}

export async function deleteItem(id) {
  const response = await fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Error al eliminar el item');
}