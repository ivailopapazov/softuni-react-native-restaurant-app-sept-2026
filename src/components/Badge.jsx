import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Badge({ count, style }) {
    if (!count || count <= 0) return null;

    return (
        <View style={[styles.badge, style]}>
            <Text style={styles.text}>{count > 99 ? '99+' : count}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: -6,
        top: -4,
        backgroundColor: '#FF3B30',
        borderRadius: 10,
        minWidth: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    text: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
    },
});
