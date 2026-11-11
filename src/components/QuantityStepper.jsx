import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuantityStepper({ qty, onIncrement, onDecrement, minValue = 1 }) {
    const canDecrement = qty > minValue;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, !canDecrement && styles.buttonDisabled]}
                onPress={onDecrement}
                disabled={!canDecrement}
            >
                <Text style={[styles.buttonText, !canDecrement && styles.buttonTextDisabled]}>−</Text>
            </TouchableOpacity>

            <View style={styles.qtyContainer}>
                <Text style={styles.qtyText}>{qty}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={onIncrement}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        overflow: 'hidden',
    },
    button: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007AFF',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonTextDisabled: {
        color: '#999',
    },
    qtyContainer: {
        paddingHorizontal: 16,
        backgroundColor: '#f5f5f5',
    },
    qtyText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
});
