import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ExtrasSelector({ extras, selectedExtras, onToggle }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Extras (+$0.50 each)</Text>
            <View style={styles.options}>
                {extras.map((extra) => {
                    const isSelected = selectedExtras.includes(extra);
                    return (
                        <TouchableOpacity
                            key={extra}
                            style={[styles.option, isSelected && styles.optionSelected]}
                            onPress={() => onToggle(extra)}
                        >
                            <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                                {isSelected && (
                                    <Ionicons name="checkmark" size={14} color="#fff" />
                                )}
                            </View>
                            <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                                {extra}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
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
        gap: 8,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#e0e0e0',
        backgroundColor: '#fff',
    },
    optionSelected: {
        borderColor: '#007AFF',
        backgroundColor: '#f0f8ff',
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ccc',
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxSelected: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
    },
    optionText: {
        fontSize: 15,
        color: '#333',
    },
    optionTextSelected: {
        color: '#007AFF',
        fontWeight: '500',
    },
});
