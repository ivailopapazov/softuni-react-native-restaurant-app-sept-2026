import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import QuantityStepper from './QuantityStepper';
import { formatOptions } from '../utils/cartUtils';

export default function CartLineItem({
    line,
    onIncrement,
    onDecrement,
    onRemove,
}) {
    const item = line.item;
    const options = line.options;

    if (!item) return null;

    return (
        <View style={styles.container}>
            {item.imageUrl && (
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
            )}
            <View style={styles.content}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.options}>{formatOptions(options.extras, options.size)}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>${line.totalPrice.toFixed(2)}</Text>
                    <Text style={styles.unitPrice}>
                        (${line.unitPrice.toFixed(2)} each)
                    </Text>
                </View>
            </View>
            <View style={styles.actions}>
                <QuantityStepper
                    qty={options.qty}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    minValue={0}
                />
                <TouchableOpacity onPress={onRemove} style={styles.removeButton}>
                    <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    content: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    options: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 15,
        fontWeight: '700',
        color: '#007AFF',
    },
    unitPrice: {
        fontSize: 12,
        color: '#999',
        marginLeft: 6,
    },
    actions: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButton: {
        marginTop: 8,
        padding: 4,
    },
    removeText: {
        fontSize: 12,
        color: '#FF3B30',
        fontWeight: '500',
    },
});
