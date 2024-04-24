import axios from 'axios';
import { API_URL } from './constants';

export const getAll = async () => {
  return await axios.get(`${API_URL}`).then((success) => true).catch((err) => false);
}

export const getById = async (id) => {
  return await axios.get(`${API_URL}/pokemon_id=${id}`).then((success) => true).catch((err) => false);
}

export const getTotal = async (id) => {
  return await axios.get(`${API_URL}/stats=${id}`).then((success) => true).catch((err) => false);
}