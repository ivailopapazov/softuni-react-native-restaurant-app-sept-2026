import api from './api';

export async function getAll() {
    const response = await api.get('/categories');
    
    return response.data;
}
