import axios from 'axios';
import { API_URL } from './constants';

export const getAll = async () => {
  return await axios.get(`${API_URL}`).then(res => {return res});
}

export const getById = async (id) => {
  return await axios.get(`${API_URL}/id=${id}`).then(res => {return res});
}

export const getTotal = async (id) => {
  return await axios.get(`${API_URL}/stats=${id}`).then(res => {return res});
}