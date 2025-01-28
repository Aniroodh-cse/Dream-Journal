import axios from 'axios';

const API_URL = 'http://localhost:5000/api/dreams';

export const fetchDreams = async () => axios.get(API_URL);
export const createDream = async (dream) => axios.post(API_URL, dream);
