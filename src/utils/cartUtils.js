
// Format options for display
export const formatOptions = (options) => {
    const parts = [`Size: ${options.size}`];
    
    if (options.extras.length > 0) {
        parts.push(options.extras.join(', '));
    }
    
    return parts.join(' • ');
};
