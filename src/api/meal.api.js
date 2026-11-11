import api from './api';

export async function getAll() {
    const response = await api.get('/meals');
    
    const result = response.data.map(transformMeal);

    return result;
}

export async function getById(mealId) {
    const response = await api.get(`/meals?id=eq.${mealId}`);

    const result = response.data.map(transformMeal);

    return result[0];
}

export async function getByCategoryId(categoryId) {
    const response = await api.get(`/meals?category_id=eq.${categoryId}`);

    const result = response.data.map(transformMeal);

    return result;
}

function transformMeal(item) {
    return {
        ...item,
        categoryId: item.category_id,
        imageUrl: item.image_url
    };
}
