import api from './api';

export async function getAll() {
    const response = await api.get('/meals');
    
    return response.data;
}

export async function getByCategoryId(categoryId) {
    const response = await api.get(`/meals?category_id=eq.${categoryId}`);

    const result = response.data.map(item => ({
        ...item,
        categoryId: item.category_id,
        imageUrl: item.image_url
    }));

    return result;
}
