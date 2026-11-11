
// Format options for display
export const formatOptions = (options) => {
    const parts = [`Size: ${options.size}`];
    
    if (options.extras.length > 0) {
        parts.push(options.extras.join(', '));
    }
    
    return parts.join(' • ');
};

export const calculatePrice = (basePrice, size, extras, quantity) => {
    const sizeMultiplier = size === 'L' ? 1.5 : size === 'M' ? 1.2 : 1;
    const extrasPrice = extras.length * 0.5; 

    const totalPrice = (basePrice * sizeMultiplier + extrasPrice) * quantity;

    return totalPrice;
}
