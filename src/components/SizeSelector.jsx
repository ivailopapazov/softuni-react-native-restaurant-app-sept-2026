import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SizeSelector({ selectedSize, onSelect }) {
    const sizes = ['S', 'M', 'L'];

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Size</Text>
            <View style={styles.options}>
                {sizes.map((size) => (
                    <TouchableOpacity
                        key={size}
                        style={[
                            styles.option,
                            selectedSize === size && styles.optionSelected,
                        ]}
                        onPress={() => onSelect(size)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selectedSize === size && styles.optionTextSelected,
                            ]}
                        >
                            {size}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    options: {
        flexDirection: 'row',
        gap: 12,
    },
    option: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#e0e0e0',
        alignItems: 'center',
    },
    optionSelected: {
        borderColor: '#007AFF',
        backgroundColor: '#f0f8ff',
    },
    optionText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#666',
    },
    optionTextSelected: {
        color: '#007AFF',
    },
});
