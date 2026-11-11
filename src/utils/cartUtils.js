
// Format options for display
export const formatOptions = (extras, size) => {
    const parts = [`Size: ${size}`];
    
    if (extras.length > 0) {
        parts.push(extras.join(', '));
    }
    
    return parts.join(' • ');
};
export const calculateUnitPrice = (basePrice, size, extras) => {
    const sizeMultiplier = size === 'L' ? 1.5 : size === 'M' ? 1.2 : 1;
    const extrasPrice = extras.length * 0.5; 

    return basePrice * sizeMultiplier + extrasPrice;
};

export const calculateTotalPrice = (basePrice, size, extras, quantity) => {
    const totalPrice = calculateUnitPrice(basePrice, size, extras) * quantity;

    return totalPrice;
};

export const AVAILABLE_EXTRAS = [
    'Extra cheese',
    'Spicy sauce',
    'Bacon',
    'Avocado',
    'Jalapeños',
];
